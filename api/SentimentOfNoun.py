import sys
import cgitb
from textblob import TextBlob
import cgi

cgitb.enable()
fs = cgi.FieldStorage()
full = -1

text_file_name = sys.argv[1]
path_to_file = "/usr/lib/cgi-bin/textfiles/" + text_file_name
text_file = open(path_to_file, "r")
text = text_file.read()
blob = TextBlob(text)

subject = sys.argv[2]
pol = []
subj = []
for s in blob.sentences:
    words = s.words
    if words.__contains__(subject):
        pol.append(s.polarity)
        subj.append(s.subjectivity)

avg_pol = sum(pol) / len(pol)
avg_subj = sum(subj) / len(subj)

print("Content-Type: text/plain\r\n\r\n")
print()
print("{ \"Polarity\":" + avg_pol + " }")
print("{ \"Subjectivity\":" + avg_subj + " }")
print(fs.getvalue("a"))

text_file.close()
