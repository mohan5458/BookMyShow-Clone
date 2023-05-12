import React, { useState, useEffect } from "react";
import axios from "axios";
// import { EntertainmentCardSlider } from "../components/Entertainment/Entertainment.component";
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";
// import { Premier } from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import { PosterSliderCommon } from "../components/PosterSlider/PosterSlider.component";
import { PremierImage, Events, EntertainmentImage } from "../config/TempPosters.config";
import Footer from "../components/Footer/footer.component";
// import Footer from "../components/Footer/Footer.component";
//export to App.js
export const HomePage = () => {

    const [popularRecomended, setPopularRecomended] = useState([]);

    useEffect(() => {
        const requestPopularRecomended = async () => {
            const getpopularRecomended = await axios.get("/movie/now_playing");
            setPopularRecomended(getpopularRecomended.data.results);
        };
        requestPopularRecomended();
    }, []);

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getpopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getpopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    const [popularUpCmg, setPopularUpCmg] = useState([]);

    useEffect(() => {
        const requestPopularUpCmg = async () => {
            const getpopularUpCmg = await axios.get("/movie/upcoming");
            setPopularUpCmg(getpopularUpCmg.data.results);

        };
        requestPopularUpCmg();
    }, []);


    return (
        <>
            <div className="flex flex-col gap-14">
                <div className=" w-5/6 mx-auto">
                    <PosterSlider
                        images={popularRecomended}
                        title="Recomended Movies" className="container" />
                </div>
                <img className="hidden md:block rounded-lg w-5/6 mx-auto my-5" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="Advertisement" />
                <div className="container mx-auto w-5/6 ">
                    <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-800 m-2">
                        The Best Of Live Events
                    </h1>
                    <EntertainmentCardSlider Image={EntertainmentImage} isSquare />
                </div>
                <div className="bg-navCol-100 pb-5">
                    <div className="container mx-auto w-5/6 flex flex-col gap-3 ">
                        <div className="flex">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="Premier" className="w-full py-2" />
                        </div>
                        <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand new releases every friday" isDark />
                    </div>
                </div>
                <div className=" w-5/6 mx-auto">
                    <PosterSlider
                        images={popularUpCmg}
                        title="Upcoming Movies" className="container" />
                </div>
                <div className=" w-5/6 mx-auto">
                    <PosterSliderCommon
                        images={PremierImage}
                        title="Online Streaming" className="container" />
                </div>
                <div className=" w-5/6 mx-auto">
                    <PosterSliderCommon
                        images={Events}
                        title="Outdoor Events" className="container" />
                </div>
            </div>
            <Footer />

        </>
    );
};