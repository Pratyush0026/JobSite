"use client";

import React, { useEffect, useRef } from "react";

// Images are referenced as public URLs since they're in the public folder
const trophy = "/assets/halloffame/trophy.png";
const kk = "/assets/halloffame/kk 1.png";
const ll = "/assets/halloffame/ll 1.png";
const sesi = "/assets/halloffame/sesi 1.png";
const sm = "/assets/halloffame/sm 1.png";
const startup = "/assets/halloffame/startup 1.png";
const tagic = "/assets/halloffame/tagic 1.png";
const utk = "/assets/halloffame/utk 1.png";
const ww = "/assets/halloffame/ww 1.png";

const itemsFirst = [
  {
    img: kk,
    alt: "KK",
    bgColor: "#a7f3d0", // emerald-200
    borderColor: "#6ee7b7", // emerald-300
  },
  {
    img: sesi,
    alt: "Sesi",
    bgColor: "#fef08a", // yellow-200
    borderColor: "#fde047", // yellow-300
  },
  {
    img: ll,
    alt: "Learn Linkage",
    bgColor: "#bbf7d0", // green-200
    borderColor: "#86efac", // green-300
  },
];

const itemsSecond = [
  {
    img: sm,
    alt: "Sm",
    bgColor: "#1c1917", // stone-900
    borderColor: "#57534e", // stone-600
  },
  {
    img: startup,
    alt: "Startup Lawyers",
    bgColor: "#fbcfe8", // pink-200
    borderColor: "#f9a8d4", // pink-300
  },
  {
    img: tagic,
    alt: "Tagic Insure",
    bgColor: "#dbeafe", // blue-200
    borderColor: "#93c5fd", // blue-300
  },
];

const itemsThird = [
  {
    img: utk,
    alt: "Uttkarast Vihaan",
    bgColor: "#e4e4e7", // zinc-200
    borderColor: "#d4d4d8", // zinc-300
  },
  {
    img: ww,
    alt: "Wealth Grow",
    bgColor: "#fecdd3", // rose-200
    borderColor: "#fda4af", // rose-300
  },
];

const smallItems = [
  ...itemsFirst,
  ...itemsSecond,
  ...itemsThird,
];

const SliderColumn = ({ animation, items }) => {
  useEffect(() => {
    // Inject CSS animations into the document head
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes hallOfFameMoveUp {
        0% { transform: translateY(0%); }
        100% { transform: translateY(-50%); }
      }
      @keyframes hallOfFameMoveDown {
        0% { transform: translateY(-50%); }
        100% { transform: translateY(0%); }
      }
      .hall-of-fame-move-up {
        animation: hallOfFameMoveUp 8s linear infinite;
      }
      .hall-of-fame-move-down {
        animation: hallOfFameMoveDown 8s linear infinite;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const animationClass = animation === 'moveUp' ? 'hall-of-fame-move-up' : 'hall-of-fame-move-down';

  return (
    <div 
      className={`${animationClass} flex flex-col w-1/3 h-[80vh]`}
    >
      {items.concat(items).map((item, index) => (
        <div
          key={index}
          className="m-4 rounded-xl flex h-auto items-center justify-center border-2"
          style={{
            backgroundColor: item.bgColor,
            borderColor: item.borderColor,
          }}
        >
          <img src={item.img} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};

const SmallScreenSlider = ({ items }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 1;
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-nowrap space-x-4 p-4 overflow-hidden"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="min-w-[150px] rounded-xl flex h-auto items-center justify-center border-2"
          style={{
            backgroundColor: item.bgColor,
            borderColor: item.borderColor,
          }}
        >
          <img src={item.img} alt={item.alt} className="max-w-full" />
        </div>
      ))}
    </div>
  );
};

export default function HallOfFame() {
  return (
    <div
      className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-7 my-6 sm:my-10 lg:my-48 lg:relative px-4 sm:px-6 md:px-10 lg:px-20"
      data-aos="fade-up"
    >
{/* Left Panel - Success Stories Card */}
<div 
  className="w-full lg:w-[27%] border-2 rounded-2xl sm:rounded-3xl z-10 bg-white lg:h-[85vh] lg:absolute lg:bottom-4 p-4 sm:p-6 lg:p-8"
  style={{ borderColor: '#144F88' }} // bluetext
>
  <div className="flex justify-center lg:justify-start mb-4 lg:mb-8">
    <img 
      src={trophy} 
      alt="trophy" 
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-auto lg:h-auto object-contain" 
    />
  </div>
  <h1 
    className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-bold font-inter text-center lg:text-left mb-4 lg:mb-8"
    style={{ color: '#205F9C' }} // skyblue
  >
    Trusted by Top Companies
  </h1>
  <p className="font-inter text-sm sm:text-base md:text-lg lg:text-base font-medium text-center lg:text-left leading-relaxed">
    Over 70 Lakh+ candidates across India trust our platform for their career growth. 
    Join 1000+ leading companies who have successfully hired quality talent through 
    our verified candidate network and advanced hiring tools.
  </p>
</div>

      {/* Desktop Slider - Hidden on mobile/tablet */}
      <div 
        className="hidden lg:flex lg:w-3/4 overflow-hidden border-2 rounded-3xl ml-auto h-[60vh] lg:h-[80vh]"
        style={{ borderColor: '#144F88' }} // bluetext
      >
        <SliderColumn animation="moveUp" items={itemsFirst} />
        <SliderColumn animation="moveDown" items={itemsSecond} />
        <SliderColumn animation="moveUp" items={itemsThird} />
      </div>

      {/* Mobile/Tablet Slider - Hidden on desktop */}
      <div 
        className="lg:hidden flex flex-col w-full py-3 sm:py-4 overflow-hidden border-2 rounded-2xl sm:rounded-3xl"
        style={{ borderColor: '#144F88' }} // bluetext
      >
        <SmallScreenSlider items={smallItems} />
      </div>
    </div>
  );
}