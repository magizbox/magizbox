## REST

### JSON [^1] [^2]

**GET**

[code lang="python"]
import requests
url = "http://localhost:8080/messages"
response = requests.get(url)
data = response.json()
[/code]

**POST** [^3]

[code lang="python"]
import requests
import json

url = "http://localhost:8080/messages"
data = {'sender': 'Alice', 'receiver': 'Bob', 'message': 'Hello!'}
headers = {
  'Content-type': 'application/json',
  'Accept': 'application/json'}
r = requests.post(url, data=json.dumps(data), headers=headers)
[/code]

[^1]: [How to get JSON from webpage into Python script](http://stackoverflow.com/questions/12965203/how-to-get-json-from-webpage-into-python-script)
[^2]: [Requests: HTTP for Humans](http://docs.python-requests.org/en/latest/)
[^3]: [Post JSON using Python Requests](http://stackoverflow.com/questions/9733638/post-json-using-python-requests)



