import Banner from "@/components/Banner/Banner";
import Consult from "@/components/Consult/Consult";
import Contact from "@/components/Contact/Contact";
import Laboratory from "@/components/Diagnostic/Diagnostic";
import ServicesStat from "@/components/Services/ServicesStat";
import Stat from "@/components/Stat/Stat";
import Testimonials from "@/components/Testimonial/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Department from "@/components/Department/Department";

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesStat />
      <Department />
      <Consult />
      <Stat />
      <Laboratory />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default page;
