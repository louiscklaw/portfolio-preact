#!/usr/bin/env bash

set -ex

pretty-quick --staged

rm -rf tmp/*

cd tmp
  # getting needed scripts
  wget -q https://raw.githubusercontent.com/louiscklaw/travis-playlist/master/travis-check-leak/leak.js &
  wget -q https://raw.githubusercontent.com/louiscklaw/travis-playlist/master/travis-check-leak/Pipfile &
  wget -q https://raw.githubusercontent.com/louiscklaw/travis-playlist/master/travis-check-leak/Pipfile.lock &
  wget -q https://raw.githubusercontent.com/louiscklaw/travis-playlist/master/travis-check-leak/check-leak.py &

  # script arrived
  wait

  pipenv sync
  pipenv run python3 check-leak.py

cd ..

wait

# done
exit 0