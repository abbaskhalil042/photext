import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

async function POST(req: NextRequest) {
  const body = await req.json();
  const { prompt } = body;

  try {
    if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
      return NextResponse.json(
        { error: true, message: "Invalid prompt provided" },
        { status: 400 }
      );
    }
    const randomSeed = Math.floor(Math.random() * 100000000) + 1;

    // encodeURIComponent//* remove space
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?width=512&height=512&seed=${randomSeed}&nologo=True`;

    await fetch(imageUrl);

    return NextResponse.json({ imageUrl });
  } catch (error: any) {
    return NextResponse.json(
      { msg: "internal server error", error },
      {
        status: 500,
      }
    );
  }
}

export { POST };
