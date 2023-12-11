import SingleEvent from "@/components/Event/SingleEvent";
import eventsData from "@/components/Event/eventData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "List  of all events conducted by SEC IEEE HKN",
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
                        {eventsData.map((event) => (
                            <a
                                href={"/events/" + event.id}
                                key={event.id}
                                className="hover:scale-110 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"

                            >
                                <SingleEvent event={event}/>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Event;
