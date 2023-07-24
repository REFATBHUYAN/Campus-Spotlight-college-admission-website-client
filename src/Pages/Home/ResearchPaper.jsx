import React, { useEffect, useState } from "react";

const ResearchPaper = () => {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    fetch("/researchPaper.json")
      .then((res) => res.json())
      .then((data) => setResearch(data));
  }, []);

  console.log(research);
  return (
    <div>
      <h1 className="text-orange-800 text-center text-5xl font-bold mb-10">
        Research Paper
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {research.map((res) => (
          <div key={res.id} className="card w-full bg-orange-900 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">{res.title}</h2>
              <p>Published Date: {res.date}</p>
              <p>{res.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPaper;
