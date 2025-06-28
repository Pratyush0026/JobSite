"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

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
    transition: all 0.3s ease;
    filter: grayscale(100%) opacity(70%);
  }
  
  .company-logo:hover {
    filter: grayscale(0%) opacity(100%);
    transform: scale(1.1);
  }
  
  .carousel-container {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 50%, rgba(255,255,255,1) 100%);
    padding: 40px 0;
    border-radius: 16px;
    margin: 20px 0;
  }
  
  /* Fade edges for infinite effect */
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
    width: 80px;
    z-index: 10;
    pointer-events: none;
  }
  
  .carousel-wrapper::before {
    left: 0;
    background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
  }
  
  .carousel-wrapper::after {
    right: 0;
    background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
  }
`;

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
            speed: 3000,
            autoplaySpeed: 0,
            cssEase: "linear",
            pauseOnHover: false,
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
                        speed: 3000,
                        autoplaySpeed: 0,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        speed: 3000,
                        autoplaySpeed: 0,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        speed: 3000,
                        autoplaySpeed: 0,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        speed: 3000,
                        autoplaySpeed: 0,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                    }
                }
            ]
        };

        return (
            <div className='text-center'>
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    
                    {/* Header Section */}
                    <div className="py-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Join thousands of professionals from top companies who trust our platform for their career growth
                        </p>
                    </div>

                    <div className="carousel-container">
                        <div className="carousel-wrapper">
                            <Slider {...settings} className="continuous-slider">
                                {data.map((item, i) => (
                                    <div key={i} className="px-4">
                                        <div className="flex flex-col items-center justify-center h-24">
                                            <Image 
                                                src={item.imgSrc} 
                                                alt={`${item.name} logo`} 
                                                width={120} 
                                                height={60}
                                                className="company-logo object-contain max-h-16"
                                                priority={i < 5}
                                            />
                                            <span className="text-sm text-gray-500 mt-2 font-medium">
                                                {item.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                            <div className="text-gray-600">Partner Companies</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                            <div className="text-gray-600">Jobs Posted Monthly</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                            <div className="text-gray-600">Success Rate</div>
                        </div>
                    </div>

                    <hr className="border-gray-200" />
                </div>
            </div>
        )
    }
}