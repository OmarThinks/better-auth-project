import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { anonymous } from 'better-auth/plugins';
import { PrismaClient } from '../generated/prisma';

const auth = betterAuth({
  database: prismaAdapter(PrismaClient, {
    provider: 'sqlite', // or "mysql", "postgresql", ...etc
  }),
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [anonymous()],
}) as ReturnType<typeof betterAuth>;

export { auth };
