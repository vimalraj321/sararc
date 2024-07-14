import { Container } from "@/components/Container"
import { SerivesCard } from "@/components/SerivcesCard"
import { services } from "@/constant/data.json"

export const Serivces = () => {
  return (
    <div className=" bg-blue-200" id="services">
      <Container>
        <div className="py-10 md:py-20">
          <h2 className='text-3xl font-bold text-center '>{services.heading}</h2>
          <div className="grid gap-x-8 gap-y-14 grid-cols-1 md:grid-cols-3 mt-[50px]">
            {services.cards.map((service, i) => (
              <SerivesCard key={i} {...service} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

