import React from "react";
import about from "../images/about.jfif";
import "../css/style.css";
import "../css/animate.css";
import Loader from "../components/Loader";

const About = () => {
  const [loading, setLoading] = React.useState(true);
  return (
    <div id="colorlib-main" style={{ overflow: "hidden" }}>
      {loading ? (
        <>
          <Loader />
          <img
            style={{ display: "none" }}
            src={about}
            onLoad={() => {
              setTimeout(() => {
                setLoading(false);
              }, 500);
            }}
          />
        </>
      ) : (
        <section
          className="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
          id="about-section"
        >
          <div className="container-fluid px-0">
            <div className="row d-flex">
              <div className="col-md-6 d-flex">
                <div
                  className="img d-flex align-self-stretch align-items-center js-fullheight"
                  style={{ backgroundImage: `url(${about}`, height: "100vh" }}
                ></div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="text px-4 pt-5 pt-md-0 px-md-4 pr-md-5 ftco-animate">
                  <h2 className="mb-4">
                    I'm <span>Saurav Ghosal,</span> a CS Major @ Georgia Tech
                  </h2>
                  <p>
                    Hey there! I'm a second year CS major at Georgia Tech with
                    threads in Intelligence and People. Welcome to my personal
                    blog, where I will be getting a change to explore my
                    creative side, while developing my a techical skills. I made
                    this blog using ReactJS on the front-end, and a MongoDB
                    Stitch app for the back-end. I hope that you enjoy!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default About;
