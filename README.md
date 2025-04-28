This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## install all dependencies
```bash
npm i
```

## DB setup using docker 
If you dont need to use docker you can skip this step.
```bash
docker compose up -d
```
set the DB url to 
DATABASE_URL="postgresql://user1:password123@localhost:5432/mydb?schema=public"

## Prisma set up 
```bash
npx prisma migrate dev --name init
npx prisma db push
```

### to get auth secret
AUTH_SECRET
```bash
openssl rand -base64 32
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```