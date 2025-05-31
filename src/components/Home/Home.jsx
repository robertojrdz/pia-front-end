import React from 'react';

const newsItems = [
    {
        category: "Spa",
        title: "Fuoco claims pole at Spa, Lexus on top in LMGT3",
        imageUrl: "images/news_fuoco-spa.webp",
        imageAlt: "Race car at Spa"
    },
    {
        category: "Spa",
        title: "Drivers forecasting 'fun, close' contest at Spa",
        imageUrl: "images/news_drivers.webp",
        imageAlt: "Drivers at press conference"
    },
    {
        category: "Spa",
        title: "Porsche hits form in drama-filled FP2",
        imageUrl: "images/news_porsche.webp",
        imageAlt: "Porsche race car",
        hidden: true
    },
    {
        category: "Broadcast",
        title: "How to watch the FIA WEC action from Spa",
        imageUrl: "images/news_broadcast.webp",
        imageAlt: "Broadcast equipment",
        hidden: true
    }
];
const previousRaces = [
    {country: "Qatar", date: "28", month: "FEB"},
    {country: "Italy", date: "20", month: "APR"}
];
const nextRaces = [
    {country: "France", date: "14", month: "JUN"},
    {country: "Brasil", date: "13", month: "JUL"}
];
const partners = [
    {
        alt: "Rolex Logo",
        src: "images/partner_1.png",
    },{
        alt: "Total Energies Logo",
        src: "images/partner_2.png",
    },{
        alt: "Michelin Logo",
        src: "images/partner_3.png",
    },{
        alt: "DHL Logo",
        src: "images/partner_4.png",
    },{
        alt: "Good Year Logo",
        src: "images/partner_5.png",
    },{
        alt: "Motul Logo",
        src: "images/partner_6.png",
    },{
        alt: "Bosch Logo",
        src: "images/partner_7.png",
    },
]

const Home = () => {
    return (
        <main className="flex-grow">
            {/* News Grid Section */}
            <section className="m-[50px]">
                <div className="flex-row md:flex sticky">
                    <FeaturedArticle
                        title="Fired-up Fuoco prolongs Ferrari's peerless pole run"
                        imageUrl="images/news_fuoco.jpg"
                        imageAlt="Ferrari team celebrating pole position"
                    />

                    {/* Smaller News Items */}
                    <div className="flex flex-wrap sm:grid sm:grid-cols-2 md:max-lg:grid-cols-1 gap-[50px]">
                        {newsItems.map((item, index) => (
                            <NewsItem
                                key={index}
                                category={item.category}
                                title={item.title}
                                imageUrl={item.imageUrl}
                                imageAlt={item.imageAlt}
                                hidden={item.hidden}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Race Calendar */}
            <section id="calendar" className="bg-gray-900 text-white py-10 px-[50px]">
                <div className="flex justify-center gap-6 max-w-6xl mx-auto px-4">
                    {/* Race Calendar Items */}
                    {previousRaces.map((race, index) => (
                        <>
                            <RaceCalendarItem
                                key={index}
                                country={race.country}
                                date={race.date}
                                month={race.month}
                                index={index}
                            />
                            <div className={`hidden min-w-[1px] bg-slate-600 rounded-full ${(index === 0) ? `md:hidden` : `md:block`} xl:block`}></div>
                        </>
                    ))}
                    <div className="scale-100 md:scale-90 lg:scale-100">
                        <img
                            src="vectors/flag_belgium.svg"
                            alt="Belgium flag"
                            className="w-16 m-auto mb-4"
                        />
                        <div className="text-center mb-6">
                            <h3 className="text-xs md:text-lg lg:text-xl formula-1-bold">TOTALENERGIES 6 HOURS OF</h3>
                            <h2 className="text-2xl text-nowrap sm:text-4xl md:text-4xl lg:text-5xl formula-1-bold">SPA-FRANCORCHAMPS</h2>
                            <p className="text-gray-400 mt-2 formula-1">FROM 8 TO 10 MAY 2025</p>
                        </div>
                        {/* Race Time */}
                        <RaceTime myTime="02:20" trackTime="10:20"/>
                    </div>

                    {/* Race Calendar Items */}
                    {nextRaces.map((race, index) => (
                        <>
                            <div className={` hidden min-w-[1px] bg-slate-600 rounded-full ${(index === 1) ? `md-hidden` : `md:block`} xl:block`}></div>
                            <RaceCalendarItem
                                key={index}
                                country={race.country}
                                date={race.date}
                                month={race.month}
                                index={-index+1}
                            />
                        </>
                    ))}

                </div>
            </section>

            {/* Race Pass Banner */}
            <RacePassBanner/>

            {/* Team Standings */}
            <Standings/>

            {/* Partners Section */}
            <section className="pt-[50px] bg-gray-800 text-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-center text-sm formula-1-bold mb-6">OUR PARTNERS</h3>
                    <div className="flex flex-wrap justify-center gap-8 mb-[50px] mx-[50px]">
                        {partners.map((partner) => (
                            <img src={partner.src} alt={partner.alt} className="h-15"/>
                        ))}
                    </div>
                    <hr className="border-gray-600"/>
                </div>
            </section>
        </main>
    )
};

function FeaturedArticle({title, imageUrl, imageAlt}) {
    return (
        <div className="w-full lg:w-[120%] duration-300">
            <img
                src="vectors/strip.svg"
                alt="Strip"
                className="h-[28.819px] object-cover object-right md:ml-[-50px]"
            />
            <div className="h-[calc(100%-28.819px)] rounded-b-[10px] overflow-hidden mb-[50px] md:mb-[50px] md:mr-[50px]">
                <div className="h-full relative flex flex-col">
                    <div className="p-4">
                        <h2 className="formula-1-bold text-black text-4xl font-bold mb-2">{title}</h2>
                    </div>
                    <div className="flex-grow overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            className="size-full object-cover hover:scale-110 duration-500 ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function NewsItem({category, title, imageUrl, imageAlt, hidden}) {
    return (
        <div className={`${hidden ? `md:max-lg:hidden` : ``} bg-gray-100 rounded-[10px] overflow-hidden shadow-md`}>
            <div className="w-full h-auto overflow-hidden">
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-full object-cover  hover:scale-110 duration-500 ease-in-out"
                />
            </div>
            <div className="p-3 titillium">
                <span className="text-red-600 titillium-600">{category}</span>
                <p className="text-black">{title}</p>
            </div>
        </div>
    );
}

function RaceCalendarItem({country, date, month, index}) {
    return (
        <div className={`hidden scale-90 lg:scale-100 text-center my-auto ${(index === 0) ? `md:hidden` : `md:block`} xl:block`}>
            <div className="w-16 h-16">
                <img src={`vectors/flag_${country.toLowerCase()}.svg`} alt={`${country} flag`} className="w-16"/>
            </div>
            <div className="mt-2">
                <div className="text-xs text-gray-400 formula-1-bold">{country}</div>
                <div className="text-3xl formula-1-bold">{date}</div>
                <div className="text-sm text-gray-500 formula-1">{month}</div>
            </div>
        </div>
    );
}

function RaceTime({myTime, trackTime}) {
    return (
        <div className=" hidden justify-center mt-8 sm:flex">
            <div className="bg-gray-200 text-gray-900 rounded-md p-4 flex justify-between items-center gap-8">
                <img src="vectors/rolex.svg" alt="Rolex logo" className="h-8"/>
                <div>
                    <div className="flex flex-col gap-0">
                        <div className=" flex flex-row justify-between">
                            <div className="text-gray-600 mr-10 formula-1-bold">My time</div>
                            <div className="formula-1-bold">{myTime}</div>
                        </div>
                        <div className=" flex flex-row justify-between">
                            <div className="text-gray-600 formula-1">Track time</div>
                            <div className="formula-1">{trackTime}</div>
                        </div>
                    </div>
                </div>
                <img src="images/watch.png" alt="Clock icon" className="size-12"/>
            </div>
        </div>
    );
}

function RacePassBanner() {
    return (
        <section className="my-[50px] lg:mx-[50px]">
            <div className="bg-blue-900 rounded-md overflow-hidden relative">
                <img src="images/banner.gif" alt="Race car" className="w-full object-cover"/>
            </div>
        </section>
    );
}

function Standings() {
    // Data for Team Standings
    const teams = [
        {
            position: 1,
            name: "Ferrari",
            points: 136,
            color: "bg-red-600",
            logo: "images/logos/logo_ferrari.png",
            car: "images/cars/hypercar_ferrari.png",
            carColor: "bg-gradient-to-r from-orange-500 to-orange-600"
        },
        {
            position: 2,
            name: "Toyota",
            points: 71,
            color: "bg-white",
            logo: "images/logos/logo_toyota.png",
            car: "images/cars/hypercar_toyota.png",
            carColor: "bg-gradient-to-r from-gray-800 to-teal-400"
        },
        {
            position: 3,
            name: "BMW M",
            points: 64,
            color: "bg-blue-600",
            logo: "images/logos/logo_bmw.png",
            car: "images/cars/hypercar_bmw.png",
            carColor: "bg-gradient-to-r from-blue-800 to-blue-600"
        },
        {
            position: 4,
            name: "Alpine",
            points: 34,
            color: "bg-blue-500",
            logo: "images/logos/logo_alpine.png",
            car: "images/cars/hypercar_alpine.png",
            carColor: "bg-gradient-to-r from-red-700 to-red-500"
        },
        {
            position: 5,
            name: "Cadillac",
            points: 29,
            color: "bg-yellow-600",
            logo: "images/logos/logo_cadillac.png",
            car: "images/cars/hypercar_cadillac.png",
            carColor: "bg-gradient-to-r from-blue-600 to-blue-400"
        },
        {
            position: 6,
            name: "Porsche",
            points: 14,
            color: "bg-red-800",
            logo: "images/logos/logo_porsche.png",
            car: "images/cars/hypercar_porsche.png",
            carColor: "bg-gradient-to-r from-gray-600 to-gray-400"
        },
        {
            position: 7,
            name: "Peugeot",
            points: 10,
            color: "bg-lime-300",
            logo: "images/logos/logo_peugeot.png",
            car: "images/cars/hypercar_peugeot.png",
            carColor: "bg-gradient-to-r from-orange-500 to-orange-600"
        },
        {
            position: 8,
            name: "Aston Martin",
            points: 0,
            color: "bg-teal-700",
            logo: "images/logos/logo_aston.png",
            car: "images/cars/hypercar_aston.png",
            carColor: "bg-gradient-to-r from-gray-800 to-teal-400"
        },
    ];
    const topTeams = [
        {
            position: 2,
            name: "Toyota",
            logo: "images/logos/logo_toyota.png",
            car: "images/cars/hypercar_toyota.png",
            subtitle: "AMG PETRONAS\nFORMULA ONE TEAM",
            bgColor: "bg-white",
            accentColor: "bg-red-600"
        },
        {
            position: 1,
            name: "Ferrari",
            logo: "images/logos/logo_ferrari.png",
            car: "images/cars/hypercar_ferrari.png",
            subtitle: "FORMULA 1 TEAM",
            bgColor: "bg-red-600",
            accentColor: "bg-yellow-500"
        },
        {
            position: 3,
            name: "BMW M",
            logo: "images/logos/logo_bmw.png",
            car: "images/cars/hypercar_bmw.png",
            subtitle: "Red Bull\nRACING",
            bgColor: "bg-blue-900",
            accentColor: "bg-sky-700"
        }
    ];

    return (
        <div id="standings" className="min-h-screen my-[50px] bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="text-center pt-[50px] pb-[70px] ">
                <h2 className="text-3xl formula-1-wide tracking-wider text-white">
                    Team Standings
                </h2>
            </div>
            <div className="flex justify-center items-end gap-8 mb-[50px] px-4">
                {topTeams.map((team, index) => (
                    <div key={team.name} className={`relative ${index === 1 ? 'scale-y-120 scale-110' : 'hidden lg:block'}`}>
                        <div
                            className={`w-80 h-72 ${team.bgColor} rounded-2xl shadow-2xl overflow-hidden relative`}>
                            <div className="p-8 pt-2 text-center">
                                <img src={team.logo} alt={team.name}/>
                                <Place position={team.position}/>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-32 flex items-center justify-center">
                                <img src={team.car} alt={team.name + "hypercar"} className="px-[25px]"/>
                            </div>
                            <div className={`absolute bottom-0 left-0 right-0 h-2 ${team.accentColor}`}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-5xl mb-[50px] bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden mx-[50px] lg:mx-auto">
                {teams.map((team) => (
                    <div
                        key={team.name}
                        className="flex items-center justify-between py-6 pl-3 pr-6 md:pl-6 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                    >
                        <div className="flex items-center gap-3 md:gap-6">
                            <div className="w-8 formula-1-bold text-center">{team.position}</div>
                            <div className={`w-1 h-12 ${team.color} rounded-full`}></div>
                            <img src={team.logo} alt={team.name} className="h-8 sm:h-12"/>
                            <h3 className="formula-1-bold text-lg">{team.name}</h3>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <img src={team.car} alt={team.name + "hypercar"}
                                     className="hidden h-10 transform-[scaleX(-1)] md:block"/>
                            </div>
                            <div className="text-right">
                                <div className="text-xl titillium">{team.points} PTS</div>
                            </div>
                            <svg
                                className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-[.02px]"></div>
            <div className="fixed inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>
        </div>
    )
}

function Place({position}) {
    switch (position) {
        case 1:
            return <img src="vectors/place_first.svg" alt="First Place" className="w-4/5 absolute bottom-15"/>;
        case 2:
            return <img src="vectors/place_second.svg" alt="Second Place" className="w-4/5 absolute bottom-15"/>;
        case 3:
            return <img src="vectors/place_third.svg" alt="Third Place" className="w-4/5 absolute bottom-15"/>;
        default:
            return null;
    }
}

export default Home;