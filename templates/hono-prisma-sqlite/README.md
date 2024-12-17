# hono-prisma-sqlite Hono Template

This repository contains a basic template for a web application using [Hono](https://hono.dev/), [Bun](https://bun.sh/), [Prisma](https://www.prisma.io/), and [SQLite](https://www.sqlite.org/). This template is designed to provide a quick start for your project, with some additional features that make development easier and more efficient.

## Features

- **Hono**: A fast, lightweight, and more secure way to build web applications. It's built on top of standard web technologies, such as JavaScript and TypeScript.
- **Bun**: A fast JavaScript runtime and package manager. It's designed to run JavaScript and TypeScript projects quickly and efficiently.
- **Prisma**: A next-generation ORM that can be used to build a type-safe database layer. It simplifies database access and migrations.
- **SQLite**: A self-contained, high-reliability, embedded, full-featured, public-domain, SQL database engine.
- **ESLint**: A static analysis tool for finding problems in your JavaScript code. It can help you catch errors and enforce coding standards.
- **Prettier**: An opinionated code formatter that can help you ensure your code is consistently styled.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript. It can help you catch errors at compile time and improve the maintainability of your code.

## Clone this template

With degit (simplest):

```bash
npx degit SindreSau/hono-templates/templates/hono-prisma-sqlite <project-name>
```

With github cli (common):

```bash
gh repo clone SindreSau/hono-templates/templates/hono-prisma-sqlite <project-name>
```

## Run the project

1. Install the dependencies:

```bash
bun install
```

2. Run the project:

```bash
bun run dev
```

## Database and Prisma

Generate Prisma client:

```bash
bun run prisma generate
```

Update database schema:

```bash
bun run prisma migrate dev
```

Open prisma studio:

```bash
bun run prisma studio
```
