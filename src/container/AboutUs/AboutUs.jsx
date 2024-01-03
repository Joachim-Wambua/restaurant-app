import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="Letter Logo" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content-about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button type="button" className="custom__button" >Learn More</button>
      </div>

      <div className="app__aboutus-content-knife flex__center ">
        <img src={images.knife} alt="About Knife" />
      </div>

      <div className="app__aboutus-content-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button type="button" className="custom__button" >Learn More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
