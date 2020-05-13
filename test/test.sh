#!/usr/bin/env bash

docker kill puppeteer-chrome

set -ex

docker run -i --init --rm --cap-add=SYS_ADMIN \
  --name puppeteer-chrome \
  -v $PWD:/home/node \
  logickee/travis-puppeteer \
  /home/node/test/test_docker.sh

# docker run -it --init --rm --cap-add=SYS_ADMIN \
#   --name puppeteer-chrome \
#   -v $PWD:/home/node \
#   logickee/travis-puppeteer \
#   bash
