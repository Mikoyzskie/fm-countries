'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import Image from "next/image"

export default function Header() {

    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={36}
            height={36}
            sizes="36x36"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
        />
    )



    return (
        <header className='shadow py-6 sticky top-0 bg-white z-10 px-4 sm:px-4 lg:px-0 dark:bg-[#2B3844]'>
            <div className='maxWidth flex justify-between items-center'>
                <Link href="/" className='text-sm md:text-2xl font-extrabold'>Where in the World?</Link>
                <button className='flex items-center gap-2' onClick={() => { setTheme(resolvedTheme === "dark" ? "light" : "dark") }}>
                    {
                        resolvedTheme === "light" ? <FaRegMoon /> : <FaRegSun />
                    }
                    <span className='text-xs md:text-base font-semibold'>
                        {
                            resolvedTheme === "light" ? "Dark Mode" : "Light Mode"
                        }
                    </span>
                </button>

                {/* {
                    resolvedTheme === 'dark' && <button className='flex items-center gap-2' onClick={() => {
                        setTheme("dark"); console.log("dark");
                    }}>
                        <FaRegSun />
                        <span className='text-xs md:text-base font-semibold'>
                            Light Mode
                        </span>
                    </button>
                } */}

            </div>
        </header>
    )
}
