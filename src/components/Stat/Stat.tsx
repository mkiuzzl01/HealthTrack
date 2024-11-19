"use client"
import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ target, duration }:any) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setValue(target);
      } else {
        setValue(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <h1 className="text-3xl font-bold">{value}+</h1>;
};

const Stat = () => {
  const statRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) observer.unobserve(statRef.current);
    };
  }, []);

  return (
    <div ref={statRef} className="lg:px-0 px-5 my-32">
      <div className="bg-[#0057B8] lg:w-3/4 mx-auto p-20 rounded my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="border p-5 rounded text-center text-white">
            {isVisible && <AnimatedCounter target={100} duration={2000} />}
            <h2 className="text-md font-medium">Dedicated Service</h2>
          </div>
          <div className="border p-5 rounded text-center text-white">
            {isVisible && <AnimatedCounter target={245} duration={2000} />}
            <h2 className="text-md font-medium">Patients A Year</h2>
          </div>
          <div className="border p-5 rounded text-center text-white">
            {isVisible && <AnimatedCounter target={45} duration={2000} />}
            <h2 className="text-md font-medium">Healthcare Experts</h2>
          </div>
          <div className="border p-5 rounded text-center text-white">
            {isVisible && <AnimatedCounter target={7000} duration={2000} />}
            <h2 className="text-md font-medium">Happy Smile</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
