


// "use client"
// import Image from "next/image";
// import { motion, Variants } from "framer-motion";
// import { useState } from "react";

// const Banner = () => {
//     const [jobCategory, setJobCategory] = useState("");
//     const [location, setLocation] = useState("");

//     const containerVariants: Variants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.3,
//                 delayChildren: 0.2
//             }
//         }
//     };

//     const titleVariants: Variants = {
//         hidden: { y: 50, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.8,
//                 ease: [0.25, 0.1, 0.25, 1]
//             }
//         }
//     };

//     const buttonVariants: Variants = {
//         hidden: { scale: 0, opacity: 0 },
//         visible: {
//             scale: 1,
//             opacity: 1,
//             transition: {
//                 type: "spring",
//                 stiffness: 260,
//                 damping: 20,
//                 delay: 0.5
//             }
//         },
//         hover: {
//             scale: 1.05,
//             boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//             transition: { duration: 0.2 }
//         },
//         tap: { scale: 0.95 }
//     };

//     const handleSearch = () => {
//         console.log("Searching for:", { jobCategory, location });
//     };

//     return (
//         <main>
//             <div className="px-6 lg:px-8 mt-24 mb-10">
//                 <motion.div 
//                     className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                 >
//                     <div className="text-center">
//                         <motion.h1 
//                             className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-7xl md:4px lh-96"
//                             variants={titleVariants}
//                         >
//                             <motion.span
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.2 }}
//                             >
//                                 Find your dream job with
//                             </motion.span>
//                             <br />
//                             <motion.span
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.4 }}
//                                 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-navyblue"
//                             >
//                                 trusted platform.
//                             </motion.span>
//                         </motion.h1>
                        
//                         <motion.p 
//                             className="mt-6 text-lg leading-8 text-bluegray"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.6 }}
//                         >
//                             Trusted by 70 Lakh+ candidates across India. Search your next high paying job <br /> Over 5 Lakh Job Vacancies for you to explore.
//                         </motion.p>
//                     </div>

//                     {/* Job Search Section */}
//                     <motion.div 
//                         className="mt-12 max-w-4xl mx-auto"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.8 }}
//                     >
//                         <div className="bg-white rounded-2xl shadow-lg p-6 border">
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                 {/* Job Category Dropdown */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-navyblue mb-2">
//                                         Choose your Job Category
//                                     </label>
//                                     <div className="relative">
//                                         <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
//                                         </svg>
//                                         <select 
//                                             value={jobCategory}
//                                             onChange={(e) => setJobCategory(e.target.value)}
//                                             className="w-full pl-10 pr-10 py-3 border border-lightgrey rounded-lg   focus:border-blue bg-white text-navyblue cursor-pointer"
//                                             style={{ 
//                                                 appearance: 'none',
//                                                 WebkitAppearance: 'none',
//                                                 MozAppearance: 'none'
//                                             }}
//                                         >
//                                             <option value="">Select Job Category</option>
//                                             <option value="housekeeping">House Keeping</option>
//                                             <option value="technician">Technician</option>
//                                             <option value="labourer">Labourer</option>
//                                             <option value="driver">Driver</option>
//                                             <option value="delivery">Delivery</option>
//                                             <option value="retail">Retail / Counter Sales</option>
//                                             <option value="bpo">BPO / Customer Care</option>
//                                             <option value="business">Business Development</option>
//                                             <option value="admin">Admin</option>
//                                         </select>
//                                         <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                         </svg>
//                                     </div>
//                                 </div>

//                                 {/* Location Dropdown */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-navyblue mb-2">
//                                         Select the City of your choice
//                                     </label>
//                                     <div className="relative">
//                                         <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                         </svg>
//                                         <select 
//                                             value={location}
//                                             onChange={(e) => setLocation(e.target.value)}
//                                             className="w-full pl-10 pr-10 py-3 border border-lightgrey rounded-lg  focus:border-blue bg-white text-navyblue cursor-pointer"
//                                             style={{ 
//                                                 appearance: 'none',
//                                                 WebkitAppearance: 'none',
//                                                 MozAppearance: 'none'
//                                             }}
//                                         >
//                                             <option value="">Select City</option>
//                                             <option value="amritsar">Amritsar</option>
//                                             <option value="bengaluru">Bengaluru</option>
//                                             <option value="pune">Pune</option>
//                                             <option value="bhadohi">Bhadohi</option>
//                                             <option value="chennai">Chennai</option>
//                                             <option value="delhi">Delhi</option>
//                                             <option value="mumbai">Mumbai</option>
//                                             <option value="hyderabad">Hyderabad</option>
//                                             <option value="kolkata">Kolkata</option>
//                                         </select>
//                                         <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                         </svg>
//                                     </div>
//                                 </div>

//                                 {/* Search Button */}
//                                 <div className="flex items-end">
//                                     <motion.button 
//                                         onClick={handleSearch}
//                                         className="w-full bg-blue hover:bg-blue text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
//                                         whileHover={{ scale: 1.02 }}
//                                         whileTap={{ scale: 0.98 }}
//                                         style={{ backgroundColor: 'var(--blue, #3b82f6)' }}
//                                     >
//                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                                         </svg>
//                                         Search Jobs
//                                     </motion.button>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>

//                     {/* Popular Job Types */}
//                     <motion.div 
//                         className="mt-12"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 1 }}
//                     >
//                         <h2 className="text-center text-lg font-medium text-navyblue mb-6">Popular Job Type</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-6xl mx-auto">
//                             {[
//                                 { icon: "🏠", label: "Work from home jobs" },
//                                 { icon: "🎓", label: "10th Pass Jobs" },
//                                 { icon: "📚", label: "12th Pass Jobs" },
//                                 { icon: "🌟", label: "Fresher Jobs" },
//                                 { icon: "👩", label: "Jobs for women" },
//                                 { icon: "⏰", label: "Part Time Jobs" },
//                                 { icon: "🌙", label: "Night Shift Jobs" }
//                             ].map((job, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="bg-white p-4 rounded-xl text-center cursor-pointer transition-all duration-200 hover:shadow-md border border-lightgrey"
//                                     whileHover={{ y: -3, scale: 1.02 }}
//                                     whileTap={{ scale: 0.98 }}
//                                 >
//                                     <div className="text-2xl mb-2">{job.icon}</div>
//                                     <p className="text-xs font-medium text-navyblue leading-tight">{job.label}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     <motion.div 
//                         className="text-center mt-5"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.8 }}
//                     >
//                         <motion.button 
//                             type="button" 
//                             className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'
//                             variants={buttonVariants}
//                             whileHover="hover"
//                             whileTap="tap"
//                         >
//                             See our portfolio
//                         </motion.button>
                        
//                         <motion.button 
//                             type="button" 
//                             className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'
//                             variants={buttonVariants}
//                             whileHover={{
//                                 scale: 1.05,
//                                 backgroundColor: "#3b82f6",
//                                 color: "#ffffff",
//                                 transition: { duration: 0.2 }
//                             }}
//                             whileTap="tap"
//                         >
//                             More info
//                         </motion.button>
//                     </motion.div>

//                     {/* <motion.div
//                         initial={{ opacity: 0, y: 50, scale: 0.9 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
//                         whileHover={{ scale: 1.02 }}
//                         className="mt-10"
//                     >
//                         <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} />
//                     </motion.div> */}
//                 </motion.div>
//             </div>
//         </main>
//     )
// }

// export default Banner;


// "use client"
// import Image from "next/image";
// import { motion, Variants } from "framer-motion";
// import { useState, useEffect, useRef } from "react";

// // BlurText Component
// const buildKeyframes = (from: any, steps: any[]) => {
//   const keys = new Set([
//     ...Object.keys(from),
//     ...steps.flatMap((s) => Object.keys(s)),
//   ]);
//   const keyframes: any = {};
//   keys.forEach((k) => {
//     keyframes[k] = [from[k], ...steps.map((s) => s[k])];
//   });
//   return keyframes;
// };

// const BlurText = ({
//   text = '',
//   delay = 200,
//   className = '',
//   animateBy = 'words',
//   direction = 'top',
//   threshold = 0.1,
//   rootMargin = '0px',
//   animationFrom,
//   animationTo,
//   easing = (t: number) => t,
//   onAnimationComplete,
//   stepDuration = 0.35,
// }: any) => {
//   const elements = animateBy === 'words' ? text.split(' ') : text.split('');
//   const [inView, setInView] = useState(false);
//   const ref = useRef<HTMLParagraphElement>(null);
  
//   useEffect(() => {
//     if (!ref.current) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.unobserve(ref.current!);
//         }
//       },
//       { threshold, rootMargin }
//     );
//     observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold, rootMargin]);

//   const defaultFrom = direction === 'top'
//     ? { filter: 'blur(10px)', opacity: 0, y: -50 }
//     : { filter: 'blur(10px)', opacity: 0, y: 50 };

//   const defaultTo = [
//     {
//       filter: 'blur(5px)',
//       opacity: 0.5,
//       y: direction === 'top' ? 5 : -5,
//     },
//     { filter: 'blur(0px)', opacity: 1, y: 0 },
//   ];

//   const fromSnapshot = animationFrom ?? defaultFrom;
//   const toSnapshots = animationTo ?? defaultTo;
//   const stepCount = toSnapshots.length + 1;
//   const totalDuration = stepDuration * (stepCount - 1);
//   const times = Array.from({ length: stepCount }, (_, i) =>
//     stepCount === 1 ? 0 : i / (stepCount - 1)
//   );

//   return (
//     <p
//       ref={ref}
//       className={`blur-text ${className} flex flex-wrap justify-center`}
//     >
//       {elements.map((segment: string, index: number) => {
//         const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
//         const spanTransition = {
//           duration: totalDuration,
//           times,
//           delay: (index * delay) / 1000,
//           ease: easing
//         };

//         return (
//           <motion.span
//             className="inline-block will-change-[transform,filter,opacity]"
//             key={index}
//             initial={fromSnapshot}
//             animate={inView ? animateKeyframes : fromSnapshot}
//             transition={spanTransition}
//             onAnimationComplete={
//               index === elements.length - 1 ? onAnimationComplete : undefined
//             }
//           >
//             {segment === ' ' ? '\u00A0' : segment}
//             {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
//           </motion.span>
//         );
//       })}
//     </p>
//   );
// };

// const Banner = () => {
//     const [jobCategory, setJobCategory] = useState("");
//     const [location, setLocation] = useState("");

//     const containerVariants: Variants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.3,
//                 delayChildren: 0.2
//             }
//         }
//     };

//     const titleVariants: Variants = {
//         hidden: { y: 50, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.8,
//                 ease: [0.25, 0.1, 0.25, 1]
//             }
//         }
//     };

//     const buttonVariants: Variants = {
//         hidden: { scale: 0, opacity: 0 },
//         visible: {
//             scale: 1,
//             opacity: 1,
//             transition: {
//                 type: "spring",
//                 stiffness: 260,
//                 damping: 20,
//                 delay: 0.5
//             }
//         },
//         hover: {
//             scale: 1.05,
//             boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//             transition: { duration: 0.2 }
//         },
//         tap: { scale: 0.95 }
//     };

//     const handleSearch = () => {
//         console.log("Searching for:", { jobCategory, location });
//     };

//     return (
//         <main>
//             <div className="px-6 lg:px-8 mt-24 mb-10 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#9333ea]">
//                 <motion.div 
//                     className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                 >
//                     <div className="text-center">
//                         <motion.h1 
//                             className="text-4xl font-semibold text-white sm:text-5xl lg:text-7xl md:4px lh-96"
//                             variants={titleVariants}
//                         >
//                             <BlurText
//                                 text="Find your dream job with"
//                                 className=""
//                                 delay={100}
//                                 animateBy="words"
//                                 direction="top"
//                             />
//                             <BlurText
//                                 text="trusted platform."
//                                 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-white"
//                                 delay={150}
//                                 animateBy="words"
//                                 direction="top"
//                             />
//                         </motion.h1>
                        
//                         <motion.p 
//                             className="mt-6 text-lg leading-8 text-bluegray"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.6 }}
//                         >
//                             Trusted by 70 Lakh+ candidates across India. Search your next high paying job <br /> Over 5 Lakh Job Vacancies for you to explore.
//                         </motion.p>
//                     </div>

//                     {/* Job Search Section */}
//                     <motion.div 
//                         className="mt-12 max-w-4xl mx-auto"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.8 }}
//                     >
//                         <div className="bg-white rounded-2xl shadow-lg p-6 border">
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                 {/* Job Category Dropdown */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-navyblue mb-2">
//                                         Choose your Job Category
//                                     </label>
//                                     <div className="relative">
//                                         <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
//                                         </svg>
//                                         <select 
//                                             value={jobCategory}
//                                             onChange={(e) => setJobCategory(e.target.value)}
//                                             className="w-full pl-10 pr-10 py-3 border border-lightgrey rounded-lg   focus:border-blue bg-white text-navyblue cursor-pointer"
//                                             style={{ 
//                                                 appearance: 'none',
//                                                 WebkitAppearance: 'none',
//                                                 MozAppearance: 'none'
//                                             }}
//                                         >
//                                             <option value="">Select Job Category</option>
//                                             <option value="housekeeping">House Keeping</option>
//                                             <option value="technician">Technician</option>
//                                             <option value="labourer">Labourer</option>
//                                             <option value="driver">Driver</option>
//                                             <option value="delivery">Delivery</option>
//                                             <option value="retail">Retail / Counter Sales</option>
//                                             <option value="bpo">BPO / Customer Care</option>
//                                             <option value="business">Business Development</option>
//                                             <option value="admin">Admin</option>
//                                         </select>
//                                         <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                         </svg>
//                                     </div>
//                                 </div>

//                                 {/* Location Dropdown */}
//                                 <div>
//                                     <label className="block text-sm font-medium text-navyblue mb-2">
//                                         Select the City of your choice
//                                     </label>
//                                     <div className="relative">
//                                         <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                         </svg>
//                                         <select 
//                                             value={location}
//                                             onChange={(e) => setLocation(e.target.value)}
//                                             className="w-full pl-10 pr-10 py-3 border border-lightgrey rounded-lg  focus:border-blue bg-white text-navyblue cursor-pointer"
//                                             style={{ 
//                                                 appearance: 'none',
//                                                 WebkitAppearance: 'none',
//                                                 MozAppearance: 'none'
//                                             }}
//                                         >
//                                             <option value="">Select City</option>
//                                             <option value="amritsar">Amritsar</option>
//                                             <option value="bengaluru">Bengaluru</option>
//                                             <option value="pune">Pune</option>
//                                             <option value="bhadohi">Bhadohi</option>
//                                             <option value="chennai">Chennai</option>
//                                             <option value="delhi">Delhi</option>
//                                             <option value="mumbai">Mumbai</option>
//                                             <option value="hyderabad">Hyderabad</option>
//                                             <option value="kolkata">Kolkata</option>
//                                         </select>
//                                         <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                         </svg>
//                                     </div>
//                                 </div>

//                                 {/* Search Button */}
//                                 <div className="flex items-end">
//                                     <motion.button 
//                                         onClick={handleSearch}
//                                         className="w-full bg-blue hover:bg-blue text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
//                                         whileHover={{ scale: 1.02 }}
//                                         whileTap={{ scale: 0.98 }}
//                                         style={{ backgroundColor: 'var(--blue, #3b82f6)' }}
//                                     >
//                                         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                                         </svg>
//                                         Search Jobs
//                                     </motion.button>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>

//                     {/* Popular Job Types */}
//                     <motion.div 
//                         className="mt-12"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 1 }}
//                     >
//                         <h2 className="text-center text-lg font-medium text-navyblue mb-6">Popular Job Type</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-6xl mx-auto">
//                             {[
//                                 { icon: "🏠", label: "Work from home jobs" },
//                                 { icon: "🎓", label: "10th Pass Jobs" },
//                                 { icon: "📚", label: "12th Pass Jobs" },
//                                 { icon: "🌟", label: "Fresher Jobs" },
//                                 { icon: "👩", label: "Jobs for women" },
//                                 { icon: "⏰", label: "Part Time Jobs" },
//                                 { icon: "🌙", label: "Night Shift Jobs" }
//                             ].map((job, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="bg-white p-4 rounded-xl text-center cursor-pointer transition-all duration-200 hover:shadow-md border border-lightgrey"
//                                     whileHover={{ y: -3, scale: 1.02 }}
//                                     whileTap={{ scale: 0.98 }}
//                                 >
//                                     <div className="text-2xl mb-2">{job.icon}</div>
//                                     <p className="text-xs font-medium text-navyblue leading-tight">{job.label}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     <motion.div 
//                         className="text-center mt-5"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.8 }}
//                     >
//                         <motion.button 
//                             type="button" 
//                             className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'
//                             variants={buttonVariants}
//                             whileHover="hover"
//                             whileTap="tap"
//                         >
//                             See our portfolio
//                         </motion.button>
                        
//                         <motion.button 
//                             type="button" 
//                             className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'
//                             variants={buttonVariants}
//                             whileHover={{
//                                 scale: 1.05,
//                                 backgroundColor: "#3b82f6",
//                                 color: "#ffffff",
//                                 transition: { duration: 0.2 }
//                             }}
//                             whileTap="tap"
//                         >
//                             More info
//                         </motion.button>
//                     </motion.div>

//                     {/* <motion.div
//                         initial={{ opacity: 0, y: 50, scale: 0.9 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
//                         whileHover={{ scale: 1.02 }}
//                         className="mt-10"
//                     >
//                         <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} />
//                     </motion.div> */}
//                 </motion.div>
//             </div>
//         </main>
//     )
// }

// export default Banner;





"use client"
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// BlurText Component
const buildKeyframes = (from: any, steps: any[]) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);
  const keyframes: any = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}: any) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = direction === 'top'
    ? { filter: 'blur(10px)', opacity: 0, y: -50 }
    : { filter: 'blur(10px)', opacity: 0, y: 50 };

  const defaultTo = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      y: direction === 'top' ? 5 : -5,
    },
    { filter: 'blur(0px)', opacity: 1, y: 0 },
  ];

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <p
      ref={ref}
      className={`blur-text ${className} flex flex-wrap justify-center`}
    >
      {elements.map((segment: string, index: number) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        };

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
};

const Banner = () => {
    const [jobCategory, setJobCategory] = useState("");
    const [location, setLocation] = useState("");
    
    // Aurora background animation
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

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

    const handleSearch = () => {
        console.log("Searching for:", { jobCategory, location });
    };

    return (
        <main>
            <motion.div 
                className="relative px-6 lg:px-8 pt-4 overflow-hidden"
                style={{
                    backgroundImage,
                }}
            >
                {/* Aurora Stars Background */}
                <div className="absolute inset-0 z-0">
                    <Canvas>
                        <Stars radius={50} count={2500} factor={4} fade speed={2} />
                    </Canvas>
                </div>

                <motion.div 
                    className="relative z-10 mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="text-center">
                        <motion.h1 
                            className="text-4xl font-semibold text-white sm:text-5xl lg:text-7xl md:4px lh-96"
                            variants={titleVariants}
                        >
                            <BlurText
                                text="Find your dream job with"
                                className=""
                                delay={100}
                                animateBy="words"
                                direction="top"
                            />
                            <BlurText
                                text="trusted platform."
                                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-white"
                                delay={150}
                                animateBy="words"
                                direction="top"
                            />
                        </motion.h1>
                        
                        <motion.p 
                            className="mt-6 text-lg leading-8 text-gray-200 text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Trusted by 70 Lakh+ candidates across India. Search your next high paying job <br /> Over 5 Lakh Job Vacancies for you to explore.
                        </motion.p>
                    </div>

                    {/* Job Search Section */}
                    <motion.div 
                        className="mt-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <div className="bg-white rounded-2xl shadow-lg p-6 border">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Job Category Dropdown */}
                                <div>
                                    <label className="block text-sm font-medium text-navyblue mb-2">
                                        Choose your Job Category
                                    </label>
                                    <div className="relative">
                                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                                        </svg>
                                        <select 
                                            value={jobCategory}
                                            onChange={(e) => setJobCategory(e.target.value)}
                                            className="w-full pl-10 pr-10 py-3 border border-lightgrey rounded-lg   focus:border-blue bg-white text-navyblue cursor-pointer"
                                            style={{ 
                                                appearance: 'none',
                                                WebkitAppearance: 'none',
                                                MozAppearance: 'none'
                                            }}
                                        >
                                            <option value="">Select Job Category</option>
                                            <option value="housekeeping">House Keeping</option>
                                            <option value="technician">Technician</option>
                                            <option value="labourer">Labourer</option>
                                            <option value="driver">Driver</option>
                                            <option value="delivery">Delivery</option>
                                            <option value="retail">Retail / Counter Sales</option>
                                            <option value="bpo">BPO / Customer Care</option>
                                            <option value="business">Business Development</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Location Dropdown */}
                                <div>
                                    <label className="block text-sm font-medium text-navyblue mb-2">
                                        Select the City of your choice
                                    </label>
                                    <div className="relative">
                                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <select 
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            className="w-full pl-10 pr-10 py-3 border border-lightgrey rounded-lg  focus:border-blue bg-white text-navyblue cursor-pointer"
                                            style={{ 
                                                appearance: 'none',
                                                WebkitAppearance: 'none',
                                                MozAppearance: 'none'
                                            }}
                                        >
                                            <option value="">Select City</option>
                                            <option value="amritsar">Amritsar</option>
                                            <option value="bengaluru">Bengaluru</option>
                                            <option value="pune">Pune</option>
                                            <option value="bhadohi">Bhadohi</option>
                                            <option value="chennai">Chennai</option>
                                            <option value="delhi">Delhi</option>
                                            <option value="mumbai">Mumbai</option>
                                            <option value="hyderabad">Hyderabad</option>
                                            <option value="kolkata">Kolkata</option>
                                        </select>
                                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Search Button */}
                                <div className="flex items-end">
                                    <motion.button 
                                        onClick={handleSearch}
                                        className="w-full bg-blue hover:bg-blue text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{ backgroundColor: 'var(--blue, #3b82f6)' }}
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        Search Jobs
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Popular Job Types */}
                    <motion.div 
                        className="mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <h2 className="text-center text-lg font-medium text-white mb-6">Popular Job Type</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-6xl mx-auto">
                            {[
                                { icon: "🏠", label: "Work from home jobs" },
                                { icon: "🎓", label: "10th Pass Jobs" },
                                { icon: "📚", label: "12th Pass Jobs" },
                                { icon: "🌟", label: "Fresher Jobs" },
                                { icon: "👩", label: "Jobs for women" },
                                { icon: "⏰", label: "Part Time Jobs" },
                                { icon: "🌙", label: "Night Shift Jobs" }
                            ].map((job, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-4 rounded-xl text-center cursor-pointer transition-all duration-200 hover:shadow-md border border-lightgrey"
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="text-2xl mb-2">{job.icon}</div>
                                    <p className="text-xs font-medium text-navyblue leading-tight">{job.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

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
                            className='text-15px ml-4 mt-2 text-white transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-gray-400 leafbutton'
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
                </motion.div>
            </motion.div>
        </main>
    )
}

export default Banner;