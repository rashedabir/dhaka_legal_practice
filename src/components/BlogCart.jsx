import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setBlogAction } from "../actions/blogAction";

function BlogCart({ blogs }) {
  const dispatch = useDispatch();

  const addDetails = () => {
    dispatch(setBlogAction(blogs));
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img width="100%" src={blogs.img} alt={blogs.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link
              onClick={addDetails}
              style={{ textDecoration: "none", color: "black" }}
              to={`/blogs/${blogs._id}`}
            >
              <h5 className="card-title"> {blogs.title} </h5>
            </Link>
            <p className="card-text">
              <small className="text-muted">{blogs.date}</small>
            </p>
            <p
              className="card-text"
              style={{ height: "80px", overflow: "hidden" }}
            >
              {blogs.description}
            </p>
            <p className="card-text">
              <small>
                <Link
                  onClick={addDetails}
                  style={{ textDecoration: "none", color: "#998947" }}
                  to={`/blogs/${blogs._id}`}
                >
                  Read More
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCart;
