"use server"
import type { UserBase } from "src/app/lib/zods/user";
import axios from "axios";

export async function get_current_user(
  token: string,
): Promise<UserBase | undefined> {
  try {
    const res = await axios.get(
      `${process.env.NEXT_APP_API_URL}/api/users`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return res.data as UserBase;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
