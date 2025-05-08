"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { calculators } from "@/data/calculators";

export default function Page() {
    const [isMonthlySip, setIsMonthlySip] = useState(true);

    const performancedata = [
        {
            link: "/performance/sip-performance",
            title: "SIP Performace",
            image: "/images/calculators/performance.svg"
        },
        {
            link: "/performance/stp-performance",
            title: "STP Performace",
            image: "/images/calculators/performance.svg"
        },
        {
            link: "/performance/swp-performance",
            title: "SWP Performace",
            image: "/images/calculators/performance.svg"
        },
        {
            link: "/performance/fund-performance",
            title: "Fund Performace",
            image: "/images/calculators/performance.svg"
        },
        {
            link: "/performance/scheme-performance",
            title: "Scheme Performace",
            image: "/images/calculators/performance.svg"
        },
    ];

    return (
        <div className='max-w-screen-xl mx-auto h-screen flex flex-col justify-center '>
            <div className="flex space-x-4 mb-14">
                <Button
                    onClick={() => { setIsMonthlySip(true) }}
                    className={`text-xs rounded ${!isMonthlySip ? 'text-white' : 'text-gray-900 ring-1 ring-gray-700 bg-white'}`}
                >
                    <p>Calculators</p>
                </Button>
                <Button
                    onClick={() => { setIsMonthlySip(false) }}
                    className={`text-xs rounded ${isMonthlySip ? 'ring-1 ring-gray-700' : 'text-gray-900 ring-1 ring-gray-700 bg-white'}`}
                >
                    <p>Performance</p>
                </Button>
            </div>
            {isMonthlySip ?
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                    {calculators.map((item, index) => (
                        <Link href={item.route} key={index}>
                            <div className='px-5 py-4 hover:bg-white flex justify-between rounded items-center shadow-md group bg-zinc-950 ring-1 ring-gray-800'>
                                <div>
                                    <Image src={item.image} alt='' width={20} height={20} />
                                </div>
                                <div>
                                    <p className='font-bold text-white text-md group-hover:text-gray-950'>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                :
                <div className='grid grid-cols-3 gap-5'>
                    {performancedata.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <div className='px-5 py-4 hover:bg-white flex justify-between rounded items-center shadow-md group bg-zinc-950 ring-1 ring-gray-800'>
                                <div>
                                    <Image src={item.image} alt='' width={20} height={20} />
                                </div>
                                <div>
                                    <p className='font-bold text-white text-xl group-hover:[#F3F3E0]'>
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            }
        </div >
    )
}