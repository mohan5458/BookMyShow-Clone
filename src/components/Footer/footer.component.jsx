import React from "react";
import { TbBuildingCircus } from "react-icons/tb";
import { GiTicket } from "react-icons/gi";
import { RiMailSendLine, RiCustomerService2Line, RiFacebookCircleFill, RiPinterestFill } from "react-icons/ri";
import { AiFillYoutube, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <div>
                <div className=" text-gray-200 text-lg bg-gray-800 flex px-[10%] py-7 justify-between">
                    <div className="md:flex items-center">
                        <TbBuildingCircus size={37} />
                        <span className=" font-bold px-4">List Your Show</span>
                        <span>Got a show, event, activity, or a great experience? Partner with us & get listed on BookMyShow</span>
                    </div>
                    <button className="py-1 px-4 rounded bg-red-500">Contact today!</button>
                </div>
                <div className="text-white text-xs bg-gray-700 flex px-[15%] py-5 justify-between">
                    <div className="flex flex-col gap-4 items-center"><RiCustomerService2Line size={55} /><p>24/7 CUSTOMER CARE</p></div>
                    <div className="flex flex-col gap-4 items-center"><GiTicket size={55} /><p>RESEND BOOKING CONFIRMATION</p></div>
                    <div className="flex flex-col gap-4 items-center"><RiMailSendLine size={55} /><p>SUBSCRIBE TO THE NEWSLETTER</p></div>

                </div>
                <div className="flex bg-gray-800 pt-28 pb-14 px-[2%] justify-between">
                    <hr className=" w-[44%]" />
                    <Link to="/"><img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="logo" className="h-9 -my-4" /></Link>
                    <hr className=" w-[44%]" />
                </div>
                <div className="flex gap-5 justify-center bg-gray-800 py-8">
                    <RiFacebookCircleFill size={37} color="gray" />
                    <AiFillTwitterCircle size={37} color="gray" />
                    <AiFillInstagram size={37} color="gray" />
                    <AiFillYoutube size={37} color="gray" />
                    <RiPinterestFill size={37} color="gray" />
                    <AiFillLinkedin size={37} color="gray" />
                </div>
                <div className="text-gray-400 text-center bg-gray-800 pb-20 pt-8 text-xs px-10">
                    <p>Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
                    <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;

//ecport to homepage,playspage,moviepage