import React from "react";

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

function FooterLinkSection({title, links}) {
    return (
        <div className=" mt-[50px] relative">
            <h4 className="text-2xl formula-1 mb-4">{title}</h4>
            <ul className="space-y-2 formula-1 text-sm">
                {links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
            {title === "ABOUT" && (
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="flex gap-7">
                        <img src="images/logos/logo_fia.png" alt="FIA logo" className="h-12"/>
                        <img src="images/logos/logo_aco.png" alt="ACO logo" className="h-12"/>
                    </div>
                </div>
            )}
        </div>
    );
}

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pb-[50px]">
                <div className="flex justify-center sm:justify-around gap-[50px] mx-[50px]">
                    {footerSections.map((section, index) => (
                        <FooterLinkSection
                            key={index}
                            title={section.title}
                            links={section.links}
                        />
                    ))}
                </div>
        </footer>
    )
}

export default Footer;