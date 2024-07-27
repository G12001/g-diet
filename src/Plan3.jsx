import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { TiArrowRightOutline } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";

import bgImage from "./assets/bg-img2.png";
import logoImage from "./assets/brand-logo2.png"; // Add your logo image here

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import RazorpayButton from "./RazorpayButton";

const plans = [
  {
    id: 0,
    title: "1 WEEK TRIAL",
    priceBefore: "1800",
    priceAfter: "1600",
    RazorpayButton: RazorpayButton,
    features: [
      "Variety of Salads",
      "Preferred Nutritional Count",
      "Home Delivery",
      "Time Bounded Delivery",
    ],
  },
  {
    id: 1,
    title: "1 MONTH PLAN",
    priceBefore: "7500",
    priceAfter: "6000",
    RazorpayButton: RazorpayButton,
    features: [
      "Variety of Salads",
      "Preferred Nutritional Count",
      "Home Delivery",
      "Delivery at Your Preferred Time",
      "2 Consultations",
    ],
  },
  {
    id: 2,
    title: "3 MONTH PLAN",
    priceBefore: "22500",
    priceAfter: "18000",
    RazorpayButton: RazorpayButton,
    features: [
      "Variety of Salads",
      "Preferred Nutritional Count",
      "Home Delivery",
      "Delivery at Your Preferred Time",
      "7 Consultations",
      "Premium Packaging",
    ],
  },
];

const PlanSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
      const transitionTimer = setTimeout(() => {
        setModalVisible(true);
      }, 10); // Slight delay to trigger the transition effect
      return () => clearTimeout(transitionTimer);
    }, 1000); // Modal opens 1 second after the component mounts
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 300); // Match this to the transition duration
    return () => clearTimeout(timer);
  };

  const handleCardClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdO3xN4Pkj77pdcraDphfQC_it5yL8mLUDQqlA1-WP8w3ZCTg/viewform?usp=sf_link",
      "_blank"
    );
  };

  const PlanCard = ({
    title,
    priceBefore,
    priceAfter,
    features,
    RazorpayButton,
  }) => (
    <div className="flex flex-col justify-center items-center gap-y-8">
      <div
        // onClick={handleCardClick}
        className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 text-left relative flex flex-col justify-between cursor-pointer"
      >
        <div>
          <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <ul className="text-gray-700 dark:text-gray-300 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaCheck className="text-[#ACE60A] mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
          <div className="bg-[#FF8C00] text-white rounded-full h-24 w-24 flex items-center justify-center flex-col p-4 transition duration-300  border border-gray-900">
            <span className="text-[18px] font-bold line-through">
              {priceBefore}/-
            </span>
            <span className="text-[18px] font-bold">{priceAfter}/-</span>
          </div>
        </div>
      </div>
      <RazorpayButton />
    </div>
  );

  return (
    <section className="relative md:py-8 w-full mx-auto h-screen sm:h-auto">
      <div
        className="fixed inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
          zIndex: -1,
        }}
      ></div>
      <div
        className="fixed inset-0 bg-white"
        style={{
          opacity: 0.8,
          zIndex: -1,
        }}
      ></div>
      {/* For larger screens */}
      <div className="text-center py-8 md:my-0 relative hidden sm:block">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center">
            <div className="flex flex-col justify-center items-center w-[18%]">
              <img
                src={logoImage}
                alt="Brand Logo"
                className="w-24 md:w-28 mb-1"
              />
              <h1 className="flex-grow text-[12px] font-semibold text-gray-900 dark:text-gray-100">
                The missing piece to your fitness puzzle
              </h1>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 title uppercase mt-4">
              Our diet works for everyone
            </h2>
          </div>
        </div>
        <h3 className="text-lg md:text-2xl mb-8 bg-[#ACE60A] text-black py-2 px-4 rounded-md inline-block shadow-md">
          General Diet Plan
        </h3>
        <div className="container mx-auto  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-16 md:gap-x-16 p-16">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              title={plan.title}
              priceBefore={plan.priceBefore}
              priceAfter={plan.priceAfter}
              features={plan.features}
              RazorpayButton={plan.RazorpayButton}
            />
          ))}
        </div>
        <div className="mt-20 flex justify-center items-center">
          <button
            onClick={handleCardClick}
            className="bg-[#ACE60A] hover:bg-[#3fca15] text-white py-3 px-8 rounded-md text-sm md:text-lg font-semibold transition duration-300 flex justify-center items-center gap-x-2 shadow-md"
          >
            I WANT CUSTOMIZED DIET PLAN
            <FaArrowRightLong className="text-white h-8 w-8" />
          </button>
        </div>
        <p className="mt-4 text-gray-900 dark:text-gray-300 text-sm">
          * All prices are in rupees
        </p>
      </div>

      {/* For mobile screen */}
      <div className="sm:hidden h-screen w-full flex flex-col justify-start items-center gap-y-4">
        <h2 className="text-3xl md:text-5xl font-bold title uppercase text-center my-12">
          Our diet works for everyone
        </h2>
        <div className="cursor-pointer bg-[#ACE60A] text-white py-2 px-8 rounded-md text-sm md:text-lg font-semibold transition duration-300 flex justify-center gap-x-2 items-center shadow-md border border-red-600">
          <div className="">
            <button className="flex justify-center items-center gap-x-2">
              I WANT CUSTOMIZED DIET PLAN
            </button>
            <div>
              <p className="text-[12px] text-gray-600 text-center">
                (Weight loss, Weight gain, Keto, Athletic)
              </p>
            </div>
          </div>
          <FaArrowRightLong className="text-white h-6 w-6" />
        </div>
        <div className="flex gap-x-2">
          {plans.map((plan) => (
            <div
              onClick={() => setSelectedPlan(plan.id)}
              className={` border border-gray-900 shadow-lg cursor-pointer rounded-3xl h-32 w-32 flex flex-col justify-center items-center ${
                plan.id !== selectedPlan ? "bg-white" : "bg-[#ACE60A]"
              } ${selectedPlan === plan.id ? "text-white" : "text-black"}`}
            >
              <h2 className="font-bold text-lg text-center mb-1">
                {plan.title}
              </h2>
              <div className="flex flex-col text-red-600">
                <span className="line-through font-semibold">
                  {plan.priceBefore}/-
                </span>
                <span className="font-semibold">{plan.priceAfter}/-</span>
              </div>
            </div>
          ))}
        </div>
        <ul className="text-gray-700 dark:text-gray-900 mb-6 shadow-lg bg-white p-6 rounded-lg m-2 h-56 w-[90%]">
          {plans[selectedPlan].features.map((feature, index) => (
            <li key={index} className="flex items-center mb-1">
              <FaCheck className="text-[#ACE60A] mr-2" />
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={handleCardClick}
          className="font-family border border-red-600 bg-[#ACE60A] text-white py-2 px-8 rounded-md text-lg md:text-lg font-semibold transition duration-300 hover:scale-110 flex justify-center items-center gap-x-2 shadow-md absolute bottom-12"
        >
          Subscribe
        </button>
      </div>

      {/* {showModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
            modalVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative transition-transform duration-300 ${
              modalVisible ? "scale-100" : "scale-75"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-[#ACE60A]">
              Special Offer!
            </h2>
            <p className="text-lg mb-6 text-center">
              Get an extra <span className="font-bold">17% OFF</span>.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#ACE60A] text-white py-2 px-4 rounded-md w-full text-lg font-semibold hover:bg-[#3fca15] transition duration-300"
            >
              Claim Your Offer
            </button>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default PlanSection;
