#!/bin/bash

cd app 
npm install
docker run --rm -p 8080:8080 --env-file .env -v $(pwd):/usr/src/app --name justforfunsies-node zsogolow/justforfun:node npm run dev
