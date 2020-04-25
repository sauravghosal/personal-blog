import React from "react";
import navImg from "../images/bg_1.jpg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (document.body.classList.contains("offcanvas")) {
      //   $this.removeClass("active");
      document.body.classList.remove("offcanvas");
    } else {
      //   $this.addClass("active");
      document.body.classList.add("offcanvas");
    }
  };

  return (
    <>
      <a
        className="js-colorlib-nav-toggle colorlib-nav-toggle"
        onClick={handleClick}
      >
        <i></i>
      </a>
      <aside id="colorlib-aside" role="complementary" className="js-fullheight">
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li className="colorlib-active">
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="colorlib-footer">
          <h1 id="colorlib-logo" className="mb-4">
            <a href="index.html" style={{ backgroundImage: `url(${navImg})` }}>
              Saurav <span>Ghosal</span>
            </a>
          </h1>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
