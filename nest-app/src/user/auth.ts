import { betterAuth } from 'better-auth';
import { anonymous } from 'better-auth/plugins';
import Database from 'better-sqlite3';

const auth = betterAuth({
  database: new Database(process.env.DATABASE_URL),
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [anonymous()],
}) as ReturnType<typeof betterAuth>;

export { auth };
