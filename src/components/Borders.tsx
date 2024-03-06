import React from 'react'
import { getCountry, getFromCode } from '@/lib/data'
import Link from 'next/link'

export default async function Borders({ country }: { country: string[] }) {

    async function testing() {
        const results = await Promise.all(country.map(async (count: string) => {
            const result = await getFromCode(count)
            const data = result[0].name.common

            return data

        }))
        return results
    }

    const data = await testing()

    return (
        <div className='flex flex-wrap gap-[10px]'>
            {
                data.map((name: string, index: number) => {
                    return (
                        <Link href={`/${name.toLocaleLowerCase()}`} key={index} className='rounded-[2px] border-2 px-[27px] py-[4px]'>{name}</Link>
                    )
                })
            }
        </div>
    )
}
