// import Image from "next/image";

// interface whydata {
//     heading: string;
//     subheading: string;
// }

// const whydata: whydata[] = [
//     {
//         heading: "Quality",
//         subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
//     },
//     {
//         heading: "Communication",
//         subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
//     },
//     {
//         heading: "Reliability",
//         subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
//     }
// ]


// const Why = () => {
//     return (
//         <div id="about">

//             <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
//                 <div className='grid grid-cols-1 lg:grid-cols-2'>

//                     {/* COLUMN-1 */}
//                     <div className="lg:-ml-64">
//                         <Image src="/assets/why/iPad.png" alt="iPad-image" width={4000} height={900} />
//                     </div>

//                     {/* COLUMN-2 */}
//                     <div>
//                         <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">Why we best?</h3>
//                         <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">Dont waste time on search manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time.</h4>

//                         <div className="mt-10">
//                             {whydata.map((items, i) => (
//                                 <div className="flex mt-4" key={i}>
//                                     <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
//                                         <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
//                                     </div>
//                                     <div className="ml-5">
//                                         <h4 className="text-2xl font-semibold">{items.heading}</h4>
//                                         <h5 className="text-lg text-beach font-normal mt-2">{items.subheading}</h5>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Why;



"use client"
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Quality",
        subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
    },
    {
        heading: "Communication",
        subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
    },
    {
        heading: "Reliability",
        subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
    }
]

const Why = () => {
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

    const itemVariants: Variants = {
        hidden: { 
            x: 30, 
            opacity: 0 
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const checkVariants: Variants = {
        hidden: { scale: 0, rotate: -180 },
        visible: { 
            scale: 1, 
            rotate: 0,
            transition: { 
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };

    return (
        <motion.div 
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 - iPad with bubble animation */}
                    <motion.div 
                        className="lg:-ml-64"
                        initial={{ x: -100, opacity: 0, scale: 0.8 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{
                            y: [0, -15, 0],
                            x: [0, 8, -8, 0],
                            rotate: [0, 0.5, -0.5, 0]
                        }}
                        // FIXED: Single transition object with all properties
                        transition={{
                            // Entrance animation
                            opacity: { duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
                            scale: { duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
                            x: {
                                // Entrance first, then bubble animation
                                duration: 8,
                                repeat: Infinity,
                                ease: [0.45, 0.05, 0.55, 0.95],
                                delay: 1.5
                            },
                            y: {
                                duration: 6,
                                repeat: Infinity,
                                ease: [0.45, 0.05, 0.55, 0.95],
                                delay: 1
                            },
                            rotate: {
                                duration: 10,
                                repeat: Infinity,
                                ease: [0.45, 0.05, 0.55, 0.95],
                                delay: 2
                            }
                        }}
                        whileHover={{ 
                            scale: 1.02,
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <Image src="/assets/why/iPad.png" alt="iPad-image" width={4000} height={900} />
                    </motion.div>

                    {/* COLUMN-2 */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.h3 
                            className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Why we
                            </motion.span>{" "}
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                            >
                                best?
                            </motion.span>
                        </motion.h3>
                        
                        <motion.h4 
                            className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Dont waste time on search manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time.
                        </motion.h4>

                        <motion.div 
                            className="mt-10"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {whydata.map((items, i) => (
                                <motion.div 
                                    className="flex mt-4 group" 
                                    key={i}
                                    variants={itemVariants}
                                    animate={{
                                        x: [0, 3, -3, 0],
                                        y: [0, -5, 0]
                                    }}
                                    // FIXED: Single transition object
                                    transition={{
                                        // Entrance animation from variants
                                        duration: 0.6,
                                        ease: [0.25, 0.1, 0.25, 1],
                                        // Bubble animations
                                        x: {
                                            duration: 4 + (i * 0.5),
                                            repeat: Infinity,
                                            ease: [0.45, 0.05, 0.55, 0.95],
                                            delay: 1.5 + (i * 0.3)
                                        },
                                        y: {
                                            duration: 3 + (i * 0.4),
                                            repeat: Infinity,
                                            ease: [0.45, 0.05, 0.55, 0.95],
                                            delay: 2 + (i * 0.2)
                                        }
                                    }}
                                    whileHover={{ 
                                        x: 10,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.div 
                                        className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg group-hover:bg-blue-500 transition-colors duration-300"
                                        variants={checkVariants}
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        // FIXED: Single transition object
                                        transition={{
                                            // Spring entrance from variants
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            // Bubble animations
                                            scale: {
                                                duration: 2.5 + (i * 0.3),
                                                repeat: Infinity,
                                                ease: [0.45, 0.05, 0.55, 0.95],
                                                delay: 2.2 + (i * 0.1)
                                            },
                                            rotate: {
                                                duration: 6 + (i * 0.4),
                                                repeat: Infinity,
                                                ease: [0.45, 0.05, 0.55, 0.95],
                                                delay: 2.5 + (i * 0.15)
                                            }
                                        }}
                                        whileHover={{ 
                                            scale: 1.2,
                                            rotate: 15,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <motion.div
                                            animate={{
                                                rotate: [0, -3, 3, 0],
                                                scale: [1, 1.05, 1]
                                            }}
                                            transition={{
                                                rotate: {
                                                    duration: 3 + (i * 0.2),
                                                    repeat: Infinity,
                                                    ease: [0.45, 0.05, 0.55, 0.95],
                                                    delay: 3 + (i * 0.1)
                                                },
                                                scale: {
                                                    duration: 2 + (i * 0.3),
                                                    repeat: Infinity,
                                                    ease: [0.45, 0.05, 0.55, 0.95],
                                                    delay: 3.2 + (i * 0.1)
                                                }
                                            }}
                                            whileHover={{ 
                                                scale: 1.3,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                        </motion.div>
                                    </motion.div>
                                    
                                    <motion.div 
                                        className="ml-5"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        animate={{ y: [0, -2, 0] }}
                                        transition={{
                                            // Entrance
                                            opacity: { delay: 0.1 + i * 0.1, duration: 0.5 },
                                            x: { delay: 0.1 + i * 0.1, duration: 0.5 },
                                            // Floating
                                            y: {
                                                duration: 4 + (i * 0.3),
                                                repeat: Infinity,
                                                ease: [0.45, 0.05, 0.55, 0.95],
                                                delay: 2.8 + (i * 0.2)
                                            }
                                        }}
                                    >
                                        <motion.h4 
                                            className="text-2xl font-semibold group-hover:text-blue-600 transition-colors duration-300"
                                            whileHover={{ 
                                                scale: 1.05,
                                                x: 5,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            {items.heading}
                                        </motion.h4>
                                        
                                        <motion.h5 
                                            className="text-lg text-beach font-normal mt-2"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                                        >
                                            {items.subheading}
                                        </motion.h5>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}

export default Why;