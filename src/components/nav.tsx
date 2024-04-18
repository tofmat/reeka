"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/svg/logoWhite.svg";
import { useDisclosure } from "@chakra-ui/react";
import DemoModal from "./demo-modal";

const Navigation = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <nav className="w-full px-6 md:px-8 py-4 md:py-6 transition-[top] duration-500 bg-[#E36B37] relative z-50">
      <div className="flex justify-between md:max-w-7xl mx-auto">
        <Image src={Logo} alt="logo"></Image>
        <div className="flex items-center md:justify-center">
          <button
            onClick={onOpen}
            className="flex items-center gap-4 px-4 md:px-6 py-2 md:py-3 text-lg text-[#E36B37] font-semibold bg-white rounded-full"
          >
            <span>Book Demo</span>
          </button>
        </div>
      </div>

      <DemoModal isOpen={isOpen} onClose={onClose} />
    </nav>
  );
};

export default Navigation;
