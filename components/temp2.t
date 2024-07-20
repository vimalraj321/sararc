
import Link from "next/link";

const navLinks = [
  { name: "team", path: "#team" },
  { name: "services", path: "#services" },
  { name: "gallery", path: "#gallery" },
];
export const Navbar = () => {
  return (
    <header className="w-full bg-blue-300">
      <section className="max-w-[1200px] mx-auto lg:py-3 lg:px-5">
        <div>
          <h1 className="font-extrabold text-3xl">Saravan rc</h1>
        </div>
        <nav>
          <ul>
            {navLinks.map(({ name, path }, i) => (
              <li key={i}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
};
