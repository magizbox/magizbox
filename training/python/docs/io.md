# Read JSON [^1]

```python
import json
from pprint import pprint

with open('data.json') as data_file:
    data = json.load(data_file)

pprint(data)
```

[^1]: [Parsing values from a JSON file in Python](http://stackoverflow.com/questions/2835559/parsing-values-from-a-json-file-in-python)