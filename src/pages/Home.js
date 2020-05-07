import React from "react";
import image1 from "../images/image_1.jpg";
import Post from "../components/Post";

const Home = (props) => {
  return (
    <div id="colorlib-main">
      <section class="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container">
          <div class="row d-flex">
            <div class="col-xl-8 py-5 px-md-5">
              <div class="row pt-md-4">
                <div class="col-md-12">
                  {props.posts.map((post) => (
                    <Post post={post} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
