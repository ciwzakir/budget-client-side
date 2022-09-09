import React from "react";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 my-24 w-1/2">
      <h1 className="text-5xl py-10">My Profile</h1>
      <div className="grid ">
        <div className="card card-compact w-96 bg-base-100 shadow-xl justify-center">
          <figure>
            <img
              src="https://iheartcraftythings.com/wp-content/uploads/2021/04/Man-DRAWING-%E2%80%93-STEP-9.jpg"
              alt="Profile Pictures"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name</h2>
            <p>Email : zenithciw@gmail.com</p>
            <p>Education : MA English(Running)</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              ratione labore officiis libero similique assumenda, officia
              repellendus quos sequi vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
