"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button"; // Import the Button from Shadcn
import { useEffect, useState } from "react";
import {
  AlignRight,
  Loader,
  LogIn,
  LogOut,
  Sparkles,
  X,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import icon from "../app/icon/icon1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") {
      setIsLoading(true); // Show loading state while fetching session
    } else {
      setIsLoading(false); // Stop showing loading state when session data is available
    }
  }, [status]);

  

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <header className="mt-20 lg:mt-24 fixed w-full lg:w-[50rem] bg-white m-4 bg-opacity-10 backdrop-blur-lg shadow-lg z-50 rounded-full">
          <div className="container px-4 py-1 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold flex items-center"
            >
              <div className="flex items-center justify-center gap-1">
                <Image
                  className="w-10 h-10"
                  src={icon}
                  alt="icon"
                  style={{ filter: "brightness(100) invert(1)" }}
                />
                <span className="flex items-center gap-2">
                  Photext AI
                  <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 text-white font-bold text-base sm:text-lg hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 rounded-full">
                    <Sparkles />
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Desktop view */}
            <div className="hidden md:flex space-x-4 items-center">
              {session?.user?.image && (
                <Image
                  width={30}
                  height={30}
                  className="rounded-full"
                  src={session.user.image}
                  alt="user-icon"
                />
              )}

              {session ? (
                <Button
                  className="rounded-full w-12"
                  onClick={() => signOut()}
                  variant="destructive"
                >
                  <LogOut />
                </Button>
              ) : (
                <Button
                  className="flex items-center gap-2 w-12 rounded-full"
                  onClick={() => signIn("google")}
                  variant="outline"
                >
                  {isLoading ? (
                    <Loader className="animate-spin" />
                  ) : (
                    <LogIn className="animate-pulse" />
                  )}
                </Button>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg p-4 md:hidden z-40"
          >
            <nav className="flex flex-col space-y-4">
              {/* Add your navigation links here */}
            </nav>
            <div className="mt-4 space-y-2">
              <Button className="w-full" variant="outline">
                {isLoading ? <Loader className="animate-spin" /> : "Login"}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
