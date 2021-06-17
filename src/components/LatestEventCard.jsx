import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setBlogAction } from "../actions/blogAction";

function LatestEventCard({ blog }) {
  const dispatch = useDispatch();

  const addDetails = () => {
    dispatch(setBlogAction(blog));
  };
  return (
    <div className="col">
      <div className="card">
        <img
          width="100%"
          src={blog.img}
          className="card-img-top"
          alt={blog.title}
        />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p
            style={{ height: "50px", overflow: "hidden" }}
            className="card-text"
          >
            {blog.description}
          </p>
          <p className="card-text">
            <small>
              <Link
                style={{ textDecoration: "none", color: "#998947" }}
                onClick={addDetails}
                to={`blogs/${blog._id}`}
              >
                Read More
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LatestEventCard;
