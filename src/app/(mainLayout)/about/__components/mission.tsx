import About from "./About";
import "./mission.css";

const MissionVisionValues = () => {
  const items = [
    {
      title: "MISSION",
      icon: "🏔️",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula nibh euismod tincidunt.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ",
      color: "orange",
    },
    {
      title: "VISION",
      icon: "🔭",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ",
      color: "blue",
    },
    {
      title: "VALUES",
      icon: "💎",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ",
      color: "purple",
    },
  ];

  return (
    <div className="mission_container mb-10">
      {/* this is about component */}
      <About></About>

      {/* ===================== */}
      <div className="header">
        <h2>Our Mission, Vision & Values</h2>
        <p>
          We are committed to excellence, innovation, and making a difference.
        </p>
      </div>
      <div className="cards">
        {items.map((item, index) => (
          <div key={index} className="card">
            <div
              className="icon-container"
              style={{ backgroundColor: item.color }}
            >
              <span>{item.icon}</span>
            </div>
            <h3 style={{ color: item.color }}>{item.title}</h3>
            <p className="text-justify">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVisionValues;
