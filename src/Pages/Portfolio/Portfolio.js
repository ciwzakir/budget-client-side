import React from 'react';

const Portfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://iheartcraftythings.com/wp-content/uploads/2021/04/Man-DRAWING-%E2%80%93-STEP-9.jpg" className="max-w-sm rounded-lg shadow-2xl p-5" />
          <div>
            <h3 className="text-4xl font-bold my-10">My Portfolio</h3>
            <h3 className='mb-2'>Name: Zakir Hossen</h3>
            <h3 className='mb-2'>Email: zenithciw@gmail.com</h3>
            <h3 className='mb-2'> Education: MA(English) Running</h3>
            <p className="py-6">Professional Skill</p>
            <ul>
                <li>Graphic Design</li>
                <li>Web Design</li>
                <li>Web Development(Frontend)</li>
            </ul>
            <button className="btn btn-info my-10">Get Me Hired</button>
          </div>
        </div>
      </div>
    );
};

export default Portfolio;