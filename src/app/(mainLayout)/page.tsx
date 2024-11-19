import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Consult from "@/components/Consult/Consult";
import Contact from "@/components/Contact/Contact";
import Service from "@/components/Services/Services";
import ServicesStat from "@/components/Services/ServicesStat";
import Stat from "@/components/Stat/Stat";
import Testimonials from "@/components/Testimonial/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesStat></ServicesStat>
  
      <Service></Service>
      <Consult />
      <Stat />
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default page;
