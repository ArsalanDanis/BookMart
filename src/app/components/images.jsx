"use client";
import React from "react";
import './images.css'

const ImagesContainer = () => {
  return (
    <div>
      <div className=" pt-4">
        <section className="imgSec">
          <div className="d-flex flex-wrap justify-content-center align-items-center" style={{gap:'21px'}}>
            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="/img19.jpg"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>
            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="img18.jpg"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "#FBFBFB" }}
                  ></div>
                </a>
              </div>
            </div>
            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="/img20.jpg"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "#FBFBFB" }}
                  ></div>
                </a>
              </div>
            </div>

            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="/img17.jpg"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "#FBFBFB" }}
                  ></div>
                </a>
              </div>
            </div>
            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="/img14.jpg"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "#FBFBFB" }}
                  ></div>
                </a>
              </div>
            </div>
            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="/img13.jpg"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
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
  );
};

export default ImagesContainer;
