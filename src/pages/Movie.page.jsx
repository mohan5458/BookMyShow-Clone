import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";
import { Cast, Crew, Movies } from "../config/TempPosters.config";
import { PosterSliderCommon } from "../components/PosterSlider/PosterSlider.component";
import Footer from "../components/Footer/footer.component";



const Movie = () => {
    return (
        <>
            <MovieHero />
            <div className="container my-12 lg:w-7/12 ml-20">
                <div className="flex flex-col items-start gap-3 w-9/12 my-10">
                    <h2 className=" font-bold text-2xl">About the movie</h2>
                    <p>Dom Toretto and his family must confront a terrifying new enemy who`s fueled by revenge.</p>
                </div>

                {/* <div className="my-8 w-9/12 border-t border-black">
                    <hr color="gray" />
                </div> */}
                <hr color="gray" />

                <div className="my-10">
                    <h2 className=" font-bold text-2xl my-3">Top offers for you</h2>
                    <div className="flex w-1/3 py-3 px-4 bg-yellow-100 border-2 gap-2 border-yellow-400 border-dashed rounded-md">
                        <img src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?26082021190202" alt="logo" className="h-8" />
                        <div className="flex flex-col">
                            <p className=" text-lg">10% Off on munchies!</p>
                            <p className="text-gray-700">Tap to view details</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="my-8 ">
                    <h1 className="font-bold text-2xl py-4">Cast</h1>
                    <EntertainmentCardSlider Image={Cast} />
                </div>
                <hr />
                <div className="my-8 ">
                    <h1 className="font-bold text-2xl py-4">Crew</h1>
                    <EntertainmentCardSlider Image={Crew} />
                </div>
                <hr />
            </div>
            <div className="my-7 lg:w-4/6 mx-[5%]">
                <PosterSliderCommon
                    images={Movies}
                    title="You Might Also Like" className="container" />

            </div>
            <Footer />
        </>
    );
};

export default Movie;  //export to App.js