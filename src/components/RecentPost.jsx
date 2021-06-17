import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setBlogAction } from "../actions/blogAction";

function RecentPost({ blogs }) {
  const dispatch = useDispatch();

  const addDetails = () => {
    dispatch(setBlogAction(blogs));
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="mt-4"
            width="100%"
            src={blogs.img}
            alt={blogs.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link
              onClick={addDetails}
              style={{ textDecoration: "none", color: "black" }}
              to={`/blogs/${blogs._id}`}
            >
              <p className="card-title"> {blogs.title} </p>
            </Link>
            <p className="card-text">
              <small className="text-muted">{blogs.date}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPost;
