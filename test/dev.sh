#!/usr/bin/env bash

set -ex

rm -rf test/result/*.png

find test -type f ! -name "*.png" | entr -c -s "test/view_port_test.sh"
