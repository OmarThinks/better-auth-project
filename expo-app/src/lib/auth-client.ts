import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";
import { anonymousClient } from "better-auth/client/plugins";

const authClient = createAuthClient({
  baseURL: "http://192.168.0.100:3000",
  plugins: [
    expoClient({
      scheme: "expoapp",
      storagePrefix: "expoapp",
      storage: SecureStore,
    }),
    anonymousClient(),
  ],
});

export const { signIn, signUp, useSession } = createAuthClient();
export { authClient };
