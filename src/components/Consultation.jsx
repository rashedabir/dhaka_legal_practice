import React from "react";

function Consultation() {
  return (
    <>
      <div className="con py-3">
        <div className="text-center mx-auto">
          <h2>
            Free <span style={{ color: "#9a8b47" }}>Consulation</span>
          </h2>
          <p>
            Law is a complicated matter. It can cause you a big problem if you
            ignore it. Let us help you!
          </p>
        </div>
        <div className="mx-auto my-5 consultation">
          <h4 className="mt-3">Make an Appoinment</h4>
          <label className="mb-3">for any inquary</label>
          <form>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
              />
              <label for="floatingInput">Names</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email Address</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a message here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
              <label for="floatingTextarea2">Message</label>
            </div>
            <button className="btn btn-dark mt-2">send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Consultation;
