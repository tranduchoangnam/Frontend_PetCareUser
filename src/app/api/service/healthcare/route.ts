import type { RegisterRequest } from "src/app/lib/zods/auth";
import axios from "axios";
import { Pet } from "src/app/lib/zods/pet";
import { NextResponse } from "next/server";
import { auth } from "src/auth";
import { add } from "lodash";
export async function POST(request: Request) {
  const req = await request.json();
  const session = await auth();
  const res = await axios.post(
    `${process.env.NEXT_APP_API_URL}/api/healthcare-service`,
    {
      ...req,
      description: "",
      diet: "",
      medicine: "",
      additionalInfo: {},
    },
    {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    },
  );
  if (res.data.id) {
    const pet = res.data as Pet;
    return NextResponse.json({
      data: pet,
      status: "SUCCESS",
    });
  }
  return NextResponse.json({
    data: res.data,
    status: "ERROR",
  });
}
