import React from "react";

function Contact() {
  return (
    <div className="contact py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <h4
                style={{
                  paddingBottom: "20px",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                }}
              >
                contact
              </h4>
              <div>
                <h4>Supreme Court</h4>
                <p>Room No 117 (Ground Floor) Supreme Court Bar</p>
                <p>Association Building</p>
                <p>Room No. 3050 (2nd floor) Huseyn Shaheed</p>
                <p>Suhrawardy Bhaban Supreme Court Bar</p>
                <p>Association, Shahbag Dhaka- 1000, Bangladesh.</p>
              </div>
              <div>
                <h4>Judge Court</h4>
                <p>Room No 6021 (5th Floor), Annex Bhaban-2</p>
                <p>Dhaka Bar Association Building 6-7, Court</p>
                <p>House Street, Dhaka- 1000, Bangladesh.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 form">
            <h3
              style={{
                paddingBottom: "20px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              send message
            </h3>
            <form>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name"
                />
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name"
                />
                <label for="floatingInput">Website</label>
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
      </div>
    </div>
  );
}

export default Contact;
