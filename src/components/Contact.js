import React from "react";

const Contact = () => {
    return (
      <div className="contact">
        <style>@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');</style>
        <section>
          <div className="bg-text">
          <h3 className="main">Choose your Flavour</h3>
				  <h5 className="sub-main">Order Online</h5>
				  <p className="para-main">The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day.</p>
          	<div className="row">
              <div className="">
              	<form class="">
                	<div className="row form-online">
                    <div className="col-12 col-sm-6">
                        <label>
                          Select Your Cake <span class="required-form">*</span>
                        </label>
                        <select name="order" class="form-input">
                          <option value="frontend">Type of cake</option>
					                <option value="frontend">Type of cake</option>
					                <option value="frontend">Type of cake</option>
					                <option value="frontend">Type of cake</option>
					                <option value="frontend">Type of cake</option>
                        </select>
                      </div>
                    <div className="col-12 col-sm-6">
                      <label>
                        Phone Number <span class="required-form">*</span>
                      </label>
                      <input class="form-input" placeholder="" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label>
                        First Name <span class="required-form">*</span>
                      </label>
                      <input class="form-input" placeholder="" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label>
                        Last Name <span class="required-form">*</span>
                      </label>
                      <input class="form-input" placeholder="" />
                    </div>
                    <div className="col-12">
                      <label>
                        Your Address <span class="required-form">*</span>
                      </label>
                      <input class="form-input" placeholder="" />
                    </div>
                      <input type="submit" value="Order Now" class="submit"/>
                  </div>
                  <br />
					          <p className="sub-para">For more queries call us at :<a href="tel:1-800-23-456-7890" title="1-800-23-456-7890"> 1-800-23-456-7890</a></p>
                </form>
              </div>
            </div>
            </div>
          </section>
        </div>
      );
    };

export default Contact;