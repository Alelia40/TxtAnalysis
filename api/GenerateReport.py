#!/usr/bin/python
import cgi
import cgitb
from textblob import TextBlob
import json


def MostUsedWords(blob):
    top_five = reversed(sorted(blob.np_counts.items(), key=lambda kv: (kv[1], kv[0]))[-5:])

    return dict(top_five)


def SpellingErrors(blob):
    counter = 0

    for sentence in blob.sentences:
        words = sentence.words
        for word in words:
            correct = False
            possible_words = word.spellcheck()
            for possible in possible_words:
                if word.lower() == possible[0].lower():
                    correct = True
            if not correct:
                counter += 1

    return counter


def SpellingErrorsPercent(blob):
    word_count = len(blob.words)
    num_errors = SpellingErrors(blob)

    percent = num_errors / word_count * 100
    return percent


def AvgSentenceSentiment(blob):
    pol = []
    subj = []
    for s in blob.sentences:
        pol.append(s.polarity)
        subj.append(s.subjectivity)

    if len(pol) == 0:
        avg_pol = 0
    else:
        avg_pol = sum(pol) / len(pol)

    if len(subj) == 0:
        avg_subj = 0
    else:
        avg_subj = sum(subj) / len(subj)

    return avg_pol, avg_subj


cgitb.enable()
#cgitb.enable(0, '/usr/lib/cgi-bin/Repo/TxtAnalysis')
fs = cgi.FieldStorage()

text_file_name = fs.getvalue('filename')
path_to_file = "/usr/lib/cgi-bin/textfiles/" + text_file_name
text_file = open(path_to_file, "r")
text = text_file.read()
blob = TextBlob(text)
text_file.close()

spell_errors = SpellingErrors(blob)
spell_errors_percent = SpellingErrorsPercent(blob)
avg_pol, avg_subj = AvgSentenceSentiment(blob)
top_five_dict = MostUsedWords(blob)
dict_json = json.dumps(top_five_dict)
return_string = ("\"SpellErrors\": " + str(spell_errors) +
                 ",\n\"SpellErrorsPercent\": " + str(spell_errors_percent) +
                 ",\n\"AveragePolarity\": " + str(avg_pol) +
                 ",\n\"AverageSubjectivity\": " + str(avg_subj) +
                 ",\n\"TopFiveWords\": " + dict_json)


print("Content-Type: text/plain\r\n\r\n")
print("{\n" + return_string + "\n}")
