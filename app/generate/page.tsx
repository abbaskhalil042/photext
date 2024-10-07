"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader, Loader2Icon, Sparkles } from "lucide-react";
import { useSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { InfiniteMovingCardsDemo } from "@/components/MovingInfinitesCard";
const prisma = new PrismaClient();

const Page = () => {
  const [inputPrompt, setInputPrompt] = useState<string>("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { data: session } = useSession();
  console.log("id ", session?.user?.email);

  const imageGenerate = async () => {
    if (!inputPrompt.trim()) {
      alert("Please enter a valid prompt.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/image", {
        prompt: inputPrompt,
      });

      if (response?.data?.imageUrl) {
        setGeneratedImage(response.data.imageUrl);
      }

      console.log("response from generate page", response.data);
      setInputPrompt("");
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const baseUrl = "https://image.pollinations.ai/prompt/";
  const imagePath = generatedImage ? generatedImage.replace(baseUrl, "") : "";

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#173431] to-pink-00 text-gray-800 w-full h-screen pt-10 lg:pt-20">
      <div className="text-center mb-8">
        <h1 className="flex justify-center font-extrabold mb-4">
          <span className="text-6xl text-white ">Photext AI</span>
          <span className="bg-gradient-to-r rounded-full from-pink-400 via-orange-400 to-yellow-400 w-fit">
            <Sparkles />
          </span>
        </h1>
        <p className="text-black lg:w-[60rem] w-[25rem] text-lg mb-6">
          Unlock your creative potential and bring your ideas to life with
          Photext AI. Explore the infinite possibilities of AI-generated art,
          tailored to your unique vision.
        </p>
      </div>

      <div className="lg:flex lg:justify-around w-full items-center flex flex-col gap-5">
        <div className="mr-4 flex-col lg:flex lg:flex-row lg:items-center gap-3">
          <input
            onChange={(e) => setInputPrompt(e.target.value)}
            value={inputPrompt}
            type="text"
            placeholder="Enter your prompt to generate the image..."
            className="p-2 w-full lg:w-[35rem] rounded border border-gray-500 bg-gray-700 text-white placeholder-gray-400"
          />
          <Button
            onClick={imageGenerate}
            variant="outline"
            className={cn(
              loading ? (
                <>
                  <Loader2Icon className="w-5 h-5 animate-spin " />
                </>
              ) : (
                "flex text-white"
              )
            )}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                imageGenerate();
              }
            }}
          >
            {loading ? (
              <div className="flex gap-1">
                <Loader2Icon className="w-5 h-5 animate-spin text-white " />{" "}
                <p className="text-white">Generating</p>
              </div>
            ) : (
              "Generate"
            )}

            {/* Generate */}
          </Button>
        </div>

        <div className="w-full">
          <InfiniteMovingCardsDemo />
        </div>

        <div className="flex w-full max-w-[25rem] h-[25rem] bg-gray-700 rounded shadow-lg">
          {loading ? (
            <div className="flex justify-center items-center w-full h-full">
              <Loader className="animate-spin w-5 h-5" />
            </div>
          ) : (
            generatedImage && (
              <div className="w-full h-full bg-gray-400 rounded shadow-lg">
                <Link href={`/image/${imagePath}`}>
                  <Image
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover rounded-sm"
                    src={generatedImage}
                    alt="Generated Image"
                  />
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
