#!/bin/sh

. ${HOME}/.shrc

cd /usr/src/tickets
. .defaultip
yarn install
expo start
