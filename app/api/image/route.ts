// import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

 async function POST(req: NextRequest) {


  const body = await req.json();
  const { prompt } = body;

  //check if user is logged in
  // const session = await useSession();
  // if (!session) {
  //   return NextResponse.json(
  //     { msg: "Unauthorized", error: true },
  //     { status: 401 }
  //   );
  // }

  try {
    if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
      return NextResponse.json(
        { error: true, message: "Invalid prompt provided" },
        { status: 400 }
      );
    }

    const randomSeed = Math.floor(Math.random() * 100000000) + 1;

    // Generate image URL
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?width=512&height=512&seed=${randomSeed}&nologo=True`;


    await fetch(imageUrl);

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { msg: "Internal server error", error },
      { status: 500 }
    );
  }
}
export { POST };
