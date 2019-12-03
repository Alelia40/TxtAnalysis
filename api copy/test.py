#!/usr/bin/python
# enable debugging
import cgitb
cgitb.enable()

import cgi
fs = cgi.FieldStorage()

print "Content-type: text/plain\r\n\r\n"
print
for key in fs.keys():
    print "%s = %s" % (key, fs[key].value)
