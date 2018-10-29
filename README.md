## time-app docker container
A simple node.js application to display the current time. This app is fetching "http://time.jsontest.com". 

Docker Hub: https://hub.docker.com/r/net47/time-app/

The app uses the following NPM modules:
* express
* getJSON

### Run the container:
```docker run --name time-app -p 80:80 -d net47/time-app```
