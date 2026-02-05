'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>

            <div className='relative container mx-auto bg-white text-black py-2 px-3 flex justify-between'>
                <div className='space-x-4'>
                    <Link href='/'>Home</Link>
                    <Link href='/posts'>Posts</Link>
                </div>

                <CiMenuFries size={25} onClick={() => setOpen(!open)} />

                {/* Absolute */}
                <div className={`${open ? 'absolute' : 'hidden'} right-0 top-12 bg-blue-400 p-2`}>
                    <div className='flex flex-col'>
                        <a href="#">Home</a>
                        <a href="#">Shop</a>
                        <a href="#" >Contact</a>
                    </div>
                </div>
            </div>

            {/* ei div ta .... bahire ekta click option dey jeta open ta false kre.. .. etar z index sobceye kom rakhte hbe... */}
            <div className={`bg-black/40 -z-50 ${open ? 'absolute' : 'hidden'} inset-0`} onClick={() => setOpen(false)} />
        </div>
    );
};

export default Navbar; 