// import { Disclosure } from '@headlessui/react';
// import { Bars3Icon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import React from 'react';
// import Drawer from "./Drawer";
// import Drawerdata from "./Drawerdata";
// import Signdialog from "./Signdialog";
// import Registerdialog from "./Registerdialog";


// interface NavigationItem {
//     name: string;
//     href: string;
//     current: boolean;
// }

// const navigation: NavigationItem[] = [
//     { name: 'Home', href: '/', current: true },
//     { name: 'Services', href: '#services', current: false },
//     { name: 'About', href: '#about', current: false },
//     { name: 'Project', href: '#project', current: false },
//     { name: 'Help', href: '/', current: false },
// ]

// function classNames(...classes: string[]) {
//     return classes.filter(Boolean).join(' ')
// }

// const Navbar = () => {

//     const [isOpen, setIsOpen] = React.useState(false);

//     return (
//         <Disclosure as="nav" className="navbar" style={{ zIndex: 50 }}>
//             <>
//                 <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
//                     <div className="relative flex h-14 items-center justify-between">
//                         <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

//                             {/* LOGO */}

//                             <div className="flex flex-shrink-0 items-center">
//                                 <img
//                                     className="block h-12 w-40 lg:hidden"
//                                     src={'/assets/logo/logo.png'}
//                                     alt="dsign-logo"
//                                 />
//                                 <img
//                                     className="hidden h-full w-40 lg:block"
//                                     src={'/assets/logo/logo.png'}
//                                     alt="dsign-logo"
//                                 />
//                             </div>

//                             {/* LINKS */}

//                             <div className="hidden lg:block m-auto">
//                                 <div className="flex space-x-4">
//                                     {navigation.map((item) => (
//                                         <Link
//                                             key={item.name}
//                                             href={item.href}
//                                             className={classNames(
//                                                 item.current ? ' text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
//                                                 'px-3 py-4 text-lg font-normal opacity-75 space-links'
//                                             )}
//                                             aria-current={item.href ? 'page' : undefined}
//                                         >
//                                             {item.name}
//                                         </Link>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* SIGNIN DIALOG */}

//                         <Signdialog />


//                         {/* REGISTER DIALOG */}

//                         <Registerdialog />


//                         {/* DRAWER FOR MOBILE VIEW */}

//                         {/* DRAWER ICON */}

//                         <div className='block lg:hidden'>
//                             <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
//                         </div>

//                         {/* DRAWER LINKS DATA */}

//                         <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
//                             <Drawerdata />
//                         </Drawer>

//                     </div>
//                 </div>
//             </>
//         </Disclosure>
//     )
// }

// export default Navbar;

"use client";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useEffect } from 'react';
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '#services', current: false },
    { name: 'About', href: '#about', current: false },
    { name: 'Project', href: '#project', current: false },
    { name: 'Help', href: '/', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, rgba(2, 6, 23, 0.95) 50%, ${color})`;

    return (
        <Disclosure as={motion.nav} 
            style={{
                backgroundImage,
                zIndex: 50
            }}
            className="navbar" 
        >
            <>
                <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
                    <div className="relative flex h-14 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="block h-12 w-40 lg:hidden"
                                    src={'/assets/logo/logo.png'}
                                    alt="dsign-logo"
                                />
                                <img
                                    className="hidden h-full w-40 lg:block"
                                    src={'/assets/logo/logo.png'}
                                    alt="dsign-logo"
                                />
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:block m-auto">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-white hover:opacity-100' : 'hover:text-white hover:opacity-100',
                                                'px-3 py-4 text-lg font-normal opacity-75 space-links text-white'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        <Signdialog />


                        {/* REGISTER DIALOG */}

                        <Registerdialog />


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;