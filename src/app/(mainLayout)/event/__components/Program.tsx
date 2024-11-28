import React from "react";
import RecentActivities from "./RecentActivities";
import Gallery from "./Gallery";
import Publication from "./Publication";

const Program = () => {
  return (
    <div>
      <div className="py-10 my-5 text-center bg-gradient-to-r from-white via-gray-200 to-white">
        <h1 className="text-2xl font-bold">Recent activities, We are!</h1>
        <p>
          Participate in hands-on workshops to develop new skills and explore
          innovative tools and methodologies.
        </p>
      </div>
      {/* this is Recent activities */}
      <div>
        <RecentActivities></RecentActivities>
      </div>
      {/* this is gallery, We connected! */}
      <div className="py-10 my-5 text-center bg-gradient-to-r from-white via-gray-200 to-white">
        <h1 className="text-2xl">Gallery,We connected!</h1>
        <p>
          Engage in a thought-provoking conversation as experts discuss trends,
          challenges, and opportunities in the industry.
        </p>
      </div>
      <div>
        <Gallery></Gallery>
      </div>
      {/* this is our publication */}
      <div className="py-10 my-5 text-center bg-gradient-to-r from-white via-gray-200 to-white">
        <h1 className="text-2xl">Publication,We Happiness!</h1>
        <p>
          Engage in a thought-provoking conversation as experts discuss trends,
          challenges, and opportunities in the industry.
        </p>
      </div>
      <div>
        <Publication></Publication>
      </div>
    </div>
  );
};

export default Program;
