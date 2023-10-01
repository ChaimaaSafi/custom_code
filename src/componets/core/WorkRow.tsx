import LinkIcon from "@/icons/LinkIcon";
import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

type TWork = {
  description: string;
  link: string;
  name: string;
  imgSrc: string | StaticImageData;
  className?: string;
};

function WorkRow({ description, link, name, imgSrc, className }: TWork) {
  return (
    <div className={`md:px-2  w-full ${className}`}>
      <div className="relative rounded-lg mb-10 h-[200px] md:h-[350px] md:w-[800px] w-full">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="rounded-lg object-fill lg:object-cover"
        />
      </div>
      <div>
        <h2 className="text-xl tracking-widest font-normal text-orange-400 mb-4 pb-1 border-b-2 border-double border-b-orange-400 w-max">
          {name}
        </h2>
        <p className="text-white font-light text-base mb-7 max-w-5xl md:leading-7 w-full">
          {description}
        </p>
        <Link
          href={link}
          className="text-sm font-normal bg-white border-gray-100 px-2.5 py-2 flex items-center space-x-2 text-gray-900 w-max rounded-lg hover:scale-110 hover:shadow-md hover:shadow-slate-50 transition-all duration-150"
          target="_blank"
        >
          <span> View site</span>
          <span>
            <LinkIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default WorkRow;
