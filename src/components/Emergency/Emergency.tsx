import Link from "next/link";
import Marquee from "react-fast-marquee";
import { MdOutlinePhoneIphone } from "react-icons/md";

const services = [
  {
    category: "General Emergency",
    name: "National Emergency Service",
    hotline: "999",
    description: "Police, Fire Service, and Ambulance.",
    link: "https://999.gov.bd/",
  },
  {
    category: "General Emergency",
    name: "Violence Against Women and Children",
    hotline: "109",
    description: "Support for women and children in danger.",
    link: "https://mowca.gov.bd/",
  },
  {
    category: "General Emergency",
    name: "Disaster Management Hotline",
    hotline: "10941",
    description: "Assistance for natural disasters and emergencies.",
    link: "https://modmr.gov.bd/",
  },
  {
    category: "Medical Emergency",
    name: "Ambulance Service",
    hotline: "199 or 16263",
    description: "Ambulance services for medical emergencies.",
    link: "https://dghs.gov.bd/",
  },
  {
    category: "Medical Emergency",
    name: "COVID-19 Helpline",
    hotline: "333",
    description: "Health-related inquiries and COVID support.",
    link: "https://corona.gov.bd/",
  },
  {
    category: "Medical Emergency",
    name: "Bangladesh Red Crescent Society",
    hotline: "88-02-9352226",
    description: "Emergency blood and disaster support.",
    link: "https://bdrcs.org/",
  },
  {
    category: "Law Enforcement",
    name: "Police Headquarters",
    hotline: "100",
    description: "For reporting serious crimes or urgent police assistance.",
    link: "https://police.gov.bd/",
  },
  {
    category: "Law Enforcement",
    name: "RAB Control Room",
    hotline: "01777720050",
    description: "Rapid Action Battalion hotline.",
    link: "https://rab.gov.bd/",
  },
  {
    category: "Fire and Rescue",
    name: "Fire Service and Civil Defence",
    hotline: "199",
    description: "Assistance for fires, rescues, or hazardous conditions.",
    link: "https://fireservice.gov.bd/",
  },
  {
    category: "Child Protection",
    name: "Child Helpline",
    hotline: "1098",
    description: "Assistance for children in danger or needing help.",
    link: "https://childhelpline1098.com/",
  },
  {
    category: "Mental Health and Counseling",
    name: "Kaan Pete Roi",
    hotline: "01779554391-93",
    description: "Emotional support helpline.",
    link: "https://shuni.org/",
  },
];

const Emergency = () => {
  return (
    <div className="lg:w-3/4 m-auto">
      <Marquee pauseOnHover={true} gradient={true} gradientWidth={80}>
        {services?.map((service, index) => (
          <Link href={service?.link} target="_blank" key={index}>
            <div className="bg-slate-200 mx-1 p-5 text-center rounded-lg">
              <h1 className="font-bold">{service?.name}</h1>
              <p className="flex items-center justify-center text-blue-600">
                <MdOutlinePhoneIphone /><span>{service?.hotline}</span>
              </p>
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default Emergency;
