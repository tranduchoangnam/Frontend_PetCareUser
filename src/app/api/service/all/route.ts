import type { RegisterRequest } from "src/app/lib/zods/auth";
import axios from "axios";
import { Pet } from "src/app/lib/zods/pet";
import { NextResponse } from "next/server";
import { auth } from "src/auth";

export async function GET(request: Request) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json(
      {
        data: "Unauthorized",
        status: "ERROR",
      },
      { status: 401 },
    );
  }

  try {
    const res = await axios.get(
      `${process.env.NEXT_APP_API_URL}/api/pets/all/owner=${session.user.id}`,
      {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      },
    );
    const pets = res.data as Pet[];

    const servicesPromises = pets.map(async (pet: Pet) => {
      try {
        const registeredServiceRes = await axios.get(
          `${process.env.NEXT_APP_API_URL}/api/services/all-registered-services/pet?id=${pet.id}`,
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          },
        );
        return { orders: registeredServiceRes.data, petName: pet.name }; // Assuming you want the data from the response
      } catch (err) {
        console.log(`Error fetching services for pet ${pet.id}:`, err);
        return null; // Return null or handle the error as needed
      }
    });

    const data = await Promise.all(servicesPromises);
    console.log(data);
    let allServices: any[] = [];
    data.forEach((e: any) => {
      e.orders.forEach((order: any) => {
        order.services.forEach((service: any) => {
          allServices.push({
            ...service,
            serviceName: order.serviceName,
            petName: e.petName
          });
        });
      });
    });
    console.log("All Services:", allServices);
    return NextResponse.json({
      data: allServices,
      status: "SUCCESS",
    });
  } catch (error: any) {
    console.log("Error:", error);
    return NextResponse.json(
      {
        data: error.message || "An error occurred",
        status: "ERROR",
      },
      { status: 500 },
    );
  }
}
