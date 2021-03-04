#!/bin/sh

set -a
source .env.deploy

if [ "$MODULE" == "frontend" ]
then
  cd frontend && sh deploy.sh
elif [ "$MODULE" == "api" ]
then
  cd backend && sh build.sh
else
  cd ./backend && sh build.sh
  cd ../frontend && sh deploy.sh
fi
