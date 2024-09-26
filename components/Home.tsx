"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, Wand2, Download, Share2, Menu, X, Sparkles } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDF4E3] to-pink-300 text-gray-800">
      <header className="fixed w-full bg-white bg-opacity-10 backdrop-blur-lg shadow-lg z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold flex items-center"
          >
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-4xl font-bold">Photext</h1>
            </div>
          </motion.div>
          <nav className="hidden md:flex space-x-4">
            <NavLink href="#" text="Home" />
            <NavLink href="#" text="Features" />
            <NavLink href="#" text="Pricing" />
            <NavLink href="#" text="Contact" />
          </nav>
          <div className="hidden md:flex space-x-2">
            <Button text="Login" variant="outline" />
            <Button text="Sign Up" variant="solid" />
          </div>
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg p-4 md:hidden z-40"
          >
            <nav className="flex flex-col space-y-4">
              <NavLink href="#" text="Home" />
              <NavLink href="#" text="Features" />
              <NavLink href="#" text="Pricing" />
              <NavLink href="#" text="Contact" />
            </nav>
            <div className="mt-4 space-y-2">
              <Button text="Login" variant="outline" fullWidth />
              <Button text="Sign Up" variant="solid" fullWidth />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-14 pb-8">
        <div className="container mx-auto px-4">
          <Hero />
          <Features />
          <CTA />
        </div>
      </main>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => (
  <a href={href} className="hover:text-pink-600 transition">{text}</a>
);

interface ButtonProps {
  text: string;
  variant: 'outline' | 'solid';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, variant, fullWidth = false }) => (
  <button 
    className={`px-6 py-3 rounded-lg font-semibold transition duration-300 text-lg ${
      variant === 'outline' 
        ? 'bg-transparent border-[1px] border-pink-500 text-pink-500 hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 hover:text-white' 
        : 'bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 text-white hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500'
    } ${fullWidth ? 'w-full' : ''}`}
  >
    {text}
  </button>
);

const Hero = () => {
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const iconVariants = {
    rest: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto my-8 sm:my-12 md:my-16 lg:my-20"
    >
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
        Transform Your Words into
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
          Stunning AI-Generated Images
        </span>
      </h2>
      
      <motion.button
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 text-white font-bold text-base sm:text-lg hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 transition duration-300 shadow-lg relative inline-flex items-center"
      >
        <span>Start Creating</span>
        <motion.div
          key="sparkle-icon"
          variants={iconVariants}
          initial="rest"
          animate="animate"
          className="ml-2"
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

const Features = () => (
  <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    {[
      { icon: <Wand2 />, title: "AI-Powered Generation", description: "Convert your text prompts into high-quality images instantly." },
      { icon: <ImageIcon />, title: "Bulk Creation", description: "Generate multiple images from a single prompt for diverse options." },
      { icon: <Download />, title: "Easy Downloads", description: "Download your created images in various formats and sizes." },
      { icon: <Share2 />, title: "Quick Sharing", description: "Share your generated images directly to social media or via link." }
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-xl border border-pink-200 hover:border-pink-400 transition-colors duration-300"
      >
        <div className="bg-pink-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
          {item.icon /* Render the icon here */}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
        <p className="text-gray-700 text-center">{item.description}</p>
      </motion.div>
    ))}
  </motion.div>
);

const CTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="mt-16 text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Bring Your Words to Life?</h2>
    <p className="text-xl text-gray-700 mb-8">Join our community of creators and start your Photext journey today!</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 text-white font-bold text-lg hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 transition duration-300 shadow-lg"
    >
      Get Started
    </motion.button>
  </motion.div>
);
