import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export const FormattedPost = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full md:max-w-full mx-auto h-56 md:h-72 lg:h-96 my-4 md:my-8">
          <Image
            src={urlForImage(value).url()}
            alt="Blog Post Image"
            fill
            className="rounded-md object-contain"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc">{children}</ul>,
  },
  block: {
    h1: ({ children }: any) => <h1 className="my-6 md:my-12">{children}</h1>,
    h2: ({ children }: any) => <h2 className="my-4 md:my-8">{children}</h2>,
  },
};
