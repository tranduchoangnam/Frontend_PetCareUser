"use server"
import type { LoginResponse, LoginRequest, RegisterRequest } from "src/app/lib/zods/auth";
import axios from "axios";
import { UserBase } from "src/app/lib/zods/user";

export async function login(request: LoginRequest): Promise<LoginResponse | undefined> {
    try {
      const res = await axios.post(`${process.env.NEXT_APP_API_URL}/api/auth/login`, request);
      return res.data as LoginResponse;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      throw new Error("Failed to fetch user.");
    }
}

export async function signUp(request: RegisterRequest): Promise<UserBase | undefined> {
  try {
    const res = await axios.post(`${process.env.NEXT_APP_API_URL}/api/auth/register`, request);
    return res.data as UserBase;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}



