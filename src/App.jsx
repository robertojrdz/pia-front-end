import './App.css'

function App() {
    // Data for news items
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
            imageAlt: "Porsche race car"
        },
        {
            category: "Broadcast",
            title: "How to watch the FIA WEC action from Spa",
            imageUrl: "images/news_broadcast.webp",
            imageAlt: "Broadcast equipment"
        }
    ];

    // Data for race calendar
    const previousRaces = [
        {country: "Qatar", date: "28", month: "FEB"},
        {country: "Italy", date: "20", month: "APR"}
    ];
    const nextRaces = [
        {country: "France", date: "14", month: "JUN"},
        {country: "Brasil", date: "13", month: "JUL"}
    ];

    // Data for partners
    const partners = [
        "Rolex", "TotalEnergies", "Michelin", "DHL",
        "Goodyear", "Motul", "Bosch"
    ];

    // Data for footer links
    const footerSections = [
        {
            title: "ABOUT",
            links: ["FIAWEC.TV", "Hospitality", "Meet The Legends"]
        },
        {
            title: "MORE",
            links: ["Team Area", "Press Area"]
        },
        {
            title: "FOLLOW US",
            links: ["Facebook", "Instagram", "X (Twitter)", "YouTube", "Tik Tok", "Spotify"]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header/>

            {/* Main content */}
            <main className="flex-grow">
                {/* News Grid Section */}
                <section className="m-[50px]">
                    <div className="flex">
                        <FeaturedArticle
                            title="Fired-up Fuoco prolongs Ferrari's peerless pole run"
                            imageUrl="images/news_fuoco.jpg"
                            imageAlt="Ferrari team celebrating pole position"
                        />

                        {/* Smaller News Items */}
                        <div className="grid grid-cols-2 gap-[50px]">
                            {newsItems.map((item, index) => (
                                <NewsItem
                                    key={index}
                                    category={item.category}
                                    title={item.title}
                                    imageUrl={item.imageUrl}
                                    imageAlt={item.imageAlt}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Race Pass Banner */}
                <RacePassBanner date="MAY 8, 9, 10"/>

                {/* Race Calendar */}
                <section className="bg-gray-900 text-white py-10">
                    <div className="flex justify-around max-w-6xl mx-auto px-4">
                        {/* Race Calendar Items */}
                        {previousRaces.map((race, index) => (
                            <RaceCalendarItem
                                key={index}
                                country={race.country}
                                date={race.date}
                                month={race.month}
                            />
                        ))}
                        <div>
                            <img
                                src="vectors/flag_belgium.svg"
                                alt="Belgium flag"
                                className="w-16 m-auto mb-4"
                            />
                            <div className="text-center mb-6">
                                <h2 className="text-xl formula-1-bold">TOTALENERGIES 6 HOURS OF</h2>
                                <h1 className="text-3xl md:text-4xl formula-1-bold">SPA-FRANCORCHAMPS</h1>
                                <p className="text-gray-400 mt-2 formula-1">FROM 8 TO 10 MAY 2025</p>
                            </div>
                            {/* Race Time */}
                            <RaceTime myTime="02:20" trackTime="10:20"/>
                        </div>

                        {/* Race Calendar Items */}
                        {nextRaces.map((race, index) => (
                            <RaceCalendarItem
                                key={index}
                                country={race.country}
                                date={race.date}
                                month={race.month}
                            />
                        ))}

                    </div>
                </section>

                {/* Partners Section */}
                <section className="py-[50px] bg-gray-800 text-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-center text-sm formula-1-bold mb-6">OUR PARTNERS</h3>
                        <div className="flex flex-wrap justify-center gap-8 mb-[50px]">
                            <img src="images/partners-logos.png" alt="Partners logos" className="w-full px-[50px]"/>
                        </div>
                        <hr className="border-gray-600"/>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white pb-[50px]">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between gap-[50px]">
                        {footerSections.map((section, index) => (
                            <FooterLinkSection
                                key={index}
                                title={section.title}
                                links={section.links}
                            />
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}

// Header Component
function Header() {
    return (
        <header className="bg-red-600 py-4 px-6">
            <div className="max-w-6xl mx-auto">
                <img
                    src="images/logo.png"
                    alt="WEC Logo"
                    className="h-10"
                />
            </div>
        </header>
    );
}

// Featured Article Component
function FeaturedArticle({title, imageUrl, imageAlt}) {
    return (
        <div className="w-[70%]">
            <img
                src="vectors/strip.svg"
                alt="Strip"
                className="w-full ml-[-50px]"
            />
            <div className="rounded-b-[10px] overflow-hidden mr-[50px]">
                <div className="relative">
                    <div className="p-4">
                        <h2 className="formula-1-bold text-black text-4xl font-bold mb-2">{title}</h2>
                    </div>
                    <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="h-[51vh] w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

// News Item Component
function NewsItem({category, title, imageUrl, imageAlt}) {
    return (
        <div className="bg-gray-100 rounded-[10px] overflow-hidden shadow-md">
            <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-1/2 object-cover"
            />
            <div className="p-3 titillium">
                <span className="text-red-600 titillium-600">{category}</span>
                <p className="text-black">{title}</p>
            </div>
        </div>
    );
}

// Race Pass Banner Component
function RacePassBanner() {
    return (
        <section className="m-[50px]">
            <div className="bg-blue-900 rounded-md overflow-hidden relative">
                <img src="images/banner-1.gif" alt="Race car" className="h-full object-cover"/>
            </div>
        </section>
    );
}

// Race Calendar Item Component
function RaceCalendarItem({country, date, month}) {
    return (
        <div className="text-center my-auto">
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

// Race Time Component
function RaceTime({myTime, trackTime}) {
    return (
        <div className="flex justify-center mt-8">
            <div className="bg-gray-200 text-gray-900 rounded-md p-4 flex items-center gap-8">
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

// Partner Logo Component
function PartnerLogo({name}) {
    return (
        <img src="/api/placeholder/80/40" alt={name} className="h-8"/>
    );
}

// Footer Link Section Component
function FooterLinkSection({title, links}) {
    return (
        <div className="ml-[50px] mr-[50px] relative">
            <h4 className="text-2xl formula-1 mb-4">{title}</h4>
            <ul className="space-y-2 formula-1 text-sm">
                {links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
            {title === "ABOUT" && (
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="flex">
                        <img src="images/FIA-logo.png" alt="FIA logo" className="h-12"/>
                        <img src="images/ACO-logo.png" alt="ACO logo" className="h-12"/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App
