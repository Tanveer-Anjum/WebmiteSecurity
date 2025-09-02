import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "On-Site Guards",
      description: "Trained professionals ensuring safety at every site.",
    },
    {
      title: "CCTV Monitoring",
      description: "24/7 surveillance solutions tailored to your needs.",
    },
    {
      title: "Secure Transport",
      description:
        "Safe movement of goods, valuables, and sensitive items.",
    },
    {
      title: "24/7 Support",
      description:
        "Always-on assistance with dedicated response teams.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
