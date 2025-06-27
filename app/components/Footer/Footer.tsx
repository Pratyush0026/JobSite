// import Link from "next/link";
// import Image from "next/image";

// // MIDDLE LINKS DATA
// interface ProductType {
//     id: number;
//     link: string[];
// }

// const products: ProductType[] = [
//     {
//         id: 1,
//         link: ['Home', 'Popular', 'About', 'Contact'],
//     },
//     {
//         id: 2,
//         link: ['Help', 'Resources', 'Application', 'Team']
//     }
// ]

// const footer = () => {
//     return (
//         <div className="bg-darkblue -mt-40">
//             <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//                 <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

//                     {/* COLUMN-1 */}

//                     <div className='col-span-4 md:col-span-12 lg:col-span-4'>
//                         <img src={'/assets/footer/logo.svg'} alt="logo" className='pb-8' />
//                         <div className='flex gap-4'>
//                             <Link href="https://facebook.com" className='footer-fb-icons'>
//                                 <Image src={'/assets/footer/facebook.svg'} alt="facebook" width={15} height={20} />
//                             </Link>
//                             <Link href="https://twitter.com" className='footer-icons'>
//                                 <Image src={'/assets/footer/twitter.svg'} alt="twitter" width={20} height={20} />
//                             </Link>
//                             <Link href="https://instagram.com" className='footer-icons'>
//                                 <Image src={'/assets/footer/instagram.svg'} alt="instagram" width={20} height={20} />
//                             </Link> 
//                         </div>
//                     </div>

//                     {/* CLOUMN-2/3 */}

//                     {products.map((product) => (
//                         <div key={product.id} className="group relative col-span-2 md:col-span-4 lg:col-span-2">
//                             <ul>
//                                 {product.link.map((link: string, index: number) => (
//                                     <li key={index} className='mb-5'>
//                                         <Link href="/" className="text-white text-sm font-normal mb-6 space-links">{link}</Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}

//                     {/* CLOUMN-4 */}

//                     <div className='col-span-4 md:col-span-4 lg:col-span-4'>
//                         <div className="flex gap-2">
//                             <Image src={'/assets/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
//                             <h5 className="text-base font-normal text-offwhite">925 Filbert Street Pennsylvania 18072</h5>
//                         </div>
//                         <div className="flex gap-2 mt-10">
//                             <Image src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
//                             <h5 className="text-base font-normal text-offwhite">+ 45 34 11 44 11</h5>
//                         </div>
//                         <div className="flex gap-2 mt-10">
//                             <Image src={'/assets/footer/email.svg'} alt="email-icon" width={24} height={24} />
//                             <h5 className="text-base font-normal text-offwhite">info@gmail.com</h5>
//                         </div>
//                     </div>

//                 </div>

//                 {/* All Rights Reserved */}

//                 <div className='py-10 lg:flex items-center justify-between border-t border-t-bordertop'>
//                     <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'>@2023 Agency. All Rights Reserved by <Link href="https://adminmart.com/" target="_blank"> Adminmart.com</Link></h4>
//                     <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
//                         <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
//                         <div className="h-5 bg-bordertop w-0.5"></div>
//                         <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default footer;


"use client"
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        link: ['Home', 'Popular', 'About', 'Contact'],
    },
    {
        id: 2,
        link: ['Help', 'Resources', 'Application', 'Team']
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
                            src={'/assets/footer/logo.svg'} 
                            alt="logo" 
                            className='pb-8'
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
                                        <Image src={social.src} alt={social.alt} width={social.alt === "facebook" ? 15 : 20} height={20} />
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
                            { icon: '/assets/footer/mask.svg', text: "925 Filbert Street Pennsylvania 18072" },
                            { icon: '/assets/footer/telephone.svg', text: "+ 45 34 11 44 11" },
                            { icon: '/assets/footer/email.svg', text: "info@gmail.com" }
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
                        @2023 Agency. All Rights Reserved by <Link href="https://adminmart.com/" target="_blank"> Adminmart.com</Link>
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