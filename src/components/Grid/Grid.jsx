import React from 'react';

const teams = [
    {
        name: "Alpine",
        logo: "images/logos/logo_alpine.png",
        hypercar: "images/cars/hypercar_alpine.png",
        lmgt3: "images/cars/lmgt3_alpine.png",
        bgColor: "bg-blue-500",
        hoverColor: "hover:border-r-blue-500 hover:border-t-blue-500"
    }, {
        name: "Aston Martin",
        logo: "images/logos/logo_aston.png",
        hypercar: "images/cars/hypercar_aston.png",
        lmgt3: "images/cars/lmgt3_aston.png",
        bgColor: "bg-teal-700",
        hoverColor: "hover:border-r-teal-700 hover:border-t-teal-700"
    }, {
        name: "BMW M",
        logo: "images/logos/logo_bmw.png",
        hypercar: "images/cars/hypercar_bmw.png",
        lmgt3: "images/cars/lmgt3_bmw.png",
        bgColor: "bg-blue-600",
        hoverColor: "hover:border-r-blue-600 hover:border-t-blue-600"
    }, {
        name: "Cadillac",
        logo: "images/logos/logo_cadillac.png",
        hypercar: "images/cars/hypercar_cadillac.png",
        lmgt3: "images/cars/lmgt3_cadillac.png",
        bgColor: "bg-yellow-600",
        hoverColor: "hover:border-r-yellow-600 hover:border-t-yellow-600"
    }, {
        name: "Ferrari",
        logo: "images/logos/logo_ferrari.png",
        hypercar: "images/cars/hypercar_ferrari.png",
        lmgt3: "images/cars/lmgt3_ferrari.png",
        bgColor: "bg-red-600",
        hoverColor: "hover:border-r-red-600 hover:border-t-red-600"
    }, {
        name: "Peugeot",
        logo: "images/logos/logo_peugeot.png",
        hypercar: "images/cars/hypercar_peugeot.png",
        lmgt3: "images/cars/lmgt3_peugeot.png",
        bgColor: "bg-lime-300",
        hoverColor: "hover:border-r-lime-300 hover:border-t-lime-300"
    }, {
        name: "Porsche",
        logo: "images/logos/logo_porsche.png",
        hypercar: "images/cars/hypercar_porsche.png",
        lmgt3: "images/cars/lmgt3_porsche.png",
        bgColor: "bg-red-800",
        hoverColor: "hover:border-r-red-800 hover:border-t-red-800"
    }, {
        name: "Toyota",
        logo: "images/logos/logo_toyota.png",
        hypercar: "images/cars/hypercar_toyota.png",
        lmgt3: "images/cars/lmgt3_toyota.png",
        bgColor: "bg-black",
        hoverColor: ""
    }
]

const Grid = () => {
    return (
        <section className="m-[50px]">
            <img
                src="vectors/strip_long.svg"
                className="h-[30px] object-cover object-right mb-4"
            />
            <h1 className="formula-1-black text-5xl lg:text-7xl duration-300">WEC Teams 2025</h1>
            <p className="titillium text-lg lg:text-2xl mt-4 duration-300">Discover all of our 8 manufacterers </p>
            <div className="flex flex-wrap gap-[50px] mt-[50px]">
                {teams.map((team) => (
                    <div id={team.name}
                         className={`w-[calc(100vw-100)] md:w-[calc(50%-25px)] rounded-tr-[20px] border-4 border-white border-r-black border-t-black ${team.hoverColor} hover:pt-3 hover:-mt-3 duration-150`}>
                        <div className="flex flex-row justify-between items-center mx-6 mt-2">
                            <div className="flex items-center">
                                <div className={`w-[5px] h-10 ${team.bgColor} mr-2`}></div>
                                <h2 className="formula-1-bold text-3xl md:text-2xl lg:text-3xl duration-300">{team.name}</h2>
                            </div>
                            <img className="w-1/4" src={team.logo} alt={`${team.name} logo`}/>
                        </div>
                        <img className="w-8/10 mx-auto pb-6" src={team.hypercar} alt={`${team.name}'s Hypercar`}/>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Grid;