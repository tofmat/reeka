import { productsList } from "@/utils/constants";
import { motion } from "framer-motion";
import ArrowIcon from "@/assets/svg/arrowIcon";
import DemoModal from "./demo-modal";
import { useDisclosure } from "@chakra-ui/react";

const ProductsMobile = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div className="block md:hidden pt-8 px-2">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 1.1 }}
        className="flex flex-col items-center justify-center [&_*]:mx-0 text-center [&_h3]:px-0 [&_p]:px-0"
      >
        <motion.h2 className="w-fit mx-auto px-4 py-1 mb-4 text-center text-[#E36B37] rounded-full bg-[#FFEAE0] bg-opacity-30">
          Property Management
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
      <motion.div className="flex flex-col gap-4 mt-8">
        {productsList.map((product, idx) => {
          return <Card card={product} key={idx} />;
        })}
      </motion.div>

      <DemoModal isOpen={isOpen} onClose={onClose} />
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
