import type { RegisterRequest } from "src/app/lib/zods/auth";
import { NextResponse } from 'next/server'
import axios from "axios";
import { UserBase } from "src/app/lib/zods/user";

export async function POST(request: Request) {
  const req = await request.json();
  const res = await axios.post(
    `${process.env.NEXT_APP_API_URL}/api/auth/register`,
    { ...req, role: "client" },
  );
  if (res.data.id){
    const user= res.data as UserBase;
    return NextResponse.json({
        data: user,
        status: "SUCCESS",
    });
  }
  return NextResponse.json({
    data: res.data,
    status: "ERROR",
  });
}
