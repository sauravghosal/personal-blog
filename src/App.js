import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import "./css/style.css";

function App() {
  return (
    <div>
      <Navbar />
      <div id="colorlib-main">
        <section class="ftco-section ftco-no-pt ftco-no-pb">
          <div class="container">
            <div class="row d-flex">
              <div class="col-xl-8 py-5 px-md-5">
                <div class="row pt-md-4">
                  <div class="col-md-12">
                    <Post />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
