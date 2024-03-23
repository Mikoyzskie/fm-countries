'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Back() {

    const router = useRouter();

    return (
        <button className='flex text-sm md:text-base items-center gap-[10px] mb-[64px] lg:mb-[90px] shadow-md px-6 py-[6px] rounded-sm' onClick={() => { router.back() }}>
            <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="call-made">
                    <path
                        id="Shape"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                        fill="#111517"
                    />
                </g>
            </svg>
            Back
        </button>
    )
}
