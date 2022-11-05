#!/bin/sh
exec npx prisma migrate dev &
exec npm run start:dev