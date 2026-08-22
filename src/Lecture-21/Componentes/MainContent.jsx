import ServiceCard from "./ServiceCard";
import "../Styles/MainContent.css";

function MainContent() {
  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description:
        "We create modern, responsive, and high-performance websites for businesses.",
    },
    {
      id: 2,
      icon: "📱",
      title: "App Development",
      description:
        "We build user-friendly mobile and web applications for modern businesses.",
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "We design beautiful and easy-to-use interfaces that improve user experience.",
    },
    {
      id: 4,
      icon: "🚀",
      title: "Digital Solutions",
      description:
        "We provide innovative digital solutions to help businesses grow online.",
    },
  ];

  return (
    <main className="main-content" id="services">
      <div className="container">
        <div className="section-header">
          <p>OUR SERVICES</p>

          <h2>
            Solutions Designed for
            <span> Your Business</span>
          </h2>

          <p className="section-description">
            We provide modern technology solutions to help businesses build,
            grow, and succeed in the digital world.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default MainContent;