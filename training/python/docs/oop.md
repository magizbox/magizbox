# OOP [^1]

[code]
class BankAccount:
  id = None
  balance = 0

  def __init__(self, id, balance=0):
    self.id = id
    self.balance = balance

  def __get_balance():
     pass
  def withdraw():
     pass
   def deposite():
     pass
[/code]

[^1]: [Why are Python's 'private' methods not actually private?](http://stackoverflow.com/questions/70528/why-are-pythons-private-methods-not-actually-private)

# Object

Convert dict to object [^1]

[code lang="python"]
class Struct:
    def __init__(self, **entries):
        self.__dict__.update(entries)
[/code]

Then, you can use

[code]
> args = {'a': 1, 'b': 2}
> s = Struct(**args)
> s
< __main__.Struct instance at 0x01D6A738 >
> s.a
1
> s.b
2
[/code]

[^1]: [stackoverflow, Convert Python dict to object?](http://stackoverflow.com/questions/1305532/convert-python-dict-to-object)