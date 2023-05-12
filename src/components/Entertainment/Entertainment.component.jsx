import React from "react";
import Slider from "react-slick";
import { NArrow, PArrow } from "../../config/PosterCarousal.config";

export const EntertainmentCard = (props) => {
    return (
        <>
            <div className="w-full h-full h-30 px-4">
                <img className="w-full h-full rounded-xl" src={props.src} alt="EntertainmentImage" />
            </div>
        </>
    );
};

export const EntertainmentCardCircle = (props) => {
    return (
        <>
            <div className="w-full h-full h-30 px-4">
                <img className=" h-32 w-32 rounded-full" src={props.src} alt="Cast &Crew" />
            </div>
        </>
    );
};

const EntertainmentCardSlider = (props) => {

    const settings = {
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        InitialSlide: 0,
        nextArrow: <NArrow />,
        prevArrow: <PArrow />,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {props.Image.map((image) => (
                    props.isSquare ?
                        <EntertainmentCard src={image} /> : <EntertainmentCardCircle src={image} />
                ))}
            </Slider>
        </>
    );
};

export default EntertainmentCardSlider;
