import type { RegisterRequest } from "src/app/lib/zods/auth";
import axios from "axios";
import { Pet } from "src/app/lib/zods/pet";
import { NextResponse } from "next/server";
import { auth } from "src/auth";
export async function GET(request: Request) {
  const session = await auth();
  try {
    const res = await axios.get(
      `${process.env.NEXT_APP_API_URL}/api/pets/all/owner=${session?.user.id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      },
    );
    const pet = res.data as Pet[];
    return NextResponse.json({
      data: pet,
      status: "SUCCESS",
    });
    
  } catch (error: any) {
    return NextResponse.json({
      data: error.msg,
      status: "ERROR",
    });
  }
}
