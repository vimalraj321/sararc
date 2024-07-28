import { Container } from "@/components/Container";
import { Email } from "@/icons/Email";
import { Location } from "@/icons/Location";
import { Phone } from "@/icons/Phone";
import Link from "next/link";

export const Footer = () => (
  <div className="bg-blue-200 " id="contact">
    <div className="py-7 mt-[100px] w-[90%] md:w-3/4 max-w-[1200px] mx-auto">
      <div className="flex md:flex-row flex-col">
        <div className="w-full">
          <h2 className="text-lg text-center md:text-start font-bold md:py-0 py-4">
            Saravana RC
          </h2>
        </div>
        <div className="w-full mt-3 md:mt-0">
          <div className="flex gap-4 md:gap-2">
            <div className="w-7 mt-1">
              <Location />
            </div>
            <p>
              Dr.Saravanan.C NO.15A, (plot no 4), First Cross Bharathi Nagar
              (near shivaji statue), Karuvadikuppam, Lawspet, Pondicherry
              605008.
            </p>
          </div>
          <Link
            href={"tel:+917550151561"}
            className="flex items-center mt-3 gap-4 md:gap-2"
          >
            <div className="w-7">
              <Phone />
            </div>
            <p>+91 75501 51561</p>
          </Link>
          <Link
            href={"mailto:saravananpsychologist@gmail.com"}
            className="flex items-center mt-5 gap-4 md:gap-2"
          >
            <div className="w-7">
              <Email />
            </div>
            <p>saravananpsychologist@gmail.com</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-1 my-6 bg-gray-50"></div>
      <div className="w-full ">
        <p className="text-center">© 2024 - All rights reserved</p>
        <p className="text-sm mt-3 text-center">
          Develop by{" "}
          <Link href="" className="text-blue-700 underline underline-offset-4">
            DCTRO
          </Link>
        </p>
      </div>
    </div>
  </div>
);
