import React from 'react';

const About = () => {
    const InfoCard = ({title, description, image, reverse = false}) => (
        <div
            className={`flex flex-col ease-in-out ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-[50px] p-8 rounded-3xl duration-500 
                        hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:shadow-2xl hover:scale-105 bg-white shadow-lg
            `}
        >
            <div className="flex-1 space-y-1 md:space-y-6">
                <h2 className="text-2xl md:text-4xl formula-1-black text-gray-900">{title}</h2>
                <p className="text-lg titillium text-gray-700 leading-relaxed">{description}</p>
            </div>
            <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                        src={image}
                        alt={title}
                        className="size-full md:w-full md:h-80 object-cover"
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-200">
            {/* Hero Section */}
            <div className="relative min-h-[calc(60dvh-72px)] md:min-h-[calc(100dvh-72px)] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{backgroundImage: `url(images/about_0.jpg)`}}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

                <div className="relative z-10 text-center space-y-8 px-4">
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight formula-1-bold">
                        WHAT IS
                        <span
                            className="block bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent">
                        FIA WEC?
                        </span>
                    </h1>
                    <p className="text-lg titillium md:text-md text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Time out? No time for that. Big Game? We do 8 a year. That is an another level. This is WEC.
                    </p>
                </div>
            </div>

            {/* Content Sections */}
            <div className=" m-[50px]">
                <InfoCard
                    title="Presentation"
                    description="Established in 2012, the FIA World Endurance Championship (FIA WEC) is the top international series for long-distance racing, with events lasting 6 to 24 hours. Featuring 8 manufacturers and global races—including the legendary 24 Hours of Le Mans—the WEC blends cutting-edge technology, design freedom, and fierce competition to deliver thrilling, unpredictable motorsport action worldwide."
                    image="images/about_1.jpg"
                    index={0}
                />

                <InfoCard
                    title="The Hypercar Category"
                    description="The Hypercar class is the premier category in the FIA WEC, featuring elite prototypes and professional drivers. With performance-balanced regulations promoting cost-effective competition, 2024 saw Ferrari, Porsche, and Toyota share top honors. In 2025, 18 entries—including newcomers Aston Martin and expanded efforts from Cadillac—will battle for three prestigious titles across a fiercely competitive grid."
                    image="images/about_2.webp"
                    reverse={true}
                    index={1}
                />

                <InfoCard
                    title="The LMGT3 Category"
                    description="Introduced in 2024, the LMGT3 class replaced LMGTE and quickly became a hit in the FIA WEC. Based on FIA’s global GT3 platform, it features Pro-Am lineups and race-prepped road cars. With nine manufacturers, including debutant Mercedes-AMG, the 2025 season promises intense competition across an 18-car grid, with drivers and teams vying for multiple prestigious trophies."
                    image="images/about_3.jpg"
                    index={2}
                />

                <InfoCard
                    title="Race Weekend Format"
                    description="Before each race, teams take part in free practice to fine-tune their cars and adapt to track conditions. In 2025, qualifying includes a 12-minute session followed by a 10-minute Hyperpole for the top 10 in each class. The fastest driver in Hyperpole earns pole position—the prime spot at the front of the starting grid."
                    image="images/about_4.webp"
                    reverse={true}
                    index={3}
                />

                <InfoCard
                    title="Tire Partners"
                    description="Michelin, a founding partner of the FIA WEC, uses endurance racing to drive innovation and promote long-lasting performance, aligning with its sustainability goals. Goodyear, exclusive LMGT3 tyre supplier since 2024, delivered strong results with durable compounds and environmental leadership. In 2025, it supports nine manufacturers and introduces a new slick tyre, further advancing road and race technology."
                    image="images/about_5.jpeg"
                    index={4}
                />
                <InfoCard
                    title="Biofuel"
                    description="Since 2022, the FIA WEC has used Excellium Racing 100, a 100% renewable fuel developed by TotalEnergies. Made from wine residues and ETBE from circular economy sources, it significantly reduces greenhouse gas emissions—by at least 65% compared to traditional fossil fuels—while showcasing sustainable innovation in top-level motorsport."
                    image="images/about_6.webp"
                    reverse={true}
                    index={5}
                />
            </div>
        </div>
    );
};

export default About;