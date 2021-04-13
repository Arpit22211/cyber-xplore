import React from "react";
import "./Footer.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CallIcon from "@material-ui/icons/Call";
import HomeIcon from "@material-ui/icons/Home";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="jumbotron p-5 mb-0 rounded-0 ">
        <div className="row">
          <div className="col-lg-5 px-4 mb-4">
            <div className="text-black h3 font-weight-bold">
              Our Products & Services
            </div>
            <hr className="bg-black" />
            <div className="description text-muted text-justify">
              <ul className=" d-flex flex-column list">
                <li>X-Product</li>
                <li>E-CyberXplore</li>
                <li>CX-Blog</li>
                <li>FreeLancing Services</li>
              </ul>
            </div>
            <br />
          </div>
          <div className="col-lg-3 px-4 mb-4">
            <div className="text-black h3 font-weight-bold">Keep Connected</div>
            <hr className="bg-black" />
            <div className="description-1 mx-auto">
              <div className="row">
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 facebook">
                      <Avatar>
                        <FacebookIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Like us on Facebook</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 twitter">
                      <Avatar>
                        <TwitterIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Follow us on Twitter</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 instagram">
                      <Avatar>
                        <InstagramIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Follow us on Instagram</div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 youtube">
                      <Avatar>
                        <YouTubeIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">Suscribe on YouTube</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 px-4 mb-4">
            <div className="text-black h3 font-weight-bold">
              Contact Information
            </div>
            <hr className="bg-black" />
            <div className="description-1 mx-auto">
              <div className="row">
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 call">
                      <Avatar>
                        <CallIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">+91 7988800474</div>
                  </Link>
                </div>
                <div className="row px-3 py-1">
                  <Link to="#" className="d-flex align-items-center link">
                    <div className="col ml-3 home">
                      <Avatar>
                        <HomeIcon />
                      </Avatar>
                    </div>
                    <div className="text-muted">
                      Punjabi Colony Bilaspur Rampur UP 244921.
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-black h3 font-weight-bold mt-4">
              Subscribe to Newsletter
            </div>
            <hr className="bg-black" />
            <div className="container d-flex justify-content-center">
              <form
                action="subscribe"
                className="form-inline d-flex justify-content-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group mb-2 mr-1">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-2">
                  Subscribe!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-flex rounded-0 bg-primary m-0 p-2 text-white text-center copyright">
        &#169; 2020 copyright{" "}
        <Link className="text-decoration-none text-white" to="/">
          Cyber-Xplore.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
