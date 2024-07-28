import { Container } from "@/components/Container";
import { SerivesCard } from "@/components/SerivcesCard";
import { services } from "@/constant/data.json";

export const Serivces = () => {
  console.log(services.cards.length);
  return (
    <div className=" bg-blue-200" id="services">
      <Container>
        <div className="py-10 md:py-20">
          <h2 className="text-3xl font-bold text-center ">
            {services.heading}
          </h2>
          <div className="flex justify-center flex-col md:flex-row md:gap-5 mt-10">
            <ul className="list-disc text-xl ml-3 w-[90%] mx-auto">
              {services.cards[0].map((service, i) => (
                <li key={i} className="mt-3">
                  {service.name}
                </li>
              ))}
            </ul>
            <ul className="list-disc text-xl ml-3 w-[90%] mx-auto">
              {services.cards[1].map((service, i) => (
                <li key={i} className="mt-3">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
