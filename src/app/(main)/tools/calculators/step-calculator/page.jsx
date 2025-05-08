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
    const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
    const [investmentDuration, setInvestmentDuration] = useState(5); // Duration in years
    const [expectedReturn, setExpectedReturn] = useState(5);
    const [stepUpPercentage, setStepUpPercentage] = useState(5); // Step-up percentage
    const [result, setResult] = useState(null);
    const [chartData, setChartData] = useState([]);
    const calculateStepUpSip = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/calculators/step-calculator?monthlyInvestment=${monthlyInvestment}&investmentDuration=${investmentDuration}&expectedReturn=${expectedReturn}&stepUpPercentage=${stepUpPercentage}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
            if (res.status === 200) {
                const data = res.data
                const totalInvestment = data.totalInvestment;
                const futureValue = data.futureValue;
                const yearlyData = data.yearlyData;
                setResult({
                    totalInvestment: Math.round(totalInvestment),
                    futureValue: Math.round(futureValue),
                    wealthGained: Math.round(futureValue - totalInvestment),
                });
                setChartData(yearlyData);
            }
        }
        catch (error) {
            console.log(error)
        }

    };

    // Update the calculation when any of the investment values change
    useEffect(() => {
        calculateStepUpSip();
    }, [monthlyInvestment, investmentDuration, expectedReturn, stepUpPercentage]);

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
                            <BreadcrumbPage className="">Step-Up Calculator</BreadcrumbPage>
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
                        Step-Up Calculator
                    </h1>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
                    <div className='col-span-1 border border-yellow-400 rounded-2xl bg-gray-50 p-5'>
                        <div className="sip-calculator container mx-auto p-3 sticky top-0 z-10">
                            <div className="input-fields mt-5 mb-10">
                                <div>
                                    <div className='flex justify-between'>
                                        <h1>Monthly investment</h1>
                                        <div>
                                            <span className='font-semibold text-green-700'>₹</span>
                                            <input
                                                type="text"
                                                value={monthlyInvestment}
                                                onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
                                                className='font-semibold text-green-700 w-14 border-none bg-transparent'
                                            />
                                        </div>
                                    </div>
                                    <Input
                                        type="range"
                                        min="500"
                                        max="50000"
                                        step="500"
                                        value={monthlyInvestment}
                                        onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
                                        className="w-full text-gray-400"
                                    />
                                </div>
                                <div className='items-center mt-5'>
                                    <div className='flex justify-between'>
                                        <h1>Time period (Years)</h1>
                                        <input
                                            type="text"
                                            value={investmentDuration}
                                            onChange={(e) => setDuration(e.target.value)}
                                            className="font-semibold text-green-700 w-5 border-none bg-transparent"
                                        />
                                    </div>
                                    <Input
                                        type="range"
                                        min="1"
                                        max="40"
                                        step="1"
                                        value={investmentDuration}
                                        onChange={(e) => setDuration(e.target.value)}
                                        className="w-full text-gray-400"
                                    />
                                </div>

                                <div className='items-center mt-5'>
                                    <div className='flex justify-between'>
                                        <h1>Expected Return (%)</h1>
                                        <input
                                            type="text"
                                            value={expectedReturn}
                                            onChange={(e) => setExpectedReturn(parseFloat(e.target.value))}
                                            className="font-semibold text-green-700 w-5 border-none bg-transparent"
                                        />
                                    </div>
                                    <Input
                                        type="range"
                                        min="1"
                                        max="30"
                                        step="1"
                                        value={expectedReturn}
                                        onChange={(e) => setExpectedReturn(parseFloat(e.target.value))}
                                        className="w-full text-gray-400"
                                    />
                                </div>

                                {/* Step-up percentage field */}
                                <div className='items-center mt-5'>
                                    <div className='flex justify-between'>
                                        <h1>Step-up Rate (%)</h1>
                                        <input
                                            type="text"
                                            value={stepUpPercentage}
                                            onChange={(e) => setStepUpPercentage(parseFloat(e.target.value))}
                                            className="font-semibold text-green-700 w-5 border-none bg-transparent"
                                        />
                                    </div>
                                    <Input
                                        type="range"
                                        min="1"
                                        max="30"
                                        step="1"
                                        value={stepUpPercentage}
                                        onChange={(e) => setStepUpPercentage(parseFloat(e.target.value))}
                                        className="w-full text-gray-400"
                                    />
                                </div>
                            </div>

                            {result && (
                                <div className="mt-5">
                                    <div className='flex justify-between px-5 mb-3'>
                                        <p>Invested Amount</p>
                                        <p className='font-bold text-lg'>₹{result?.totalInvestment?.toLocaleString()}</p>
                                    </div>
                                    <hr className='mb-3' />
                                    <div className='flex justify-between px-5 mb-3'>
                                        <p>Growth</p>
                                        <p className='font-bold text-lg'>₹{result?.wealthGained?.toLocaleString()}</p>
                                    </div>
                                    <hr className='mb-3' />
                                    <div className='flex justify-between px-5 mb-3'>
                                        <p>Total Future Value</p>
                                        <p className='font-bold text-lg'>₹{result?.futureValue?.toLocaleString()}</p>
                                    </div>
                                    <hr />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <SippieChart
                            piedata={result}
                            title={'Current & Future Cost Of House Breakup'}
                            customLabels={{
                                invested: "Invested Amount",
                                return: "Growth",
                            }}
                        />
                        <div>
                            <CalculatorReturnChart data={chartData} title={"Step-Up Calculator"} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}