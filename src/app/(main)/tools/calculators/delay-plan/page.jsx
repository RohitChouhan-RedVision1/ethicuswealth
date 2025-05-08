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

export default function DelayCostCalculator() {
    const router = useRouter();
    const [monthlySIP, setMonthlySIP] = useState(5000); // Monthly SIP amount
    const [timePeriod, setTimePeriod] = useState(10); // Investment period in years
    const [expectedReturn, setExpectedReturn] = useState(7); // Expected annual return in %
    const [delayMonths, setDelayMonths] = useState(6); // Delay in months for starting SIP

    const [result, setResult] = useState(null);
    const [chartData, setChartData] = useState([]);

    const calculateDelayCost = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/calculators/delay-calculator?monthlySIP=${monthlySIP}&timePeriod=${timePeriod}&expectedReturn=${expectedReturn}&delayMonths=${delayMonths}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
            if (res.status === 200) {
                const data = res.data
                const totalAmountInvested = data.totalAmountInvested;
                const futureValueWithoutDelay = data.futureValueWithoutDelay;
                const futureValueAfterDelay = data.futureValueAfterDelay;
                const costOfDelay = data.costOfDelay;
                const yearlyData = data.yearlyData;
                setResult({
                    totalInvestment: Math.round(totalAmountInvested),
                    futureValue: Math.round(futureValueWithoutDelay),
                    lumpsumInvestment: Math.round(futureValueAfterDelay),
                    sipInvestment: Math.round(costOfDelay),
                });
                setChartData(yearlyData);
            }
        }
        catch (error) {
            console.log(error)
        }

    };

    useEffect(() => {
        calculateDelayCost();
    }, [monthlySIP, timePeriod, expectedReturn, delayMonths]);
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
                            <BreadcrumbPage className="">Delay Cost Calculator</BreadcrumbPage>
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
                        Delay Cost Calculator
                    </h1>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
                    <div className='col-span-1 border border-yellow-400 rounded-2xl bg-gray-50 p-5'>
                        <div className="sip-calculator container mx-auto p-3 sticky top-0 z-10">
                            <div className="input-fields mt-5 mb-10">
                                {/* Monthly SIP */}
                                <div className='flex justify-between'>
                                    <h1>Monthly SIP (₹)</h1>
                                    <div>
                                        <input
                                            type="text"
                                            value={monthlySIP.toLocaleString()}
                                            onChange={(e) => setMonthlySIP(parseFloat(e.target.value.replace(/,/g, '')))}
                                            className='font-semibold text-green-700 w-20 border-none bg-transparent'
                                        />
                                    </div>
                                </div>
                                <Input
                                    type="range"
                                    min="500"
                                    max="100000"
                                    step="500"
                                    value={monthlySIP}
                                    onChange={(e) => setMonthlySIP(parseFloat(e.target.value))}
                                    className="w-full text-gray-400"
                                />

                                {/* Time Period */}
                                <div className='items-center mt-5'>
                                    <div className='flex justify-between'>
                                        <h1>Time Period (Years)</h1>
                                        <input
                                            type="text"
                                            value={timePeriod}
                                            onChange={(e) => setTimePeriod(parseFloat(e.target.value))}
                                            className="font-semibold text-green-700 w-10 border-none bg-transparent"
                                        />
                                    </div>
                                    <Input
                                        type="range"
                                        min="1"
                                        max="30"
                                        step="1"
                                        value={timePeriod}
                                        onChange={(e) => setTimePeriod(parseFloat(e.target.value))}
                                        className="w-full text-gray-400"
                                    />
                                </div>

                                {/* Rate of Return */}
                                <div className='items-center mt-5'>
                                    <div className='flex justify-between'>
                                        <h1>Expected Return (%)</h1>
                                        <input
                                            type="text"
                                            value={expectedReturn}
                                            onChange={(e) => setExpectedReturn(parseFloat(e.target.value))}
                                            className="font-semibold text-green-700 w-10 border-none bg-transparent"
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

                                {/* Delay in SIP */}
                                <div className='items-center mt-5'>
                                    <div className='flex justify-between'>
                                        <h1>Delay in Starting SIP (Months)</h1>
                                        <input
                                            type="text"
                                            value={delayMonths}
                                            onChange={(e) => setDelayMonths(parseFloat(e.target.value))}
                                            className="font-semibold text-green-700 w-10 border-none bg-transparent"
                                        />
                                    </div>
                                    <Input
                                        type="range"
                                        min="0"
                                        max="24"
                                        step="1"
                                        value={delayMonths}
                                        onChange={(e) => setDelayMonths(parseFloat(e.target.value))}
                                        className="w-full text-gray-400"
                                    />
                                </div>
                            </div>

                            {result && (
                                <div className="mt-5">
                                    <div className='flex justify-between px-5 mb-3'>
                                        <p>Total Value</p>
                                        <p className='font-bold text-lg'>₹{result?.totalInvestment?.toLocaleString()}</p>
                                    </div>
                                    <hr className='mb-3' />
                                    <div className='flex justify-between px-5 mb-3'>
                                        <p>Future Value without Delay</p>
                                        <p className='font-bold text-lg'>₹{result?.futureValue?.toLocaleString()}</p>
                                    </div>
                                    <hr className='mb-3' />
                                    <div className='flex justify-between px-5 mb-3'>
                                        <p>Cost of Delay in Future Value</p>
                                        <p className='font-bold text-lg'>₹{result?.sipInvestment?.toLocaleString()}</p>
                                    </div>
                                    <hr className='mb-3' />
                                    <div className='flex justify-between px-5 mb-3'>
                                        <p>Future Value after Delay</p>
                                        <p className='font-bold text-lg'>₹{result?.lumpsumInvestment?.toLocaleString()}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <SippieChart
                            piedata={result}
                            title={'Delay Planning Projection'}
                            customLabels={{
                                invested: "Total Value",
                                return: "Future Value without Delay",
                            }}
                        />
                        <div className="mt-5">
                            <CalculatorReturnChart
                                data={chartData}
                                chartType='line'
                                customLabels={{
                                    xLabel: "Years",
                                    yLabel: "Amount (₹)",
                                }}
                                chartTitle="Delay Planning Projection"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
