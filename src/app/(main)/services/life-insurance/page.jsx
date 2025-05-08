import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Life Insurance",
  description:
    "Secure your family’s future with comprehensive life insurance plans tailored to your needs.",
};

const LifeInsurance = () => {
  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')]  overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Life Insurance
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-[30px] lg:py-[60px]">
        {/* Introduction */}
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Protect. Plan. Provide.
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Life insurance is more than just a policy—it’s peace of mind. At Contango Asset, our life insurance solutions help you safeguard your loved ones' financial future against uncertainties.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">
            Whether you’re looking to provide for your family, build long-term savings, or plan your estate, our range of life insurance plans are designed to meet your financial goals while ensuring protection.
          </p>
        </div>

        {/* Types of Life Insurance */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Types of Life Insurance
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Term Life Insurance:</strong> Pure protection plan offering a high sum assured at affordable premiums.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Whole Life Insurance:</strong> Lifetime coverage with a savings component.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>ULIPs:</strong> Combines life insurance with investment opportunities.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Endowment Plans:</strong> Insurance + savings with guaranteed returns.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Child Plans:</strong> Secure your child’s future education and needs.
            </li>
          </ul>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Life Insurance Plans
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Financial Protection:</strong> Ensure your family’s financial security in your absence.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Tax Benefits:</strong> Save on taxes under Section 80C and 10(10D) of the Income Tax Act.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Wealth Creation:</strong> Plans that help you grow wealth along with protection.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Flexible Payouts:</strong> Choose between lump-sum or regular income options.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Customizable Plans:</strong> Tailor benefits and riders to suit your life stage.
            </li>
          </ul>
        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Life is uncertain—but your family’s future doesn’t have to be. Invest in a life insurance plan that gives you peace of mind and financial security for those you love.
          </p>
          <Link href="/contact-us">
            <Button className="bg-[var(--rv-secondary)] hover:bg-[var(--rv-primary)] px-6 py-5 rounded-full text-lg">
              Get Insured Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LifeInsurance;
