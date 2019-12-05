#!/usr/bin/python
#enable debugging
import sys
import cgitb
import cgi
cgitb.enable()

print("Content-type: text/plain\r\n\r\n")

fs = cgi.FieldStorage()

filename = fs.getvalue("filename")
text = fs.getvalue("text")

f = open("/usr/lib/cgi-bin/textfiles/" + filename,"w+")
f.write(text)
f.close()
print
print("{ \"Success\":true  }")
