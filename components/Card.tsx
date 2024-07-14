import Image from "next/image";

type Props = {
  image: string,
  heading: string,
  content: string[]
}

export const Card = ({ image, heading, content }: Props) => {
  return (
    <div className="flex flex-col md:flex-row w-full  gap-10 md:gap-20">
      <div className="w-full max-w-[450px]">
        <Image src={image} alt={"image1"} width={250} height={250} className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="w-full">
        <h3 className="text-xl font-semibold tracking-wide">{heading}</h3>
        <ul className="list-disc pl-5 mt-3">
          {content.map((list) => (
            <li className="text-gray-600 tracking-tight leading-5 text-[14px]">{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
