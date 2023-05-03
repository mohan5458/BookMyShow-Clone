import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);


    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "200px",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const settings = {
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    return (
        <>
            <div className="lg:hidden md:block">
                <HeroSlider {...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-44 md:64 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>

            <div className="lg:block hidden">
                <HeroSlider {...settingsLg}>
                    {
                        images.map((image) => (
                            <div className="w-full px-2 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-80 rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
        </>
    );
}

export default HeroCarousal;