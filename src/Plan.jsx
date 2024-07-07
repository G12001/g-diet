import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import bgImage from "./assets/bg-img.png";

const PlanSection = () => {
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
          {/* Plan Card */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 max-w-sm w-full text-left relative hover:scale-105 transition duration-300">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              1 WEEK TRIAL
            </h4>
            <ul className="text-gray-700 dark:text-gray-300 mb-8">
              <li>Variety of Salads</li>
              <li>Preferred Nutritional Count</li>
              <li>Home Delivery</li>
              <li>Time Bounded Delivery</li>
            </ul>
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 ">
              <div className="bg-[#C7FF9B] text-white rounded-full h-24 w-24 flex items-center justify-center flex-col p-2 hover:bg-green-600 transition duration-300 border">
                <span className="text-[18px] font-bold line-through">
                  1800/-
                </span>
                <span className="text-[18px] font-bold">1600/-</span>
              </div>
            </div>
          </div>

          {/* Plan Card */}

          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 max-w-sm w-full text-left relative hover:scale-105 transition duration-300">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              1 MONTH PLAN
            </h4>
            <ul className="text-gray-700 dark:text-gray-300 mb-8">
              <li>Variety of Salads</li>
              <li>Preferred Nutritional Count</li>
              <li>Home Delivery</li>
              <li>Delivery at Your Preferred Time</li>
              <li>2 Consultations</li>
            </ul>
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
              <div className="bg-[#C7FF9B] text-white rounded-full h-24 w-24 flex items-center justify-center flex-col p-2 hover:bg-green-600 transition duration-300 border">
                <span className="text-[18px] font-bold line-through">
                  7500/-
                </span>
                <span className="text-[18px] font-bold">6000/-</span>
              </div>
            </div>
          </div>

          {/* Plan Card */}

          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 max-w-sm w-full text-left relative hover:scale-105 transition duration-300">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              3 MONTH PLAN
            </h4>
            <ul className="text-gray-700 dark:text-gray-300 mb-8">
              <li>Variety of Salads</li>
              <li>Preferred Nutritional Count</li>
              <li>Home Delivery</li>
              <li>Delivery at Your Preferred Time</li>
              <li>7 Consultations</li>
              <li>Premium Packaging</li>
            </ul>
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
              <div className="bg-[#C7FF9B] text-white rounded-full h-24 w-24 flex items-center justify-center flex-col p-2 hover:bg-green-600 transition duration-300 border">
                <span className="text-[18px] font-bold line-through">
                  22500/-
                </span>
                <span className="text-[18px] font-bold">18000/-</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <button className="bg-[#BBFF86] text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300 flex justify-center items-center gap-x-2 ">
            <spm>I WANT CUSTOMIZED DIET PLAN</spm>
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
