"use client"
import React, { useState, useEffect, useRef } from "react";
import { booksApi } from "../booksApi/booksApi";
import Link from "next/link";
import './books.css'

const DisplayBook = () => {
  const booksData = booksApi.slice(0, 20);
  const [items, setItems] = useState([]);
  const scrollContainerRef = useRef(null);
  const scrollStep = 200; // Adjust this value for smooth scrolling speed
  const autoPlayInterval = 3000; // Adjust this value for auto play interval in milliseconds

  const scrollBooks = (scrollAmount) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const targetScroll = currentScroll + scrollAmount;
  
      if (targetScroll < 0) {
        // If scrolling to the left beyond the start, reset to the end
        container.scrollTo({
          left: maxScroll,
          behavior: 'smooth',
        });
      } else if (targetScroll > maxScroll) {
        // If scrolling to the right beyond the end, reset to the start
        container.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        // Otherwise, perform the normal smooth scroll
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
        });
      }
    }
  };
  

  useEffect(() => {
    let autoPlayTimer;

    const startAutoPlay = () => {
      autoPlayTimer = setInterval(() => {
        scrollBooks(200); // Auto play right-scroll, adjust the value as needed
      }, autoPlayInterval);
    };

    const stopAutoPlay = () => {
      clearInterval(autoPlayTimer);
    };

    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener("mouseenter", stopAutoPlay);
      container.addEventListener("mouseleave", startAutoPlay);
      startAutoPlay(); // Start auto play when component mounts
    }

    return () => {
      // Cleanup event listeners and auto play timer
      if (container) {
        container.removeEventListener("mouseenter", stopAutoPlay);
        container.removeEventListener("mouseleave", startAutoPlay);
      }
      stopAutoPlay();
    };
  }, [autoPlayInterval]);

  return (
    <section className="mt-5 bookComp">
      <h5 className=" my-4" style={{fontSize:'32px',fontFamily:'serif',fontWeight:'bolder'}}>Book Sets</h5>
      <div className="position-relative ">
        <div
          ref={scrollContainerRef}
          className="d-flex overflow-x-hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            whiteSpace: "nowrap",
          }}
        >
          {booksData.map((book, index) => (
            <div key={index} className="">
              <div className="d-flex flex-column">
                
                <img
                  src={`/img${book.id}.jpg`}
                  alt="book"
                  width={180}
                  height={250}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    marginRight: "22px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />

                <div className="mt-2">
                  <h6
                    className="font-semibold ms-2"
                    style={{
                      maxWidth: "300px",
                      color: "red",
                      fontFamily: "fantasy",
                    }}
                  >
                    {book.title}
                  </h6>

                  <p className="price text-gray-500 fw-bold ms-3 mt-2">{`Price: ${book.price}₹`}</p>
                </div>

                <Link
                  href={`/${book.id}`}
                  style={{ backgroundColor: "black", width: "150px" }}
                  className="mt-2 ms-2  text-white bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 rounded text-decoration-none"
                >
                  check details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollBooks(-scrollStep)}
          style={{
            backgroundColor: "#c3c3c3",
            height: "40px",
            borderRadius: "50%",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="position-absolute top-50 bg-dark start-0 text-white px-2 py-2 rounded-full"
        >
          &larr;
        </button>

        <button
          onClick={() => scrollBooks(scrollStep)}
          style={{
            backgroundColor: "#c3c3c3",
            height: "40px",
            borderRadius: "50%",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="position-absolute top-50 end-0 bg-dark text-white px-2 py-2 rounded-full"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default DisplayBook;


