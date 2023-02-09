# Import modules
import time
import redis
from flask import Flask

# Using Flask (Instance)
app = Flask(__name__)
# Using Redis (Instance)
cache = redis.Redis(host='redis', port=6379)

# Function -> Basic loop to retry connection
def get_hit_count():
    retries = 5
    while True:
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

# Redirect to /
@app.route('/')
def hello():
    count = get_hit_count()
    return 'Hello World! I have been seen {} times.\n'.format(count)

# Redirect to About
@app.route('/about')
def about():
    return "<h1>Hello from about page</h1>"
