import React from 'react'
import { getCountry, getFromCode } from '@/lib/data'
import Link from 'next/link'
import { count } from 'console';

export default async function Borders({ country }: { country: string[] }) {

    async function testing() {
        const results = await Promise.all(country.map(async (count: string) => {
            const result = await getFromCode(count)
            const data = result[0].name.common
            return data
        }))
        return results
    }
    let data
    if (country) {
        data = await testing()
    }

    return (
        <div className='flex flex-wrap gap-[10px] text-xs md:text-base'>
            {data &&
                data.map((name: string, index: number) => {
                    return (
                        <Link href={`/${name.toLocaleLowerCase()}`} key={index} className='rounded-[2px] border-2 dark:bg-[#2B3844] dark:border-[#2B3844] px-[27px] py-[4px]'>{name}</Link>
                    )
                })
            }
        </div>
    )
}
