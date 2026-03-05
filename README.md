## Pre-requisites

- Node.js v20 or higher
- Docker (for running the database)

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

### Project setup

```bash
$ npm install
```

### Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Run tests

```bash
$ npm run test
```

## Docker Compose

To run the application using Docker Compose, use the following command:

```bash
$ docker-compose up
```

## Prisma Migration

To run the Prisma migration, use the following command:

```bash
$ npx prisma migrate dev
```
