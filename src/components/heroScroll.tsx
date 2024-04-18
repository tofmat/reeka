"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./container-scroll";
import HeroImg from "@/assets/images/dashboard.png";
import { motion } from "framer-motion";
import ArrowIcon from "@/assets/svg/arrowIcon";
export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden bg-[#E36B37]">
      <ContainerScroll
        titleComponent={
          <>
            <motion.div className="flex flex-col items-center justify-center [&_*]:mx-0 text-center [&_h3]:px-0 [&_p]:px-0 text-white">
              <motion.h2
                className="w-fit mx-auto px-4 py-1 mb-4 text-center rounded-full bg-[#fff]  bg-opacity-30"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ duration: 1 }}
              >
                Property Management
              </motion.h2>
              <motion.h3
                className="px-4 text-4xl md:text-5xl mb-4 lg:text-6xl text-center uppercase font-semibold lg:leading-[75px]"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 1.1 }}
              >
                Rental Management That Elevates Your Business
              </motion.h3>
              <motion.p
                className={`w-fit max-w-[44rem] mx-auto px-4 text-lg md:text-xl tracking-tight text-center`}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 1.2 }}
              >
                Automate, Optimize, and Grow Your Kenyan <br /> Short Term
                Rental Operations with Ease
              </motion.p>

              <motion.div
                className="flex items-center md:w-full md:justify-center"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 1.3 }}
              >
                <motion.button
                  className="flex items-center gap-4 px-6 py-4 mt-10 text-lg text-white bg-black rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <span>Book Demo</span>
                  <ArrowIcon />
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        }
      >
        <Image
          src={HeroImg}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
