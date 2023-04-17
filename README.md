# Simple du

No servers, no bulky UI, just simple HTML page.

## Description
Based on user input display in browser disk usage. A bash (Powershell on Windows systems) 
script collects information of a directory, file contents and file size. Since the browser cannot automatically explore files, the user will submit the generated CSV file and a webpage
will display largest file on such directory.

This is possible using FILE API on HTML5.

The user will execute the bash script and it will open Firefox to display information.

## Motivation
Given my current job environment (Windows), it seems necessary a file size explorer. Windows explorer cannot display the largest file on a list of n-directories.
 
## Built with
- Javascript
- HTML5, CSS3
- Bash / Powershell
