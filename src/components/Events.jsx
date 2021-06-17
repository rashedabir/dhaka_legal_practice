import React from "react";
import { data } from "../latestBlogs";
import LatestEventCard from "./LatestEventCard";

function Events() {
  return (
    <div className="container-lg text-center mx-auto py-5">
      <h2 style={{ color: "#494949" }}>News & Events</h2>
      <div
        style={{
          color: "#a29971",
          borderBottom: "5px solid",
          width: "150px",
          textAlign: "center",
          margin: "auto",
          padding: "20px 0",
        }}
      ></div>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
        {data.map((blog) => (
          <LatestEventCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Events;
