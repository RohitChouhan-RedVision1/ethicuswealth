import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Health Insurance",
  description:
    "Protect yourself and your family with comprehensive health insurance plans for every stage of life.",
};

const HealthInsurance = () => {
  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Health Insurance
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-[30px] lg:py-[60px]">
        {/* Introduction */}
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Secure. Support. Survive.
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Health insurance provides vital financial support during medical emergencies. At Contango Asset, we help you choose the right plan that ensures quality healthcare without financial stress.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">
            With rising medical costs, having health insurance is no longer a choice—it's a necessity. Our plans offer comprehensive coverage, cashless hospitalizations, and peace of mind for you and your loved ones.
          </p>
        </div>

        {/* Types of Health Insurance */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Types of Health Insurance
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Individual Health Insurance:</strong> Tailored coverage for a single individual.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Family Floater Plans:</strong> One plan covers the entire family under a single sum insured.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Critical Illness Plans:</strong> Lump-sum payout on diagnosis of specified critical illnesses.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Top-Up & Super Top-Up Plans:</strong> Extend your basic health coverage at a lower cost.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Senior Citizen Plans:</strong> Specially designed for the healthcare needs of elderly individuals.
            </li>
          </ul>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Health Insurance Plans
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Cashless Hospital Network:</strong> Access to a wide network of hospitals with hassle-free claims.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Tax Benefits:</strong> Save on taxes under Section 80D of the Income Tax Act.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>No Claim Bonus:</strong> Get increased coverage for claim-free years.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Pre & Post-Hospitalization:</strong> Coverage includes expenses before and after hospitalization.
            </li>
            <li className="flex items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl" />
              <strong>Customizable Add-Ons:</strong> Choose additional coverage like room rent waiver, maternity, and more.
            </li>
          </ul>
        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Health is wealth—and protecting it shouldn't be delayed. Invest in a health insurance plan that provides quality care, financial coverage, and peace of mind for you and your family.
          </p>
          <Link href="/contact-us">
             <button className="primarybutton">
              Get Covered Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance;
