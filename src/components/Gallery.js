import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Wheel from "../assets/images/portfolio/wheel.jpg";
import Train from "../assets/images/portfolio/train.jpg";
import Street from "../assets/images/portfolio/street.jpg";
import Tree from "../assets/images/portfolio/tree.jpg";
import Night from "../assets/images/portfolio/night.jpg";
import Station from "../assets/images/portfolio/station.jpg";
import Pond from "../assets/images/portfolio/pond.jpg";
import Buildings from "../assets/images/portfolio/buildings.jpg";

const Gallery = () => (
  <section id="gallery">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Gallery</h1>

        <div
          id="gallery-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns gallery-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={Wheel} />
                <div className="overlay">
                  <div className="gallery-item-meta">
                    <h5>Wheel</h5>
                    
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns gallery-item">
            <div className="item-wrap">
              <a href="#modal-02" title="">
                <img alt="" src={Train} />
                <div className="overlay">
                  <div className="gallery-item-meta">
                    <h5>Train</h5>
                  
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns gallery-item">
            <div className="item-wrap">
              <a href="#modal-03" title="">
                <img alt="" src={Street} />
                <div className="overlay">
                  <div className="gallery-item-meta">
                    <h5>Street</h5>
                    
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns gallery-item">
            <div className="item-wrap">
              <a href="#modal-04" title="">
                <img alt="" src={Tree} />
                <div className="overlay">
                  <div className="gallery-item-meta">
                    <h5>Tree</h5>
                    
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns gallery-item">
            <div className="item-wrap">
              <a href="#modal-05" title="">
                <img alt="" src={Night} />
                <div className="overlay">
                  <div className="gallery-item-meta">
                    <h5>Night</h5>
                    
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns gallery-item">
            <div className="item-wrap">
              <a href="#modal-06" title="">
                <img alt="" src={Station} />
                <div className="overlay">
                  <div className="gallery-item-meta">
                    <h5>Train Station</h5>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns gallery-item">
            <div className="item-wrap">
              <a href="#modal-07" title="">
                <img alt="" src={Pond} />
                <div className="overlay">
                  <div className="gallery-item-meta">
                    <h5>Pond</h5>
                    
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns gallery-item">
            <div className="item-wrap">
              <a href="#modal-08" title="">
                <img alt="" src={Buildings} />
                <div className="overlay">
                  <div className="gallery-item-meta">
                    <h5>Buildings</h5>
                    
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </section>
);

export default Gallery;
