import Image from "next/image";
import profileImage from "@/public/images/profile.jpg";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
export default function Contact() {
  const socialMediaLinks = [
    {
      name: "twitter",
      icon: <AiOutlineTwitter className="text-3xl md:text-4xl" />,
    },
    {
      name: "facebook",
      icon: <AiOutlineFacebook className="text-3xl md:text-4xl" />,
    },
    {
      name: "instagram",
      icon: <AiOutlineInstagram className="text-3xl md:text-4xl " />,
    },
  ];
  return (
    <div className="pt-24 w-full lg:max-w-screen-xl mx-auto p-2">
      <div className="w-full text-center">
        <div className="w-40 h-40 mx-auto relative">
          <Image
            src={profileImage}
            alt="profile image"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="my-4 text-slate-500">Kelvin Pella</h2>
        <p className="my-4 md:w-7/12 mx-auto">
          Kelvin Pella is a passionate aviation enthusiast and accomplished
          author in the field of aviation. With a background in Aeronautical
          Engineering, he combines his technical expertise with a love for
          writing to educate and inspire others about aviation. <br />
          His articles and books cover a wide range of aviation topics, from
          history to technological advancements. <br />
          As a licensed pilot, he brings firsthand experience to his work. His
          goal is to ignite a sense of wonder and inspire the next generation of
          aviation enthusiasts and professionals.
        </p>
        <div className="flex items-center justify-center space-x-6 my-6">
          {socialMediaLinks.map(({ name, icon }) => (
            <span key={name}>{icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
