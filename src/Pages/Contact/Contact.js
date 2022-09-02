import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 my-50">
      <h1 className="my-6xl text-5xl text-center ">Contact Us</h1>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left px-20">
            <h1 className="text-5xl font-bold"> Feel free to Contact us</h1>
            <p className="py-6">
             We are committed to serve you bast service. We have national and international reputation. We respect our client and provide best service to them. Our Customer service is 24 hours active. So you can contact anytime.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile No</span>
                </label>
                <input
                  type="text"
                  placeholder="Mobile"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Your Address</span>
                </label>
                <input
                  type="textarea"
                  placeholder="Address"
                  className="input input-bordered"
                />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info w-48 mx-auto">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
