"use client";
import React from "react";
import { motion } from "framer-motion";
import { productsList } from "@/utils/constants";
import { Image } from "@chakra-ui/react";
const ProductOld = () => {
  return (
    <div className="py-10 md:py-8 lg:py-12 max-w-7xl mx-auto px-4 sm:px-8 md:px-14 lg:px-16">
      <motion.div
        className={`grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:justify-between md:gap-12`}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="flex flex-col items-start justify-start text-black">
          <p className="w-fit py-1 mb-4 text-[#E36B37] rounded-full bg-[#FFEAE0] px-3">
            {productsList[0].feature}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6  text-left">
            {productsList[0].mainCopy}
          </h2>
          <p className="text-xl text-left">{productsList[0].subText}</p>
        </div>

        <Image
          src={productsList[0].imageSrc}
          alt="available product"
          className="w-full h-full"
        />
      </motion.div>

      <motion.div
        className={`grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:justify-between md:gap-12 my:8 md:my-16 lg:my-24`}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={productsList[1].imageSrc}
          alt="available product"
          className="w-full h-full"
        />

        <div className="flex flex-col items-start justify-start text-black">
          <p className="w-fit py-1 mb-4 text-[#E36B37] rounded-full bg-[#FFEAE0] px-3">
            {productsList[1].feature}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6  text-left">
            {productsList[1].mainCopy}
          </h2>
          <p className="text-xl text-left">{productsList[0].subText}</p>
        </div>
      </motion.div>

      <motion.div
        className={`grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:justify-between md:gap-12`}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="flex flex-col items-start justify-start text-black">
          <p className="w-fit py-1 mb-4 text-[#E36B37] rounded-full bg-[#FFEAE0] px-3">
            {productsList[2].feature}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6  text-left">
            {productsList[2].mainCopy}
          </h2>
          <p className="text-xl text-left">{productsList[0].subText}</p>
        </div>

        <Image
          src={productsList[2].imageSrc}
          alt="available product"
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default ProductOld;
