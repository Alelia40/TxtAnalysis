#!/usr/bin/python

import cgitb
from textblob import TextBlob
import cgi

#cgitb.enable()
cgitb.enable(0, '/usr/lib/cgi-bin/Repo/TxtAnalysis')
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
count = 0
for s in blob.sentences:
    words = s.split()
    if str(subject) in words or words.lower():
        pol.append(s.polarity)
        subj.append(s.subjectivity)
        count += 1

if len(pol) == 0:
    avg_pol = 0
else:
    avg_pol = sum(pol) / len(pol)

if len(subj) == 0:
    avg_subj = 0
else:
    avg_subj = sum(subj) / len(subj)

print("Content-Type: text/plain\r\n\r\n")
print("{\n\"Subject\":" + subject + ",")
print("\n\"CountFound\":" + str(count) + ",")
print("\n\"Polarity\":" + str(avg_pol) + ",")
print("\"Subjectivity\":" + str(avg_subj) + "\n}")
