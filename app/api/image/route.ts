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

    // Fetch the image to ensure it was generated
    await fetch(imageUrl);

    return NextResponse.json({ imageUrl });
  } catch (error: any) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { msg: "Internal server error", error },
      { status: 500 }
    );
  }
}
// export async function GET(req: NextRequest) {  
//   try {
//     // Extract search params from the URL to get the image ID
//     const { searchParams } = new URL(req.url);
//     const imageId = searchParams.get("id");

//     if (!imageId || typeof imageId !== "string" || imageId.trim() === "") {
//       return NextResponse.json(
//         { error: true, message: "Invalid image ID provided" },
//         { status: 400 }
//       );
//     }

//     // Fetch the image data from the Post model using Prisma
//     const post = await prisma.post.findUnique({
//       where: {
//         id: imageId,
//       },
//     });

//     console.log("post id ", post)

//     if (!post) {
//       return NextResponse.json(
//         { error: true, message: "Image not found" },
//         { status: 404 }
//       );
//     }

//     // Return the image data including the URL, prompt, and seed
//     return NextResponse.json({ post }, { status: 200 });
//   } catch (error: any) {
//     // Log the error for debugging purposes
//     console.error("Error during GET request:", error);

//     // Return a 500 internal server error response
//     return NextResponse.json(
//       { error: true, message: "Internal server error", details: error.message },
//       { status: 500 }
//     );
//   }
// }

// hey i want the command through which we sa see the local db store on in browser that command i gues start from npm and the rest i forgot

export { POST };
