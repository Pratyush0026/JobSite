// import Image from "next/image";

// const Clientsay = () => {
//     return (
//         <div className="mx-auto max-w-2xl py-40 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
//             <div className="bg-image-what">
//                 <h3 className='text-navyblue text-center text-4xl lg:text-6xl font-semibold'>What say clients about us.</h3>
//                 <h4 className="text-lg font-normal text-darkgray text-center mt-4">Event madness gathering innoies,& tech enthusiasts in Speced. <br /> do more informations.</h4>

//                 <div className="lg:relative">
//                     <Image src={'/assets/clientsay/avatars.png'} alt="avatar-image" width={1061} height={733} className="hidden lg:block" />

//                     <span className="lg:absolute lg:bottom-40 lg:left-80">
//                         <Image src={'/assets/clientsay/user.png'} alt="user-image" width={168} height={168} className="mx-auto pt-10 lg:pb-10" />
//                         <div className="lg:inline-block bg-white rounded-2xl p-5 shadow-sm">
//                             <p className="text-base font-normal text-center text-darkgray">Build your financial literacy within a transparent <br /> community. Follow other investors, share people from <br /> different professional backgrounds, and never be alone.</p>
//                             <h3 className="text-2xl font-medium text-center py-2">Jony Scotty</h3>
//                             <h4 className="text-sm font-normal text-center">UI Designer</h4>
//                         </div>
//                     </span>

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Clientsay;


"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Clientsay = () => {
    return (
        <motion.div 
            className="mx-auto max-w-2xl py-40 px-4s sm:px-6 lg:max-w-7xl lg:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="bg-image-what">
                <motion.h3 
                    className='text-navyblue text-center text-4xl lg:text-6xl font-semibold'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    What say clients about us.
                </motion.h3>
                
                <motion.h4 
                    className="text-lg font-normal text-darkgray text-center mt-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Event madness gathering innoies,& tech enthusiasts in Speced. <br /> do more informations.
                </motion.h4>

                <div className="lg:relative">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <Image src={'/assets/clientsay/avatars.png'} alt="avatar-image" width={1061} height={733} className="hidden lg:block" />
                    </motion.div>

                    <motion.span 
                        className="lg:absolute lg:bottom-40 lg:left-80"
                        initial={{ scale: 0, rotate: -10 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.5 
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            <Image src={'/assets/clientsay/user.png'} alt="user-image" width={168} height={168} className="mx-auto pt-10 lg:pb-10" />
                        </motion.div>
                        
                        <motion.div 
                            className="lg:inline-block bg-white rounded-2xl p-5 shadow-sm"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <motion.p 
                                className="text-base font-normal text-center text-darkgray"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                Build your financial literacy within a transparent <br /> community. Follow other investors, share people from <br /> different professional backgrounds, and never be alone.
                            </motion.p>
                            
                            <motion.h3 
                                className="text-2xl font-medium text-center py-2"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.1, duration: 0.4 }}
                            >
                                Jony Scotty
                            </motion.h3>
                            
                            <motion.h4 
                                className="text-sm font-normal text-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.2, duration: 0.4 }}
                            >
                                UI Designer
                            </motion.h4>
                        </motion.div>
                    </motion.span>

                </div>

            </div>
        </motion.div>
    )
}

export default Clientsay;