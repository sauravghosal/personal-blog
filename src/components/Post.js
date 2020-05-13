import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className="col-md-12">
      <div className="blog-entry ftco-animate d-md-flex fadeInUp ftco-animated">
        <a
          className="img img-2"
          style={{ backgroundImage: `url(${props.post.image})` }}
        ></a>
        <div className="text text-2 pl-md-4">
          <h3 className="mb-2">
            <Link to={"/personal-blog/singlepost?postid=" + props.post._id}>
              <a href="single.html">{props.post.title}</a>
            </Link>
          </h3>
          <div className="meta-wrap">
            <p className="meta">
              <span>
                <i className="icon-calendar mr-2"></i>
                {props.post.date !== undefined
                  ? props.post.date.toString().slice(0, 15)
                  : "No Date Provided"}
              </span>
              <span>
                <a>
                  <i className="icon-folder-o mr-2"></i>
                  {props.post.category !== undefined
                    ? props.post.category
                    : "Not Categorized"}
                </a>
              </span>
              <span>
                <i className="icon-comment2 mr-2"></i>
                {props.post.comments !== undefined
                  ? props.post.comments
                  : "0 Comments"}
              </span>
            </p>
          </div>
          <p className="mb-4">{props.post.description}</p>
          <p>
            <Link to={"/personal-blog/singlepost?postid=" + props.post._id}>
              <a className="btn-custom">
                Read More
                <span
                  className="ion-ios-arrow-forward"
                  style={{ marginLeft: "5px" }}
                ></span>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
