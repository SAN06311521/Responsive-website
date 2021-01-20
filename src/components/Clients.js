import React from "react";

const Clients = () => {
  return (
    <div className="clients">
      <style>@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');</style>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="client">
                <h1>1200+</h1>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="col-3">
              <div className="client">
                <h1>580+</h1>
                <p>Cake Designs</p>
              </div>
            </div>
            <div className="col-3">
              <div className="client">
                <h1>148+</h1>
                <p>Branches</p>
              </div>
            </div>
            <div className="col-3">
              <div className="client">
                <h1>2500+</h1>
                <p>Orders completed</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Clients;
