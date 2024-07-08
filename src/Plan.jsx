import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import bgImage from "./assets/bg-img.png";

const PlanSection = () => {
  const handleCustomDietPlanClick = () => {
    window.location.href = "https://www.customdietplan.com";
  };

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  const PlanCard = ({ title, priceBefore, priceAfter, url, features }) => (
    <div
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 max-w-sm w-full text-left relative hover:scale-105 transition duration-300 cursor-pointer"
      onClick={() => handleCardClick(url)}
    >
      <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {title}
      </h4>
      <ul className="text-gray-700 dark:text-gray-300 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FaCheck className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 ">
        <div className="bg-[#C7FF9B] text-white rounded-full h-24 w-24 flex items-center justify-center flex-col p-2 hover:bg-green-600 transition duration-300 border">
          <span className="text-[18px] font-bold line-through">
            {priceBefore}/-
          </span>
          <span className="text-[18px] font-bold">{priceAfter}/-</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-8 w-full mx-auto">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
          opacity: 0.1,
        }}
      ></div>
      <div className="container mx-auto text-center py-8 md:my-0 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Our diet works for everyone
        </h2>
        <h3 className="text-lg md:text-2xl mb-8 bg-[#BBFF86] text-white py-2 px-4 rounded-md border inline-block">
          General Diet Plan
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-14 p-12 sm:p-0">
          <PlanCard
            title="1 WEEK TRIAL"
            priceBefore="1800"
            priceAfter="1600"
            url="https://www.example.com/trial-plan"
            features={[
              "Variety of Salads",
              "Preferred Nutritional Count",
              "Home Delivery",
              "Time Bounded Delivery",
            ]}
          />
          <PlanCard
            title="1 MONTH PLAN"
            priceBefore="7500"
            priceAfter="6000"
            url="https://www.example.com/month-plan"
            features={[
              "Variety of Salads",
              "Preferred Nutritional Count",
              "Home Delivery",
              "Delivery at Your Preferred Time",
              "2 Consultations",
            ]}
          />
          <PlanCard
            title="3 MONTH PLAN"
            priceBefore="22500"
            priceAfter="18000"
            url="https://www.example.com/three-month-plan"
            features={[
              "Variety of Salads",
              "Preferred Nutritional Count",
              "Home Delivery",
              "Delivery at Your Preferred Time",
              "7 Consultations",
              "Premium Packaging",
            ]}
          />
        </div>
        <div className="mt-12 flex justify-center items-center">
          <button
            className="bg-[#BBFF86] text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300 flex justify-center items-center gap-x-2"
            onClick={handleCustomDietPlanClick}
          >
            <span>I WANT CUSTOMIZED DIET PLAN</span>
            <FaArrowRight className="text-white h-8 w-8" />
          </button>
        </div>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
          * All prices are in rupees
        </p>
      </div>
    </section>
  );
};

export default PlanSection;
