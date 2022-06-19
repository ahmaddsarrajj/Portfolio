import React, { useContext } from "react";
import "./Works.css";
import Angular from "../../img/Angular.png";
import Css from "../../img/css.png";
import Html from "../../img/html.png";
import Javascript from "../../img/javascript.png";
import MongoDB from "../../img/mongodb.png";
import Nodejs from "../../img/nodejs.png";
import Reactss from "../../img/react.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { themeContext } from "../../Context";
import Fade from 'react-reveal/Fade';

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  //slick
 
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Technology used
          </span>
          <span>

          </span>
          <span>
            Here are a few technologies I've been working with recently
          </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
      <div className="content">
      <Fade right cascade>
          <div>
            <img src={Html} alt="html"/>
          </div>
          <div>
          <img src={Css} alt="css"/>
          </div>
          <div>
          <img src={Javascript} alt="javascript"/>
          </div>
          <div>
          <img src={Angular} alt="angular"/>
          </div>
          <div>
          <img src={Reactss} alt="react"/>
          </div>
          <div>
          <img src={Nodejs} alt="nodejs"/>
          </div>
          <div>
          <img src={MongoDB} alt="mongodb"/>
          </div>
     </Fade>
      </div>
  
      </div>
    </div>
  );
};

export default Works;
