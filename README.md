# Carwash Management API

A comprehensive parking and carwash management system built with NestJS and Prisma. This API provides endpoints for managing users, vehicles, parking slots, and parking records.

## Technology Stack

- **NestJS** (v11) - Progressive Node.js framework for building scalable server-side applications
  - [Official Documentation](https://docs.nestjs.com/)
  - [API Reference](https://docs.nestjs.com/first-steps)

- **TypeScript** - Typed superset of JavaScript for improved code quality and developer experience
  - [Official Documentation](https://www.typescriptlang.org/docs/)

- **Prisma** - Modern database ORM with a focus on type safety and developer experience
  - [Official Documentation](https://www.prisma.io/docs/)
  - [Prisma Studio](https://www.prisma.io/studio) - Visual database browser

- **PostgreSQL** (v17) - Reliable and feature-rich relational database
  - [Official Documentation](https://www.postgresql.org/docs/)

- **Swagger/OpenAPI** - API documentation and testing interface
  - [Swagger UI Guide](https://swagger.io/tools/swagger-ui/)

- **Jest** - JavaScript testing framework
  - [Official Documentation](https://jestjs.io/docs/getting-started)

- **ESLint** - Code quality and style enforcement
  - [Official Documentation](https://eslint.org/)

## Prerequisites

- Node.js v20 or higher
- npm or yarn
- Docker and Docker Compose (for database)

## Project Setup

### Installation

```bash
npm install
```

### Environment Configuration

Create a `.env` file in the project root with the following variables:

```env
DATABASE_URL="postgresql://postgres:prisma@localhost:5432/postgres"
```

## Running the Application

### Development Mode

Start the application in watch mode (automatically restarts on file changes):

```bash
npm run start:dev
npx nx serve api       # Subir a API
npx nx build
```

### Debug Mode

Run the application with Node debugger enabled:

```bash
npm run start:debug
```

### Production Mode

Build and run the application for production:

```bash
npm run build
npm run start:prod
```

## Database Setup

### Using Docker Compose

Start the PostgreSQL database:

```bash
docker-compose up -d
```

This will start PostgreSQL on `localhost:5432` with credentials:

- Username: `postgres`
- Password: `prisma`
- Database: `postgres`

### Database Migrations

Run pending migrations:

```bash
npx prisma migrate dev
```

### Prisma Studio

Open the interactive database browser:

```bash
npx prisma studio
```

## API Documentation

Once the application is running, access the interactive API documentation at:

```
http://localhost:3000/api/docs
```

This provides a Swagger UI interface where you can test all available endpoints.

## Testing

### Run Tests

```bash
npm run test
```

### Watch Mode

```bash
npm run test:watch
```

### Coverage Report

```bash
npm run test:cov
```

### Debug Tests

```bash
npm run test:debug
```

## Code Quality

### Format Code

```bash
npm run format
```

### Lint Code

```bash
npm run lint
```

## Database Models

For detailed schema information, see [prisma/schema.prisma](prisma/schema.prisma)

## Development Workflow

1. Make changes to your code
2. In watch mode, changes automatically recompile
3. Run tests to validate changes: `npm run test`
4. Format code: `npm run format`
5. Lint code: `npm run lint`
6. For database schema changes, update `prisma/schema.prisma` and run `npx prisma migrate dev`

## Troubleshooting

### Database Connection Issues

Ensure Docker container is running:

```bash
docker-compose ps
```

Restart the database:

```bash
docker-compose restart postgres_carwash
```

### Prisma Client Out of Sync

Regenerate the Prisma client:

```bash
npx prisma generate
```
### Nx Commands

```bash
npx nx serve api          # sobe o backend
npx nx serve web          # sobe o frontend
npx nx build api          # build de produção do back
npx nx build web          # build de produção do front
npx nx test api           # testes de um projeto
npx nx graph              # ver o grafo de dependências
npx nx affected -t test   # roda testes SÓ do que você mudou (o superpoder do NX)
npx nx run-many -t build  # builda todos os projetos de uma
```
