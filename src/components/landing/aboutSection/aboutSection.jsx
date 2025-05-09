"use client";
import React from "react";
import styles from "./AboutSection.module.css";
import Image from "next/image";
import SectionHeading from "../sectionHeading";

export default function AboutSection() {
  return (
    <div className="py-[30px] md:py-[60px]">
      <div
      className={`${styles.aboutContainer} max-w-screen-xl mx-auto px-3 md:px-0`}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="">
        <div className="flex flex-col">
          <div className="">
            <Image
              src={"/images/aboutus.webp"}
              alt="grid"
              width={500}
              height={500}
              className=""
            />
          </div>

          <div className={`${styles.whitePlaceholder} aniamtion-key-1`}>
                            <h1 className="text-[var(--rv-primary)] font-bold" >10+ Years</h1>
                            <p className="font-medium text-lg">of experience in finance</p>
                        </div>
        </div>
      </div>
      <div className={styles.textContent}>
        <h3 className="font-semibold text-[var(--rv-secondary)] text-anime-style-2">
          ABOUT US
        </h3>
        <h2 className="font-semibold mb-3 text-anime-style-1">
          Empowering Growth Through Ethicus Wealth Pvt. Ltd.
        </h2>
        <p className=" mb-3">
          Ethicus Wealth Pvt. Ltd. is a Wealth Management/Financial Planning
          Firm. This Firm running by professionals and Experience Management.
          Our Expertise is in "Need Base Financial Planning" which helps our
          customers to achieve their Financial Goals with proper Risk
          Management.
        </p>
        <p className="">
          The name 'Ethicus" is derived from the Greek word "ethos", which
          refers to character, moral nature, or guiding beliefs. The suffix
          "-icus" suggests a relation to or association with, often used in
          academic or formal contexts. Together, "Ethicus conveys a sense of
          ethical principles and integrity, aligning well with the concept of
          wealth management, where trust and moral responsibility are paramount.
          This name implies a commitment to managing wealth in a way that is not
          only profitable but also aligned with ethical standards and values.
        </p>
      </div>
    </div>
    </div>
  );
}
