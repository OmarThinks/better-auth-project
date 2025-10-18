import { betterAuth } from 'better-auth';
import { anonymous } from 'better-auth/plugins';

const auth = betterAuth({
  secret: 'OG3zZZ84QiLNPVRAVIpoKtY3XabbeNmi',
  emailAndPassword: {
    enabled: true,
  },
  plugins: [anonymous()],
});

export { auth };
