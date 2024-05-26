"use server"
import type { LoginResponse, LoginRequest } from "src/app/lib/zods/auth";
import axios from "axios";

export async function login(request: LoginRequest): Promise<LoginResponse | undefined> {
    try {
      const res = await axios.post(`${process.env.NEXT_APP_API_URL}/api/auth/login`, request);
      return res.data as LoginResponse;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      throw new Error("Failed to fetch user.");
    }
}

