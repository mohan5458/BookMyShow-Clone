import React from "react";
import { HiThumbUp } from "react-icons/hi"

const launchRazorPay = () => {
    let options = {
        key: "rzp_test_9wgc6ORPawxNYc",
        amount: 300 * 100,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Purchase on Rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done")
        },
        theme: { color: "#c4242d" }
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};

const MovieHero = () => {
    return (
        <>
            <div className="md:hidden">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1679316138.jpg" alt="Poster" />
            </div>

            <div className="hidden md:block lg:hidden">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1679316138.jpg" alt="Poster" />
            </div>

            <div className="relative hidden lg:block" style={{ height: "40rem" }} >
                <div className="absolute h-full w-full z-10"
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)" }}
                />

                <div className="absolute my-auto flex mx-40 top-20 z-30 gap-8">
                    <div className=" w-64 h-96">
                        <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fast-x-et00122562-1679316138.jpg" alt="poster" className="h-full w-full rounded-t-lg" />
                        <div className="w-64 text-white text-center bg-black py-2 rounded-b-lg text-sm">
                            <p>Releasing on 19 May,2023</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 items-start">
                        <span className="text-white font-bold text-4xl">Fast X</span>
                        <div className="flex items-baseline gap-2">
                            <span><HiThumbUp color="green" size="27px" className="-mb-1" /></span>
                            <span className="text-white text-2xl font-semibold">122K</span>
                            <span className="text-white text-lg font-light">are intrested</span>
                        </div>

                        <div className="flex border border-white py-2 px-4 rounded-lg gap-8 items-center">

                            <div>
                                <p className="text-xl font-medium text-white">Releasing on 19,may, 2023</p>
                                <p className="text-xs font-light text-white">Are you interested in watching this movie?</p>
                            </div>
                            <button className="bg-white text-black text-xs py-2 px-4 rounded-sm font-semibold">I'm intrested</button>

                        </div>

                        <div className="flex flex-col gap-3 items-start">
                            <div className="rounded bg-white px-2 py-1 w-11/12">
                                <ul className="flex gap-1 flex-wrap text-black font-medium">
                                    <li className="hover:underline hover:cursor-pointer">2D,</li>
                                    <li className="hover:underline hover:cursor-pointer"> 3D SCREEN X,</li>
                                    <li className="hover:underline hover:cursor-pointer"> MX4D,</li>
                                    <li className="hover:underline hover:cursor-pointer"> 3D,</li>
                                    <li className="hover:underline hover:cursor-pointer"> 4DX 3D,</li>
                                    <li className="hover:underline hover:cursor-pointer"> MX4D 3D,</li>
                                    <li className="hover:underline hover:cursor-pointer"> IMAX 3D,</li>
                                    <li className="hover:underline hover:cursor-pointer"> 4DX,</li>
                                    <li className="hover:underline hover:cursor-pointer"> IMAX 2D</li>
                                </ul>
                            </div>

                            <div className="rounded bg-white px-2 py-1">
                                <ul className="flex gap-1 flex-wrap text-black font-medium">
                                    <li className="hover:underline hover:cursor-pointer">English,</li>
                                    <li className="hover:underline hover:cursor-pointer">Telugu,</li>
                                    <li className="hover:underline hover:cursor-pointer">Hindi,</li>
                                    <li className="hover:underline hover:cursor-pointer">Tamil</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-white text-lg">
                            <ul className="flex gap-1">
                                <li>2h 14m •
                                </li>
                                <li className="hover:underline hover:cursor-pointer">Action,</li>
                                <li className="hover:underline hover:cursor-pointer">Adventure,</li>
                                <li className="hover:underline hover:cursor-pointer">Crime,</li>
                                <li className="hover:underline hover:cursor-pointer">Thriller</li>
                                <li>
                                    • UA</li>
                            </ul>
                        </div>

                        <button onClick={launchRazorPay} className="bg-[#f84464] px-16 py-3 rounded-md text-white font-semibold text-base">Book tickets</button>

                    </div>
                </div>

                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1679316138.jpg" alt="Poster" className=" w-full h-full" />

            </div>
        </>
    )
}

export default MovieHero;