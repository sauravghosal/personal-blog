import React from "react";
import Navbar from "./components/Navbar";
import "./css/style.css";
import "./css/animate.css";
import "./css/flaticon.css";
import "./css/icomoon.css";
import "./css/ionicons.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const elRef = React.useRef();
  React.useEffect(() => {
    setTimeout(function () {
      elRef.current.classList.remove("show");
    }, 20);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div id="colorlib-page">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div id="ftco-loader" class="show fullscreen" ref={elRef}>
        <svg class="circular" width="48px" height="48px">
          <circle
            class="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke-width="4"
            stroke="#eeeeee"
          />
          <circle
            class="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke="#F96D00"
          />
        </svg>
      </div>
    </BrowserRouter>
  );
}

export default App;
