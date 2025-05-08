import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Capital Gain Bonds",
  description:
    "Save on capital gains tax by investing in government-backed Capital Gain Bonds with fixed returns.",
};

const CapitalGainBonds = () => {
  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Capital Gain Bonds
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-[30px] lg:py-[60px]">
        {/* Introduction */}
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Save Taxes. Earn Steady Returns.
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Capital Gain Bonds (54EC Bonds) offer a smart way to save long-term capital gains tax under Section 54EC of the Income Tax Act. These bonds are issued by government-backed institutions and provide fixed, secure returns.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">
            When you sell a long-term capital asset like real estate and earn a capital gain, investing the proceeds in 54EC bonds within 6 months can help you save tax while earning steady interest.
          </p>
        </div>

        {/* Features of Capital Gain Bonds */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Features of 54EC Capital Gain Bonds
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Tax Savings:</strong> Save up to ₹50 lakhs in capital gains from tax liability.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>5-Year Lock-in:</strong> Bonds have a mandatory lock-in period of 5 years.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Fixed Interest:</strong> Earn an annual fixed interest (currently ~5% p.a.).
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Safe Investment:</strong> Issued by entities like NHAI and REC backed by the Government of India.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Minimum Investment:</strong> ₹10,000 with increments of ₹10,000, up to ₹50 lakhs per financial year.
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Invest in Capital Gain Bonds
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Tax Efficiency:</strong> Avoid long-term capital gains tax legally and efficiently.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Capital Preservation:</strong> Secure your gains with a low-risk, fixed-income option.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>No TDS:</strong> Interest income is taxable but TDS is not deducted at source.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Online/Offline Application:</strong> Easily invest through both digital and offline modes.
            </li>
          </ul>
        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Don’t let capital gains taxes eat into your profits. Invest smartly in Capital Gain Bonds and enjoy both tax savings and stable returns.
          </p>
          <Link href="/contact-us">
            <Button className="bg-[var(--rv-secondary)] hover:bg-[var(--rv-primary)] px-6 py-5 rounded-full text-lg">
              Invest in 54EC Bonds
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CapitalGainBonds;
