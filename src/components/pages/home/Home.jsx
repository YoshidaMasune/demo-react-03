import React from "react";
import Header from "../../layout/header/Header";
import Content_1 from "./cont1/Content_1";
import "./home.css";

function Home() {
  return (
    <div>
      <Header />

      <section className="box-contents">{/* <Content_1 /> */}</section>
    </div>
  );
}

export default Home;
