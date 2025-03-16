#!/usr/bin/env bash

# Backend
echo "Bootstrapping backend..."
cd ./backend/
cp .env.template .env
npm install

# Frontend
echo "Bootstrapping frontend..."
cd ../frontend/
cp .env.template .env
npm install

echo "Done!"
