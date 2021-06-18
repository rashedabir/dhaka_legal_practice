import React from "react";
import sample1 from "../asstes/sample1.mp4";
import Typed from "react-typed";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Slide() {
  const navbar_varient = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.5,
      },
      exit: {
        opacity: 0,
        transition: {
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="slide">
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "675px",
          objectFit: "cover",
          opacity: "0.9",
        }}
      >
        <source src={sample1} type="video/mp4" />
      </video>
      <div className="slide-detail">
        <h1>dhaka legal practice</h1>
        <Typed strings={["(a multi-decipline law firm)"]} typeSpeed={60} />
        <br></br>
        <br></br>
        <motion.div
          variants={navbar_varient}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <SocialIcon
            className="social_icon"
            url="https://twitter.com/jaketrent"
          />
          <SocialIcon
            className="social_icon"
            url="https://facebook.com/jaketrent"
          />
          <SocialIcon
            className="social_icon"
            url="https://youtube.com/jaketrent"
          />
          <SocialIcon
            className="social_icon"
            url="https://instagram.com/jaketrent"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Slide;
