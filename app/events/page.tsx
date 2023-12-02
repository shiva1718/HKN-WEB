import SingleEvent from "@/components/Event/SingleEvent";
import blogData from "@/components/Event/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  // other metadata
};

const Event = () => {
  return (
    <>
      <Breadcrumb
        pageName="Events"
        description=""
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleEvent event={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
