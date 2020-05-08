#!/usr/bin/env bash

set -ex

rm -rf tmp/*

cd tmp

  wget https://raw.githubusercontent.com/louiscklaw/travis-playlist/master/travis-check-leak/leak.js
  wget https://raw.githubusercontent.com/louiscklaw/travis-playlist/master/travis-check-leak/Pipfile
  wget https://raw.githubusercontent.com/louiscklaw/travis-playlist/master/travis-check-leak/Pipfile.lock
  wget https://raw.githubusercontent.com/louiscklaw/travis-playlist/master/travis-check-leak/check-leak.py

  pipenv sync
  pipenv run python3 check-leak.py

cd ..

pretty-quick --staged

# done
exit 0