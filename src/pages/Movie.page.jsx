import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";



const Movie = () => {
    return (
        <>
            <MovieHero />
            <div className="container my-12 lg:w-5/6 mx-auto">
                <div className="flex flex-col items-start gap-3 w-9/12">
                    <h2 className=" font-bold text-2xl">About the movie</h2>
                    <p>Dom Toretto and his family must confront a terrifying new enemy who`s fueled by revenge.</p>
                </div>

                <div className="my-8 w-9/12 border-t border-black">
                    <hr color="gray" />
                </div>

                <div>
                    <h2 className=" font-bold text-2xl my-3">Top offers for you</h2>
                    <div className="flex w-1/3 py-3 px-4 bg-yellow-100 border-2 gap-2 border-yellow-400 border-dashed rounded-md">
                        <img src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?26082021190202" alt="logo" className="h-8" />
                        <div className="flex flex-col">
                            <p className=" text-lg">10% Off on munchies!</p>
                            <p className="text-gray-700">Tap to view details</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Movie;  //export to App.js