import Image from "next/image";

type Props = {
  image: string;
  heading: string;
  content: string[];
};

export const Card = ({ image, heading, content }: Props) => {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden p-6">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3">
          <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={heading}
              width={400}
              height={300}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">{heading}</h3>

          <ul className="space-y-4">
            {content.map((list, i) => (
              <li key={i} className="flex items-start group/item">
                <span className="flex-shrink-0 h-2 w-2 mt-2.5 rounded-full bg-blue-600 group-hover/item:scale-125 transition-transform duration-300" />
                <span className="ml-4 text-gray-600 leading-relaxed">
                  {list}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
