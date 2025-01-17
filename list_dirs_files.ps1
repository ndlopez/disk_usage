# Run on cmd as:

# powershell -ExecutionPolicy RemoteSigned

#

$thisUser = $env:UserName

$thisDir = "C:\Users\$thisUser\Documents"

$thisNas = “\\myNas\$thisUser\Documents”
 

Get-ChildItem -Path $thisDir -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum | Select-Object @{Name="Size(MB)";Expression={("{0:N2}" -f($_.Sum/1mb))}}, Count | Out-File $thisDir\all_files.txt



Get-ChildItem -Path $thisNas -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum | Select-Object @{Name="Size(MB)";Expression={("{0:N2}" -f($_.Sum/1mb))}}, Count | Out-File $thisDir\all_files.txt
 

# Get-ChildItem -Path $thisDir -Recurse | where {!$_.PSisContainer} | select FullName,Length |Format-Table -HideTableHeaders | Out-File $thisDir\all_files.txt -Append



# Get-ChildItem -Path $thisDir -Recurse | where {!$_.PSisContainer} | select FullName,Length | Export-Csv -NoTypeInformation .\all_files.csv



Get-ChildItem -Path $thisDir -Recurse | where {!$_.PSisContainer} | select Length,Name | Export-Csv -Encoding 'utf8' -NoTypeInformation  .\all_files2.csv
