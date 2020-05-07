import React from "react";
import navImg from "../images/bg_1.jpg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [open, setOpen] = React.useState(false);
  const navRef = React.useRef(null);

  React.useEffect(() => {
    console.log(open);
    if (open) {
      document.body.classList.add("offcanvas");
    } else {
      document.body.classList.remove("offcanvas");
    }
  }, [open]);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleClickOutside);
    };
  }, [navRef]);

  // TODO: fix this - it is running twice
  const handleClick = (e) => {
    setOpen(!open);
    e.preventDefault();
    e.stopPropagation();
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
      >
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li className="colorlib-active">
              <Link to="/personal-blog">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/personal-blog/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link to="/personal-blog/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link to="/personal-blog/add-post">
                <a>Add Post</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="colorlib-footer">
          <h1 id="colorlib-logo" className="mb-4">
            <Link to="/">
              <a style={{ backgroundImage: `url(${navImg})` }}>
                Saurav <span>Ghosal</span>
              </a>
            </Link>
          </h1>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
