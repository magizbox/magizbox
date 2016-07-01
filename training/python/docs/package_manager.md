# py2exe

## Installation

[code]
# py2exe
conda install -c https://conda.anaconda.org/clinicalgraphics cg-py2exe
[/code]

## Build [^1]

[code]
python setup.py py2exe
# build PyQT
python setup.py py2exe --includes sip
[/code]

[^1]: [http://www.py2exe.org/index.cgi/Py2exeAndPyQt](http://www.py2exe.org/index.cgi/Py2exeAndPyQt)