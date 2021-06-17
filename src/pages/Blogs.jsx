import React from "react";
import { useSelector } from "react-redux";
import BlogCart from "../components/BlogCart";
import RecentBlogs from "../components/RecentBlogs";
import SlideHead from "../components/SlideHead";

function Blogs() {
  const state = useSelector((state) => state.blogs);

  return (
    <>
      <SlideHead props="News & Events" />
      <div className="container-lg py-5 blog">
        <div className="row">
          <div className="col-lg-9">
            <div className="blogs">
              {state.map((blogs) => (
                <BlogCart blogs={blogs} key={blogs._id} />
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <RecentBlogs state={state} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
