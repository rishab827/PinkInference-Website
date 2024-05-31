import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
          <div className="myCarousel" style={{ color: "white" }}>
            <h3 style={{ fontSize: "50px", fontFamily: "Roboto Mono Thin", fontWeight: 100, marginBottom: "8px", maxWidth: "calc(100% - 60px)"}}>"I AM SAYING A QUOTE"</h3>
            <p style={{ fontSize: "20px", fontFamily: "Roboto Mono", marginTop: "0" }}>
             - Dr. Jonah Weinbaum
            </p>
          </div>

          <div className="myCarousel" style={{ color: "white" }}>
            <h3 style={{ fontSize: "50px", fontFamily: "Roboto Mono Thin", fontWeight: 100, marginBottom: "8px", maxWidth: "calc(100% - 60px)"}}>"PINK INFERENCE IS PUSHING THE LIMITS OF BIOLOGY IN TODAY'S WORLD"</h3>
            <p style={{ fontSize: "20px", fontFamily: "Roboto Mono", marginTop: "0" }}>
             - Mr. Rishab Jayaraman
            </p>
          </div>

          <div className="myCarousel" style={{ color: "white" }}>
            <h3 style={{ fontSize: "50px", fontFamily: "Roboto Mono Thin", fontWeight: 100, marginBottom: "8px", maxWidth: "calc(100% - 60px)"}}>"THE ADVANCED MEA PROVIDED BY PINKINFERENCE WILL CHANGE RESEARCH AS WE KNOW IT"</h3>
            <p style={{ fontSize: "20px", fontFamily: "Roboto Mono", marginTop: "0" }}>
             - Dr. Leo Bayer
            </p>
          </div>
      </Carousel>
    );
  }
}
