import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { Gallery } from "@/sections/Gallery";
import { Home } from "@/sections/Home";
import { Serivces } from "@/sections/Services";
import { Team } from "@/sections/Team";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Home />
        <Team />
        <Serivces />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
