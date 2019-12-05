import sys
import cgitb
from textblob import TextBlob
import cgi


# cgitb.enable()
# fs = cgi.FieldStorage()
# full = -1
#
# text_file_name = sys.argv[1]
# path_to_file = "/usr/lib/cgi-bin/textfiles/"+text_file_name
# text_file = open(path_to_file, "r")
# text = text_file.read()
# blob = TextBlob(text)
#
# counter = 0
# word_count = blob.sentences.words.length
#
# for word in blob.sentences.words:
#     possible_words = word.spellcheck()
#     if word != possible_words[0]:
#         counter += 1
#
# percent = counter/word_count * 100
#
# print("Content-Type: text/plain\r\n\r\n")
# print()
# print("{ \"Data\":"+str(percent)+" }")
# print(fs.getvalue("a"))
#
# text_file.close()

def main(blob):
    counter = 0
    word_count = blob.sentences.words.length

    for word in blob.sentences.words:
        possible_words = word.spellcheck()
        if word != possible_words[0]:
            counter += 1

    percent = counter / word_count * 100
    return percent
