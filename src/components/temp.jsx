import React from "react";

function Temp() {
    return <h1>This is temp page</h1>

}




import React from "react";

const MovieHero0 = () => {
    return (
        <>
            <div className="md:hidden">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1679316138.jpg" alt="Poster" />
            </div>

            <div className="hidden md:block lg:hidden">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1679316138.jpg" alt="Poster" />
            </div>

            <div className="relative hidden lg:block" style={{ backgroundColor: "rgb(26, 26, 26)" }} >
                <div className="absolute h-full w-full z-10"
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)", backgroundImage: `url"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-super-mario-bros-movie-et00343051-1677046141.jpg"` }}
                />

                <div className="absolute z-20 w-64 h-96 left-16 top-10">
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fast-x-et00122562-1679316138.jpg" alt="poster" className="h-full w-full rounded-lg" />
                </div>
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1679316138.jpg" alt="Poster" className=" w-5/6 mx-auto" />

            </div>
        </>
    )
}

export default MovieHero0;