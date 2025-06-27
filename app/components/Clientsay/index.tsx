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


// "use client"
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Clientsay = () => {
//     return (
//         <motion.div 
//             className="mx-auto max-w-2xl py-40 px-4s sm:px-6 lg:max-w-7xl lg:px-8"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//         >
//             <div className="bg-image-what">
//                 <motion.h3 
//                     className='text-navyblue text-center text-4xl lg:text-6xl font-semibold'
//                     initial={{ y: 50, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
//                 >
//                     What say clients about us.
//                 </motion.h3>
                
//                 <motion.h4 
//                     className="text-lg font-normal text-darkgray text-center mt-4"
//                     initial={{ y: 30, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                 >
//                     Event madness gathering innoies,& tech enthusiasts in Speced. <br /> do more informations.
//                 </motion.h4>

//                 <div className="lg:relative">
//                     <motion.div
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         whileInView={{ scale: 1, opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1, delay: 0.3 }}
//                     >
//                         <Image src={'/assets/clientsay/avatars.png'} alt="avatar-image" width={1061} height={733} className="hidden lg:block" />
//                     </motion.div>

//                     <motion.span 
//                         className="lg:absolute lg:bottom-40 lg:left-80"
//                         initial={{ scale: 0, rotate: -10 }}
//                         whileInView={{ scale: 1, rotate: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ 
//                             type: "spring",
//                             stiffness: 260,
//                             damping: 20,
//                             delay: 0.5 
//                         }}
//                         whileHover={{ 
//                             scale: 1.05,
//                             boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
//                             transition: { duration: 0.3 }
//                         }}
//                     >
//                         <motion.div
//                             initial={{ y: 20, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: 0.7, duration: 0.6 }}
//                         >
//                             <Image src={'/assets/clientsay/user.png'} alt="user-image" width={168} height={168} className="mx-auto pt-10 lg:pb-10" />
//                         </motion.div>
                        
//                         <motion.div 
//                             className="lg:inline-block bg-white rounded-2xl p-5 shadow-sm"
//                             initial={{ y: 30, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: 0.8, duration: 0.6 }}
//                         >
//                             <motion.p 
//                                 className="text-base font-normal text-center text-darkgray"
//                                 initial={{ opacity: 0 }}
//                                 whileInView={{ opacity: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: 1, duration: 0.5 }}
//                             >
//                                 Build your financial literacy within a transparent <br /> community. Follow other investors, share people from <br /> different professional backgrounds, and never be alone.
//                             </motion.p>
                            
//                             <motion.h3 
//                                 className="text-2xl font-medium text-center py-2"
//                                 initial={{ opacity: 0, y: 10 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: 1.1, duration: 0.4 }}
//                             >
//                                 Jony Scotty
//                             </motion.h3>
                            
//                             <motion.h4 
//                                 className="text-sm font-normal text-center"
//                                 initial={{ opacity: 0, y: 10 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: 1.2, duration: 0.4 }}
//                             >
//                                 UI Designer
//                             </motion.h4>
//                         </motion.div>
//                     </motion.span>

//                 </div>

//             </div>
//         </motion.div>
//     )
// }

// export default Clientsay;

"use client"
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Clientsay = () => {
    const testimonials = [
        {
            id: 1,
            image: '/assets/clientsay/user1.jpg',
            name: 'Shivakumar',
            role: 'HR Specialist',
            location: 'Bengaluru',
            text: "I was trying to search for a job for a very long time but was failing. My friend introduced me to this platform. I downloaded and explored the app. In just a week I found my dream job with great salary. Thank you!"
        },
        {
            id: 2,
            image: '/assets/clientsay/user2.jpg',
            name: 'Shakina',
            role: 'Delivery Partner',
            location: 'Hyderabad',
            text: "Mera naam shakina hain mujhe Hamara Jobs ke dwara receptionist ka job mila. Maine aur bhi jagah kai kiya maagar interview ka pass nahi hua. Social media mein Hamara Jobs ke baare mein suna aur skills Lena shuru kiya aur mujhe job bhi mil gaya. Dhanyawaad!"
        },
        {
            id: 3,
            image: '/assets/clientsay/user3.jpg',
            name: 'Kamesh Kumar',
            role: 'Software Engineer',
            location: 'Mumbai',
            text: "Helpful app, you will find everything which is related to your interest towards particular job profile for which you are looking for job. Great experience using this platform for career growth."
        },
        {
            id: 4,
            image: '/assets/clientsay/user4.jpg',
            name: 'Priya Sharma',
            role: 'House Keeping',
            location: 'Delhi',
            text: "Found my cleaning job through this app within 2 days. The process was very simple and the employer was genuine. Now I'm earning good money and supporting my family. Highly recommended for housekeeping jobs!"
        },
        {
            id: 5,
            image: '/assets/clientsay/user5.jpg',
            name: 'Rajesh Singh',
            role: 'Driver',
            location: 'Pune',
            text: "As a professional driver, I was looking for a reliable company. This platform connected me with a top logistics firm. The verification process gave me confidence. Great platform for driver jobs!"
        }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isRotating, setIsRotating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsRotating(true);
            setTimeout(() => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                setIsRotating(false);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const currentData = testimonials[currentTestimonial];

    return (
        <motion.div 
            className="mx-auto max-w-2xl py-40 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
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
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        What Candidates
                    </motion.span>{" "}
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-navyblue"
                    >
                        Say
                    </motion.span>
                </motion.h3>
                
                <motion.h4 
                    className="text-lg font-normal text-darkgray text-center mt-4 max-w-3xl mx-auto"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Real success stories from job seekers who found their dream careers through our platform. <br /> Join thousands of satisfied candidates across India.
                </motion.h4>

                <div className="lg:relative">
                    {/* Rotating Avatar Circle */}
                    <motion.div 
                        className="relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <Image src={'/assets/clientsay/avatars.png'} alt="avatar-circle" width={1061} height={733} className="hidden lg:block" />
                        
                        {/* Rotating indicators around the circle */}
                        <motion.div
                            className="absolute inset-0 hidden lg:block"
                            animate={{ rotate: isRotating ? 360 : 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            {testimonials.map((_, index) => {
                                const angle = (index * 72) - 90; // 360/5 = 72 degrees apart
                                const radius = 200;
                                const x = Math.cos(angle * Math.PI / 180) * radius;
                                const y = Math.sin(angle * Math.PI / 180) * radius;
                                
                                return (
                                    <motion.div
                                        key={index}
                                        className="absolute w-4 h-4 rounded-full cursor-pointer"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                            backgroundColor: index === currentTestimonial ? '#3b82f6' : '#e5e7eb'
                                        }}
                                        whileHover={{ scale: 1.2 }}
                                        onClick={() => setCurrentTestimonial(index)}
                                        animate={{
                                            scale: index === currentTestimonial ? 1.2 : 1,
                                            backgroundColor: index === currentTestimonial ? '#3b82f6' : '#e5e7eb'
                                        }}
                                    />
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Dynamic Testimonial Card - Made Smaller */}
                    <motion.span 
                        className="lg:absolute lg:bottom-32 lg:left-96"
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
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentData.id}
                                initial={{ y: 20, opacity: 0, rotateY: 90 }}
                                animate={{ y: 0, opacity: 1, rotateY: 0 }}
                                exit={{ y: -20, opacity: 0, rotateY: -90 }}
                                transition={{ duration: 0.6 }}
                            >
                                <motion.div
                                    animate={{ 
                                        y: [0, -8, 0],
                                        rotate: [0, 1, -1, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Image 
                                        src={currentData.image} 
                                        alt={`${currentData.name}-image`} 
                                        width={120} 
                                        height={120} 
                                        className="mx-auto pt-6 lg:pb-6 rounded-full object-cover border-4 border-white shadow-lg" 
                                    />
                                </motion.div>
                                
                                <motion.div 
                                    className="lg:inline-block bg-white rounded-xl p-4 shadow-lg max-w-xs"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    {/* Star Rating */}
                                    <motion.div 
                                        className="flex justify-center mb-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                                                className="text-yellow-400 text-sm"
                                            >
                                                ⭐
                                            </motion.span>
                                        ))}
                                    </motion.div>

                                    <motion.p 
                                        className="text-sm font-normal text-center text-darkgray leading-relaxed mb-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                    >
                                        "{currentData.text.length > 100 ? currentData.text.substring(0, 100) + '...' : currentData.text}"
                                    </motion.p>
                                    
                                    <motion.h3 
                                        className="text-lg font-semibold text-center py-1 text-navyblue"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7, duration: 0.4 }}
                                    >
                                        {currentData.name}
                                    </motion.h3>
                                    
                                    <motion.div 
                                        className="text-center"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8, duration: 0.4 }}
                                    >
                                        <h4 className="text-xs font-medium text-blue-600">
                                            {currentData.role}
                                        </h4>
                                        <h5 className="text-xs font-normal text-gray-500">
                                            {currentData.location}
                                        </h5>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.span>
                </div>

                {/* Progress Bar */}
                <motion.div 
                    className="flex justify-center mt-8 space-x-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    {testimonials.map((_, index) => (
                        <motion.button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                            }`}
                            onClick={() => setCurrentTestimonial(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Clientsay;