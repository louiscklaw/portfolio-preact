#!/usr/bin/env bash

set -ex

scripts/check_leak.sh

pretty-quick --staged

# done
exit 0