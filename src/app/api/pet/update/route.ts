import type { RegisterRequest } from "src/app/lib/zods/auth";
import axios from "axios";
import { Pet } from "src/app/lib/zods/pet";
import { NextResponse } from "next/server";
import { auth } from "src/auth";
export async function PATCH(request: Request) {
  const req = await request.json();
  const session = await auth();
  delete req.ownerId;
  delete req.owner;
  const res = await axios.patch(
    `${process.env.NEXT_APP_API_URL}/api/pets/${req.id}`,
    req,
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
