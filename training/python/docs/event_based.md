# Introduction: [pydispatcher](http://pydispatcher.sourceforge.net/) [^1] [^2]

PyDispatcher provides the Python programmer with a **multiple-producer-multiple-consumer signal-registration** and **routing infrastructure** for use in multiple contexts.  The mechanism of PyDispatcher started life as a highly rated recipe in the Python Cookbook.  The project aims to include various enhancements to the recipe developed during use in various applications.  It is primarily maintained by Mike Fletcher.  A derivative of the project provides the Django web framework's "signal" system.

Used by Django community

# Usage [^1]

[code lang="python"]
# To set up a function to receive signals:
from pydispatch import dispatcher

SIGNAL = 'my-first-signal'


def handle_event(sender):
    """Simple event handler"""
    print 'Signal was sent by', sender


dispatcher.connect(handle_event, signal=SIGNAL, sender=dispatcher.Any)

# The use of the Any object allows the handler to listen for messages
# from any Sender or to listen to Any message being sent.
# To send messages:
first_sender = object()
second_sender = {}


def main():
    dispatcher.send(signal=SIGNAL, sender=first_sender)
    dispatcher.send(signal=SIGNAL, sender=second_sender)

    # Which causes the following to be printed:

    # Signal was sent by <object object at 0x196a090>
    # Signal was sent by {}
[/code]

# Messaging
[Conda link](https://anaconda.org/hunguyen/pubsubclient)
[Docker link](https://hub.docker.com/r/hunguyen/pubsub/)
[Github - pubSubService](https://github.com/hunguyen1702/pubSubService)
[Github - pubSubClient](https://github.com/hunguyen1702/pubSubClient)
[Pypi link](https://pypi.python.org/pypi/pubSubClient)

Python Publish - Subscribe Pattern Implementation:

### Step by Step to run PubSub:

#### Step 1: Pull `pubsub` image from docker hub & run it:

[code]

docker pull hunguyen/pubsub:latest
docker run -d -p 8000:8000 hunguyen/pubsub

[/code]

#### Step 2: To run client first install `pyconfiguration` from conda

[code]

conda install -c rain1024 pyconfiguration

[/code]

#### Step 3: Install `pubSubClient` package from conda

[code]

conda install -c hunguyen pubsubclient

[/code]

#### Step 4: Create `config.json` file

[code]
{
  "PUBLISH_SUBSCRIBE_SERVICE": "http://api.service.com"
}
[/code]

#### Step 5: Run `pubsubclient`

[code lang="python"]
# create and register or sync a publisher
publisher = Publisher('P1')
# create a new topic
topic = Topic('A')
# create an event of a topic
event = Event(topic)
# publisher publishes an event
publisher.publish(event)
# create and register or sync a subscriber
subscriber = Subscriber('S1')
# subscriber subscribes to a topic
subscriber.subscribe(topic)
# subscriber get all new events by time stamp of topics which it has subscribed
events = subscriber.get_events()

[/code]



[^1]: [pydispatcher](http://pydispatcher.sourceforge.net/)
[^2]: [stackoverflow, Recommended Python publish/subscribe/dispatch module?](http://stackoverflow.com/questions/115844/recommended-python-publish-subscribe-dispatch-module)