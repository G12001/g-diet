import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { TiArrowRightOutline } from "react-icons/ti";
import bgImage from "./assets/bg-img2.png";
import logoImage from "./assets/brand-logo2.png"; // Add your logo image here

const plans = [
  {
    id: 0,
    title: "1 WEEK TRIAL",
    priceBefore: "1800",
    priceAfter: "1600",
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

  const PlanCard = ({ title, priceBefore, priceAfter, features }) => (
    <div
      onClick={handleCardClick}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 text-left relative hover:scale-105 transition duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        <ul className="text-gray-700 dark:text-gray-300 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="text-[#74DF00] mr-2" />
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
  );

  return (
    <section className="relative md:py-8 w-full mx-auto h-screen md:h-auto">
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
      <div className="text-center py-8 md:my-0 relative ">
        {/* Brand logo and tagline */}
        <div className="flex flex-col items-center mb-8">
          <img src={logoImage} alt="Brand Logo" className="w-32 md:w-48 mb-4" />
          <h1 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            The missing piece to your fitness puzzle
          </h1>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 title uppercase mt-4">
          Our diet works for everyone
        </h2>
        <h3 className="text-lg md:text-2xl mb-8 bg-[#74DF00] text-black py-2 px-4 rounded-md inline-block shadow-md">
          General Diet Plan
        </h3>
        <div className="  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   p-16  gap-12 w-full">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              title={plan.title}
              priceBefore={plan.priceBefore}
              priceAfter={plan.priceAfter}
              features={plan.features}
            />
          ))}
        </div>
        <div className="mt-20 flex justify-center items-center">
          <button
            onClick={handleCardClick}
            className="bg-[#74DF00] hover:bg-[#3fca15] text-white py-3 px-8 rounded-md text-sm md:text-lg font-semibold transition duration-300 flex justify-center items-center gap-x-2 shadow-md"
          >
            I WANT CUSTOMIZED DIET PLAN
            <TiArrowRightOutline className="text-white h-8 w-8" />
          </button>
        </div>
        <p className="mt-4 text-gray-900 dark:text-gray-300 text-sm">
          * All prices are in rupees
        </p>
      </div>

      {/* For mobile screen */}
      <div className="xs:hidden h-screen w-full flex flex-col justify-center items-center gap-y-2">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 title uppercase text-center">
          Our diet works for everyone
        </h2>
        <div className="flex gap-x-2">
          {plans.map((plan) => (
            <div
              onClick={() => setSelectedPlan(plan.id)}
              className={`shadow-lg cursor-pointer rounded-3xl h-32 w-32 flex flex-col justify-center items-center ${
                plan.id !== selectedPlan ? "bg-white" : "bg-[#74DF00]"
              } ${selectedPlan === plan.id ? "text-white" : "text-black"}`}
            >
              <h2 className="font-bold text-xl text-center mb-1">
                {plan.title}
              </h2>
              <div className="flex flex-col">
                <span className="line-through font-semibold">
                  {plan.priceBefore}/-
                </span>
                <span className="font-semibold">{plan.priceAfter}/-</span>
              </div>
            </div>
          ))}
        </div>
        <ul className="text-gray-700 dark:text-gray-900 mb-8 shadow-lg bg-white p-8 rounded-lg m-2 h-72 w-4/5">
          {plans[selectedPlan].features.map((feature, index) => (
            <li key={index} className="flex items-center mb-1">
              <FaCheck className="text-[#74DF00] mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <button
          onClick={handleCardClick}
          className="bg-[#74DF00] hover:bg-[#3fca15] text-white py-3 px-8 rounded-md text-sm md:text-lg font-semibold transition duration-300 flex justify-center items-center gap-x-2 shadow-md"
        >
          Subscribe Now
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
            <h2 className="text-2xl font-bold mb-4 text-center text-[#74df00]">
              Special Offer!
            </h2>
            <p className="text-lg mb-6 text-center">
              Get an extra <span className="font-bold">17% OFF</span>.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#74DF00] text-white py-2 px-4 rounded-md w-full text-lg font-semibold hover:bg-[#3fca15] transition duration-300"
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
