import datetime
import requests
import dateutil

projects = [
    "bigdata",
    "cpp",
    "python",
    "neo4j",
    "natural_language_processing",
    "probabilistic_graphical_models",
    "deep_learning",
    "git",
    "machinelearning"
]


# def get_last_contribute(project):
#     project_url = "http://api.github.com/repos/magizbox/" + project + "/commits"
#     data = requests.get(project_url).json()
#     datestring = data[0]['commit']['author']['date']
#     result = datetime.datetime.strptime(datestring, "%Y-%m-%dT%H:%M:%SZ")
#     now = datetime.datetime.now()
#     return (now - result).days

def get_last_contribute(username):
    url = "https://api.github.com/users/rain1024/events"
    data = requests.get(url).json()
    datestring = filter(lambda event: event['type'] == "PushEvent", data)[0]['created_at']
    result = datetime.datetime.strptime(datestring, "%Y-%m-%dT%H:%M:%SZ")
    now = datetime.datetime.now()
    days = (now - result).days
    return days
# last_contribute = min([get_last_contribute(project) for project in projects])
last_contribute = get_last_contribute("rain1024")

from jinja2 import Environment, PackageLoader
env = Environment(loader=PackageLoader('users', 'templates'))
template = env.get_template('user.html')
user = {
    "image": "rain1024.png",
    "name": "Vu Anh",
    "role": "Researcher Engineer"
}
result = template.render(last_contribute=last_contribute, user=user)

open("rain1024.html", "w").write(result)
pass

