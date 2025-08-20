#!/bin/sh
set -e

echo "Running database migrations..."
npm run migration:run

echo "Starting the application..."
npm run start:prod
