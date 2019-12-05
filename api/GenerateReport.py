#!/usr/bin/python

import cgi
import cgitb
from textblob import TextBlob

from api import MostUsedWords, AvgSentenceSentiment, SpellingErrorsPercent, SpellingErrors

cgitb.enable()
fs = cgi.FieldStorage()

text_file_name = fs.getvalue('filename')
path_to_file = "/usr/lib/cgi-bin/textfiles/" + text_file_name
text_file = open(path_to_file, "r")
text = text_file.read()
blob = TextBlob(text)
text_file.close()

spell_errors = SpellingErrors.main(blob)
spell_errors_percent = SpellingErrorsPercent.main(blob)
avg_pol, avg_subj = AvgSentenceSentiment.main(blob)
top_five_dict = MostUsedWords.main(blob)
return_string = ("\"SpellErrors\": " + str(spell_errors) +
                 ",\n\"SpellErrorsPercent\": " + str(spell_errors_percent) +
                 ",\n\"AveragePolarity\": " + str(avg_pol) +
                 ",\n\"AverageSubjectivity\": " + str(avg_subj) +
                 ",\n\"TopFiveWords\": " + str(top_five_dict))

print("Content-Type: text/plain\r\n\r\n")
print()
print("{\n"+return_string+"\n}")
