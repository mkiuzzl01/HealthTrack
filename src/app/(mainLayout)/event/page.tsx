import banner from "@public/assets/event/hero-bg.jpg";
import Program from "./__components/Program";

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "auto",
        }}
      >
        <div className="text-center text-white py-36">
          <h1 className="text-5xl font-semibold">Events</h1>
          <p className="font-normal text-xl">
            Kickstart the event with a grand opening ceremony <br /> featuring
            speeches, performances, and the unveiling of key highlights.
          </p>
        </div>
      </div>

      {/* this program section */}
      <div className="lg:w-3/4 m-auto">
        <Program></Program>
      </div>
    </div>
  );
};

export default page;
