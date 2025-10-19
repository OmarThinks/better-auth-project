import { betterAuth } from 'better-auth';
import { anonymous } from 'better-auth/plugins';
import { constants } from 'utils/constants';
import Database from 'better-sqlite3';

const auth = betterAuth({
  database: new Database(constants.DATABASE_URL),
  secret: constants.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [anonymous()],
});

export { auth };
