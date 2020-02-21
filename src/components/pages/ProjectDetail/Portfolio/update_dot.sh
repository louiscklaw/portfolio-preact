#!/usr/bin/env bash

dot -Tpng build_flow.dot -o build_flow.png
dot -Tsvg build_flow.dot -o build_flow.svg