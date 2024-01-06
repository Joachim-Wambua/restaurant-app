import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";

import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          1111 North Orleans Street Chicago IL 60654 United States
        </p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-344-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <img
          src={images.spoon}
          alt="Spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">
          Monday - Friday
        </p>
        <p className="p__opensans">08:00 AM - 2:00 AM</p>
        <p className="p__opensans">
          Saturday - Sunday
        </p>
        <p className="p__opensans">10:00 AM - 11:00 PM</p>
      </div>
    </div>

    <div className="footer_copyright">
      <p className="p__opensans">2024 The Bear. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
