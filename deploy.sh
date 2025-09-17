#!/usr/bin/env sh

# Abort on errors
set -e

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# Initialize a new git repository and commit all files
git init
git add -A
git commit -m 'deploy'

# Push to the gh-pages branch of your repository
git push -f git@github.com:<USERNAME>/<REPO_NAME>.git main:gh-pages

cd -
