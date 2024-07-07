import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import bgImage from "./assets/bg-img.png";

const PlanSection = () => {
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

  return (
    <section className="relative py-8 w-full mx-auto">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
          zIndex: -1,
        }}
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-black to-transparent"
        style={{
          opacity: 0.7,
          zIndex: -1,
        }}
      ></div>
      <div className="container mx-auto text-center py-8 md:my-0 relative">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Our Diet Works for Everyone
        </h2>
        <h3 className="text-lg md:text-2xl mb-8 bg-green-500 text-white py-2 px-4 rounded-md inline-block shadow-lg">
          General Diet Plan
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-14 p-12 sm:p-0">
          {/* Plan Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-sm w-full text-left relative hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              1 WEEK TRIAL
            </h4>
            <ul className="text-gray-700 dark:text-gray-300 mb-8 space-y-2">
              <li>Variety of Salads</li>
              <li>Preferred Nutritional Count</li>
              <li>Home Delivery</li>
              <li>Time Bounded Delivery</li>
            </ul>
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
              <div className="bg-green-500 text-white rounded-full h-24 w-24 flex items-center justify-center flex-col p-2 hover:bg-green-600 transition duration-300 border border-gray-200 dark:border-gray-700">
                <span className="text-[18px] font-bold line-through">
                  1800/-
                </span>
                <span className="text-[18px] font-bold">1600/-</span>
              </div>
            </div>
          </div>

          {/* Plan Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-sm w-full text-left relative hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              1 MONTH PLAN
            </h4>
            <ul className="text-gray-700 dark:text-gray-300 mb-8 space-y-2">
              <li>Variety of Salads</li>
              <li>Preferred Nutritional Count</li>
              <li>Home Delivery</li>
              <li>Delivery at Your Preferred Time</li>
              <li>2 Consultations</li>
            </ul>
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
              <div className="bg-green-500 text-white rounded-full h-24 w-24 flex items-center justify-center flex-col p-2 hover:bg-green-600 transition duration-300 border border-gray-200 dark:border-gray-700">
                <span className="text-[18px] font-bold line-through">
                  7500/-
                </span>
                <span className="text-[18px] font-bold">6000/-</span>
              </div>
            </div>
          </div>

          {/* Plan Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-sm w-full text-left relative hover:scale-105 transition-transform duration-300 border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              3 MONTH PLAN
            </h4>
            <ul className="text-gray-700 dark:text-gray-300 mb-8 space-y-2">
              <li>Variety of Salads</li>
              <li>Preferred Nutritional Count</li>
              <li>Home Delivery</li>
              <li>Delivery at Your Preferred Time</li>
              <li>7 Consultations</li>
              <li>Premium Packaging</li>
            </ul>
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
              <div className="bg-green-500 text-white rounded-full h-24 w-24 flex items-center justify-center flex-col p-2 hover:bg-green-600 transition duration-300 border border-gray-200 dark:border-gray-700">
                <span className="text-[18px] font-bold line-through">
                  22500/-
                </span>
                <span className="text-[18px] font-bold">18000/-</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <button className="bg-green-500 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300 flex justify-center items-center gap-x-2 shadow-lg">
            I WANT CUSTOMIZED DIET PLAN
            <FaArrowRight className="text-white h-8 w-8" />
          </button>
        </div>
        <p className="mt-4 text-gray-300 text-sm">* All prices are in rupees</p>
      </div>

      {showModal && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
            modalVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative transition-transform duration-300 ${
              modalVisible ? "scale-100" : "scale-75"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
              Special Offer!
            </h2>
            <p className="text-lg mb-6 text-center">
              Get an extra <span className="font-bold">75% OFF</span> on your
              first order.
            </p>
            <button
              onClick={closeModal}
              className="bg-green-600 text-white py-2 px-4 rounded-md w-full text-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Claim Your Offer
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlanSection;
