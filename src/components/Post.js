import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className="col-md-12">
      <div className="blog-entry ftco-animate d-md-flex fadeInUp ftco-animated">
        <Link to={"/singlepost/" + props.post.id}>
          <a
            href="single.html"
            className="img img-2"
            style={{ backgroundImage: `url(${props.post.image})` }}
          ></a>
        </Link>
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
            <Link to={"/singlepost/" + props.post.id}>
              <a className="btn-custom">
                Read More
                <span className="ion-ios-arrow-forward"></span>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
