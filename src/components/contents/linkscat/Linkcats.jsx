import React from "react";
import { cats } from "./catdata";
import "./linkcat.css";

const displayCats = () => {
  return cats.map((cat, idx) => {
    return (
      <div key={idx} id={`cat-${idx + 1}`} className="grid-item cat-grid-item">
        <figure>
          <img src={cat.img} alt="" />
        </figure>
        <figcaption>{cat.type}</figcaption>
      </div>
    );
  });
};

function Linkcats() {
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
    </div>
  );
}

export default Linkcats;
