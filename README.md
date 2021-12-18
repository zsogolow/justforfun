# justforfun

## Node.js

### Getting Started

#### Requirements

* docker

#### Building the Docker Image

The `build.sh` will build the docker image. The app contents are copied inside the image at build time.

    cd node/
    ./build.sh


#### Running the App

In the same directory as the build step, execute the `run.sh` script.

    cd node/
    ./run.sh


#### Test the App

Open a browser and navigate to: [http://localhost:49160](http://localhost:49160). 


#### Stop the App

To stop the app and remove the container, run the `stop.sh` script.

    cd node/
    ./stop.sh


<hr>

## .NET Core Web

### Getting Started

#### Requirements

* docker

#### Building the Docker Image

The `build.sh` will build the docker image. The app contents are copied inside the image at build time.

    cd dotnet-web/
    ./build.sh


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

## more fun stuff later

