import React from "react";
import logo from "../../images/logo.png";

const Preloader = () => {
  const showPreloader = localStorage.isPageLoaded ? false : true;

  setTimeout(() => {
    localStorage.isPageLoaded = true;
    window.location.reload();
  }, 5000);

  if (showPreloader) {
    return (
      <div className="Preloader">
        <div className="logo" style={{ backgroundImage: `url(${logo}) ` }} />
        <div className="progress">
          <div className="bar"></div>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default Preloader;
