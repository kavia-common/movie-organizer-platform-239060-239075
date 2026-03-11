#!/bin/bash
cd /tmp/kavia/workspace/code-generation/movie-organizer-platform-239060-239075/movie_spa_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

