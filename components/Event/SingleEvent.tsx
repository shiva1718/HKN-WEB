import { Event } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

const SingleEvent = ({ event }: { event: Event }) => {
  const { title, image, paragraph, venue, tags, date } = event;
  return (
    <>
      <div
        className="hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
      >
        <Link
          href="/#"
          className="relative block aspect-[37/37] w-full"
        >
          {/*<span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">*/}
          {/*  {tags[0]}*/}
          {/*</span>*/}
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            {/*<Link*/}
            {/*  href="/blog-details"*/}
            {/*  className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"*/}
            {/*>*/}
            {/*  {title}*/}
            {/*</Link>*/}
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image className={"object-cover overflow:hidden"} src={venue.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  At {venue.name}
                </h4>
                <p className="text-xs text-body-color">{venue.location}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEvent;
