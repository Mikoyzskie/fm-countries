import React from 'react'
import Image from 'next/image'
import { getCountry, getFromCode } from '@/lib/data'
import Link from 'next/link'

interface INative {
    official: string,
    common: string
}
interface ICurrency {
    name: string,
    symbol: string
}


export default async function Country() {
    const test = "belgium"
    const data = await getCountry(test)

    // console.log(data);

    return (
        <div className='mt-[90px] maxWidth'>
            <button className='flex items-center gap-[10px] mb-[90px]'>
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
            <div>
                {
                    data.map(async (info: any, index: number) => {
                        const keys: INative[] = Object.values(info.name.nativeName)
                        const last = keys.length - 1
                        const native = keys[last]

                        const currencies: ICurrency[] = Object.values(info.currencies)
                        const curr = currencies.map((current: ICurrency) => {
                            return current.name
                        })

                        const language = Object.values(info.languages)
                        const border = await Promise.all(info.borders.map(async (border: string, index: number) => {

                            const bord = await getFromCode(border)
                            const [test] = bord
                            return test
                        }))

                        console.log(border);


                        return (
                            <div key={index} className='flex gap-[120px] items-center'>
                                <Image
                                    src={info.flags.svg}
                                    alt={info.flags.alt}
                                    width={560}
                                    height={401}
                                    className='object-cover rounded-[10px]'
                                />
                                <div>
                                    <h1 className='text-[32px] font-extrabold mb-[23px]'>{info.name.common}</h1>
                                    <div className='flex justify-between gap-[141px]'>
                                        <div className='text-base leading-8'>
                                            <p><span className='font-semibold'>Native Name: </span> {native.common}</p>
                                            <p><span className='font-semibold'>Population: </span> {info.population.toLocaleString()}</p>
                                            <p><span className='font-semibold'>Region: </span> {info.region}</p>
                                            <p><span className='font-semibold'>Sub Region: </span> {info.subregion}</p>
                                            <p><span className='font-semibold'>Capital: </span> {info.capital}</p>
                                        </div>
                                        <div className='leading-8'>
                                            <p><span className='font-semibold'>Top Level Domain: </span> {info.tld}</p>
                                            <p><span className='font-semibold'>Currencies: </span> {curr.join(', ')}</p>
                                            <p><span className='font-semibold'>Languages: </span> {language.join(', ')}</p>

                                        </div>
                                    </div>
                                    <div>
                                        <span className='font-semibold'>Border Countries: </span>
                                        <div>
                                            {
                                                border.map((bord: string, index: number) => {


                                                    console.log(bord);

                                                    return (
                                                        <p key={index}>test</p>
                                                    )
                                                })
                                            }
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
