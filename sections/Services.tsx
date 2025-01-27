import { Container } from "@/components/Container";
import { SerivesCard } from "@/components/SerivcesCard";
import { services } from "@/constant/data.json";

export const Serivces = () => {
  return (
    <div
      className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100"
      id="services"
    >
      <Container>
        <div className="py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {services.heading}
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-12"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <ul className="space-y-4">
                {services.cards[0].map((service, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span className="text-lg text-gray-700">
                      {service.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <ul className="space-y-4">
                {services.cards[1].map((service, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                    <span className="text-lg text-gray-700">
                      {service.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
