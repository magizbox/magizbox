### logging [^1]  [^2]  [^3]

[levels](https://docs.python.org/2/library/logging.html#logging-levels), [attributes](https://docs.python.org/2/library/logging.html#logrecord-attributes) references

The logging library takes a modular approach and offers several categories of components: loggers, handlers, filters, and formatters.

1. Loggers expose the interface that application code directly uses.
2. Handlers send the log records (created by loggers) to the appropriate destination.
3. Filters provide a finer grained facility for determining which log records to output.
4. Formatters specify the layout of log records in the final output.

Step 0: Project structure

[code]
code/
├── main.py
├── config
├   └── logging.conf
└── logs
    └── app.log
[/code]
Step 1: Create file `logging.conf`

[code]
[loggers]
keys=root

[handlers]
keys=consoleHandler,fileHandler

[formatters]
keys=formatter

[logger_root]
level=DEBUG
handlers=consoleHandler,fileHandler

[handler_consoleHandler]
class=StreamHandler
level=DEBUG
formatter=formatter
args=(sys.stdout,)

[handler_fileHandler]
class=FileHandler
level=DEBUG
formatter=formatter
args = ('logs/app.log','a')

[formatter_formatter]
format=%(asctime)s - %(name)s - %(levelname)s - %(message)s
datefmt=
[/code]

Step 2: Load config and create logger

In `main.py`

[code lang="python"]
import logging.config

# load logging config
logging.config.fileConfig('config/logging.conf')
[/code]

Step 3: In your application code

[code lang="python"]
logging.getLogger().debug('debug message')
logging.getLogger().info('info message')
logging.getLogger().warn('warn message')
logging.getLogger().error('error message')
logging.getLogger().critical('critical message')
[/code]

More Resources

* [Introduction to Logging](http://magizbox.com/index.php/cs/programming/logging/)
* [Quick and simple usage of python log](http://magizbox.com/index.php/code/python/logging/python-logging-simple-example/)

[^1]: <a href="https://docs.python.org/2/howto/logging.html">Python: Logging module</a>
[^2]: <a href="https://docs.python.org/2/howto/logging-cookbook.html">Python: Logging cookbook</a>
[^3]: <a href="http://docs.python-guide.org/en/latest/writing/logging/">Python: Logging guide</a>