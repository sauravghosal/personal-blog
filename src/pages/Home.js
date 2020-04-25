import React from "react";
import image1 from "../images/image_1.jpg";
import Post from "../components/Post";

const posts = [
  {
    category: "Travel",
    comments: "5 comments",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    date: new Date().toDateString(),
    image: image1,
    title: "A Loving Heart is the Truest Wisdom",
  },
];

const Home = () => {
  return (
    <div id="colorlib-main">
      <section class="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container">
          <div class="row d-flex">
            <div class="col-xl-8 py-5 px-md-5">
              <div class="row pt-md-4">
                <div class="col-md-12">
                  {posts.map((post) => (
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
