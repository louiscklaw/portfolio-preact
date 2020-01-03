#!/usr/bin/env python3
import os,sys
import subprocess


for file_format in['png','jpg']:
  for root, dirs, files in os.walk(".", topdown=False):
    for name in files:
      if name.find('.'+file_format) > -1 :
        if name.find('thumbnail') == -1:
          print(root)
          print(name)
          os.system(f'convert {root}/{name} -resize 600x400\> {root}/thumbnail.png')