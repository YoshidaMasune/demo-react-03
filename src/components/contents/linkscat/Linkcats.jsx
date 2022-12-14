import React from "react";
import { cats } from "./catdata";
import "./linkcat.css";

const displayCats = () => {
  return cats.map((cat, idx) => {
    return (
      <div
        key={idx}
        id={`cat-${idx + 1}`}
        className="grid-item cat-grid-item slide-item"
        data-index={idx}
      >
        <figure>
          <img src={cat.img} alt="" />
        </figure>
        <figcaption>{cat.type}</figcaption>
      </div>
    );
  });
};

function Linkcats() {
  const pravSlide = (e) => {
    let container = document.querySelector(".slide-container");
    let conWidthD = container.getBoundingClientRect();
    let conWidth = conWidthD.width;

    container.scrollLeft -= conWidth;
  };

  const nextSlide = (e) => {
    let container = document.querySelector(".slide-container");
    let conWidthD = container.getBoundingClientRect();
    let conWidth = conWidthD.width;

    container.scrollLeft += conWidth;
  };

  return (
    <div className="container-linkcat">
      <div className="flex-container cats-con-hero">
        <div className="title-head flex-row">
          <article>
            <h1>แมว 10 สายพันธ์ ยอดนิยม</h1>
          </article>
        </div>
        <div className="grid grid-container-cats">{displayCats()}</div>
      </div>

      <div className="cat-slide">
        <button onClick={pravSlide} className="prav-btn">
          prav
        </button>
        <button onClick={nextSlide} className="next-btn">
          next
        </button>
        <div className="slide-container">{displayCats()}</div>
      </div>
    </div>
  );
}

export default Linkcats;
