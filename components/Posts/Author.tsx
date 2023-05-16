import Image, { StaticImageData } from "next/image";

type Props = {
  src: string;
  name: string;
  date: Date;
};
export default function Author({ src, name, date }: Props) {
  return (
    <div className="w-full grid grid-cols-authorCol grid-rows-1 items-center gap-x-3 grid-flow-col my-4 text-manatee capitalize">
      <Image
        src={src}
        alt="Profile Image"
        className="w-10 h-10 rounded-full"
        width={40}
        height={40}
      />
      <h2 className="truncate">{name}</h2>
      <p>{new Date(date).toDateString()}</p>
    </div>
  );
}
