// import Image from "next/image";



// const Banner = () => {
//     return (
//         <main>
//             <div className="px-6 lg:px-8">
//                 <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
//                     <div className="text-center">
//                         <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
//                             Solve problem with an <br /> integrated agency.
//                         </h1>
//                         <p className="mt-6 text-lg leading-8 text-bluegray">
//                             Ehya is the Instagram analytics platform teams use to stay focused on the goals, track <br /> engagement for report your business .
//                         </p>
//                     </div>


//                     <div className="text-center mt-5">
//                         <button type="button" className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
//                             See our portfolio
//                         </button>
//                         <button type="button" className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
//                             More info
//                         </button>
                        
//                     </div>

//                     <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} />
//                 </div>
//             </div>
//         </main>
//     )
// }

// export default Banner;


"use client"
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Banner = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const titleVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const buttonVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    return (
        <main>
            <div className="px-6 lg:px-8 mt-10">
                <motion.div 
                    className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="text-center">
                        <motion.h1 
                            className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96"
                            variants={titleVariants}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Solve problem with an
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text "
                            >
                                integrated agency.
                            </motion.span>
                        </motion.h1>
                        
                        <motion.p 
                            className="mt-6 text-lg leading-8 text-bluegray"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Ehya is the Instagram analytics platform teams use to stay focused on the goals, track <br /> engagement for report your business .
                        </motion.p>
                    </div>

                    <motion.div 
                        className="text-center mt-5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <motion.button 
                            type="button" 
                            className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            See our portfolio
                        </motion.button>
                        
                        <motion.button 
                            type="button" 
                            className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'
                            variants={buttonVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#3b82f6",
                                color: "#ffffff",
                                transition: { duration: 0.2 }
                            }}
                            whileTap="tap"
                        >
                            More info
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        whileHover={{ scale: 1.02 }}
                        className="mt-10"
                    >
                        <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} />
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}

export default Banner;