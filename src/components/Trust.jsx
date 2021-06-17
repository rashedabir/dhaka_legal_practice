import React from "react";

function Trust() {
  const state = [
    {
      id: 1,
      img: "http://dhakalegalpractice.com/wp-content/uploads/2021/05/Dhaka-North-City-Corporation.png",
    },
    {
      id: 2,
      img: "http://dhakalegalpractice.com/wp-content/uploads/2021/05/Blue-Seal-Textile-Ltd.png",
    },
    {
      id: 3,
      img: "http://dhakalegalpractice.com/wp-content/uploads/2021/05/Eastern-Insurance-Company-Limited-Dhaka..png",
    },
    {
      id: 4,
      img: "http://dhakalegalpractice.com/wp-content/uploads/2021/05/Rangamati-Motors-Limited-Dhaka..png",
    },
    {
      id: 5,
      img: "http://dhakalegalpractice.com/wp-content/uploads/2021/05/UCB-Bank.png",
    },
    {
      id: 6,
      img: "http://dhakalegalpractice.com/wp-content/uploads/2021/05/union-logo-PNG.png",
    },
  ];

  return (
    <div className="text-center mx-auto">
      <h2 style={{ color: "#494949" }} className="text-capitalize mb-5">
        those who trust us
      </h2>
      <div className="my-4 align-item-center pb-5">
        {state.map((img) => (
          <img
            className="px-2"
            width="180px"
            key={img.id}
            src={img.img}
            alt="logo"
          />
        ))}
      </div>
    </div>
  );
}

export default Trust;
