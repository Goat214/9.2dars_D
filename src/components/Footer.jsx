import React from "react";

function Footer() {
  return (
    <div className="container footer">
      <div >
        <span className="info">Made with ❤️ and 🥑</span>
      </div>
      <div className="socila__icon__wrapper" >
        <a href="">
          <img className="socila__icon" src="../images/icon-instagram.svg" alt="" />
        </a>
        <a href="">
          <img className="socila__icon" src="../images/icon-bluesky.svg" alt="" />
        </a>
        <a href="">
          <img className="socila__icon" src="../images/icon-tiktok.svg" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
