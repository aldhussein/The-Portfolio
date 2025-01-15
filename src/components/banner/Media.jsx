import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaFileDownload } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import {Resume} from "../../assets/index";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in now any where
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/abdiladif-hussein-ali-ba896132b/" target='blank_'><FaLinkedinIn /></a>
          </span>
          <span className="bannerIcon">
              <a href={Resume} download={Resume}><FaFileDownload /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media
