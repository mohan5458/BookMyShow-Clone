import React, { useState, useEffect } from "react";
import axios from "axios";
import Poster from "../components/Poster/poster.component";
// import { PosterCommon } from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilter.component";
const Plays = () => {

    const [popularTop, setPopularTop] = useState([]);

    useEffect(() => {
        const requestPopularTop = async () => {
            const getpopularTop = await axios.get("/discover/tv");
            setPopularTop(getpopularTop.data.results);
        };
        requestPopularTop();
    }, []);

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse lg:justify-center gap-2">
                    <div className="lg:w-3/5">
                        <h2 className="text-2xl font-bold md:my-5">Plays in Vizag</h2>
                        <div className="flex gap-3 my-4 text-xs text-red-600">
                            <span className="px-3 py-2 border-y border-gray-300 rounded-2xl">Theater</span>
                            <span className="px-3 py-2 border-y border-gray-300 rounded-2xl">Story Telling</span>
                            <span className="px-3 py-2 border-y border-gray-300 rounded-2xl">Interactive Theater</span>
                            <span className="px-3 py-2 border-y border-gray-300 rounded-2xl">Monology</span>
                        </div>

                        <div className=" flex flex-wrap">
                            {popularTop.map((image) => (
                                <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                                    <Poster {...image} title={image.name} />
                                </div>
                            ))}
                        </div>


                    </div>
                    <div className="w-1/5">
                        <h2 className="text-2xl font-bold md:my-5">Filters</h2>
                        <div>
                            <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                            <PlaysFilter title="Language" tags={["Hindi", "English", "Telugu", "Marati", "Spanish", "Gujarati", "Urdu"]} />
                            <PlaysFilter title="Categories" tags={["Story Telling", "Interactive Theater", "Theater", "Monologue"]} />
                            <PlaysFilter title="Genres" tags={["Comedy", "Adventure", "Drama", "Thriller", "Musical", "Fantasy", "Suspense", "Si-Fi", "Mythological", "Psychological", "Adaptation", "Mystery", "Regional", "Tragedy", "Broadway", "Contemporary", "Romantic", "Historical"]} />
                            <PlaysFilter title="More Filters" tags={["Outdoor Events", "Fast Filling", "Kids Allowed", "Must Attend"]} />
                            <PlaysFilter title="Price" tags={["Free", "0-500", "500-2000", "Above 2000"]} />
                        </div>
                        <p className="text-red-600 border border-red-600 py-1 text-center rounded-lg my-4">Brouse By Venues</p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Plays;
 //export to app.js