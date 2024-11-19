import React from "react";
import Image from "next/image";
import timeline1 from "@public/assets/about/timeline-4.jpg";
import timeline2 from "@public/assets/about/timeline-5.jpg";
import timeline3 from "@public/assets/about/timeline-6.jpg";
import "./Timeline.css";

const Timeline = () => {
  const timelineData = [
    {
      title: "What we offer",
      image: timeline1,
      description: `We provide accurate, authoritative & trustworthy information on medicines and help people use their medicines effectively and safely.
      We get medicines and other health products delivered at home in 1000+ cities across India from licensed and verified pharmacies.
      We also provide diagnostic services from certified labs and online doctor consults at any time, from anywhere.`,
    },
    {
      title: "The idea",
      image: timeline2,
      description: `In healthcare, the information around our medicines and lab tests is either unavailable or incomprehensible to us.
      So we decided to create a platform that stood for transparent, authentic, and accessible information for all. This idea grew into a company and Medilazar was created in 2015.`,
    },
    {
      title: "The journey so far",
      image: timeline3,
      description: `We've made healthcare accessible to millions by giving them quality care at affordable prices.
      We continue to expand our rich and extensive medical content and are working hard to make this information available in multiple local languages.`,
    },
  ];

  return (
    <div>
      <div className="lg:w-3/4 px-4 lg:px-0 mx-auto">
        <h2 className="our-story-title">Our Journey</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              className={`timeline-item ${
                index % 2 === 0 ? "align-left" : "align-right"
              }`}
              key={index}
            >
              <div className="timeline-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] lg:h-full rounded-lg"
                />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-item-title">{item.title}</h3>
                <p className="timeline-description text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
