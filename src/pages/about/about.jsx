import React, { useState } from "react";
import BtnSlider from "./btnSlider";
import { slider_data } from "./slider.data";

import { team_data } from "./team.data";

import "./about.css";

const About = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== slider_data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slider_data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slider_data.length);
    }
  };

  return (
    <div className="about-page">
      <div className="top-about">
        <div></div>
        <div>
          <div className="about-text">
            <h2>HOME IS YOUR PERFECT UNIVERSE.</h2>
            <p>
              Do you know that the Danes and other Scandinavian people have such
              a thing as a “hygge”? This word describes incredible coziness,
              comfort, beauty, simplicity and harmony between soul, body and
              mind. And we have this concept of Homecult. In the pursuit of new
              trends, many designers forget about the main thing - comfort and
              coziness, but we will take care of this for sure . Along with the
              practicality and functionality of interior design, we will add
              even more heat. Now you can not only live in a beautiful house,
              you really want to cook, clean, invite guests, and even work. Meet
              the new generation cult - the cult of comfort, practicality and
              beauty in simplicity!
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="slider">
        <div className="slider-container">
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
          {slider_data.map((item, index) => (
            <div
              key={item.id}
              className={
                slideIndex === index + 1
                  ? "slider-image active"
                  : "slider-image"
              }
            >
              <img src={item.imgUrl} alt="slider" />
            </div>
          ))}
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
        </div>
      </div>
      <div className="work-stages">
        <div></div>
        <div>
          <div className="work-container">
            <h2>WORK STAGES</h2>
            <div className="circle-body" style={{ "--total": 8 }}>
              <p className="work-dot" style={{ "--i": 1 }}>
                <span>PRESENTATION</span>
              </p>
              <p className="work-dot" style={{ "--i": 2 }}>
                <span>DESIGN CONTRACT</span>
              </p>
              <p className="work-dot" style={{ "--i": 3 }}>
                <span>SPACE LAYOUT</span>
              </p>
              <p className="work-dot" style={{ "--i": 4 }}>
                <span>VIZUALIZATION</span>
              </p>
              <p className="work-dot" style={{ "--i": 5 }}>
                <span>DRAWINGS</span>
              </p>
              <p className="work-dot" style={{ "--i": 6 }}>
                <span>DESIGN CONCEPT</span>
              </p>
              <p className="work-dot" style={{ "--i": 7 }}>
                <span>SELECTION OF MATERIALS</span>
              </p>
              <p className="work-dot" style={{ "--i": 8 }}>
                <span>PROJECT CONTROL</span>
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="our-team">
        <div></div>
        <div>
          <div className="team-container">
            <h2>OUR TEAM</h2>
            <div className="team-images">
              {team_data.map((member) => (
                <div key={member.id} className="member">
                  <img src={member.imgUrl} alt="member images" />
                  <p>{member.name}</p>
                  <span>{member.profession}</span>
                </div>
              ))}
              <div className="join-team">
                <p>
                  JOIN <br /> THE TEAM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="idea-container">
        <div></div>
        <div></div>
        <div></div>
        <div>
          <div className="have-idea">
            <p>
              HAVE AN IDEA? <br /> TELL US.
            </p>
            <div>
              <span>DROP REQUEST</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <div>
          <div className="footer-container">
            <p>&copy; 2022. All rights reserved.</p>
            <p>AcademyPro Network</p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
