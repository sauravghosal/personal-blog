import React from "react";
import navImg from "../images/bg_1.jpg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [open, setOpen] = React.useState(false);
  const navRef = React.useRef(null);
  const [activeLink, setActiveLink] = React.useState(0);

  React.useEffect(() => {
    console.log(open);
    if (open) {
      document.body.classList.add("offcanvas");
    } else {
      document.body.classList.remove("offcanvas");
    }
  }, [open]);

  React.useEffect(() => {
    function handleScrollOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !(
          event.target.tagName.toLowerCase() === "i" ||
          event.target.tagName.toLowerCase() === "a"
        )
      ) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleScrollOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScrollOutside);
    };
  }, [navRef]);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <a
        className={
          "js-colorlib-nav-toggle colorlib-nav-toggle " + (open ? "active" : "")
        }
        onClick={(e) => handleClick(e)}
      >
        <i></i>
      </a>
      <aside
        id="colorlib-aside"
        role="complementary"
        className="js-fullheight"
        ref={navRef}
        style={{ height: "100vh" }}
      >
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li className={activeLink == 0 ? "colorlib-active" : ""}>
              <Link to="/personal-blog">
                <a onClick={() => setActiveLink(0)}>Home</a>
              </Link>
            </li>
            <li className={activeLink == 1 ? "colorlib-active" : ""}>
              <Link to="/personal-blog/about">
                <a onClick={() => setActiveLink(1)}>About</a>
              </Link>
            </li>
            <li className={activeLink == 2 ? "colorlib-active" : ""}>
              <Link to="/personal-blog/contact">
                <a onClick={() => setActiveLink(2)}>Contact</a>
              </Link>
            </li>
            <li className={activeLink == 3 ? "colorlib-active" : ""}>
              <Link to="/personal-blog/add-post">
                <a onClick={() => setActiveLink(3)}>Add Post</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="colorlib-footer">
          <h1 id="colorlib-logo" className="mb-4">
            <Link to="/personal-blog">
              <a style={{ backgroundImage: `url(${navImg})` }}>
                Saurav <span>Ghosal</span>
              </a>
            </Link>
          </h1>
          <p class="pfooter">
            Copyright ©2020 All rights reserved | This template is made with{" "}
            <i class="icon-heart" aria-hidden="true"></i> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
