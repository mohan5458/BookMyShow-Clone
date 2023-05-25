import React from "react";
import { Link } from "react-router-dom";
import MovieHero from "../components/MovieHero/MovieHero.component";
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";
import { Cast, Crew, Movies } from "../config/TempPosters.config";
import { PosterSliderCommon } from "../components/PosterSlider/PosterSlider.component";
import Footer from "../components/Footer/footer.component";

const Movie = () => {
  return (
    <>
      <MovieHero />
      <div className="container my-12 lg:w-7/12 pl-3 md:pl-8 lg:pl-20">
        <div className="flex flex-col items-start gap-3 w-9/12 my-10">
          <h2 className=" font-bold text-2xl">About the movie</h2>
          <p>
            Dom Toretto and his family must confront a terrifying new enemy
            who`s fueled by revenge.
          </p>
        </div>

        {/* <div className="my-8 w-9/12 border-t border-black">
                    <hr color="gray" />
                </div> */}
        <hr color="gray" />

        <div className="my-10">
          <h2 className=" font-bold text-2xl my-3">Top offers for you</h2>
          <div className="flex w-[75%] md:w-1/2 lg:w-1/3 py-3 px-4 bg-yellow-100 border-2 gap-2 border-yellow-400 border-dashed rounded-md">
            <img
              src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?26082021190202"
              alt="logo"
              className="h-8"
            />
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
          title="You Might Also Like"
          className="container"
        />
      </div>
      <div className="lg:hidden">
        <div className="bg-[#F6FFDE] px-2 md:px-8">
          <ul className="flex p-1 justify-between items-center">
            <li>
              <Link to="/">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-stream-collection-202211151255.png"
                  alt="Home"
                  className="h-16 md:h-20"
                />
              </Link>
            </li>
            <li>
              <Link to="/movie/1234">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-movies-collection-202201201113.png"
                  alt="Movies"
                  className=" h-16 md:h-20"
                />
              </Link>
            </li>
            <li>
              <Link to="/plays">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-plays-collection-202201201113.png"
                  alt="Plays"
                  className="h-16 md:h-20"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-sports-collection-202201201113.png"
                  alt="Sports"
                  className="h-16 md:h-20"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-comedy-shows-collection-202201201113.png"
                  alt="Shows"
                  className="h-16 md:h-20"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/icd-see-all-collection-202201201113.png"
                  alt="All"
                  className="h-16 md:h-20"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Movie; //export to App.js
