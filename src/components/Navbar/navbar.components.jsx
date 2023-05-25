import React from "react";
import { Link } from "react-router-dom";
// import logo from "../abcd/hero.jpg"
import { BiChevronRight, BiMenu, BiSearch } from "react-icons/bi";
import { AiOutlineCaretDown } from "react-icons/ai";

const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Visakhapatnam <BiChevronRight />
          </span>
        </div>
        <div className="flex gap-4">
          <div>
            <button className="bg-red-500 px-2 py-1 rounded-md text-sm font-bold">
              Use App
            </button>
          </div>
          <div className="w-6 h-6">
            <BiSearch className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="flex w-full">
      <img
        src="https://image.apktoy.com/img/2c/com.bt.bms/icon.png"
        alt="logo"
        className="w-16 h-16"
      />
      <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full focus:outline-none"
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
        />
      </div>
    </div>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="flex container mx-auto px-32 items-center justify-between h-8">
        <div className="flex items-center w-7/12 gap-3">
          <div>
            <Link to="/">
              <img
                src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                alt="logo"
                className="h-9 -my-4"
              />
            </Link>
          </div>
          <div className=" w-9/12 flex h-9 items-center bg-white gap-3 py-2 rounded-md">
            <i> </i>
            <BiSearch />
            <input
              type="search"
              className="w-full focus:outline-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-white text-sm font-semibold flex items-center hover:text-white cursor-pointer gap-4">
            Vizag <AiOutlineCaretDown />
            <button className="bg-red-500 text-white text-xs rounded px-3 py-1">
              Sign in.
            </button>
          </span>
          <div className="w-8 h-8 text-white">
            <BiMenu
              className="w-full h-full
                    "
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-navCol-700 p-4">
        <div className="md:hidden">{<NavSm />}</div>
        <div className="hidden lg:hidden md:flex">{<NavMd />}</div>
        <div className="hidden lg:flex">{<NavLg />}</div>
      </nav>
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
      <div className="hidden lg:block">
        <div className="bg-[#222539] flex container justify-between px-32 items-center">
          <div>
            <ul className="flex p-3 gap-4 text-sm text-white items-center">
              <li>
                <Link to="/movie/1234">Movies</Link>
              </li>
              <li className="flex">
                Stream
                <sup className=" text-red-600 mt-1 mr-1 font-bold text-[8px]">
                  NEW
                </sup>
              </li>
              <li>Events</li>
              <li>
                <Link to="/plays">Plays</Link>
              </li>
              <li>Sports</li>
              <li>Activities</li>
              <li>Buzz</li>
            </ul>
          </div>
          <div>
            <ul className="flex p-3 gap-4 text-sm text-white items-center">
              <li>ListYourShow</li>
              <li>Corporates</li>
              <li>Offers</li>
              <li>GiftCards</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
