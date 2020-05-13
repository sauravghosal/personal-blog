import React from "react";
import "../css/style.css";
import Comment from "../components/Comment";
import queryString from "query-string";
import Loader from "../components/Loader";
import author from "../images/author.png";

const SinglePost = (props) => {
  // query database for post id on load
  const [post, setPost] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // fetch all post data asynchronously
    async function fetchPostData() {
      const values = queryString.parse(props.location.search);
      const post = await props.displayPost(values.postid);
      setPost(post);
      setLoading(false);
      // const fetcher = await window.fetch(/some/deinnopt);
      // const response = await fetcher.json();
      // setData(response);
      // setIsLoading(false);
    }
    fetchPostData();
  }, []);

  return (
    <div id="colorlib-main">
      {loading ? (
        <Loader />
      ) : (
        <section className="ftco-section ftco-no-pt ftco-no-pb">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-8 px-md-5 py-5">
                <div
                  className="row pt-md-4"
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                >
                  <h1 class="mb-3" style={{ width: "100%" }}>
                    {post.title}
                  </h1>
                  <p style={{ width: "100%" }}>{post.description}</p>
                  <p style={{ width: "100%" }}>
                    <img src={post.image} alt="" class="img-fluid" />
                  </p>
                  <p style={{ width: "100%" }}>{post.content}</p>
                  <div class="tag-widget post-tag-container mb-5 mt-5">
                    <div class="tagcloud">
                      <a href="#" class="tag-cloud-link">
                        Life
                      </a>
                      <a href="#" class="tag-cloud-link">
                        Sport
                      </a>
                      <a href="#" class="tag-cloud-link">
                        Tech
                      </a>
                      <a href="#" class="tag-cloud-link">
                        Travel
                      </a>
                    </div>
                  </div>
                  <div className="about-author d-flex p-4 bg-light">
                    <div className="bio mr-5">
                      <img
                        src={author}
                        alt="author"
                        className="img-fluid mb-4"
                      />
                    </div>
                    <div className="desc">
                      <h3>{post.author}</h3>
                      <p>
                        Saurav Ghosal is a second-year student attending Georgia
                        Tech. He's taking this blog as an low-stakes opportunity
                        to put his technical skills to the test, while
                        developing his writing/communication abilities. Hope you
                        enjoy!
                      </p>
                    </div>
                  </div>
                  <div className="pt-5 mt-5">
                    <h3 className="mb-5 font-weight-bold">2 Comments</h3>
                    <ul className="comment-list">
                      <Comment />
                      <Comment />
                    </ul>

                    <div className="comment-form-wrap pt-5">
                      <h3 className="mb-5">Leave a comment</h3>
                      <form action="#" className="p-3 p-md-5 bg-light">
                        <div className="form-group">
                          <label for="name">Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                          />
                        </div>
                        <div className="form-group">
                          <label for="email">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                          />
                        </div>
                        <div className="form-group">
                          <label for="website">Website</label>
                          <input
                            type="url"
                            className="form-control"
                            id="website"
                          />
                        </div>

                        <div className="form-group">
                          <label for="message">Message</label>
                          <textarea
                            name=""
                            id="message"
                            cols="30"
                            rows="10"
                            className="form-control"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Post Comment"
                            className="btn py-3 px-4 btn-primary"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 sidebar ftco-animate bg-light pt-5">
                <div className="sidebar-box pt-md-4">
                  <form action="#" className="search-form">
                    <div className="form-group">
                      <span className="icon icon-search"></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type a keyword and hit enter"
                      />
                    </div>
                  </form>
                </div>
                <div className="sidebar-box ftco-animate">
                  <h3 className="sidebar-heading">Categories</h3>
                  <ul className="categories">
                    <li>
                      <a href="#">
                        Fashion <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Technology <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Travel <span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Food <span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Photography <span>(7)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-box ftco-animate">
                  <h3 className="sidebar-heading">Popular Articles</h3>
                  <div className="block-21 mb-4 d-flex">
                    <a
                      className="blog-img mr-4"
                      style={{ backgroundImage: "url(images/image_1.jpg)" }}
                    ></a>
                    <div className="text">
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing has no control
                        </a>
                      </h3>
                      <div className="meta">
                        <div>
                          <a href="#">
                            <span className="icon-calendar"></span> June 28,
                            2019
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-person"></span> Dave Lewis
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-chat"></span> 19
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-21 mb-4 d-flex">
                    <a
                      className="blog-img mr-4"
                      style={{ backgroundImage: "url(images/image_2.jpg)" }}
                    ></a>
                    <div className="text">
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing has no control
                        </a>
                      </h3>
                      <div className="meta">
                        <div>
                          <a href="#">
                            <span className="icon-calendar"></span> June 28,
                            2019
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-person"></span> Dave Lewis
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-chat"></span> 19
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block-21 mb-4 d-flex">
                    <a
                      className="blog-img mr-4"
                      style={{ backgroundImage: "url(images/image_3.jpg)" }}
                    ></a>
                    <div className="text">
                      <h3 className="heading">
                        <a href="#">
                          Even the all-powerful Pointing has no control
                        </a>
                      </h3>
                      <div className="meta">
                        <div>
                          <a href="#">
                            <span className="icon-calendar"></span> June 28,
                            2019
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-person"></span> Dave Lewis
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-chat"></span> 19
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-box ftco-animate">
                  <h3 className="sidebar-heading">Tag Cloud</h3>
                  <ul className="tagcloud">
                    <a href="#" className="tag-cloud-link">
                      animals
                    </a>
                    <a href="#" className="tag-cloud-link">
                      human
                    </a>
                    <a href="#" className="tag-cloud-link">
                      people
                    </a>
                    <a href="#" className="tag-cloud-link">
                      cat
                    </a>
                    <a href="#" className="tag-cloud-link">
                      dog
                    </a>
                    <a href="#" className="tag-cloud-link">
                      nature
                    </a>
                    <a href="#" className="tag-cloud-link">
                      leaves
                    </a>
                    <a href="#" className="tag-cloud-link">
                      food
                    </a>
                  </ul>
                </div>

                <div
                  className="sidebar-box subs-wrap img"
                  style={{ backgroundImage: "url(images/bg_1.jpg)" }}
                >
                  <div className="overlay"></div>
                  <h3 className="mb-4 sidebar-heading">Newsletter</h3>
                  <p className="mb-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia
                  </p>
                  <form action="#" className="subscribe-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                      />
                      <input
                        type="submit"
                        value="Subscribe"
                        className="mt-2 btn btn-white submit"
                      />
                    </div>
                  </form>
                </div>

                <div className="sidebar-box ftco-animate">
                  <h3 className="sidebar-heading">Archives</h3>
                  <ul className="categories">
                    <li>
                      <a href="#">
                        December 2018 <span>(10)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        September 2018 <span>(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        August 2018 <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        July 2018 <span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        June 2018 <span>(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        May 2018 <span>(5)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-box ftco-animate">
                  <h3 className="sidebar-heading">Paragraph</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus itaque, autem necessitatibus voluptate quod mollitia
                    delectus aut.
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

export default SinglePost;
