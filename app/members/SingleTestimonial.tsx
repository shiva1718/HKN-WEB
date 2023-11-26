import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import './style.css';
// const starIcon = (
//   <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
//     <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
//   </svg>
// );

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const {name, image, content, designation } = testimonial;

  let ratingIcons = [];
  // for (let index = 0; index < star; index++) {
  //   ratingIcons.push(
  //     <span key={index} className="text-yellow">
  //       {starIcon}
  //     </span>,
  //   );
  // }

  return (
      <div className="w-full">
        <div
            className="wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8"
            data-wow-delay=".1s"
        >
          {/*<div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>*/}
          {/*<p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">*/}
          {/*  “{content}*/}
          {/*</p>*/}
          <div className="flex items-center">
            <div className="relative mr-4 h-[100px] w-full max-w-[100px] overflow-hidden rounded-full">
              <Image src={image} alt={name} fill />
            </div>
            <div className="w-full">
              <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
                {name}
              </h3>
              <p className="text-sm text-body-color">{designation}</p>

                <br/>
                <div className="flex items-center gap-2">

                    <a
                        href="#"
                        aria-label="social-link"
                        className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                        <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            className="fill-current"
                        >
                            <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        aria-label="social-link"
                        className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                        {/*<svg*/}

                        {/*    // width="17"*/}
                        {/*    // height="16"*/}
                        {/*    // // // viewBox="0 0 17 16"*/}
                        {/*    // className="fill-current"*/}
                        {/*>*/}
                        {/*    <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z" />*/}
                        {/*</svg>*/}
                      <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM8 6l4 3 4-3"></path>
                      </svg>
{/*                         <img className="social" src="/images/logo/gmail_logo.svg" alt=""/> */}
                    </a>



                </div>

            </div>
          </div>
        </div>
      </div>
  );
};

export default SingleTestimonial;
