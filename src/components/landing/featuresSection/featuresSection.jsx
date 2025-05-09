"use client";
import React from "react";
import Link from "next/link";
import styles from './FeaturesSection.module.css';
import Image from "next/image";
import SectionHeading from "../sectionHeading";

export default function FeaturesSection() {
    const sectionDescription = "Discover the powerful tools and features we offer to help you manage your investments, track your financial goals, and make informed decisions with ease.";

    const features = [
        {
            title: "Portfolio Analysis",
            icon: "/images/pficon.png",
            description: "Gain deep insights into your investment portfolio with detailed analytics, performance tracking, and risk assessment to optimize your returns."
        },
        {
            title: "Invest Online",
            icon: "/images/investonline.png",
            description: "Seamlessly invest in a wide range of mutual funds, stocks, and other financial products online with just a few clicks."
        },
        {
            title: "Goal Tracker",
            icon: "/images/goaltraker.png",
            description: "Set and monitor your financial goals, such as retirement or education savings, and stay on track with personalized recommendations."
        },
        {
            title: "Research",
            icon: "/images/research.png",
            description: "Access in-depth research reports, market trends, and fund performance data to make well-informed investment decisions."
        },
    ];

    return (
        <div className="relative">
            <div className={`${styles.featuresContainer} max-w-screen-xl mx-auto`}>
                <div className={styles.gridBackground}></div>
                <div className={styles.textContent}>
                    <SectionHeading
                        heading="Features"
                        title="Top Features We Provide"
                        variant="light"
                        align="start"
                    />
                    <p className={`${styles.paragraph} mt-10 text-xl max-w-6xl`}>
                        {sectionDescription}
                    </p>
                    <Link href="/login" className={`${styles.knowMoreButton} mt-5`}>
                        Know More
                    </Link>

                    <Image
                                src={"/images/new mobile.png"}
                                alt={"mobile"}
                                width={300}
                                height={100}
                                className={"md:ml-20"}
                            />
                </div>
                <div className={styles.cardsContainer}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card} data-aos="fade-left" data-aos-duration="1000">
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={60}
                                height={60}
                                className={styles.cardIcon}
                            />
                            <h3 className="font-semibold">{feature.title}</h3>
                            <p className="text-lg">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}