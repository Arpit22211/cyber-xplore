import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset >= height) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [height]);

  const navbarButton = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const rendered_height = document.getElementById("logo_header").clientHeight;
    setHeight(rendered_height);
  }, [height, handleScroll]);

  const navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("fixed-top");
  }

  return (
    <div className="full">
      <div
        className="m-0 d-flex align-items-center overflow-hidden"
        id="logo_header"
      >
        <Link className="navbar-brand" to="/">
          <h1 className="title">Cyber-Xplore</h1>
        </Link>
      </div>
      <nav
        id="navb"
        className={`navbar fix navbar-expand-lg navbar-light shadow-lg ${navbarClasses.join(
          " "
        )}`}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={() => {
            setIsNavCollapsed(false);
          }}
          ref={navbarButton}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarText"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                Domains
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link "
                to="/contact"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    navbarButton.current.click();
                  }
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            {" "}
            <Link className=" btn btn-primary p-1 LinkButton1" to="/">
              Login
            </Link>
            {"       "}
            <Link className=" btn btn-primary p-1 LinkButton1" to="/">
              Signup
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
