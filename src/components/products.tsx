"use client";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/assets/svg/arrowIcon";
import { productsList } from "@/utils/constants";

const Products = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const [value, setValue] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="bg-[#FAFAFA]">
      <div className="hidden md:block pt-16 md:pt-20 lg:pt-32 min-h-svh md:max-w-6xl md:mx-auto md:px-6 relative z-50 ">
        <motion.div className="flex flex-col" ref={container}>
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
          top: `calc(-10vh + ${index * 33}px)`,
        }}
        className={`bg-white border border-[#E36B37] shadow-lg shadow-[#e36b3755] relative grid grid-cols-1 -top-[25%] origin-top md:grid-cols-2 h-[450px] items-center md:rounded-[2.5rem] gap-4 pl-6 md:pl-12 py-10 md:py-12 pr-6 md:pr-0`}
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

        <Image
          src={card.imageSrc}
          alt="available product"
          width={500}
          height={300}
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
};
