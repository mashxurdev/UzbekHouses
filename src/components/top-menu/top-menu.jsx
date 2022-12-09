import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./top-menu.css";
import { TfiClose } from "react-icons/tfi";

const TopMenu = () => {

  const [addChange, setChange] = useState(false);
  const [addColor, setColor] = useState(false);

  const showMenu = () => {
    setChange(!addChange);
  };

  const showMenuOther = () => {
    setChange(!addChange);
    setColor(false);
  };

  const showMenuPro = () => {
    setChange(!addChange);
    setColor(true);
  };

  const [showRequest, setShowRequest] = useState(false);

  const showRequestFunc = () => {
    setShowRequest(!showRequest);
  };

  const hideRequestFunc = () => {
    setShowRequest(!showRequest);
  };

  return (
    <div className="top-menu">
      <div className={`navbar ${addChange || addColor ? "color" : ""}`}>
        <div className="left-menu">
          <ul>
            <li onClick={showMenu}>
              <div className="lines">
                <div className={`line ${addChange ? "change" : ""}`}></div>
                <div className={`line ${addChange ? "change" : ""}`}></div>
              </div>
              <p>{addChange ? "CLOSE" : "MENU"}</p>
            </li>
          </ul>
        </div>
        <div className="middle-menu">
          <p>UzbekHouses</p>
        </div>
        <div className="right-menu">
          <ul>
            <li>
              <p onClick={showRequestFunc}>BUYURTMA BERISH</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={`modal-menu ${addChange ? "show" : ""}`}>
        <div className="modal-container">
          <div className="home">
            <Link to="/" onClick={showMenuOther}>
              BOSH SAHIFA
            </Link>
            <a href="tel:+998975777728">T: +998 97 577 77 28</a>
          </div>
          <div className="projects">
            <Link to="/projects" onClick={showMenuPro}>
              LOIHALAR
            </Link>
          </div>
          <div className="/about">
            <Link to="about" onClick={showMenuPro}>
              BIZ HAQIMIZDA
            </Link>
          </div>
          <div className="contact">
            <Link to="/contact" onClick={showMenuOther}>
              ALOQA UCHUN
            </Link>
            <a href="mailto:uzbekhouses@gmail.com">uzbekhouses@gmail.com</a>
          </div>
        </div>
        <div className="modal-circle"></div>
      </div>
      <div className={`request-modal ${showRequest ? "show" : ""}`}>
        <TfiClose onClick={hideRequestFunc} />
        <h2>BUYURTMA BERISH</h2>
        <form>
          <input type="text" name="name" id="name" placeholder="Name" />
          <br />
          <input type="text" name="phone" id="phone" placeholder="Phone" />
          <br />
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <br />
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="2"
            placeholder="Your comment"
          ></textarea>
          <br />
          <button>Yuborish</button>
        </form>
      </div>
    </div>
  );
};

export default TopMenu;
