"use client";
import React, { useEffect, useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { SippieChart } from "@/components/charts/sippiechart";
import { CalculatorReturnChart } from "@/components/charts/calculatorReturnChart";
import axios from "axios";
import { calculators } from "@/data/calculators";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const [oneTimeInvestment, setOneTimeInvestment] = useState(500);
    const [investmentDuration, setInvestmentDuration] = useState(1);
    const [expectedReturn, setExpectedReturn] = useState(1);
    const [result, setResult] = useState(null);
    const [chartdata, setChartdata] = useState([])

    const calculateLumpsum = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/calculators/lumpsum-calculator?oneTimeInvestment=${oneTimeInvestment}&investmentDuration=${investmentDuration}&expectedReturn=${expectedReturn}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
            if (res.status === 200) {
                const data = res.data
                const futureValue = data.futureValue;
                const totalInvestment = data.totalInvestment;
                const yearlyData = data.yearlyData;
                setResult({
                    futureValue: Number(futureValue?.toFixed(2)),
                    totalInvestment: Number(totalInvestment?.toFixed(2))
                });
                setChartdata(yearlyData);
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    // Update the calculation when any of the investment values change
    useEffect(() => {
        calculateLumpsum();
    }, [oneTimeInvestment, investmentDuration, expectedReturn]);

    const setDuration = (years) => {
        const parsedYears = parseFloat(years);
        if (!isNaN(parsedYears)) {
            setInvestmentDuration(parsedYears);
        }
    };
    const handleCalculatorChange = (e) => {
        const selectedRoute = e.target.value;
        if (selectedRoute) {
            router.push(selectedRoute); // Navigate to selected route
        }
    };

    return (
        <div className="max-w-screen-xl py-32 mx-auto ">
            <div className="mb-5 flex justify-between">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-gray-800 hover:">
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-gray-500" />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/tools/calculators" className="text-gray-800 hover:">
                                Tools
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-gray-500" />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/tools/calculators" className="text-gray-800 hover:">
                                Calculators
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-gray-500" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="">Lumpsum Calculator</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="flex justify-between gap-4">
                    <h2 className="text-gray-800">Explore other calculators</h2>
                    <select
                        className="w-full border border-yellow-400 rounded-lg p-2 bg-gray-50 "
                        onChange={handleCalculatorChange}
                        defaultValue=""
                    >
                        <option value="" disabled className="bg-gray-50">
                            Select
                        </option>
                        {calculators.map((calc) => (
                            <option key={calc.title} value={calc.route} className="bg-gray-50">
                                {calc.title}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <div className="mb-10">
                    <h1 className="text-4xl font-bold ">
                        Lumpsum Calculator
                    </h1>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
                    <div className='col-span-1 border border-yellow-400 rounded-2xl bg-gray-50 p-5'>
                        <div className="Lumpsum-calculator container mx-auto p-3 sticky top-24 z-10">
                            <div className="input-fields mt-5 mb-10">
                                <div>
                                    <div className='flex justify-between'>
                                        <h1>
                                            Total investment
                                        </h1>
                                        <div>
                                            <span className='font-semibold text-green-700'>₹</span>
                                            <input
                                                type="text" // Change type to number for better input handling
                                                value={oneTimeInvestment}
                                                onChange={(e) => setOneTimeInvestment(parseFloat(e.target.value))}
                                                className='font-semibold text-green-700 w-14 border-none bg-transparent'
                                            />
                                        </div>
                                    </div>
                                    <Input
                                        type="range"
                                        min="500"
                                        max="50000"
                                        step="500"
                                        value={oneTimeInvestment}
                                        onChange={(e) => setOneTimeInvestment(parseFloat(e.target.value))}
                                        className="w-full text-gray-400"
                                    />
                                </div>
                                <div className='items-center mt-5'>
                                    <div className='flex justify-between'>
                                        <h1>
                                            Time period (Year)
                                        </h1>
                                        <input
                                            type="text" // Change type to number for better input handling
                                            value={investmentDuration}
                                            onChange={(e) => setDuration(e.target.value)} // Update duration
                                            className="font-semibold text-green-700 w-5 border-none bg-transparent"
                                        />
                                    </div>
                                    <Input
                                        type="range"
                                        min="1"
                                        max="40"
                                        step="1"
                                        value={investmentDuration}
                                        onChange={(e) => setDuration(e.target.value)} // Update duration
                                        className="w-full text-gray-400"
                                    />
                                </div>

                                <div className='items-center mt-5'>
                                    <div className='flex justify-between'>
                                        <h1>
                                            Expected Return (%)
                                        </h1>
                                        <input
                                            type="text" // Change type to number for better input handling
                                            value={expectedReturn}
                                            onChange={(e) => setExpectedReturn(e.target.value)} // Update duration
                                            className="font-semibold text-green-700 w-5 border-none bg-transparent"
                                        />
                                    </div>
                                    <Input
                                        type="range"
                                        min="1"
                                        max="30"
                                        step="1"
                                        value={expectedReturn}
                                        onChange={(e) => setExpectedReturn(e.target.value)} // Update duration
                                        className="w-full text-gray-400"
                                    />
                                </div>
                            </div>
                            {result && (
                                <div className="mt-5">
                                    <div className='flex justify-between px-5 mb-3'>
                                        <p>Invested Amount </p>
                                        <p className='font-bold text-lg'>₹{result?.totalInvestment.toFixed(2)}</p>
                                    </div>
                                    <hr className='mb-3' />
                                    <div className='flex justify-between px-5 mb-3'>
                                        <p>Wealth Gained </p>
                                        <p className='font-bold text-lg'>₹{Math.floor(result.futureValue - result.totalInvestment).toFixed(2)}</p>
                                    </div>
                                    <hr className='mb-3' />
                                    <div className='flex justify-between px-5 mb-3'>
                                        <p>Expected Amount </p>
                                        <p className='font-bold text-lg'>₹{result.futureValue.toFixed(2)}</p>
                                    </div>
                                    <hr />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="mb-3">
                            <SippieChart piedata={result} title={'Lumpsum Calculator'} />
                        </div>
                        <div>
                            <CalculatorReturnChart data={chartdata} title="Lumpsum" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}