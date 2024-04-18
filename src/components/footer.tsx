"use client";
import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="py-10 sm:py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-[#FAFAFA]">
      <div className="flex flex-col gap-4 md:gap-6 max-w-7xl mx-auto items-center p-6 rounded-3xl text-white justify-center bg-[#E36B37] min-h-56 md:min-h-64 lg:min-h-[380px]">
        <p className="text-3xl md:text-4xl lg:text-5xl">Book a Demo</p>
        <p className="text-xl md:text-2xl text-center">
          All you need is an idea. We handle the rest.
        </p>
        <motion.div
          className="flex items-center md:w-full md:justify-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1.1 }}
        >
          <motion.button
            className="flex items-center gap-4 px-6 py-4 text-lg text-black bg-white rounded-xl"
            whileHover={{ scale: 1.1 }}
          >
            <span>Book Demo</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
