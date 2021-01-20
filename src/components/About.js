import React from "react";

const About = () => {
  return (
    <div className="about">
      <style>@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');</style>
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3 style={{ fontFamily: "'Parisienne', cursive" }}>About Us</h3>
            <h1 style={{ fontFamily: "'Parisienne', cursive" }}>30 Years Of Excellence</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/about.jpg" alt="Cake" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
