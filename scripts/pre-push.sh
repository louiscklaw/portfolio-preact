#!/usr/bin/env bash

pretty-quick --staged
rm -rf build
yarn build

set -ex

for l in $(find . -name .travis.yml -not -path "./node_modules/*");
do
  travis lint $l &
done;

wait
