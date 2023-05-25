import React from "react";
import { TbBuildingCircus } from "react-icons/tb";
import { GiTicket } from "react-icons/gi";
import {
  RiMailSendLine,
  RiCustomerService2Line,
  RiFacebookCircleFill,
  RiPinterestFill,
} from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <div className=" text-gray-200 text-lg bg-gray-800 flex px-6 lg:px-[10%] py-3 md:py-5 lg:py-7 justify-between">
          <div className="md:flex">
            <TbBuildingCircus size={37} className="hidden md:block" />
            <span className=" font-bold px-1 md:px-4">List Your Show</span>
            <span className="hidden lg:block">
              Got a show, event, activity, or a great experience? Partner with
              us & get listed on BookMyShow
            </span>
          </div>
          <button className="py-1 px-2 md:px-4 rounded bg-red-500">
            Contact today!
          </button>
        </div>
        <div className="text-gray-400 text-xs bg-gray-700 flex px-10 md:px-15 lg:px-[15%] py-1 md:py-5 justify-between">
          <div className="flex text-xs md:text-base flex-col gap-1 md:gap-2 lg:gap-4 items-center justify-center">
            <RiCustomerService2Line size={50} />
            <p className="hidden md:block">24/7 CUSTOMER CARE</p>
          </div>
          <div className="flex text-xs md:text-base flex-col gap-1 md:gap-2 lg:gap-4 items-center justify-center">
            <GiTicket size={50} />
            <p className="hidden md:block">RESEND BOOKING CONFIRMATION</p>
          </div>
          <div className="flex text-xs md:text-base flex-col gap-1 md:gap-2 lg:gap-4 items-center justify-center">
            <RiMailSendLine size={50} />
            <p className="hidden md:block">SUBSCRIBE TO THE NEWSLETTER</p>
          </div>
        </div>
        <div className="flex bg-gray-800 pt-10 md:pt-20 lg:pt-28 pb-6 md:pb-11 lg:pb-14 px-[2%] justify-between">
          <hr className=" w-[44%]" />
          <Link to="/">
            <img
              src="https://in.bmscdn.com/webin/common/icons/logo.svg"
              alt="logo"
              className="h-9 -my-4"
            />
          </Link>
          <hr className=" w-[44%]" />
        </div>
        <div className="flex gap-5 justify-center bg-gray-800 py-3 md:py-8">
          <a
            href="https://www.facebook.com/profile.php?id=100043075715514&mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <RiFacebookCircleFill size={37} color="gray" />
          </a>
          <a
            href="https://twitter.com/Mohan_5458"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle size={37} color="gray" />
          </a>
          <a
            href="https://instagram.com/m.o.h.a.n._._?igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram size={37} color="gray" />
          </a>
          <a
            href="https://youtube.com/@Mohan-bq5vu"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillYoutube size={37} color="gray" />
          </a>
          <a href="https://pin.it/26ItfgH" target="_blank" rel="noreferrer">
            <RiPinterestFill size={37} color="gray" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohan-krishna-chittiboina-814273262"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={37} color="gray" />
          </a>
        </div>
        <div className="text-gray-400 text-center bg-gray-800 pb-5 md:pb-20 pt-4 md:pt-8 text-xs px-4 md:px-10">
          <p>
            Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights
            Reserved.
          </p>
          <p>
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

//ecport to homepage,playspage,moviepage
