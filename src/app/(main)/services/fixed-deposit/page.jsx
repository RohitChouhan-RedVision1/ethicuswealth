import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaRegCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Fixed Deposit",
  description:
    "Grow your savings securely with our flexible and high-return fixed deposit options tailored to your needs.",
};

const FixedDeposits = () => {
  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] bg-gray-500 overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Fixed Deposit
          </h1>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-[30px] lg:py-[60px]">
        {/* Introduction */}
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Secure Returns. Safe Investment.
        </p>
        <div className="mb-8">
          <p className=" text-gray-700">
            Fixed Deposits (FDs) are one of the safest and most reliable
            investment options available. At Contango Asset, we offer a range of
            FD solutions with attractive interest rates, flexible tenures, and
            guaranteed returns to help you grow your savings with peace of mind.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className=" text-gray-700">
            Whether you're saving for short-term goals or planning for a stable
            retirement, FDs are ideal for risk-averse investors seeking
            predictable income. Our solutions cater to different financial
            needs, ensuring that your money works for you while staying
            protected from market volatility.
          </p>
        </div>

        {/* Types of FDs */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Types of Fixed Deposits
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Standard FDs:</strong> Fixed tenure with guaranteed
              interest payout on maturity.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Tax-Saving FDs:</strong> Offers tax benefits under Section
              80C with a 5-year lock-in period.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Cumulative FDs:</strong> Interest is compounded and paid
              at maturity, ideal for long-term saving.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Non-Cumulative FDs:</strong> Interest is paid monthly,
              quarterly, or annually for regular income.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Senior Citizen FDs:</strong> Higher interest rates for
              investors aged 60 and above.
            </li>
          </ul>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Fixed Deposit Solutions
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Assured Returns:</strong> Guaranteed interest rate
              throughout the term, no market risks involved.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Flexible Tenure:</strong> Choose terms ranging from a few
              months to several years.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Competitive Interest Rates:</strong> Enjoy attractive
              returns across various FD products.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Safe & Secure:</strong> Deposits backed by trusted
              financial institutions with high credit ratings.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Premature Withdrawal Facility:</strong> Access funds in
              case of emergencies, with minimal penalty.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Loan Against FD:</strong> Get instant liquidity without
              breaking the FD.
            </li>
          </ul>
        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className=" text-gray-700 mb-4">
            Fixed Deposits are a smart way to secure your wealth and enjoy
            stable returns. Start investing with Contango Asset and choose a
            plan that matches your financial goals. Let your money grow safely
            and steadily.
          </p>
          <Link href="/contact-us">
            <Button className="bg-[var(--rv-secondary)] hover:bg-[var(--rv-primary)] px-6 py-5 rounded-full text-lg">
              Start Earning Securely
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FixedDeposits;
