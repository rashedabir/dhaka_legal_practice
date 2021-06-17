import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="container text-center mx-auto py-5 services">
      <h2>services</h2>
      <h4 className="service_link_by">|</h4>
      <div className="row row-cols-1 row-cols-md-5 g-2 my-3">
        <div className="col">
          <div className="card">
            <i className="fas fa-network-wired service_icon mt-3"></i>
            <div className="card-body">
              <p className="card-title my-2">
                COMPANY, CORPORATE, AND COMMERCIAL LAW
              </p>
              <Link
                className="service_link"
                to="/company"
              >
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <i className="fas fa-dumpster service_icon mt-3"></i>
            <div className="card-body">
              <p className="card-title my-2">E-COMMERCE</p>
              <Link
                className="service_link"
                to="/ecommerce"
              >
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <i className="fas fa-handshake service_icon mt-3"></i>
            <div className="card-body">
              <p className="card-title my-2">CONVEYANCE & MORTGAGES</p>
              <Link
                className="service_link"
                to="/convience"
              >
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <i class="fas fa-hand-holding-usd service_icon mt-3"></i>
            <div className="card-body">
              <p className="card-title my-2">LITIGATION AND ARBITRATION</p>
              <Link
                className="service_link"
                to="/litigation"
              >
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <i class="fas fa-building service_icon mt-3"></i>
            <div className="card-body">
              <p className="card-title my-2">PARA–LEGAL MATTERS</p>
              <Link
                className="service_link"
                to="/peralegal"
              >
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
