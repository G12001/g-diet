import React, { useState } from "react";

const plans = [
  {
    title: "Monthly",
    price: "$9.99",
    description: "Billed Monthly",
    details: [
      "Diverse range of workout programs.",
      "Personalized plans based on user goals and fitness level.",
      "Advanced tracking and analytics for detailed progress monitoring.",
    ],
  },
  {
    title: "Annual",
    price: "$79.99",
    description: "Billed Annually",
    discount: "Save 33%",
    details: [
      "Diverse range of workout programs.",
      "Personalized plans based on user goals and fitness level.",
      "Advanced tracking and analytics for detailed progress monitoring.",
    ],
  },
];

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-600 to-pink-500 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Subscribe to Premium</h1>
      <div className="flex w-full max-w-md space-x-4 mb-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => setSelectedPlan(plan)}
            className={`p-4 border rounded-lg flex-1 text-center cursor-pointer transition transform ${
              selectedPlan.title === plan.title
                ? "border-white scale-105"
                : "border-transparent"
            }`}
          >
            <div className="text-lg font-semibold">{plan.title}</div>
            <div className="text-2xl font-bold mt-2">{plan.price}</div>
            {plan.discount && (
              <div className="text-sm mt-1">{plan.discount}</div>
            )}
            <div className="text-sm mt-2">{plan.description}</div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-md bg-white text-black p-4 rounded-lg shadow-md mb-6">
        <h5 className="text-lg font-semibold mb-2">Description</h5>
        <ul className="list-disc list-inside">
          {selectedPlan.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg font-bold">
        Subscribe Now
      </button>
    </div>
  );
};

export default SubscriptionPlans;
