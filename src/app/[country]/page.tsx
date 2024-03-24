import React from 'react'
import Image from 'next/image'
import { getCountry, getFromCode } from '@/lib/data'
import Link from 'next/link'
import Borders from '@/components/Borders'
import Back from '@/components/Back'

interface INative {
    official: string,
    common: string
}
interface ICurrency {
    name: string,
    symbol: string
}

export default async function Country({ params }: { params: { country: string } }) {

    const data = await getCountry(params.country)

    // console.log(data);

    return (
        <div className='mt-[40px] lg:mt-[90px] maxWidth pb-[60px] h-full'>
            <div className='px-[28px] lg:px-0'>
                <Back />
            </div>
            <div className='maxWidth h-full'>
                {
                    data.map((info: any, index: number) => {
                        const keys: INative[] = Object.values(info.name.nativeName)
                        const native: INative = keys[keys.length - 1]
                        const currencies: ICurrency[] = Object.values(info.currencies)
                        const language = Object.values(info.languages)

                        return (
                            <div key={index} className='flex gap-[44px] lg:gap-[120px] items-center flex-col lg:flex-row px-[28px] lg:px-0'>
                                <Image
                                    src={info.flags.svg}
                                    alt={info.flags.alt}
                                    width={560}
                                    height={401}
                                    className='object-cover rounded-[10px] shadow-md'
                                />
                                <div className='w-full'>
                                    <h1 className='text-[22px] md:text-[32px] font-extrabold mb-[23px]'>{info.name.common}</h1>
                                    <div className='flex flex-col md:flex-row justify-between mb-[34px] lg:mb-[68px] gap-8'>
                                        <div className='text-sm md:text-base leading-8 flex flex-col gap-1 md:gap-2'>
                                            <p><span className='font-semibold'>Native Name: </span> {native.common}</p>

                                            <p><span className='font-semibold'>Population: </span> {info.population.toLocaleString()}</p>
                                            <p><span className='font-semibold'>Region: </span> {info.region}</p>
                                            <p><span className='font-semibold'>Sub Region: </span> {info.subregion}</p>
                                            <p><span className='font-semibold'>Capital: </span> {info.capital}</p>
                                        </div>
                                        <div className='leading-8 text-sm md:text-base flex flex-col gap-1 md:gap-2'>
                                            <p><span className='font-semibold'>Top Level Domain: </span> {info.tld}</p>
                                            <p><span className='font-semibold'>Currencies: </span> {
                                                currencies[0].name
                                            }</p>

                                            <p><span className='font-semibold'>Languages: </span> {language.join(', ')}</p>

                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-[15px] text-sm md:text-base'>
                                        <span className='font-semibold'>Border Countries: </span>
                                        <div>
                                            <Borders country={info.borders} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
