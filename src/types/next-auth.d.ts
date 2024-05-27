import NextAuth from "next-auth";
import { UserBase } from "src/app/lib/zods/user";
import { LoginResponse } from "src/app/lib/zods/auth";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User extends UserBase {}
  interface Session {
    user: User;
    expires: string;
    error: string;
  }
}
