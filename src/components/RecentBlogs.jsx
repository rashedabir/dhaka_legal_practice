import React from "react";
import RecentPost from "./RecentPost";

function RecentBlogs({ state }) {
  return (
    <>
      <div className="search-box">
        <h3>Search</h3>
        <input placeholder="search" type="text" className="form-control mt-2" />
      </div>
      <div className="recent-post">
        <h3>Recent Post</h3>
        {state.map((blogs) => (
          <RecentPost blogs={blogs} key={blogs._id} />
        ))}
      </div>
    </>
  );
}

export default RecentBlogs;
