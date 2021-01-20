import React from "react";
import "./App.css";
import Header from "./components/Header";
import Carousel from "react-bootstrap/Carousel";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <style>@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');</style>
      <Carousel interval="3000">
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={require("./images/bg1.jpg")}
            alt="First image"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption>
            <h1 style={{ marginBottom: "100px", fontFamily: "'Parisienne', cursive", fontSize: "80px", textShadow: "2px 3px 5px #9acae6" }}>From our hearts to yours!</h1>
            <div style={{ marginBottom: "120px"}}>
              <a href="#" style={{ color: "#fff", fontFamily: "'Parisienne', cursive", fontSize: "40px", textShadow: "none", backgroundColor: "#f88c91", padding: "5px 15px", display: "inline-block", letterSpacing: "0.84px", textDecoration: "none" }}> Order Now</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={require("./images/bg2.jpg")}
            alt="Second image"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption>
            <h1 style={{ marginBottom: "80px", fontFamily: "'Parisienne', cursive", fontSize: "80px", textShadow: "2px 3px 5px #9acae6" }}>From our hearts to yours!</h1>
            <div style={{ marginBottom: "100px"}}>
            <a href="#" style={{ color: "#fff", fontFamily: "'Parisienne', cursive", fontSize: "40px", textShadow: "none", backgroundColor: "#f88c91", padding: "5px 15px", display: "inline-block", letterSpacing: "0.84px", textDecoration: "none" }}> Order Now</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={require("./images/bg3.jpg")}
            alt="Third image"
            style={{ height: "100vh" }}
          />
          <Carousel.Caption>
            <h1 style={{ marginBottom: "100px", fontFamily: "'Parisienne', cursive", fontSize: "80px", textShadow: "2px 3px 5px #9acae6" }}>From our hearts to yours!</h1>
            <div style={{ marginBottom: "120px"}}>
            <a href="#" style={{ color: "#fff", fontFamily: "'Parisienne', cursive", fontSize: "40px", textShadow: "none", backgroundColor: "#f88c91", padding: "5px 15px", display: "inline-block", letterSpacing: "0.84px", textDecoration: "none" }}> Order Now</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


