import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="h-10 inPhone my-2">
      <div className="flex content-center">
        <div className="flex items-center cursor-pointer ml-auto lg:ml-16">
          <img
            onClick={() => navigate("/")}
            src={logo}
            className="logoWeb"
            alt=""
          />
          <h3 className="text-md font-bold opacity-[.70]">Krushi-Connect</h3>
        </div>
        <div>
  
</div>
        <div className="flex-2 w-6/12 mx-auto">
          <ul className="flex mt-4 items-around">
            <li
              onClick={() => navigate("/")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:bg-lime-200 rounded-lg px-2 py-1 lg:ml-7 ml-6 mr-1.5 "
            >
              Home
            </li>
            {/* <li
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:bg-lime-200 rounded-lg px-2 py-1 ml-6 mr-1.5"
              onClick={() => navigate("/voice")}
            >
              Voice Help
            </li> */}
            <li
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:bg-lime-200 rounded-lg px-2 py-1 ml-6 mr-1.5"
              onClick={() => navigate("/crop")}
            >
              Crop Recommendation
            </li>
            <li
              onClick={() => navigate("/fertilizer")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:bg-lime-200 rounded-lg px-2 py-1 ml-6 mr-1.5"
            >
              Fertilizer Recommendation
            </li>
            <li
              onClick={() => navigate("/disease")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:bg-lime-200 rounded-lg px-2 py-1 ml-6 mr-1.5"
            >
              Disease Prediction
            </li>
            {/* <li
              onClick={() => navigate("/sms")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:bg-lime-200 rounded-lg px-2 py-1 ml-6 mr-1.5"
            >
              SMS Service
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
