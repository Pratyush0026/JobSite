// import Image from "next/image";

// interface datatype {
//     imgSrc: string;
//     country: string;
//     paragraph: string;
// }

// const Aboutdata: datatype[] = [
//     {
//         imgSrc: "/assets/network/bangladesh.svg",
//         country: "Bangladesh",
//         paragraph: 'Event madness gathering innoies, & tech enthusiasts in Speced.',

//     },
//     {
//         imgSrc: "/assets/network/america.svg",
//         country: "United States",
//         paragraph: 'Event madness gathering innoies, & tech enthusiasts in Speced.',

//     },
//     {
//         imgSrc: "/assets/network/australia.svg",
//         country: "Australia",
//         paragraph: 'Event madness gathering innoies, & tech enthusiasts in Speced.',

//     },
//     {
//         imgSrc: "/assets/network/china.svg",
//         country: "China",
//         paragraph: 'Event madness gathering innoies, & tech enthusiasts in Speced.',

//     },
// ]

// const Network = () => {
//     return (
//         <div className="bg-babyblue" id="project">
//             <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//                 <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81">Our network & world <br /> work details.</h3>

//                 <Image src={'/assets/network/map.png'} alt={"map-image"} width={1400} height={800} />

//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8'>
//                     {Aboutdata.map((item, i) => (
//                         <div key={i} className='bg-white rounded-2xl p-5 shadow-xl'>
//                             <div className="flex justify-start items-center gap-2">
//                                 <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
//                                 <h4 className="text-xl font-medium text-midnightblue">{item.country}</h4>
//                             </div>
//                             <hr />
//                             <h4 className='text-lg font-normal text-bluegrey my-2'>{item.paragraph}</h4>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Network;




// "use client"
// import Image from "next/image";
// import { motion, Variants } from "framer-motion";

// interface datatype {
//     imgSrc: string;
//     country: string;
//     paragraph: string;
// }

// const Aboutdata: datatype[] = [
//     {
//         imgSrc: "/assets/network/bangladesh.svg",
//         country: "Bangladesh",
//         paragraph: 'Event madness gathering innoies, & tech enthusiasts in Speced.',
//     },
//     {
//         imgSrc: "/assets/network/america.svg",
//         country: "United States",
//         paragraph: 'Event madness gathering innoies, & tech enthusiasts in Speced.',
//     },
//     {
//         imgSrc: "/assets/network/australia.svg",
//         country: "Australia",
//         paragraph: 'Event madness gathering innoies, & tech enthusiasts in Speced.',
//     },
//     {
//         imgSrc: "/assets/network/china.svg",
//         country: "China",
//         paragraph: 'Event madness gathering innoies, & tech enthusiasts in Speced.',
//     },
// ]

// const Network = () => {
//     const containerVariants: Variants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2,
//                 delayChildren: 0.1
//             }
//         }
//     };

//     const cardVariants: Variants = {
//         hidden: { 
//             y: 60, 
//             opacity: 0,
//             scale: 0.8
//         },
//         visible: {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 type: "spring",
//                 stiffness: 260,
//                 damping: 20,
//                 duration: 0.6
//             }
//         }
//     };

//     return (
//         <motion.div 
//             className="bg-babyblue" 
//             id="project"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//         >
//             <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//                 <motion.h3 
//                     className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81"
//                     initial={{ y: 50, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
//                 >
//                     <motion.span
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2, duration: 0.6 }}
//                     >
//                         Our network & world
//                     </motion.span>
//                     <br />
//                     <motion.span
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.4, duration: 0.6 }}
//                         className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
//                     >
//                         work details.
//                     </motion.span>
//                 </motion.h3>

//                 <motion.div
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1, delay: 0.3 }}
//                     whileHover={{ scale: 1.02 }}
//                     className="flex justify-center"
//                 >
//                     <Image src={'/assets/network/map.png'} alt={"map-image"} width={1400} height={800} />
//                 </motion.div>

//                 <motion.div 
//                     className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8'
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                 >
//                     {Aboutdata.map((item, i) => (
//                         <motion.div 
//                             key={i} 
//                             className='bg-white rounded-2xl p-5 shadow-xl group'
//                             variants={cardVariants}
//                             whileHover={{ 
//                                 y: -10,
//                                 scale: 1.05,
//                                 boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
//                                 transition: { duration: 0.3 }
//                             }}
//                             whileTap={{ scale: 0.98 }}
//                         >
//                             <motion.div 
//                                 className="flex justify-start items-center gap-2"
//                                 initial={{ x: -10, opacity: 0 }}
//                                 whileInView={{ x: 0, opacity: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
//                             >
//                                 <motion.div
//                                     whileHover={{ 
//                                         scale: 1.1, 
//                                         rotate: 5,
//                                         transition: { duration: 0.2 }
//                                     }}
//                                 >
//                                     <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
//                                 </motion.div>
//                                 <motion.h4 
//                                     className="text-xl font-medium text-midnightblue group-hover:text-blue-600 transition-colors duration-300"
//                                     whileHover={{ scale: 1.05 }}
//                                 >
//                                     {item.country}
//                                 </motion.h4>
//                             </motion.div>
                            
//                             <motion.hr 
//                                 initial={{ width: 0 }}
//                                 whileInView={{ width: "100%" }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
//                             />
                            
//                             <motion.h4 
//                                 className='text-lg font-normal text-bluegrey my-2'
//                                 initial={{ opacity: 0, y: 10 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
//                             >
//                                 {item.paragraph}
//                             </motion.h4>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </motion.div>
//     )
// }

// export default Network;


"use client"
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/network/bangladesh.svg",
        country: "Bengaluru",
        paragraph: 'Tech hub with 15,000+ job openings in IT, startups, and multinational companies.',
    },
    {
        imgSrc: "/assets/network/america.svg",
        country: "Chennai",
        paragraph: 'Manufacturing and automotive center with opportunities in engineering and services.',
    },
    {
        imgSrc: "/assets/network/australia.svg",
        country: "Pune",
        paragraph: 'Growing IT and education hub offering diverse career opportunities for professionals.',
    },
    {
        imgSrc: "/assets/network/china.svg",
        country: "Mumbai",
        paragraph: 'Financial capital with opportunities in finance, entertainment, and business services.',
    },
]

const Network = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { 
            y: 60, 
            opacity: 0,
            scale: 0.8
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.6
            }
        }
    };

    return (
        <motion.div 
            className="bg-babyblue" 
            id="project"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <motion.h3 
                    className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.span
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2, duration: 0.6 }}
>
    Find Jobs In India&apos;s
</motion.span>
                    <br />
                    <motion.span
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-navyblue"
                    >
                        Top Cities
                    </motion.span>
                </motion.h3>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex justify-center"
                >
                    <Image src={'/assets/network/map.png'} alt={"india-map-image"} width={1400} height={800} />
                </motion.div>

                <motion.div 
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {Aboutdata.map((item, i) => (
                        <motion.div 
                            key={i} 
                            className='bg-white rounded-2xl p-5 shadow-xl group cursor-pointer'
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10,
                                scale: 1.05,
                                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                                transition: { duration: 0.3 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.div 
                                className="flex justify-start items-center gap-2"
                                initial={{ x: -10, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                            >
                                <motion.div
                                    whileHover={{ 
                                        scale: 1.1, 
                                        rotate: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <Image src={item.imgSrc} alt={`${item.country}-icon`} width={55} height={55} className="mb-2" />
                                </motion.div>
                                <motion.h4 
                                    className="text-xl font-medium text-midnightblue group-hover:text-blue-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {item.country}
                                </motion.h4>
                            </motion.div>
                            
                            <motion.hr 
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                                className="border-gray-200"
                            />
                            
                            <motion.h4 
                                className='text-lg font-normal text-bluegrey my-2'
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            >
                                {item.paragraph}
                            </motion.h4>
                            
                            {/* Job Count Badge */}
                            <motion.div 
                                className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                            >
                                <motion.span 
                                    className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {i === 0 ? '15K+ Jobs' : i === 1 ? '8K+ Jobs' : i === 2 ? '12K+ Jobs' : '20K+ Jobs'}
                                </motion.span>
                                <motion.button 
                                    className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Explore →
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Cities Section */}
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <motion.h4 
                        className="text-2xl font-semibold text-midnightblue mb-6"
                        whileHover={{ scale: 1.02 }}
                    >
                        More Cities Available
                    </motion.h4>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {['Delhi', 'Hyderabad', 'Kolkata', 'Amritsar', 'Bhadohi', 'Ahmedabad', 'Jaipur', 'Lucknow'].map((city, index) => (
                            <motion.span 
                                key={city}
                                className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { 
                                        opacity: 1, 
                                        scale: 1,
                                        transition: { delay: index * 0.1 }
                                    }
                                }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    backgroundColor: "#3b82f6",
                                    color: "#ffffff",
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {city}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Network;