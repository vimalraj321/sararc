import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { Gallery } from "@/sections/Gallery";
import { Home } from "@/sections/Home";
import { Serivces } from "@/sections/Services";
import { Team } from "@/sections/Team";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="">
        <Home />
        <Team />
        <Serivces />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
