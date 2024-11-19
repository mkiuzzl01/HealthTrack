import React from "react";
import Banner1 from "./__components/Banner1";
// import About from "./__components/About";
import Timeline from "./__components/Timeline";
import MeetOurDoctors from "./__components/MeetOurDoctors";
import Tips from "./__components/Tips";
import Awards from "./__components/awards";
import Banner2 from "./__components/banner2";
import Mission from "./__components/mission";

const page = () => {
  return (
    <div>
        <Banner1></Banner1>
        {/* <About></About> */}
        <Mission></Mission>
        <Timeline></Timeline>
        <MeetOurDoctors></MeetOurDoctors>
        <Tips></Tips>
        <Awards></Awards>
        <Banner2></Banner2>
    </div>  
  );
};

export default page;
