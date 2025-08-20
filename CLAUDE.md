# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Countries API - NestJS Project

This is a NestJS API project for managing countries and continents data with PostgreSQL database.

## Development Commands

- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot reload
- `npm run start:prod` - Start in production mode
- `npm run build` - Build the application
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Run ESLint

## Architecture Overview

### Database Structure
- PostgreSQL database with two main entities:
  - **Continent** (continents table): Stores continent information
  - **Country** (countries table): Stores country information with foreign key to continent

### Module Structure
- `ContinentModule`: Handles CRUD operations for continents
- `CountryModule`: Handles CRUD operations for countries
- Both modules use TypeORM for database operations

### API Endpoints
- `GET/POST/PATCH/DELETE /continents` - Continent CRUD operations
- `GET/POST/PATCH/DELETE /countries` - Country CRUD operations
- `GET /countries?continent=:id` - Filter countries by continent

### Environment Configuration
- Database connection configured through .env file
- TypeORM synchronization enabled in development mode
- ConfigModule provides global access to environment variables

## Getting Started

1. Install dependencies: `npm install`
2. Set up PostgreSQL database
3. Configure .env file with database credentials
4. Run `npm run start:dev` to start development server