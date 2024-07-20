import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { team } from "@/constant/data.json";

export const Team = () => {
  return (
    <Container id="team">
      <div>
        <h2 className="text-3xl font-bold text-center">{team.heading}</h2>
        <div className="flex flex-col gap-[60px] md:gap-[150px] mt-[50px]">
          {team.cards.map((teammember, i) => (
            <Card key={i} {...teammember} />
          ))}
        </div>
      </div>
    </Container>
  );
};
