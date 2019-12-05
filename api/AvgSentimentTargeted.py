import sys
import cgitb
from textblob import TextBlob
import cgi

cgitb.enable()
fs = cgi.FieldStorage()

text_file_name = fs.getvalue('filename')
path_to_file = "/usr/lib/cgi-bin/textfiles/" + text_file_name
text_file = open(path_to_file, "r")
text = text_file.read()
blob = TextBlob(text)
text_file.close()

subject = fs.getvalue('subject')
pol = []
subj = []
for s in blob.sentences:
    words = s.words
    if subject in words.lower():
        pol.append(s.polarity)
        subj.append(s.subjectivity)

avg_pol = sum(pol) / len(pol)
avg_subj = sum(subj) / len(subj)

print("Content-Type: text/plain\r\n\r\n")
print()
print("{\n\"Polarity\":" + str(avg_pol) + ",")
print("\"Subjectivity\":" + str(avg_subj) + "\n}")