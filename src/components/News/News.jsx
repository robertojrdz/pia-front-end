import React from 'react';
import {ChevronRight} from "lucide-react";

const newsItems = [
    {
        category: "Peugeot",
        title: "Peugeot takes positives after Duval and di Resta star at Spa",
        imageUrl: "images/news/news_1.webp",
        imageAlt: "Peugeot Hypercar"
    },
    {
        category: "Lexus",
        title: "Hawksworth reprises Lexus ‘super-sub’ role for 24 Hours of Le Mans",
        imageUrl: "images/news/news_2.webp",
        imageAlt: "Hawksworth press conference"
    },
    {
        category: "Genesis",
        title: "Genesis' Hypercar venture 'more than a marketing initiative'",
        imageUrl: "images/news/news_3.webp",
        imageAlt: "Genesis's Hypercars",
        hidden: true
    },
    {
        category: "Vista",
        title: "Spa success erases Imola disappointment for Vista AF Corse",
        imageUrl: "images/news/news_4.webp",
        imageAlt: "Vista AF Corse",
        hidden: true
    }
];
const moreNewsItems = [
    {
        category: "Alpine",
        title: "Alpine climbing: French marque buoyed by victory bid in Belgium",
        imageUrl: "images/news/news_more_1.webp",
        imageAlt: "Peugeot Hypercar"
    },
    {
        category: "Entry List",
        title: "Full entry list published for 93rd 24 Hours of Le Mans",
        imageUrl: "images/news/news_more_2.webp",
        imageAlt: "Hawksworth press conference"
    },
    {
        category: "Mercedes",
        title: "Return of the Silver Arrows",
        imageUrl: "images/news/news_more_3.webp",
        imageAlt: "Genesis's Hypercars",
        hidden: true
    },
    {
        category: "Toyota",
        title: "Toyota celebrates Le Mans anniversary with iconic liveries",
        imageUrl: "images/news/news_more_4.webp",
        imageAlt: "Vista AF Corse"
    }
];

const News = () => {
    return (
        <>
            <section className="mx-[50px] mt-[50px]">
                <div className="flex-row md:flex sticky">
                    <FeaturedArticle
                        title="The two tiny letters that drove Genesis onto the starting grid"
                        imageUrl="images/news/news_main.jpg"
                        imageAlt="Genesis Hypercar concept"
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
            <section className="flex flex-col justify-center m-[50px]">
                <div className="flex items-center mb-[50px]">
                    <div className="flex flex-row items-center mr-6">
                        <p className="formula-1-bold text-2xl text-nowrap">More News</p>
                        <ChevronRight className="size-9"/>
                    </div>
                    <div className="grow-1">
                        <img
                            src="vectors/strip_long.svg"
                            className="h-[30px] object-cover object-right"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-[50px]">
                    {moreNewsItems.map((item, index) => (
                        <NewsItem
                            key={index}
                            category={item.category}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            imageAlt={item.imageAlt}
                            hidden={item.hidden}
                            more={true}
                        />
                    ))}
                </div>
            </section>
        </>
    )
};

function FeaturedArticle({title, imageUrl, imageAlt}) {
    return (
        <div className="w-full xl:w-[90%] duration-300">
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

function NewsItem({category, title, imageUrl, imageAlt, hidden, more}) {
    return (
        <div className={`${hidden ? `md:max-lg:hidden` : ``} bg-gray-100 rounded-[10px] overflow-hidden shadow-md ${more? `w-[calc(100vw-100px)] sm:w-[calc(50vw-75px)] md:w-[calc(33vw-66.667px)] lg:w-[calc(25vw-62.5px)]` : ``}`}>
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

export default News;