"use client";
import { useState } from "react";

export default function Faqs() {
  // State to keep track of the currently open FAQ
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the visibility of an answer
  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQs data with corrected answers
  const faqs = [
    {
      question: "What types of Chairs do you offer?",
      answer:
        "We offer a wide variety of chairs, including office chairs, gaming chairs, ergonomic chairs, and luxury recliners. Each type is designed for comfort and durability.",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "You can contact us through email at support@chairstore.com, call us at +123-456-7890, or reach us via live chat on our website.",
    },
    {
      question: "Do your chairs come with a warranty?",
      answer:
        "Yes, all our chairs come with a standard 1-year warranty, and some premium models include up to a 3-year extended warranty.",
    },
    {
      question: "What will be delivered? And when?",
      answer:
        "Your selected chair along with the necessary assembly tools and user manual will be delivered. Delivery time varies by location but usually takes 3-7 business days.",
    },
    {
      question: "Can I try a chair before purchasing?",
      answer:
        "We offer a 30-day return policy, so if you're not satisfied with your purchase, you can return it for a refund or exchange.",
    },
    {
      question: "How do I clean and maintain my chair?",
      answer:
        "To clean your chair, use a damp cloth for regular wiping. For deep cleaning, follow the specific care instructions provided in the user manual based on the material of your chair.",
    }
  ];

  return (
    <div className="px-[6vw] py-20 space-y-20">
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          {/* Heading Section */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16 rounded-md">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                {/* Question Button */}
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="flex text-lg font-semibold text-black">
                    {faq.question}
                  </span>
                  {/* Toggle Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Answer Section (Only Visible When Open) */}
                {openIndex === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Support Section */}
          {/* <p className="text-center text-gray-600 text-base mt-9">
            Still have questions? {" "}
            <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
              Contact our support
            </span>
          </p> */}
        </div>
      </section>
    </div>
  );
}





// "use client"
// import { useState } from "react";
// export default function Faqs() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const toggleAnswer = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   const faqs = [
//     {
//       question: "What types of Chairs do you offer?",
//       answer:
//         "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
//     },
//     {
//       question: "How can we get in touch with you?",
//       answer:
//         "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
//     },
//     {
//       question: "Do your chairs come with a warranty?",
//       answer:
//         "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
//     },
//     {
//       question: "What will be deliverd? and when?",
//       answer:
//         "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
//     },
//     {
//       question: "Can i try a chair before purchasing?",
//       answer:
//         "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
//     },
//     {
//       question: "How do i clean and maintain my comforty chair?",
//       answer:
//         "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
//     }
//   ];

//   return (
//     <div className="px-[6vw] py-20 space-y-20">
      
//       <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
//         <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//           <div className="max-w-2xl mx-auto text-center">
//             <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
//             Question Looks Here
//             </h2>
//           </div>
//           <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16 rounded-md">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
//               >
//                 <button
//                   type="button"
//                   className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
//                   onClick={() => toggleAnswer(index)}
//                 >
//                   <span className="flex text-lg font-semibold text-black">
//                     {faq.question}
//                   </span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className={`w-6 h-6 text-gray-400 transition-transform ${
//                       openIndex === index ? "rotate-180" : ""
//                     }`}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>
//                 {openIndex === index && (
//                   <div className="px-4 pb-5 sm:px-6 sm:pb-6">
//                     <p>{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <p className="text-center text-gray-600 textbase mt-9">
//             Still have questions?{" "}
//             <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
//               Contact our support
//             </span>
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }


// export default function Faqs() {
//   return (
//     <>
//       <div className="px-[6vw] py-20 space-y-20">
//         <div className="text-center">
//           <h1 className="text-[50px] lg:text-[4vw] font-semibold">Question Looks Here</h1>
//           <p className=" text-[20px] lg:text-[1.5vw] font-normal text-gray-700">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been created.
//           </p>
//         </div>
//         <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
//   <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//     <div className="max-w-2xl mx-auto text-center">
//       <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
//         Explore Common Questions
//       </h2>
//     </div>
//     <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
//       <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
//         <button
//           type="button"
//           id="question1"
//           data-state="closed"
//           className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
//         >
//           <span className="flex text-lg font-semibold text-black">
//             How can I get started?
//           </span>
//           <svg
//             id="arrow1"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6 text-gray-400"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>
//         <div
//           id="answer1"
//           style={{ display: "none" }}
//           className="px-4 pb-5 sm:px-6 sm:pb-6"
//         >
//           <p>
//             Getting started is easy! Sign up for an account, and you'll have
//             access to our platform's features. No credit card required for the
//             initial signup.
//           </p>
//         </div>
//       </div>
//       <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
//         <button
//           type="button"
//           id="question2"
//           data-state="closed"
//           className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
//         >
//           <span className="flex text-lg font-semibold text-black">
//             What is the pricing structure?
//           </span>
//           <svg
//             id="arrow2"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6 text-gray-400"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>
//         <div
//           id="answer2"
//           style={{ display: "none" }}
//           className="px-4 pb-5 sm:px-6 sm:pb-6"
//         >
//           <p>
//             Our pricing structure is flexible. We offer both free and paid
//             plans. You can choose the one that suits your needs and budget.
//           </p>
//         </div>
//       </div>
//       <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
//         <button
//           type="button"
//           id="question3"
//           data-state="closed"
//           className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
//         >
//           <span className="flex text-lg font-semibold text-black">
//             What kind of support do you provide?
//           </span>
//           <svg
//             id="arrow3"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6 text-gray-400"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>
//         <div
//           id="answer3"
//           style={{ display: "none" }}
//           className="px-4 pb-5 sm:px-6 sm:pb-6"
//         >
//           <p>
//             We offer comprehensive customer support. You can reach out to our
//             support team through various channels, including email, chat, and a
//             knowledge base.
//           </p>
//         </div>
//       </div>
//       <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
//         <button
//           type="button"
//           id="question4"
//           data-state="closed"
//           className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
//         >
//           <span className="flex text-lg font-semibold text-black">
//             Can I cancel my subscription anytime?
//           </span>
//           <svg
//             id="arrow4"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6 text-gray-400"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>
//         <div
//           id="answer4"
//           style={{ display: "none" }}
//           className="px-4 pb-5 sm:px-6 sm:pb-6"
//         >
//           <p>
//             Yes, you can cancel your subscription at any time without any hidden
//             fees. We believe in providing a hassle-free experience for our
//             users.
//           </p>
//         </div>
//       </div>
//     </div>
//     <p className="text-center text-gray-600 textbase mt-9">
//       Still have questions?
//       <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
//         Contact our support
//       </span>
//     </p>
//   </div>
// </section>

        {/* <div className="grid gap-5 lg:grid-cols-2">
            <div className=" w-[100%] h-[200px] bg-[#F7F7F7] p-4 space-y-5 rounded-lg hover:scale-105 cursor-pointer">
                <div className="flex  justify-between text-[18px] md:text-[22px] font-semibold"><h1>What types of Chairs do you offer?</h1>
                <i className="ri-add-large-fill"></i></div>
                <p className="text-[#4F4F4F] text-[14px] md:text-[18px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            <div className=" w-[100%] h-[200px] bg-[#F7F7F7] p-4 spacne-y-5 rounded-lg hover:scale-105 cursor-pointer">
                <div className="flex  justify-between text-[18px] lg:text-[22px] font-semibold"><h1>How can we get in touch with you?</h1>
                <i className="ri-add-large-fill"></i></div>
                <p className="text-[#4F4F4F] text-[14px] md:text-[18px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            <div className=" w-[100%] h-[200px] bg-[#F7F7F7] p-4 space-y-5 rounded-lg hover:scale-105 cursor-pointer">
                <div className="flex  justify-between text-[18px] md:text-[22px] font-semibold"><h1>Do your chairs come with a warranty?</h1>
                <i className="ri-add-large-fill"></i></div>
                <p className="text-[#4F4F4F] text-[14px] md:text-[18px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            <div className=" w-[100%] h-[200px] bg-[#F7F7F7] p-4 space-y-5 rounded-lg hover:scale-105 cursor-pointer">
                <div className="flex  justify-between text-[18px] lg:text-[22px] font-semibold"><h1>What will be deliverd? and when?</h1>
                <i className="ri-add-large-fill"></i></div>
                <p className="text-[#4F4F4F] text-[14px] md:text-[18px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            <div className=" w-[100%] h-[200px] bg-[#F7F7F7] p-4 space-y-5 rounded-lg hover:scale-105 cursor-pointer">
                <div className="flex  justify-between text-[18px] lg:text-[22px] font-semibold"><h1>Can i try a chair before purchasing?</h1>
                <i className="ri-add-large-fill"></i></div>
                <p className="text-[#4F4F4F] text-[14px] md:text-[18px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
            <div className=" w-[100%] h-[200px] bg-[#F7F7F7] p-4 space-y-5 rounded-lg hover:scale-105 cursor-pointer">
                <div className="flex  justify-between text-[18px] lg:text-[22px] font-semibold"><h1>How do i clean and maintain my comforty chair?</h1>
                <i className="ri-add-large-fill"></i></div>
                <p className="text-[#4F4F4F] text-[14px] md:text-[18px] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
            </div>
        </div> */}
//       </div>
//     </>
//   );
// // }




// <section class="py-24">
//       <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div class="mb-16">
//           <h2
//             class="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]"
//           >
//             Frequently asked questions
//           </h2>
//         </div>
//         <div class="accordion-group" data-accordion="default-accordion">
//           <div
//             class="accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4 active"
//             id="basic-heading-one-with-icon"
//           >
//             <button
//               class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
//               aria-controls="basic-collapse-one-with-icon"
//             >
//               <h5>How can I reset my password?</h5>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600 origin-center"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18M12 18V6"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </button>
//             <div
//               id="basic-collapse-one-with-icon"
//               class="accordion-content w-full overflow-hidden pr-4"
//               aria-labelledby="basic-heading-one"
//               style="max-height: 250px;"
//             >
//               <p class="text-base text-gray-900 font-normal leading-6">
//                 To create an account, find the 'Sign up' or 'Create account'
//                 button, fill out the registration form with your personal
//                 information, and click 'Create account' or 'Sign up.' Verify
//                 your email address if needed, and then log in to start using the
//                 platform.
//               </p>
//             </div>
//           </div>
//           <div
//             class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
//             id="basic-heading-two-with-icon"
//           >
//             <button
//               class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
//               aria-controls="basic-collapse-two-with-icon"
//             >
//               <h5>How do I update my billing information?</h5>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18M12 18V6"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </button>
//             <div
//               id="basic-collapse-two-with-icon"
//               class="accordion-content w-full overflow-hidden pr-4"
//               aria-labelledby="basic-heading-two"
//             >
//               <p class="text-base text-gray-900 font-normal leading-6">
//                 To create an account, find the 'Sign up' or 'Create account'
//                 button, fill out the registration form with your personal
//                 information, and click 'Create account' or 'Sign up.' Verify
//                 your email address if needed, and then log in to start using the
//                 platform.
//               </p>
//             </div>
//           </div>
//           <div
//             class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
//             id="basic-heading-three-with-icon"
//           >
//             <button
//               class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
//               aria-controls="basic-collapse-three-with-icon"
//             >
//               <h5>How can I contact customer support?</h5>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18M12 18V6"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </button>
//             <div
//               id="basic-collapse-three-with-icon"
//               class="accordion-content w-full overflow-hidden pr-4"
//               aria-labelledby="basic-heading-three"
//             >
//               <p class="text-base text-gray-900 font-normal leading-6">
//                 To create an account, find the 'Sign up' or 'Create account'
//                 button, fill out the registration form with your personal
//                 information, and click 'Create account' or 'Sign up.' Verify
//                 your email address if needed, and then log in to start using the
//                 platform.
//               </p>
//             </div>
//           </div>
//           <div
//             class="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
//             id="basic-heading-three-with-icon"
//           >
//             <button
//               class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
//               aria-controls="basic-collapse-three-with-icon"
//             >
//               <h5>How do I delete my account?</h5>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18M12 18V6"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//               <svg
//                 class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M6 12H18"
//                   stroke="currentColor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </button>
//             <div
//               id="basic-collapse-three-with-icon"
//               class="accordion-content w-full overflow-hidden pr-4"
//               aria-labelledby="basic-heading-three"
              
//             >
//               <p class="text-base text-gray-900 font-normal leading-6">
//                 To create an account, find the 'Sign up' or 'Create account'
//                 button, fill out the registration form with your personal
//                 information, and click 'Create account' or 'Sign up.' Verify
//                 your email address if needed, and then log in to start using the
//                 platform.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>