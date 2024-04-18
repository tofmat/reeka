"use client";
import React from "react";
import { motion } from "framer-motion";

const properties = [
  {
    title: "AirBnB",
    description:
      "Integration to these platformmakes it easy for your property to have more integrations  ",
  },
  {
    title: "Bookings.com",
    description:
      "Integration to these platformmakes it easy for your property to have more integrations  ",
  },
  {
    title: "Hotels.ng",
    description:
      "Integration to these platformmakes it easy for your property to have more integrations  ",
  },
  {
    title: "Apartments & Co",
    description:
      "Integration to these platformmakes it easy for your property to have more integrations  ",
  },
];
const PropertyManagement = () => {
  return (
    <div className="py-10 sm:py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-[#FAFAFA]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-7xl mx-auto items-center justify-between">
        <div className="w-full lg:w-[40%]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 1.2 }}
            className="[&_*]:mx-0 [&_*]:text-left [&_h3]:px-0 [&_h3]:max-w-lg [&_p]:px-0 text-white"
          >
            <motion.h2 className="w-fit mx-auto py-1 mb-4 text-center text-[#E36B37] rounded-full bg-[#FFEAE0]  bg-opacity-30">
              Integration Partners
            </motion.h2>
            <motion.h3 className="text-[#091B38] text-xl md:text-2xl mb-4 lg:text-3xl">
              Unified Property Management: Seamlessly Integrate with Airbnb,
              Booking.com, and More
            </motion.h3>
            <motion.p
              className={`w-fit max-w-[44rem] text-[#3A3A3A] mx-auto text-lg md:text-xl tracking-tight text-center`}
            >
              Experience interoperable property management by integrating all
              your tools into onesimple, efficient dashboard
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          className="flex md:justify-end lg:w-[55%]"
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {properties.map((property, idx) => (
              <PropertyCard property={property} key={idx} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyManagement;

const PropertyCard = ({
  property,
}: {
  property: { title: string; description: string };
}) => {
  return (
    <div className="border border-[#C9C9C9] bg-white shadow rounded-xl p-4">
      <div className="flex justify-end mb-2">
        <div className="bg-[#FAFAFA] rounded-2xl px-2">
          <p className="text-[#27AE60]">Connect</p>
        </div>
      </div>
      <p className="text-black text-base font-semibold">{property.title}</p>
      <p className="text-black text-sm font-light">{property.description}</p>
    </div>
  );
};
