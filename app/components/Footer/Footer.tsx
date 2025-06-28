



"use client"
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface ProductType {
    id: number;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        link: ['Find Jobs', 'Job Categories', 'Top Companies', 'Career Advice'],
    },
    {
        id: 2,
        link: ['For Employers', 'Post Jobs', 'Hiring Solutions', 'Support']
    }
]

const footer = () => {
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    const socialIconVariants: Variants = {
        hidden: { scale: 0, rotate: -180 },
        visible: { 
            scale: 1, 
            rotate: 0,
            transition: { 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3
            }
        },
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div 
            className="bg-darkblue -mt-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <motion.div 
                    className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    {/* COLUMN-1 */}
                    <motion.div 
                        className='col-span-4 md:col-span-12 lg:col-span-4'
                        variants={itemVariants}
                    >
                        <motion.img 
                            src={'/assets/footer/logo.png'} 
                            alt="logo" 
                            className='pb-8 w-36'
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div 
                            className='flex gap-4'
                            variants={containerVariants}
                        >
                            {[
                                { href: "https://facebook.com", src: '/assets/footer/facebook.svg', alt: "facebook", className: 'footer-fb-icons' },
                                { href: "https://twitter.com", src: '/assets/footer/twitter.svg', alt: "twitter", className: 'footer-icons' },
                                { href: "https://instagram.com", src: '/assets/footer/instagram.svg', alt: "instagram", className: 'footer-icons' }
                            ].map((social, index) => (
                                <motion.div
                                    key={index}
                                    variants={socialIconVariants}
                                    whileHover="hover"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href={social.href} className={social.className}>
                                        <Image src={social.src} alt={social.alt} width={social.alt === "facebook" ? 15 : 30} height={20} />
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* COLUMN-2/3 */}
                    {products.map((product, productIndex) => (
                        <motion.div 
                            key={product.id} 
                            className="group relative col-span-2 md:col-span-4 lg:col-span-2"
                            variants={itemVariants}
                            custom={productIndex}
                        >
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <motion.li 
                                        key={index} 
                                        className='mb-5'
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link href="/" className="text-white text-sm font-normal mb-6 space-links">{link}</Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* COLUMN-4 */}
                    <motion.div 
                        className='col-span-4 md:col-span-4 lg:col-span-4'
                        variants={itemVariants}
                    >
                        {[
                            { icon: '/assets/footer/mask.svg', text: "Connaught Place, New Delhi, India 110001" },
                            { icon: '/assets/footer/telephone.svg', text: "+91 11 4567 8900" },
                            { icon: '/assets/footer/email.svg', text: "careers@hamarajobs.com" }
                        ].map((contact, index) => (
                            <motion.div 
                                key={index}
                                className={`flex gap-2 ${index > 0 ? 'mt-10' : ''}`}
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Image src={contact.icon} alt="icon" width={24} height={24} />
                                <h5 className="text-base font-normal text-offwhite">{contact.text}</h5>
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>

                {/* All Rights Reserved */}
                <motion.div 
                    className='py-10 lg:flex items-center justify-between border-t border-t-bordertop'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.h4 
                        className='text-offwhite text-sm text-center lg:text-start font-normal'
                        whileHover={{ scale: 1.02 }}
                    >
                        @2024 Hamara Jobs. All Rights Reserved by <Link href="https://hamarajobs.com/" target="_blank"> HamaraJobs.com</Link>
                    </motion.h4>
                    <motion.div 
                        className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.h4 
                            className='text-offwhite text-sm font-normal'
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link href="/" target="_blank">Privacy policy</Link>
                        </motion.h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <motion.h4 
                            className='text-offwhite text-sm font-normal'
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link href="/" target="_blank">Terms & conditions</Link>
                        </motion.h4>
                    </motion.div>
                </motion.div>

            </div>
        </motion.div>
    )
}

export default footer;