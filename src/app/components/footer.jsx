import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import './footer.css'

export const Footer = () => {
  return (
    <div>
      <div className=" mt-5 footerComp">
        <div
          className="text-center text-white"
          style={{ backgroundCcolor: "#caced1" }}
        >
          <div className="py-4">
            <section className="">
              <div className="row">
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/fluid/city/113.jpg"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/fluid/city/111.jpg"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "#FBFBFB" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/fluid/city/112.jpg"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "#FBFBFB" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/fluid/city/114.jpg"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "#FBFBFB" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/fluid/city/115.jpg"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "#FBFBFB" }}
                      ></div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/fluid/city/116.jpg"
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "#FBFBFB" }}
                      ></div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <footer
          className="text-white text-center text-lg-start"
          style={{ backgroundColor: "#00002c" }}
        >
          <div className=" p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">About company</h5>

                <p  style={{maxWidth:'350px'}}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>

                <p style={{maxWidth:'350px'}}>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias.
                </p>

                <div className="mt-4">
                  <a type="button" className="btn btn-floating m-2 btn-light">
                    <FaFacebook />
                  </a>

                  <a type="button" className="btn btn-floating m-2 btn-light">
                    <FaInstagram />
                  </a>

                  <a type="button" className="btn btn-floating m-2 btn-light">
                    <FaTwitter />
                  </a>

                  <a type="button" className="btn btn-floating m-2 btn-light">
                    <FaGoogle />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                <div className="form-outline form-white mb-4">
                  <input
                  style={{maxWidth:'250px'}}
                    type="text"
                    id="formControlLg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Search</label>
                </div>

                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="ms-2">Warsaw, 00-967, Poland</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="ms-2">contact@example.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="ms-2">+ 48 234 567 88</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-center py-3">
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              bookStore
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
