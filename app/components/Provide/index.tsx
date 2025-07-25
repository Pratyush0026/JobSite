"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/provide/marketing.svg",
    country: "House Keeping",
    paragraph:
      "Find cleaning and maintenance jobs across hotels, offices, and residential areas",
  },
  {
    imgSrc: "/assets/provide/graphic.svg",
    country: "Technician Jobs",
    paragraph:
      "Technical positions in electrical, mechanical, and IT support roles",
  },
  {
    imgSrc: "/assets/provide/heaking.svg",
    country: "Delivery Partners",
    paragraph: "Flexible delivery jobs with leading food and grocery platforms",
  },
  {
    imgSrc: "/assets/provide/uidesign.svg",
    country: "Driver Positions",
    paragraph:
      "Professional driving opportunities with top transportation companies",
  },
];

const Provide = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <motion.div
            className="col-span-6 flex justify-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col align-middle justify-center p-10">
              <motion.p
                className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Find Jobs in Most
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-navyblue"
                >
                  Demand Categories
                </motion.span>
              </motion.p>

              <motion.h4
                className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Discover thousands of job opportunities across India&apos;s
                fastest-growing sectors. From entry-level positions to skilled
                roles, we connect you with trusted employers offering
                competitive salaries and growth opportunities in your preferred
                location.
              </motion.h4>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link
                  href={""}
                  className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links group "
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Browse All Jobs
                  </motion.span>
                  <motion.div
                    whileHover={{ x: 5, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    <Image
                      src={"/assets/provide/arrow.svg"}
                      alt={"arrow"}
                      width={20}
                      height={20}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <motion.div
            className="col-span-6 lg:col-span-5"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Aboutdata.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl group"
                  variants={cardVariants}
                  // Beautiful bubble floating animation
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, -5, 0],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: [0.45, 0.05, 0.55, 0.95],
                      delay: 1 + i * 0.3,
                    },
                    x: {
                      duration: 5 + i * 0.4,
                      repeat: Infinity,
                      ease: [0.45, 0.05, 0.55, 0.95],
                      delay: 1.2 + i * 0.2,
                    },
                    rotate: {
                      duration: 8 + i * 0.3,
                      repeat: Infinity,
                      ease: [0.45, 0.05, 0.55, 0.95],
                      delay: 1.5 + i * 0.1,
                    },
                  }}
                  whileHover={{
                    y: -15,
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    // Icon bubble animation
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 3 + i * 0.2,
                        repeat: Infinity,
                        ease: [0.45, 0.05, 0.55, 0.95],
                        delay: 2 + i * 0.1,
                      },
                      scale: {
                        duration: 2.5 + i * 0.3,
                        repeat: Infinity,
                        ease: [0.45, 0.05, 0.55, 0.95],
                        delay: 2.2 + i * 0.15,
                      },
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Image
                      src={item.imgSrc}
                      alt={item.imgSrc}
                      width={64}
                      height={64}
                      className="mb-5"
                    />
                  </motion.div>

                  <motion.h4
                    className="text-2xl font-semibold group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  >
                    {item.country}
                  </motion.h4>

                  <motion.h4
                    className="text-lg font-normal text-bluegray my-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  >
                    {item.paragraph}
                  </motion.h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Provide;
