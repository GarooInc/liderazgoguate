import React,{useState,useEffect} from "react"

import "./logoClouds.css"

const LogoClouds = () => {
    const logos = [
        "/images/logoclouds/1.png",
        "/images/logoclouds/2.png",
        "/images/logoclouds/3.png",
        "/images/logoclouds/4.png",
        "/images/logoclouds/5.png",
        "/images/logoclouds/6.png",
        "/images/logoclouds/7.png",
    ]

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl md:px-6">
          <div className="marquee-container">
          <div className="mx-auto mt-10 flex items-center gap-x-8 gap-y-16 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 marquee">
            {logos.map((logo) => (
                <img
                    key={logo}
                    src={logo}
                    alt=""
                    className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
                />
                ))
            }
          </div>
          </div>
        </div>
      </div>
    )
  }

export default LogoClouds
  