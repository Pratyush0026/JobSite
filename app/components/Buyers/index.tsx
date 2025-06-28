

"use client"
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        percent: '70L+',
        heading: "Active Candidates",
        subheading: "Trusted candidates across India actively seeking opportunities.",
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        percent: '5L+',
        heading: "Job Vacancies",
        subheading: "Fresh job openings posted daily across all industries.",
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        percent: '95%',
        heading: "Success Rate",
        subheading: "Candidates who find suitable jobs through our platform.",
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        percent: '1000+',
        heading: "Top Companies",
        subheading: "Leading employers hiring through our trusted platform.",
    }
]

const Buyers = () => {
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
            y: 50, 
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

    const iconVariants: Variants = {
        hidden: { scale: 0, rotate: -180 },
        visible: { 
            scale: 1, 
            rotate: 0,
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2
            }
        }
    };

    const numberVariants: Variants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.3
            }
        }
    };

    return (
        <motion.div 
            className='mx-auto max-w-7xl py-16 px-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {cardData.map((items, i) => (
                    <motion.div 
                        className='flex flex-col justify-center items-center group'
                        key={i}
                        variants={cardVariants}
                        whileHover={{ 
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div 
                            className='flex justify-center border border-border p-2 w-10 rounded-lg group-hover:border-blue-500 transition-colors duration-300'
                            variants={iconVariants}
                            whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <Image src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
                        </motion.div>
                        
                        <motion.h2 
                            className='text-4xl lg:text-6xl text-black font-semibold text-center mt-5'
                            variants={numberVariants}
                            whileHover={{ 
                                scale: 1.1,
                                color: "#3b82f6",
                                transition: { duration: 0.2 }
                            }}
                        >
                            {items.percent}
                        </motion.h2>
                        
                        <motion.h3 
                            className='text-2xl text-black font-semibold text-center lg:mt-6'
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                        >
                            {items.heading}
                        </motion.h3>
                        
                        <motion.p 
                            className='text-lg font-normal text-black text-center text-opacity-50 mt-2'
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 0.5, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        >
                            {items.subheading}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Buyers;