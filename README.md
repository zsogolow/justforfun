# justforfun

## Fun Stuff 

* Node.js
* .NET Core - Web
* .NET Core - Web API
* ... more fun stuff later

## Node.js

### Getting Started

#### Requirements

* docker

#### Building the Docker Image

The `build.sh` will build the docker image. The app contents are copied inside the image at build time.

    cd nodejs/
    ./build.sh


#### Running the App

In the same directory as the build step, execute the `run.sh` script.

    cd nodejs/
    ./run.sh


#### Test the App

Open a browser and navigate to: [http://localhost:49160](http://localhost:49160). 


#### Stop the App

To stop the app and remove the container, run the `stop.sh` script.

    cd nodejs/
    ./stop.sh


<hr>

## .NET Core - Web

### Getting Started

#### Requirements

* docker

#### Building the Docker Image

The `build.sh` will build the docker image. The app contents are copied inside the image at build time.

    cd dotnet-web/
    ./build.sh


#### Developing the App

In the same directory as the build step, execute the `watch.sh` script.
This will start the web app in watch mode with hot reloading.

    cd dotnet-web/
    ./watch.sh

#### Running the App

In the same directory as the build step, execute the `run.sh` script.

    cd dotnet-web/
    ./run.sh


#### Test the App

Open a browser and navigate to: [http://localhost:8080](http://localhost:8080). 


#### Stop the App

To stop the app and remove the container, run the `stop.sh` script.

    cd dotnet-web/
    ./stop.sh


<hr>

## .NET Core - Web API

### Getting Started

#### Requirements

* docker

#### Building the Docker Image

The `build.sh` will build the docker image. The app contents are copied inside the image at build time.

    cd dotnet-api/
    ./build.sh


#### Running the App

In the same directory as the build step, execute the `run.sh` script.

    cd dotnet-api/
    ./run.sh


#### Test the App

Open a browser and navigate to: [http://localhost:8080/WeatherForecast](http://localhost:8080/WeatherForecast). 


#### Stop the App

To stop the app and remove the container, run the `stop.sh` script.

    cd dotnet-api/
    ./stop.sh


<hr>

## more fun stuff later

