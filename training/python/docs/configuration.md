## Configuration

[`pyconfiguration`](pypi.python.org/pypi/pyconfiguration)

### Installation

[code]
conda install -c rain1024 pyconfiguration
[/code]

### Usage

Step 1: Create `config.json` file

[code]
{
  "SERVICE_URL": "http://api.service.com"
}
[/code]

Step 2: Add these code to `main.py` file

[code]
from pyconfiguration import Configuration
Configuration.load('config.json')
print Configuration.SERVICE_URL

> http://api.service.com
[/code]

References: What's the best practice using a settings file [^1]

[^1]: [What's the best practice using a settings file in Python?](http://stackoverflow.com/questions/5055042/whats-the-best-practice-using-a-settings-file-in-python)