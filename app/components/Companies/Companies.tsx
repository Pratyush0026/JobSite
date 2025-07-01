// "use client"
// import Image from "next/image";
// import React, { Component } from "react";
// import Slider from "react-slick";

// interface Data {
//     imgSrc: string;
//     name: string;
// }

// const data: Data[] = [
//     {
//         imgSrc: "/assets/carousel/google.svg",
//         name: "Google"
//     },
//     {
//         imgSrc: "/assets/carousel/garnier.png",
//         name: "Garnier"
//     },
//     {
//         imgSrc: "/assets/carousel/slack.png",
//         name: "Slack"
//     },
//     {
//         imgSrc: "/assets/carousel/udemy.png",
//         name: "Udemy"
//     },
//     {
//         imgSrc: "/assets/carousel/google.svg",
//         name: "Google"
//     },
//     {
//         imgSrc: "/assets/carousel/garnier.png",
//         name: "Garnier"
//     },
//     {
//         imgSrc: "/assets/carousel/slack.png",
//         name: "Slack"
//     },
//     {
//         imgSrc: "/assets/carousel/udemy.png",
//         name: "Udemy"
//     }
// ]

// const carouselStyles = `
//   .continuous-slider .slick-track {
//     display: flex !important;
//     align-items: center;
//   }
  
//   .continuous-slider .slick-slide {
//     transition: none !important;
//   }
  
//   .continuous-slider .slick-slide > div {
//     padding: 0 20px;
//   }
  
//   .company-logo {
//     transition: all 0.3s ease;
//     filter: grayscale(100%) opacity(70%);
//   }
  
//   .company-logo:hover {
//     filter: grayscale(0%) opacity(100%);
//     transform: scale(1.1);
//   }
  
//   .carousel-container {
//     background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 50%, rgba(255,255,255,1) 100%);
//     padding: 40px 0;
//     border-radius: 16px;
//     margin: 20px 0;
//   }
  
//   /* Fade edges for infinite effect */
//   .carousel-wrapper {
//     position: relative;
//     overflow: hidden;
//   }
  
//   .carousel-wrapper::before,
//   .carousel-wrapper::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     width: 80px;
//     z-index: 10;
//     pointer-events: none;
//   }
  
//   .carousel-wrapper::before {
//     left: 0;
//     background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
//   }
  
//   .carousel-wrapper::after {
//     right: 0;
//     background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
//   }
// `;

// export default class MultipleItems extends Component {
    
//     componentDidMount() {
//         // Inject custom styles
//         const styleSheet = document.createElement("style");
//         styleSheet.innerText = carouselStyles;
//         document.head.appendChild(styleSheet);
//     }

//     render() {
//         const settings = {
//             dots: false,
//             infinite: true,
//             slidesToShow: 5,
//             slidesToScroll: 1,
//             arrows: false,
//             autoplay: true,
//             speed: 3000,
//             autoplaySpeed: 0,
//             cssEase: "linear",
//             pauseOnHover: false,
//             pauseOnFocus: false,
//             pauseOnDotsHover: false,
//             swipe: false,
//             touchMove: false,
//             draggable: false,
//             accessibility: false,
//             responsive: [
//                 {
//                     breakpoint: 1200,
//                     settings: {
//                         slidesToShow: 4,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: false,
//                         speed: 3000,
//                         autoplaySpeed: 0,
//                         pauseOnHover: false,
//                         pauseOnFocus: false,
//                     }
//                 },
//                 {
//                     breakpoint: 900,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: false,
//                         speed: 3000,
//                         autoplaySpeed: 0,
//                         pauseOnHover: false,
//                         pauseOnFocus: false,
//                     }
//                 },
//                 {
//                     breakpoint: 600,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: false,
//                         speed: 3000,
//                         autoplaySpeed: 0,
//                         pauseOnHover: false,
//                         pauseOnFocus: false,
//                     }
//                 },
//                 {
//                     breakpoint: 400,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: false,
//                         speed: 3000,
//                         autoplaySpeed: 0,
//                         pauseOnHover: false,
//                         pauseOnFocus: false,
//                     }
//                 }
//             ]
//         };

//         return (
//             <div className='text-center'>
//                 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    
//                     {/* Header Section */}
//                     <div className="py-8">
//                         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                             Trusted by Industry Leaders
//                         </h2>
//                         <p className="text-lg text-gray-600 mb-8">
//                             Join thousands of professionals from top companies who trust our platform for their career growth
//                         </p>
//                     </div>

//                     <div className="carousel-container">
//                         <div className="carousel-wrapper">
//                             <Slider {...settings} className="continuous-slider">
//                                 {data.map((item, i) => (
//                                     <div key={i} className="px-4">
//                                         <div className="flex flex-col items-center justify-center h-24">
//                                             <Image 
//                                                 src={item.imgSrc} 
//                                                 alt={`${item.name} logo`} 
//                                                 width={120} 
//                                                 height={60}
//                                                 className="company-logo object-contain max-h-16"
//                                                 priority={i < 5}
//                                             />
//                                             <span className="text-sm text-gray-500 mt-2 font-medium">
//                                                 {item.name}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         </div>
//                     </div>

//                     {/* Stats Section */}
//                     <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div className="text-center">
//                             <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
//                             <div className="text-gray-600">Partner Companies</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
//                             <div className="text-gray-600">Jobs Posted Monthly</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
//                             <div className="text-gray-600">Success Rate</div>
//                         </div>
//                     </div>

//                     <hr className="border-gray-200" />
//                 </div>
//             </div>
//         )
//     }
// }


"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

interface Data {
    imgSrc: string;
    name: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/carousel/google.svg",
        name: "Google"
    },
    {
        imgSrc: "/assets/carousel/garnier.png",
        name: "Garnier"
    },
    {
        imgSrc: "/assets/carousel/slack.png",
        name: "Slack"
    },
    {
        imgSrc: "/assets/carousel/udemy.png",
        name: "Udemy"
    },
    {
        imgSrc: "/assets/carousel/google.svg",
        name: "Google"
    },
    {
        imgSrc: "/assets/carousel/garnier.png",
        name: "Garnier"
    },
    {
        imgSrc: "/assets/carousel/slack.png",
        name: "Slack"
    },
    {
        imgSrc: "/assets/carousel/udemy.png",
        name: "Udemy"
    }
]

const carouselStyles = `
  .continuous-slider .slick-track {
    display: flex !important;
    align-items: center;
  }
  
  .continuous-slider .slick-slide {
    transition: none !important;
  }
  
  .continuous-slider .slick-slide > div {
    padding: 0 20px;
  }
  
  .company-logo {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    filter: grayscale(100%) opacity(50%);
  }
  
  .company-logo:hover {
    filter: grayscale(0%) opacity(100%);
    transform: scale(1.15) rotate(2deg);
  }
  
  .carousel-container {
    background: linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.05) 50%, rgba(6,182,212,0.05) 100%);
    padding: 60px 0;
    border-radius: 24px;
    margin: 40px 0;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    position: relative;
    overflow: hidden;
  }
  
  .carousel-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
    animation: shimmer 3s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .floating-logo {
    animation: float 6s ease-in-out infinite;
  }
  
  .floating-logo:nth-child(2n) {
    animation-delay: -2s;
  }
  
  .floating-logo:nth-child(3n) {
    animation-delay: -4s;
  }
  
  /* Enhanced fade edges */
  .carousel-wrapper {
    position: relative;
    overflow: hidden;
  }
  
  .carousel-wrapper::before,
  .carousel-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 120px;
    z-index: 10;
    pointer-events: none;
  }
  
  .carousel-wrapper::before {
    left: 0;
    background: linear-gradient(to right, rgba(248,250,252,1), rgba(248,250,252,0));
  }
  
  .carousel-wrapper::after {
    right: 0;
    background: linear-gradient(to left, rgba(248,250,252,1), rgba(248,250,252,0));
  }
  
  .stats-card {
    background: linear-gradient(145deg, rgba(255,255,255,0.9), rgba(248,250,252,0.8));
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.2);
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  }
  
  .stats-number {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-shift 3s ease-in-out infinite;
  }
  
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`;

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "", prefix = "" }: { target: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  React.useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = target / 60; // 1 second animation at 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, target]);

  return (
    <div ref={ref} className="stats-number text-4xl font-bold mb-2">
      {prefix}{count}{suffix}
    </div>
  );
};

export default class MultipleItems extends Component {
    
    componentDidMount() {
        // Inject custom styles
        const styleSheet = document.createElement("style");
        styleSheet.innerText = carouselStyles;
        document.head.appendChild(styleSheet);
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 0,
            cssEase: "linear",
            pauseOnHover: true,
            pauseOnFocus: false,
            pauseOnDotsHover: false,
            swipe: false,
            touchMove: false,
            draggable: false,
            accessibility: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        speed: 4000,
                        autoplaySpeed: 0,
                        pauseOnHover: true,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        speed: 4000,
                        autoplaySpeed: 0,
                        pauseOnHover: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        speed: 4000,
                        autoplaySpeed: 0,
                        pauseOnHover: true,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        speed: 4000,
                        autoplaySpeed: 0,
                        pauseOnHover: true,
                    }
                }
            ]
        };

        return (
            <div className='text-center relative min-h-screen'>
                {/* Floating background elements */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-4 h-4 rounded-full"
                            style={{
                                background: `linear-gradient(135deg, ${
                                    i % 3 === 0 ? '#3b82f6' : 
                                    i % 3 === 1 ? '#8b5cf6' : '#06b6d4'
                                }40, ${
                                    i % 3 === 0 ? '#8b5cf6' : 
                                    i % 3 === 1 ? '#06b6d4' : '#3b82f6'
                                }40)`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                x: [0, Math.random() * 200 - 100, 0],
                                y: [0, Math.random() * 200 - 100, 0],
                                scale: [1, 1.8, 1],
                                opacity: [0.2, 0.8, 0.2],
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 6 + Math.random() * 4,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                    
                    {/* Additional larger floating shapes */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`large-${i}`}
                            className="absolute rounded-full opacity-10"
                            style={{
                                width: `${40 + Math.random() * 60}px`,
                                height: `${40 + Math.random() * 60}px`,
                                background: `radial-gradient(circle, ${
                                    i % 2 === 0 ? '#3b82f6' : '#8b5cf6'
                                }30, transparent)`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                x: [0, Math.random() * 150 - 75],
                                y: [0, Math.random() * 150 - 75],
                                scale: [1, 1.3, 1],
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 4,
                                repeat: Infinity,
                                delay: i * 1.2,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative z-10">
                    
                    {/* Enhanced Header Section */}
                    <motion.div 
                        className="py-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-6"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="mr-2">🏆</span>
                            Industry Leaders Trust Us
                        </motion.div>
                        
                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-navyblue mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Powering Careers at
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-navyblue">
                                World-Class Companies
                            </span>
                        </motion.h2>
                        
                       <motion.p 
    className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    viewport={{ once: true }}
>
    Join millions of professionals who&apos;ve accelerated their careers with our platform. 
    From startups to Fortune 500 companies, top employers choose us for talent.
</motion.p>
                    </motion.div>

                    {/* Enhanced Carousel */}
                    <motion.div 
                        className="carousel-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="carousel-wrapper">
                            <Slider {...settings} className="continuous-slider">
                                {data.map((item, i) => (
                                    <div key={i} className="px-4">
                                        <motion.div 
                                            className="flex flex-col items-center justify-center h-32 floating-logo"
                                            whileHover={{ 
                                                scale: 1.1,
                                                rotateY: 10,
                                                z: 50
                                            }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="relative group">
                                                {/* Glow effect on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                                                
                                                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-white/20">
                                                    <Image 
                                                        src={item.imgSrc} 
                                                        alt={`${item.name} logo`} 
                                                        width={120} 
                                                        height={60}
                                                        className="company-logo object-contain max-h-16 mx-auto"
                                                        priority={i < 5}
                                                    />
                                                    <motion.span 
                                                        className="block text-sm text-gray-600 mt-3 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        initial={{ y: 10 }}
                                                        whileHover={{ y: 0 }}
                                                    >
                                                        {item.name}
                                                    </motion.span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </motion.div>

                    {/* Enhanced Stats Section */}
                    <motion.div 
                        className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { target: 500, suffix: "+", label: "Partner Companies", icon: "🏢", color: "from-blue-500 to-cyan-500" },
                            { target: 50, suffix: "K+", label: "Jobs Posted Monthly", icon: "💼", color: "from-green-500 to-emerald-500" },
                            { target: 95, suffix: "%", label: "Success Rate", icon: "🎯", color: "from-purple-500 to-pink-500" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stats-card p-8 rounded-3xl text-center hover:scale-105 transition-all duration-500 cursor-pointer group"
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    y: -10,
                                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                                }}
                            >
                                <motion.div 
                                    className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {stat.icon}
                                </motion.div>
                                
                                <AnimatedCounter 
                                    target={stat.target} 
                                    suffix={stat.suffix}
                                />
                                
                                <motion.div 
                                    className="text-gray-600 font-medium text-lg"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1.2 + index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {stat.label}
                                </motion.div>
                                
                                {/* Animated background gradient */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Enhanced Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                        className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                    />
                </div>
            </div>
        )
    }
}