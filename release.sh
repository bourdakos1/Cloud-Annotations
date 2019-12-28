#!/bin/bash
python --version
python3 --version
go version
set -e

cd cacli && curl -sL https://git.io/goreleaser | bash

cd ../trainer && python setup.py all
curl --data-binary @training.zip -H "Content-Type: application/octet-stream" "https://uploads.github.com/repos/cloud-annotations/training/releases/$TRAVIS_TAG/assets?name=training.zip&access_token=$GITHUB_TOKEN"