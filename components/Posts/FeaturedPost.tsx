import CustomButton from "../Buttons/CustomButton";
import profileImage from "@/public/images/profile.jpg";
import Author from "./Author";
import Link from "next/link";
export default function FeaturedPost() {
  return (
    <div className="w-full h-featuredHeight relative mb-32 md:mb-36 rounded-md bg-featuredBg bg-cover bg-no-repeat bg-center ">
      <div className="card w-11/12 mx-auto absolute inset-x-0 -bottom-24  py-6 md:px-6 lg:px-8 md:py-7">
        <CustomButton name="featured" type="button" />
        <h1>The Impact of Technology on the Workplace</h1>
        <Author name="Kelvin Pella" src={profileImage} date={new Date()} />
        <p className="my-2 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          minus, eaque error iste ducimus quos inventore deleniti similique id
          harum enim commodi vitae molestiae vel laudantium hic tenetur quis
          facilis?
        </p>
        <Link href="/" className="my-4 font-semibold text-royal-blue md:my-0 hover:text-cyan-500">
          Read More
        </Link>
      </div>
    </div>
  );
}
