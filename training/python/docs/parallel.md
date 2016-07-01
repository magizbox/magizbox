Parallel [^1]

[code lang="python"]
def myfunc(arg1, arg2):
  print 'In thread'
  print 'args are', arg1, arg2

thread = Thread(target=myfunc, args=("a", "b"))
thread.start()
[/code]

[^1]: [Overriding python threading.Thread.run()](http://stackoverflow.com/questions/660961/overriding-python-threading-thread-run)
