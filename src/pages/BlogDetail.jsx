import React from "react";
import { useSelector } from "react-redux";
import RecentBlogs from "../components/RecentBlogs";
import SlideHead from "../components/SlideHead";

function BlogDetail() {
  const state = useSelector((state) => state.blogs);
  const detail = useSelector((state) => state.blogDetail.details);

  return (
    <>
      <SlideHead props="Blog" />
      <div className="container blog py-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="blog_detail">
              <img width="100%" src={detail.img} alt={detail.title} />
              <h3 className="my-4"> {detail.title} </h3>
              <p> {detail.description} </p>
              {detail.img1 && (
                <img width="100%" src={detail.img1} alt={detail.title} />
              )}
              {detail.description1 && <p> {detail.description1} </p>}
              {detail.description2 && <p> {detail.description2} </p>}
            </div>
          </div>
          <div className="col-lg-3" style={{ marginTop: "-10px" }}>
            <RecentBlogs state={state} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
