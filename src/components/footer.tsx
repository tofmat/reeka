"use client";
import React from "react";
import { motion } from "framer-motion";
import Framer from "@/assets/svg/framer.svg";
import Twitter from "@/assets/svg/twitter.svg";
import Instagram from "@/assets/svg/instagram.svg";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import DemoModal from "./demo-modal";
const Footer = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <React.Fragment>
      <div className="py-10 sm:py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-[#FAFAFA]">
        <div className="flex flex-col gap-4 md:gap-6 max-w-7xl mx-auto items-center p-6 rounded-3xl text-white justify-center bg-[#E36B37] min-h-56 md:min-h-64 lg:min-h-[380px]">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Book a Demo
          </p>
          <p className="text-lg md:text-xl text-center">
            All you need is an idea. We handle the rest.
          </p>
          <motion.div
            className="flex items-center md:w-full md:justify-center"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 1.1 }}
          >
            <motion.button
              className="flex items-center gap-4 px-6 py-3 text-lg text-black bg-white rounded-xl"
              whileHover={{ scale: 1.1 }}
              onClick={onOpen}
            >
              <span>Book Demo</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] pt-8">
        <div className="flex justify-between px-4 border-t-2 py-8 max-w-7xl mx-auto  border-[#000000c1]">
          <p>Copyright © 2024 Reeka </p>
          <div className="flex gap-2 items-center">
            <Image
              src={Twitter}
              width={25}
              height={25}
              alt="icon"
              className="cursor-pointer"
            />
            <Image
              src={Instagram}
              width={25}
              height={25}
              alt="icon"
              className="cursor-pointer"
            />
            <Image
              src={Framer}
              width={25}
              height={25}
              alt="icon"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <DemoModal isOpen={isOpen} onClose={onClose} />
    </React.Fragment>
  );
};

export default Footer;
