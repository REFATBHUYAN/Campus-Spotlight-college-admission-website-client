import React from "react";
import Marquee from "react-fast-marquee";

const Gallary = () => {
    const img = [
        'https://media.istockphoto.com/id/1371896330/photo/happy-asian-woman-in-his-graduation-day.jpg?s=612x612&w=0&k=20&c=Ur3moWl1fKFms-6UACseglMjoYAynYKzsanZpgK8lFk=', 'https://media.istockphoto.com/id/512746852/photo/african-descent-female-graduate-and-friends-on-college-campus.jpg?s=612x612&w=0&k=20&c=fKZHhMTd_F8wM1zUsG6NrX20lFNT6F4_5lEs7m1X7AM=', 'https://media.istockphoto.com/id/482362583/photo/multi-ethnic-friends-excitedly-hold-diplomas-after-college-graduation.jpg?s=612x612&w=0&k=20&c=0u-Jm_50Rtdwl5n8vMZ-ROfxEg-BCSmg3ZKJJ_w5CWY=', 'https://media.istockphoto.com/id/180805326/photo/graduating-class.jpg?s=612x612&w=0&k=20&c=Em2A8EivZ5dU8PKK983stCg2_Q6FMzFM_5zbV-ra8aY=', 'https://media.istockphoto.com/id/1066324992/photo/graduation-day.jpg?s=612x612&w=0&k=20&c=cleRpjTZbo430AbH-luZFYMMNqPwhwyTnFgWMbi_AiI='
    ]
  return (
    <div className="my-10">
      <h1 className="text-orange-800 text-center text-5xl font-bold mb-10">Gallary</h1>
      <Marquee>
        {img.map((cls, i) => (
          <img
            key={i}
            className="h-60 md:h-96 w-60 md:w-96 m-2 rounded-md shadow-xl border-2 shadow-blue-500/50"
            src={cls}
            alt=""
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Gallary;
