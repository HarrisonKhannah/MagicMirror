#!/bin/sh

git pull --ff
yarnpkg install && yarnpkg build
