import React from "react";

function Head() {
  return (
    <div className="container px-5 p-4 head">
      <div className="row">
        <div className="col-lg-4">
          <img
            width="100%"
            src="http://dhakalegalpractice.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-12-at-4.23.23-PM-1-1.jpeg"
            alt="head"
          />
        </div>
        <div className="col-lg-5">
          <h1>Jyotirmoy Barua</h1>
          <label className="my-3">HEAD OF CHAMBER</label>
          <p>
            Barrister-at-Law (Australia), LL.B. (Hons.) Northumbria University
            (UK), LL.B. (Hons.) Calcutta University, India,
          </p>
          <p>
            Advocate, Supreme Court of Bangladesh, Member of Dhaka Bar
            Association and Cox’s Bazar Bar Association,
          </p>
          <button className="my-5">go to profile</button>
        </div>
      </div>
    </div>
  );
}

export default Head;
