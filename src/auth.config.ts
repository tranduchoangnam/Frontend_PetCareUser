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
      if (nextUrl.pathname.startsWith("/auth")) return true;
      return false; // Redirect unauthenticated users to login page
    },
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        console.log("jwt callback ", { token, user });
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
        token.access_token = user.accessToken;
        token.refresh_token = user.refreshToken;
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log("session callback ", { token, user, session });

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          email: token.email as string,
          username: token.username as string,
          accessToken: token.access_token as string,
          refreshToken: token.refresh_token as string[],
          role: token.role as string,
        },
        error: token.error,
      };
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
            console.log("authorize callback ", { ...user, accessToken });
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
