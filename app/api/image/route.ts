import { NextResponse } from "next/server";

async function POST(res: NextResponse) {
  return NextResponse.json({ message: "hello" });

  const {prompt}= await res.json();
  
}

export { POST };
