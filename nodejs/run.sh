#!/bin/bash

docker run --rm -p 49160:8080 --name justforfunsies-node -d zsogolow/justforfun:node
docker logs -f justforfunsies-node