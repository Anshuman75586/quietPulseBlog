import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Bloglist from "../components/Bloglist";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import SmoothScroll from "../SmoothScroll";

const Home = () => {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        <Header />
        <Bloglist />
        <NewsLetter />
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default Home;
