"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImageIcon, Wand2, Download, Share2, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import data from "../utils/promptImage"; // Import static data

const Home: React.FC = () => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState<number>(0);
  const delay = 2000; // 12 seconds delay for each image

  // Function to cycle through prompts
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % data.length); // Cycle through data
    }, delay); // Wait for the delay before changing the prompt

    return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
  }, [currentPromptIndex, delay]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#173431] to-pink-00 text-gray-800 overflow-hidden">
      <main className="pt-14 pb-8">
        <div className="container mx-auto px-4">
          <Hero />
          <Features
            prompt={data[currentPromptIndex].prompt}
            imageUrl={data[currentPromptIndex].url}
          />
        </div>
      </main>
    </div>
  );
};

const Hero = () => {
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto my-8"
    >
      <h2 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
        Transform Your Words into
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
          Stunning AI-Generated Images
        </span>
      </h2>

      <div className="overflow-hidden">
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full max-w mb-6"
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/5"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <motion.button
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 text-white font-bold text-base sm:text-lg hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 transition duration-300 shadow-lg relative inline-flex items-center"
      >
        <Link href={"/generate"}>Start Generating</Link>
        <motion.div initial="rest" animate="animate" className="ml-2">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

const Features: React.FC<{ prompt: string; imageUrl: string }> = ({
  prompt,
  imageUrl,
}) => (
  <>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {[
        // Feature items
        {
          icon: <Wand2 />,
          title: "AI-Powered Generation",
          description:
            "Convert your text prompts into high-quality images instantly.",
        },
        {
          icon: <ImageIcon />,
          title: "Bulk Creation",
          description:
            "Generate multiple images from a single prompt for diverse options.",
        },
        {
          icon: <Download />,
          title: "Easy Downloads",
          description:
            "Download your created images in various formats and sizes.",
        },
        {
          icon: <Share2 />,
          title: "Quick Sharing",
          description:
            "Share your generated images directly to social media or via link.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-xl border border-pink-200 hover:border-pink-400 transition-colors duration-300"
        >
          <div className="bg-pink-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">
            {item.title}
          </h3>
          <p className="text-gray-400 text-center">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
    <div className="flex items-center justify-around gap-10 mt-8">
      <div>
        <input
          type="text"
          value={prompt}
          readOnly
          className="w-[40rem] p-2 border border-gray-300 rounded-lg text-white bg-transparent"
        />
      </div>
      <motion.div
        key={imageUrl} 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
        className="mt-4"
      >
        <img
          src={imageUrl}
          alt={`Generated based on prompt: ${prompt}`}
          className="w-[40rem] h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  </>
);

export default Home;
