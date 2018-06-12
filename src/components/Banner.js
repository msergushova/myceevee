import React from "react";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Khabarovsk</h1>
      <h3>
      <span>Khabarovsk is a city in Russia, the capital of Khabarovsk krai and the Far Eastern Federal District. The city stands on the right bank of the Amur River, on the Middle Amur lowland, about 20 km from the border with China.</span> Let's
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about it
        </a>.
      </h3>
      <hr />
    </div>
  </div>
);

export default Banner;
