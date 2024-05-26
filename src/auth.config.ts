import type { NextAuthConfig } from "next-auth";
import { z } from "zod";
import { login } from "src/app/lib/api/auth";
import { get_current_user } from "src/app/lib/api/user";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      if (isLoggedIn) return true;
      return false; // Redirect unauthenticated users to login page
    },
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const token = await login({
            email: email,
            password: password,
          });
          if (token) {
            const accessToken = token.access_token;
            const user = await get_current_user(token.access_token);
            if (user) {
              return { ...user, accessToken };
            }
          }
        }
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
