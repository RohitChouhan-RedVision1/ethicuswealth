"use client";
import React from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function HeroSection({ sitedata }) {
  const a = `Welcome to ${sitedata.websiteName} where we believe that your financial journey is unique, and we are committed to guide you through every step. From building wealth to securing your future, we offer a range of solutions to help you achieve your goals and create the life you’ve always envisioned.`;

  return (
    <div className="max-w-screen-2xl mx-auto relative">
      <Image
        src={"/images/vectors/shape_icon.svg"}
        alt="grid"
        width={90}
        height={60}
        className="hidden md:block absolute top-32 right-0"
      />
      <Image
        src={"/images/vectors/star_icon.svg"}
        alt="grid"
        width={60}
        height={60}
        className="hidden md:block aniamtion-key-8 absolute top-80 left-28"
      />
      <div className="mt-1">
        <div className="text-center max-w-6xl mx-auto space-y-2">
          <h1 className="text-anime-style-1 text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Unlocking Your Path to Financial Freedom
          </h1>
          <p className="" data-aos="fade-up" data-aos-duration="600">
            {a}
          </p>
          <div className="pt-6">
            <Link
              href={"/about-us"}
            >
              <button className="primarybutton">Know More</button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${styles.heroContainer}`}
        data-aos="zoon-in"
        data-aos-duration="1000"
      >
        <div className={styles.gridBackground}></div>
        <div className={styles.personContainer}>
          <div className={`${styles.gradientCircle} rounded-t-full`}></div>
          <Image
            src="/images/banner-img 1.webp"
            alt="Person in suit"
            width={380}
            height={380}
            className={`${styles.personImage} w-[214px] md:w-[300px] lg:w-[385px]`}
          />
        </div>
        <div className={`${styles.placeholderLeft} hidden lg:block  p-5 aniamtion-key-2`}>
            
        </div>
        <div className={`${styles.placeholderRight}  aniamtion-key-4`}>
        {/* <div className="flex items-center mt-2">
        <img src="/images/icontop2.png" alt="Experience Icon" className="w-12 h-12 " />
        <div className="flex flex-col ">
            <span className="text-5xl font-bold text-[var(--rv-primary)]">30+</span>
            <p className="">Years Combined Experience</p>
            </div>
            
        </div>
        <div className="flex items-center mt-5">
        <img src="/images/icontop3.png" alt="Experience Icon" className="w-12 h-12 " />
        <div className="flex flex-col ">
            <span className="text-5xl font-bold text-[var(--rv-primary)]">30+</span>
            <p className=" font-semibold">Years Combined Experience</p>
            </div>
            
        </div> */}
        </div>
      </div>
    </div>
  );
}
