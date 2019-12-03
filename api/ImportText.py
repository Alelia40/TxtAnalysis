#!:usr/bin/python
#enable debugging
import sys
import cgitb
from  pathlib import *

cgitb.enable()


#****
#testfile = Path('/usr/lib/cgi-bin/textfiles/mytest.txt')
#text = u"Goodbye Cruel World\n"
#testfile.open('w').write(text)
#****

print("Content-Type: text/plain\r\n\r\n")

if(len(sys.argv) == 1):
    #print("Content-Type: text/plain\r\n\r\n")
    print
    print("No text given")

if(len(sys.argv) > 1):
    lastimport = Path('/usr/lib/cgi-bin/textfiles/lastimport.txt')
    text = sys.argv[1].decode('utf-8') + '\n'
    lastimport.open('w').write(text)
    #print("Content-Type: text/plain\r\n\r\n")
    print
    print("File has been saved")
#if(len(sys.argv) > 1):
    #add name to file
