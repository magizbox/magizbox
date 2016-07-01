# Production with `docker`

Base Image: [magizbox/conda2.7/](https://hub.docker.com/r/magizbox/conda2.7/)

Docker Folder

[code]
your_app/
├── app
│   ├── config
│   └── main.py
├── Dockerfile
└── run.sh
[/code]

`Dockerfile`

[code]
FROM magizbox/conda2.7:4.0

ADD ./app /app
ADD ./run.sh /run.sh

RUN conda env create -f environment.yml
[/code]

`run.sh`

[code]
source activate your_environment

cd /app

python main.py
[/code]

Compose

[code]
 service:
  build: ./service-app
  command: 'bash run.sh'
[/code]

Note: an other python conda with lower version (such as 3.5), will occur error when install requests package