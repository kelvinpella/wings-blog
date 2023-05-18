import wingsLogo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      {" "}
      <Image src={wingsLogo} alt="Wings Logo" priority className="w-20" />
    </Link>
  );
}
