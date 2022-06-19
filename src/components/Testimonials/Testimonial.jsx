import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import { FaBusinessTime } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";
import { FaGraduationCap } from  "react-icons/fa";

const Testimonial = () => {
  

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Other </span>
        <span>skills </span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>

      <div className='p-content'>


        <div className='content d-flex flex-row flex-wrap'>
          <div className='field'>
          <FaBusinessTime size={70}/>
           <h5>Time management</h5>
          </div>

          <div className='field'>
          <FaMicrochip size={70}/>
          <h5>Interested to learn new technologies</h5>
          </div>

          <div className='field'>
          <FaGraduationCap size={70}/>
          <h5>The ability to learn and adapt quickly</h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
