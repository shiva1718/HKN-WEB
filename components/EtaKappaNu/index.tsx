"use client";

import Image from "next/image";
import { useState } from "react";

import ModalVideo from "react-modal-video";
// bg-[url('/images/hero/landing-page.jpg')] bg-cover

const EtaKappaNu = () => {
    return (
        <section className="py-16 md:py-20 lg:py-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-1/2">
                        <div
                            className="relative mx-auto mb-12 aspect-[25/20] max-w-[500px] text-center lg:m-0"
                        >
                            <Image
                                src="/images/logo/IEEEEtaKappaNuStackedLogo.png"
                                alt="IEEE HKN Logo"
                                fill
                                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                            />
                            {/*<Image*/}
                            {/*    src="/images/about/SUMMA-white.png"*/}
                            {/*    alt="about image"*/}
                            {/*    fill*/}
                            {/*    className="drop-shadow-three hidden dark:block dark:drop-shadow-none"*/}
                            {/*/>*/}
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="max-w-[470px]">
                            <div className="mb-9">
                                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                    {/*Bug free code*/}
                                </h3>
                                <p className="text-black text-xl font-medium text-justify !leading-relaxed">
                                    The IEEE HKN (Institute of Electrical and Electronics Engineers Eta Kappa Nu)
                                    Society is a prestigious honor society for students and professionals in the fields
                                    of electrical engineering, computer engineering, and related disciplines. The
                                    primary mission of the society is to recognize and promote excellence guided by its
                                    three ideals: <span className={"font-bold"}>scholarship, character, and attitude.</span> The society aims to achieve this
                                    mission by identifying and inviting students who have demonstrated exceptional
                                    academic performance and leadership qualities to join the society. With a rich
                                    history and a global presence, it continues to recognize and nurture the brightest
                                    minds in technology, contributing to advancements that benefit humanity in the
                                    ever-evolving world of technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



// const EtaKappaNu = () => {
//   const [isOpen, setOpen] = useState(false);
//
//   return (
//       <section className="relative z-10 py-16 md:py-20 lg:py-28">
//         <div className="container">
//           <SectionTitle
//               title="IEEE HKN"
//               paragraph="The IEEE HKN (Institute of Electrical and Electronics Engineers Eta Kappa Nu) Society is a prestigious honor society for students and professionals in the fields of electrical engineering, computer engineering, and related disciplines. The primary mission of the society is to recognize and promote excellence guided by its three ideals: scholarship, character, and attitude. The society aims to achieve this mission by identifying and inviting students who have demonstrated exceptional academic performance and leadership qualities to join the society. With a rich history and a global presence, it continues to recognize and nurture the brightest minds in technology, contributing to advancements that benefit humanity in the ever-evolving world of technology."
//               center
//               mb="80px"
//               width={"70vw"}
//           />

            {/*<NuEtaSectionOne></NuEtaSectionOne>*/}
          {/*<div className="-mx-4 flex flex-wrap">*/}
          {/*  <div className="w-full px-4">*/}
          {/*    <div*/}
          {/*        className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"*/}
          {/*        data-wow-delay=".15s"*/}
          {/*    >*/}
          {/*      <div className="relative aspect-[77/40] items-center justify-center">*/}
          {/*        <Image src="/images/video/video.jpg" alt="video image" fill/>*/}
          {/*        <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">*/}
          {/*          <button*/}
          {/*              aria-label="video play button"*/}
          {/*              onClick={() => setOpen(true)}*/}
          {/*              className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"*/}
          {/*          >*/}
          {/*            <svg*/}
          {/*                width="16"*/}
          {/*                height="18"*/}
          {/*                viewBox="0 0 16 18"*/}
          {/*                className="fill-current"*/}
          {/*            >*/}
          {/*              <path*/}
          {/*                  d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z"/>*/}
          {/*            </svg>*/}
          {/*          </button>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        // </div>

        {/*<ModalVideo*/}
        {/*    channel="youtube"*/}
        {/*    autoplay={true}*/}
        {/*    start={true}*/}
        {/*    isOpen={isOpen}*/}
        {/*    videoId="L61p2uyiMSo"*/}
        {/*    onClose={() => setOpen(false)}*/}
        {/*/>*/}

//         <div
//             className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
//       </section>
//   );
// };

export default EtaKappaNu;
