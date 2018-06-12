import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>Overview</h2>
<ul className="circle">
<li>It is a major economic, transport, logistic, political, and cultural center of the Russian Far East.</li> 
<li>The distance from Khabarovsk to Moscow is about 8,400 km.</li>
<li>The population of Khabarovsk is about 607,000 (2015), the area - 386 sq. km.</li>
<li>The phone code - +7 4212, the postal codes - 680000-680150</li>
</ul>
      </div>
    </div>
  </section>
);

export default About;
