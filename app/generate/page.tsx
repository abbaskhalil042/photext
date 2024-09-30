"use client";
import Swipper from "@/components/Swipper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { MotionConfig } from "framer-motion";
import { Sparkles } from "lucide-react";
const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#0e756a] to-pink-300 text-gray-800 w-full h-screen pt-40 lg:pt-20">
        <div className="text-center mb-8">
          <h1 className=" flex justify-center  font-extrabold mb-4">
            <span className="text-6xl"> Photext AI </span>
            <span className="bg-gradient-to-r rounded-full from-pink-400 via-orange-400 to-yellow-400 w-fit ">
              <Sparkles />
            </span>
          </h1>

          <p className="text-black lg:w-[60rem] w-[25rem] text-lg mb-6 ">
            Experience the power of AI at your fingertips. Generate unique
            images based on your prompts and watch your imagination come to
            life. Choose from multiple AI models, fine-tune with seeds and
            sizing options, and craft your vision using custom prompts and
            negative prompts. From concept to creation, bring your unique ideas
            to life with unparalleled control and precision.
          </p>
        </div>

        {/* infinite scroll bar */}
        <div>{/* <Swipper/> */}</div>

        <div className=" lg:flex lg:justify-around w-full items-center lg:flex-row flex flex-col gap-5">
          <div className="mr-4 flex-col lg:flex lg:flex-row lg:items-center">
            <input
              type="text"
              placeholder="Enter your idea..."
              className="p-3 lg:w-[35rem] rounded border border-gray-500  bg-gray-700 text-white placeholder-gray-400"
            />
            <button className="ml-2 p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
              Generate
            </button>
          </div>
          <div className="flex   w-[25rem] h-[25rem] bg-white rounded shadow-lg"></div>
        </div>
      </div>
    </>
  );
};

export default page;
