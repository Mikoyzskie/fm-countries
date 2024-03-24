'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"]

export default function Filter() {

    const [showFilter, setShowFilter] = useState(false)
    return (
        <div className='relative'>
            <button className="shadow-md rounded-[5px] flex items-center gap-[47px] py-[18px] px-6 bg-white dark:bg-[#2B3844]" onClick={() => { setShowFilter(!showFilter) }}>
                <span className="text-xs md:text-sm">
                    Filter by Region
                </span>
                <svg className='fill-black dark:fill-white' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="expand-more">
                        <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M8.45 0.450001L5 3.9L1.55 0.450001L0.5 1.5L5 6L9.5 1.5L8.45 0.450001Z" />
                    </g>
                </svg>

            </button>
            <div className={clsx('absolute -bottom-[300%] left-0 w-full bg-white shadow-md py-4 px-6 rounded-[5px] flex flex-col gap-2 text-xs md:text-sm dark:bg-[#2B3844]',
                showFilter ? '' : 'hidden'
            )}>
                {
                    regions.map((region: string) => {
                        return (
                            <Link href={`/?filter=${region}`} key={region} className='leading-5'>{region}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
