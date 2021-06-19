import React from "react";
import sample1 from "../asstes/sample1.mp4";
import sample from "../asstes/sample.mp4";
import Typed from "react-typed";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]);

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
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        parallax={true}
        effect="cube"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        <SwiperSlide>
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
            <Typed
              strings={[
                "(a multi-decipline law firm)",
                "we analyze, mitigade and process",
              ]}
              typeSpeed={60}
              backSpeed={60}
              loop
            />
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
        </SwiperSlide>
        <SwiperSlide>
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
            <source src={sample} type="video/mp4" />
          </video>
          <motion.div
            variants={navbar_varient}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="slide_detail"
          >
            <h1 className="by">|</h1>

            <h1>
              <Typed
                strings={[
                  "the lawyer you choose make different",
                  "special needs require special lawyers",
                ]}
                typeSpeed={100}
                backSpeed={60}
                loop
              />
            </h1>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slide;
