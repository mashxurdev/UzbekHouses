import React from "react";

import "./contact.css";

const Contact = () => (
  <div className="contact-page">
    <div className="contact-body">
          <h2>ALOQA</h2>
      <div className="hero">
        <div className="top-hero">
          <div className="biz">
          <div className="email-us">
            <p>BIZGA YOZING</p>
            <p>
              <a href="mailto:info@homecult.com.ua">info@uzbekhouses.com.ua</a>
            </p>
          </div>
          <div className="call-us">
            <p>QO'NG'IROQ UCHUN</p>
            <p>
              <a href="/">+38 (067) 410 98 88</a> <br />
              <br />
              <a href="/"> +777 77 777 77 77 </a>
            </p>
          </div>
          </div>
        </div>
        <div className="bottom">
          <div className="work-days">
            <p>ISH VAQTI:</p>
            <span>
              DUSHANBA-SHANBA: <br />
              9:00 to 19:00
            </span>
          </div>
          <div className="social-network">
            <p>IJTIMOIY TARMOQLAR:</p>
            <a href="/">Facebook</a>
            <br />
            <br />
            <a href="/">Instagram</a>
          </div>
        </div>
      </div>
      <div></div>

    </div>
    <div className="contact-footer">
      <div className="footer-container">
        <p>&copy; 2022. All rights reserved.</p>
        <p>AcademyPro Network</p>
      </div>
    </div>
  </div>
);

export default Contact;
