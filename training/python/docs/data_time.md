### Datetime

Print current time [^1]

```python
from datetime import datetime
datetime.now().strftime('%Y-%m-%d %H:%M:%S')
# '2015-12-29 14:02:27'
```


Get current time [^1]

```python
import datetime
datetime.datetime.now()
# datetime(2009, 1, 6, 15, 8, 24, 78915)
```


Unixtime [^2]

[code]
```python
import time
int(time.time())
```


[^1]: [How to get current time in Python](http://stackoverflow.com/questions/415511/how-to-get-current-time-in-python)
[^2]: [Does Python's time.time() return the local or UTC timestamp?](http://stackoverflow.com/a/16299439)
