import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, email } = body;

    if (!id || !email) {
      return NextResponse.json(
        { error: "Missing required fields: id or email" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        id,
        email,
      },
    });

    // console.log("User registered:", user);

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully in database ✅",
        data: {
          email: user.email,
        },
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
