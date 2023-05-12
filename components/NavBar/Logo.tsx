import wingsLogo from "@/public/images/logo.png";
import Image from "next/image";

export default function Logo() {
  return <Image src={wingsLogo} alt="Wings Logo" priority className="w-20" />;
}
