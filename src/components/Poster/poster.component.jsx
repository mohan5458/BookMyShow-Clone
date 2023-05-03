import React from "react";

const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col items-start gap-1">
                <div className="px-4">
                    <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="{props.original_title}" className=" w-full h-full rounded-md" />
                </div>
                <h3 className={`text-sm md:text-lg font-bold h-16 px-4 ${props.isDark ? "text-white" : "text-gray-700"
                    }`}>{props.title}</h3>
                <p className={`text-sm md:text-lg px-4 ${props.isDark ? "text-white" : "text-gray-700"
                    }`}>{props.subtitle}</p>
            </div>
        </>
    );
};

export const PosterCommon = (props) => {
    return (
        <>
            <div className="flex flex-col items-start gap-1">
                <div className="px-4">
                    <img src={props.src} alt={props.title} className=" w-full h-full rounded-md" />
                </div>
                <h3 className={`text-sm md:text-lg font-bold px-4 ${props.isDark ? "text-white" : "text-gray-700"
                    }`}>{props.title}</h3>
                <p className={`text-sm md:text-base px-4 ${props.isDark ? "text-white" : "text-gray-700"
                    }`}>{props.subtitle}</p>
            </div>
        </>
    );
};

export default Poster; //to Premier