import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("/collegeData.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  console.log(colleges);

  return (
    <div className="my-10">
      <h1 className="text-orange-800 text-center text-5xl font-bold">
        <span className="text-black">Popular</span> Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {colleges.slice(0,3).map((college) => (
          <div key={college.id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src={college.college_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{college.college_name}</h2>
              <p><span className="text-orange-700 font-bold">Admission Date:</span> {college.admission_dates.fall}</p>
              <p><span className="text-orange-700 font-bold">Events:</span> {college.events.map((evnt, i) => <li key={i}>{`${evnt}`}</li>)}</p>
              <p><span className="text-orange-700 font-bold">Research History: </span>{college.research_history}</p>
              <p><span className="text-orange-700 font-bold">Sports:</span> {college.sports.map((evnt, i) => <li key={i}>{`${evnt}`}</li>)}</p>
              <div className="card-actions justify-end">
                <Link to={`/college-details/${college.id}`} className="custom-btn">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularColleges;
