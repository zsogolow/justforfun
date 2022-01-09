#!/bin/bash

docker build . -t zsogolow/justforfun:dotnet-web -f ./docker/Dockerfile

docker run --rm -p 8080:80  --name justforfunsies-dotnet-web zsogolow/justforfun:dotnet-web
