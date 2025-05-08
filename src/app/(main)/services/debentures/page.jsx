import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Debentures",
  description:
    "Explore fixed-return investment opportunities with debentures, ideal for income-focused investors seeking safety and stability.",
};

const Debentures = () => {
  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Debentures
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-[30px] lg:py-[60px]">
        {/* Introduction */}
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Fixed Income. Trusted Issuers.
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Debentures are a secure and predictable way to invest in debt instruments issued by reputable corporations. They offer fixed interest income and are ideal for investors seeking stability.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">
            Whether you're looking for monthly interest or capital appreciation, debentures provide a range of options with varying tenures and yields. Choose between secured or unsecured, listed or unlisted debentures based on your risk appetite.
          </p>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Features of Debentures
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Fixed Returns:</strong> Receive regular interest at fixed intervals—monthly, quarterly, or annually.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Secured Options:</strong> Invest in debentures backed by company assets for added security.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Tenure Flexibility:</strong> Choose from short- to medium-term tenures to suit your cash flow needs.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Listed & Unlisted:</strong> Options available in both stock exchanges and private placements.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Credit Ratings:</strong> Rated by agencies like CRISIL, ICRA, and CARE for risk transparency.
            </li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Invest in Debentures
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Regular Income:</strong> Perfect for retirees and income-seeking investors.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Lower Risk:</strong> Compared to equities, debentures offer more predictable returns.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Diversification:</strong> Add a fixed-income layer to your portfolio mix.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Liquidity:</strong> Listed debentures can be traded on exchanges before maturity.
            </li>
          </ul>
        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Looking for stable, periodic income with lower market risk? Debentures may be the right choice for your financial goals.
          </p>
          <Link href="/contact-us">
            <Button className="bg-[var(--rv-secondary)] hover:bg-[var(--rv-primary)] px-6 py-5 rounded-full text-lg">
              Start Investing in Debentures
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Debentures;
