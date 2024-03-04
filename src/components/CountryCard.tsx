import React from 'react'
import Image from 'next/image'
import { getCountry } from '@/lib/data'
import Link from 'next/link'

interface CountryCard {
    svg: string;
    alt: string;
    name: string;
    population: number;
    region: string;
    capital: string[];
}

export default function CountryCard({ svg, alt, name, population, region, capital }: CountryCard) {

    return (
        <Link href={"/test space"} className='rounded-[5px] shadow-md overflow-hidden pb-'>
            <Image
                src={svg}
                alt={alt}
                width={264}
                height={160}
                className='max-h-[160px] h-full object-cover'
            />
            <div className='p-6 pb-[46px] flex flex-col gap-4'>
                <h2 className='font-extrabold text-lg leading-[26px]'>{name}</h2>
                <div className='flex flex-col gap-2 text-sm'>
                    <p className='leading-4'><span className='font-semibold'>Population:</span> {population}</p>
                    <p className='leading-4'><span className='font-semibold'>Region:</span> {region}</p>
                    <p className='leading-4'><span className='font-semibold'>Capital:</span> {capital}</p>
                </div>
            </div>
        </Link>
    )
}
