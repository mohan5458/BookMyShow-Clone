import React from "react";
import Poster from "../Poster/poster.component";
import { settings } from "../../config/PosterCarousal.config";
import Slider from "react-slick";
import { PosterCommon } from "../Poster/poster.component";

const PosterSlider = (props) => {
    return (
        <>
            <div className="flex flex-col items-start py-1 pl-3">
                <h3 className={`text-lg md:text-xl lg:text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"
                    }`}>{props.title}</h3>
                <p className={` text-xs md:text-sm ${props.isDark ? "text-white" : "text-gray-800"
                    }`}>{props.subtitle}</p>
            </div>
            <Slider {...settings} className="flex container">
                {props.images.map((image) => (
                    <Poster {...image} isDark={props.isDark} />
                ))}
            </Slider>
        </>
    );
};

export const PosterSliderCommon = (props) => {
    return (
        <>
            <div className="flex flex-col items-start py-1 pl-3">
                <h3 className={`text-lg md:text-xl lg:text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"
                    }`}>{props.title}</h3>
                <p className={` text-xs md:text-sm ${props.isDark ? "text-white" : "text-gray-800"
                    }`}>{props.subtitle}</p>
            </div>
            <Slider {...settings}>
                {props.images.map((image) => (
                    <PosterCommon {...image} isDark={props.isDark} />
                ))}
            </Slider>
        </>
    );
};

export default PosterSlider;