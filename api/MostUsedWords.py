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

top_five = reversed(sorted(blob.np_counts.items(), key=lambda kv: (kv[1], kv[0]))[-5:])
for value in top_five:
    print(value)

print("Content-Type: text/plain\r\n\r\n")
print()
for value in top_five:
    print(value)
print(fs.getvalue("a"))


text_file.close()