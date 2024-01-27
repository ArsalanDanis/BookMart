"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const NextBook = () => {
  const [count, setCount] = useState(1);
  const cartData = useSelector((data) => data.cartsData.carts);
  return (
    <div>
      <div className="next-book container mt-4">
        <hr />
        <h2 className=" text-center" style={{ fontFamily: "cursive" }}>
          Shop Your Next Book
        </h2>
        <div className="next-btns my-3 d-flex justify-content-center align-items-center column-gap-3">
          <button
            type="button"
            onClick={() => setCount(1)}
            className="btn btn-outline-secondary"
          >
            NEW RELEASES
          </button>
          <button
            type="button"
            onClick={() => setCount(2)}
            className="btn btn-outline-secondary"
          >
            COMING SOON
          </button>
          <button
            type="button"
            onClick={() => setCount(3)}
            className="btn btn-outline-secondary"
          >
            BEST SELLERS
          </button>
          <button
            type="button"
            onClick={() => setCount(4)}
            className="btn btn-outline-secondary"
          >
            AWARD WINNING
          </button>
        </div>
        <div>
          {count == 1 && (
            <div className="images-next d-flex justify-content-center align-items-center flex-wrap my-5 gap-1">
              <img src="/img20.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img19.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img18.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img17.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img16.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img15.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img14.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img13.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img4.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img11.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img3.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img9.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img8.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
              <img src="/img7.jpg" alt="image" width={150} height={200}   style={{
                    transition: "transform 0.3s ease-in-out",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }/>
            </div>
          )}
        </div>
        <div>
          {count == 2 && (
            <div className="images-next d-flex flex-row-reverse justify-content-center align-items-center flex-wrap my-5 gap-1">
              <img src="/img20.jpg" alt="image" width={150} height={200} />
              <img src="/img19.jpg" alt="image" width={150} height={200} />
              <img src="/img18.jpg" alt="image" width={150} height={200} />
              <img src="/img17.jpg" alt="image" width={150} height={200} />
              <img src="/img16.jpg" alt="image" width={150} height={200} />
              <img src="/img15.jpg" alt="image" width={150} height={200} />
              <img src="/img14.jpg" alt="image" width={150} height={200} />
              <img src="/img13.jpg" alt="image" width={150} height={200} />
              <img src="/img4.jpg" alt="image" width={150} height={200} />
              <img src="/img11.jpg" alt="image" width={150} height={200} />
              <img src="/img3.jpg" alt="image" width={150} height={200} />
              <img src="/img9.jpg" alt="image" width={150} height={200} />
              <img src="/img8.jpg" alt="image" width={150} height={200} />
              <img src="/img7.jpg" alt="image" width={150} height={200} />
            </div>
          )}
        </div>
        <div>
          {count == 3 && (
            <div className="images-next d-flex justify-content-center align-items-center flex-wrap my-5 gap-1">
              <img src="/img16.jpg" alt="image" width={150} height={200} />
              <img src="/img15.jpg" alt="image" width={150} height={200} />
              <img src="/img14.jpg" alt="image" width={150} height={200} />
              <img src="/img13.jpg" alt="image" width={150} height={200} />
              <img src="/img4.jpg" alt="image" width={150} height={200} />
              <img src="/img20.jpg" alt="image" width={150} height={200} />
              <img src="/img19.jpg" alt="image" width={150} height={200} />
              <img src="/img18.jpg" alt="image" width={150} height={200} />
              <img src="/img17.jpg" alt="image" width={150} height={200} />
              <img src="/img11.jpg" alt="image" width={150} height={200} />
              <img src="/img3.jpg" alt="image" width={150} height={200} />
              <img src="/img9.jpg" alt="image" width={150} height={200} />
              <img src="/img8.jpg" alt="image" width={150} height={200} />
              <img src="/img7.jpg" alt="image" width={150} height={200} />
            </div>
          )}
        </div>
        <div>
          {count == 4 && (
            <div className="images-next d-flex justify-content-center align-items-center flex-wrap my-5 gap-1">
              <img src="/img13.jpg" alt="image" width={150} height={200} />
              <img src="/img4.jpg" alt="image" width={150} height={200} />
              <img src="/img11.jpg" alt="image" width={150} height={200} />
              <img src="/img18.jpg" alt="image" width={150} height={200} />
              <img src="/img17.jpg" alt="image" width={150} height={200} />
              <img src="/img16.jpg" alt="image" width={150} height={200} />
              <img src="/img15.jpg" alt="image" width={150} height={200} />
              <img src="/img20.jpg" alt="image" width={150} height={200} />
              <img src="/img19.jpg" alt="image" width={150} height={200} />
              <img src="/img14.jpg" alt="image" width={150} height={200} />
              <img src="/img8.jpg" alt="image" width={150} height={200} />
              <img src="/img7.jpg" alt="image" width={150} height={200} />
              <img src="/img3.jpg" alt="image" width={150} height={200} />
              <img src="/img9.jpg" alt="image" width={150} height={200} />
            </div>
          )}
        </div>

        <div className=" d-flex justify-content-center">
          <button type="button" className="btn btn-dark my-4 py-2 px-4">
            DISCOVER NEW RELEASES
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextBook;
