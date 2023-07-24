import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams();
  const [colleges, setColleges] = useState(null);
  console.log(id);

  useEffect(() => {
    fetch("/collegeData.json")
      .then((res) => res.json())
      .then((data) => {
        const signleData = data.filter((d) => d.id == id);
        setColleges(signleData);
        console.log(signleData)
      });
  }, []);

  console.log(colleges);
  return (
    <div>
        {colleges?.map((college) => (
          <div key={college?.id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src={college?.college_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{college?.college_name}</h2>
              <p><span className="text-orange-700 font-bold">Admission Date:</span> {college?.admission_dates.fall}</p>
              <p><span className="text-orange-700 font-bold">Events:</span> {college?.events?.map((evnt, i) => <li key={i}>{`${evnt}`}</li>)}</p>
              <p><span className="text-orange-700 font-bold">Research History: </span>{college?.research_history}</p>
              <p><span className="text-orange-700 font-bold">Sports:</span> {college?.sports?.map((evnt, i) => <li key={i}>{`${evnt}`}</li>)}</p>
              
            </div>
          </div>
        ))}
      {/* <div key={college?.id} className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={college?.college_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{college?.college_name}</h2>
          <p>
            <span className="text-orange-700 font-bold">Admission Date:</span>{" "}
            {college?.admission_dates?.fall}
          </p>
          <p>
            <span className="text-orange-700 font-bold">Events:</span>{" "}
            {college?.events?.map((evnt, i) => (
              <li key={i}>{`${evnt}`}</li>
            ))}
          </p>
          <p>
            <span className="text-orange-700 font-bold">
              Research History:{" "}
            </span>
            {college?.research_history}
          </p>
          <p>
            <span className="text-orange-700 font-bold">Sports:</span>{" "}
            {college?.sports?.map((evnt, i) => (
              <li key={i}>{`${evnt}`}</li>
            ))}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default CollegeDetails;
