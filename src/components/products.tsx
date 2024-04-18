"use client";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ArrowIcon from "@/assets/svg/arrowIcon";
import { productsList } from "@/utils/constants";
import { Image, useDisclosure } from "@chakra-ui/react";
import DemoModal from "./demo-modal";

const Products = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const [value, setValue] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div className="bg-[#FAFAFA]">
      <div className="hidden md:block py-8 md:py-16 lg:py-24 min-h-svh md:max-w-6xl md:mx-auto md:px-6 relative z-50 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 1.1 }}
          className="flex flex-col items-center justify-center [&_*]:mx-0 text-center [&_h3]:px-0 [&_p]:px-0"
        >
          <motion.h2 className="w-fit mx-auto px-4 py-1 mb-4 text-center text-[#E36B37] rounded-full bg-[#FFEAE0] bg-opacity-30">
            Features
          </motion.h2>
          <motion.h3 className="px-4 text-3xl md:text-4xl lg:text-5xl  mb-4 text-center uppercase font-semibold lg:leading-[75px]">
            What we offer
          </motion.h3>
          <motion.div className="flex items-center md:w-full md:justify-center">
            <motion.button
              className="flex items-center gap-4 px-6 py-4 text-lg text-white bg-black rounded-full"
              whileHover={{ scale: 1.1 }}
              onClick={onOpen}
            >
              <span>Book Demo</span>
              <ArrowIcon />
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col mt-8" ref={container}>
          {productsList.map((product, idx) => {
            const targetScale = 1 - (productsList.length - idx) * 0.1;
            return (
              <Card
                card={product}
                index={idx}
                key={idx}
                range={[idx * 0.33, 1]}
                targetScale={targetScale}
                progress={scrollYProgress}
                value={value}
                setValue={setValue}
                setTabIndex={setTabIndex}
              />
            );
          })}
        </motion.div>
      </div>

      <DemoModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Products;

const Card = ({
  card,
  index,
  range,
  targetScale,
  progress,
  setTabIndex,
}: {
  card: {
    imageSrc: string;
    mainCopy: string;
    feature: string;
    subText: string;
  };
  index: number;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
  setValue: any;
  value: any;
  setTabIndex: any;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // useEffect(() => {
  //   scrollYProgress.on("change", (e) => {
  //     if (scrollYProgress.current > 0.6) {
  //       setTabIndex(index);
  //     }
  //   });
  // }, []);
  return (
    <div
      className={`sticky top-[14%] md:top-[16%] lg:top-[18%] flex items-center justify-center`}
      ref={container}
    >
      <motion.div
        style={{
          //   backgroundColor: card.backgroundColor,
          scale,
          top: `calc(${index * 33}px)`,
        }}
        className={`bg-white border border-[#E36B37] shadow-lg shadow-[#e36b3755] relative grid grid-cols-1 origin-top md:grid-cols-2 h-[450px] items-center md:rounded-[2.5rem] gap-4 pl-6 md:pl-12 py-10 md:py-12 pr-6 md:pr-0`}
      >
        <div className="flex flex-col items-start justify-start text-black">
          <p className="w-fit py-1 mb-4 text-[#E36B37] rounded-full bg-[#FFEAE0] px-3">
            {card.feature}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6  text-left">
            {card.mainCopy}
          </h2>
          <p className="text-xl text-left">{card.subText}</p>
        </div>

        <div className="flex justify-end w-full">
          <Image
            src={card.imageSrc}
            h={"350px"}
            w="auto"
            alt="available product"
          />
        </div>
      </motion.div>
    </div>
  );
};
