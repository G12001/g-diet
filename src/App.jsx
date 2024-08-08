import React from "react";
import Plan1 from "./components/Plan1";

import RazorpayButton1 from "./components/Razorpay payment buttons/RazorpayButton1";
import RazorpayButton2 from "./components/Razorpay payment buttons/RazorpayButton2";
import RazorpayButton3 from "./components/Razorpay payment buttons/RazorpayButton3";

const plans = [
  {
    id: 0,
    title: "1 WEEK TRIAL",
    priceBefore: "₹ 1800",
    priceAfter: "₹ 1600",
    RazorpayButton: RazorpayButton1,
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
    priceBefore: "₹ 7500",
    priceAfter: "₹ 6000",
    RazorpayButton: RazorpayButton2,
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
    priceBefore: "₹ 22500",
    priceAfter: "₹ 14999",
    RazorpayButton: RazorpayButton3,
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

const App = () => {
  return (
    <div className="relative">
      <Plan1 plans={plans} />
    </div>
  );
};

export default App;
