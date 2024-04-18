import { productsList } from "@/utils/constants";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const ProductsMobile = () => {
  return (
    <div className="block md:hidden pt-8 px-2">
      <motion.div className="flex flex-col gap-4">
        {productsList.map((product, idx) => {
          return <Card card={product} key={idx} />;
        })}
      </motion.div>
    </div>
  );
};

export default ProductsMobile;

const Card = ({
  card,
}: {
  card: {
    imageSrc: string;
    mainCopy: string;
    feature: string;
    subText: string;
  };
}) => {
  return (
    <div
      className={`bg-white border border-[#E36B37] shadow-lg shadow-[#e36b3755] grid grid-cols-1 md:grid-cols-2 items-center rounded-xl gap-4 px-4 sm:px-6 py-8`}
    >
      <div className="flex flex-col items-start justify-center text-black md:justify-start">
        <p className="px-4 py-1 text-[#E36B37] mb-6 md:text-center rounded-full bg-[#FFEAE0]">
          {card.feature}
        </p>
        <h2 className="mb-3 text-2xl text-left">{card.mainCopy}</h2>
        <p className="text-lg text-left">{card.subText}</p>
      </div>
    </div>
  );
};
