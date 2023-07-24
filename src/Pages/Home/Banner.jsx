import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage:
          "url(https://www.shutterstock.com/image-photo/radcliffe-quadrangle-the-quad-harvard-260nw-396023383.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg text-center">
          <h1 className="mb-5 text-5xl font-bold text-orange-800"><span className="text-white">WELCOME TO</span> CAMPOSSPOTLIGHT</h1>
          <p className="mb-5 text-white">
          Discover the ultimate college booking app! Streamline reservations for events, classrooms, sports facilities & more. Intuitive, efficient, and hassle-free. Elevate your campus experience today
          </p>
          <div>
          <button className="custom-btn mr-2">Colleges</button>
          <button className=" hover:bg-slate-50 hover:text-black py-2 px-4 rounded-md border-white border">Admission</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
