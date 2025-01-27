import { Container } from "@/components/Container";
import { Email } from "@/icons/Email";
import { Location } from "@/icons/Location";
import { Phone } from "@/icons/Phone";
import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Team", href: "#team" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
];

export const Footer = () => (
  <footer className="bg-gray-900 mt-auto" id="contact">
    <Container>
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Saravana Rehab</h3>
            <p className="text-gray-400 text-sm">
              A multimodal therapy center for children and adults, dedicated to
              providing comprehensive rehabilitation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Location className="w-5 h-5 text-blue-400" />
                </div>
                <p className="ml-3 text-gray-400 text-sm">
                  Dr.Saravanan.C NO.15A, (plot no 4), First Cross Bharathi Nagar
                  (near shivaji statue), Karuvadikuppam, Lawspet, Pondicherry
                  605008.
                </p>
              </div>

              <Link
                href="tel:+917550151561"
                className="flex items-center group"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm">
                  +91 75501 51561
                </span>
              </Link>

              <Link
                href="mailto:saravananpsychologist@gmail.com"
                className="flex items-center group"
              >
                <Email className="w-5 h-5 text-blue-400" />
                <span className="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm break-all">
                  saravananpsychologist@gmail.com
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Saravana Rehabilitation Center. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Developed by{" "}
              <Link
                href="https://www.dctro.in/"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                DCTRO
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);
