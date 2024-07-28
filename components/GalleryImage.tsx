import Image from "next/image";
export const GalleryImage = ({ src }: { src: string }) => {
  return (
    <div>
      <Image src={src} alt="Hi" width={1240} height={600} />
    </div>
  );
};
