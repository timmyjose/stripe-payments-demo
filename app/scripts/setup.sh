#!/usr/bin/env bash

set -euxo pipefail

ANDROID_DIR=android
IOS_DIR=ios

if [[ "$@" == *"--clean"* ]]; then
  (
    set +e
    echo "Performing a full clean build..."
    echo "Removing node_modules..."
    rm -rf node_modules
    echo "Removing android and ios directories..."
    rm -rf android ios
  )
fi

yarn install

if [[ ! -d "${ANDROID_DIR}" || ! -d "${IOS_DIR}" ]]; then
  echo "Missing android and/or ios directories. Performing prebuild..."
  npx expo prebuild
fi