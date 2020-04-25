import React from "react";

const Post = (props) => {
  return (
    <div className="col-md-12">
      <div className="blog-entry ftco-animate d-md-flex fadeInUp ftco-animated">
        <a
          href="single.html"
          className="img img-2"
          style={{ backgroundImage: `url(${props.post.image})` }}
        ></a>
        <div className="text text-2 pl-md-4">
          <h3 className="mb-2">
            <a href="single.html">{props.post.title}</a>
          </h3>
          <div className="meta-wrap">
            <p className="meta">
              <span>
                <i className="icon-calendar mr-2"></i>
                {props.post.date}
              </span>
              <span>
                <a href="single.html">
                  <i className="icon-folder-o mr-2"></i>
                  {props.post.category}
                </a>
              </span>
              <span>
                <i className="icon-comment2 mr-2"></i>
                {props.post.comments}
              </span>
            </p>
          </div>
          <p className="mb-4">{props.post.description}</p>
          <p>
            <a href="#" className="btn-custom">
              Read More
              <span className="ion-ios-arrow-forward"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
