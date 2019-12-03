#!/usr/bin/python
# enable debugging

import sys
import cgitb
cgitb.enable()
from textblob import TextBlob
import cgi
fs = cgi.FieldStorage()



full = -1

#Import specified file
#textfile = open("/usr/lib/cgi-bin/textfiles/" + sys.argv[1])

#Make TextBlob
#tb = TextBlob(textfile.read(full))

#Do Stuff



#JSON output
print("Content-Type: text/plain\r\n\r\n")
print
print("{ \"Data\":-1 }")
print(fs.getvalue("a"))



