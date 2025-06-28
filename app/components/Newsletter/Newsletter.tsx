

"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Newsletter = () => {
    return (
        <motion.div 
            className='-mt-32 relative z-3'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <motion.div 
                className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl overflow-hidden"
                whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                    transition: { duration: 0.3 }
                }}
            >
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <motion.div 
                        className='hidden lg:block'
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className='float-right pt-20 relative'>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image src={'/assets/newsletter/bgImage.png'} alt="bgimg" width={588} height={334} />
                            </motion.div>
                            
                            <motion.div 
                                className="absolute top-10 right-0"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: 0.5 
                                }}
                                animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    transition: { 
                                        duration: 4, 
                                        repeat: Infinity, 
                                        ease: [0.42, 0, 0.58, 1]
                                    }
                                }}
                            >
                                <Image src={'/assets/newsletter/leaf.svg'} alt="leafimg" width={81} height={81}/>
                            </motion.div>
                            
                            <motion.div 
                                className="absolute bottom-8 left-2"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15,
                                    delay: 0.7 
                                }}
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    transition: { 
                                        duration: 2, 
                                        repeat: Infinity, 
                                        ease: [0.42, 0, 0.58, 1]
                                    }
                                }}
                            >
                                <Image src={'/assets/newsletter/circel.svg'} alt="circleimg" width={30} height={30}/>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* COLUMN-2 */}
                    <motion.div 
                        className="p-10 flex flex-col justify-center"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h3 
                            className="text-4xl md:text-5xl font-semibold mb-3 text-white"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Get daily job alerts.
                        </motion.h3>
                        
                        <motion.h4 
                            className="text-base font-normal mb-7 text-offwhite"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Join 70 Lakh+ active job seekers across India. Get instant notifications for jobs matching your skills from top companies and never miss your dream opportunity.
                        </motion.h4>
                        
                        <motion.div 
                            className="flex gap-0"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <motion.input 
                                type="email" 
                                name="q" 
                                className="py-4 text-sm w-full text-black bg-white rounded-l-lg pl-4" 
                                placeholder="Enter your email for job alerts" 
                                autoComplete="off"
                                whileFocus={{ 
                                    scale: 1.02,
                                    boxShadow: "0 0 0 3px rgba(255,255,255,0.3)",
                                    transition: { duration: 0.2 }
                                }}
                            />
                            <motion.button 
                                className="bg-midblue text-white font-medium py-2 px-4 rounded-r-lg"
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "#1e40af",
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    whileHover={{ 
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <Image src={'/assets/newsletter/plane.svg'} alt="plane-img" width={20} height={20} />
                                </motion.div>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>
        </motion.div>
    )
}

export default Newsletter;