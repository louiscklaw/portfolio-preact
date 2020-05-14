#!/usr/bin/env bash

set -ex

echo "start a react on port 8081"
read -p "Press any key to resume ..."

# docker kill puppeteer-chrome

# cd test
#   docker run -i --init --rm --cap-add=SYS_ADMIN \
#     --name puppeteer-chrome \
#     -v $PWD:/home/node \
#     logickee/travis-puppeteer \
#     /home/node/test_docker.sh

#   # docker run -it --init --rm --cap-add=SYS_ADMIN \
#   #   --name puppeteer-chrome \
#   #   -v $PWD:/home/node \
#   #   logickee/travis-puppeteer \
#   #   bash

rm -rf result/*.png

# yarn

# test against view port
# node test/test_view_port.js
# test_view_port done

# # compare test result with the expected one
node test/compare_result.js
