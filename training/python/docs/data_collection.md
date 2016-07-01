<h3>Reverse a list</h3>

```python
[1, 3, 2][::-1]
# [2, 3, 1]
```

![](https://code.org/curriculum/course1/12/vocab.png)


```python
import itertools

x = [1, 2, 3]
y = [2, 4, 5]

[a + b for (a, b) in itertools.product(x, y)]
# [3, 5, 6, 4, 6, 7, 5, 7, 8]

```

