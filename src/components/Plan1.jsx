import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import bgImage from "../assets/bg-img2.png";
import brandLogo from "../assets/brand-logo2.png";
import RazorpayButton1 from "./Razorpay payment buttons/RazorpayButton1";
import RazorpayButton2 from "./Razorpay payment buttons/RazorpayButton2";
import RazorpayButton3 from "./Razorpay payment buttons/RazorpayButton3";

function Plan1({ plans }) {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="min-h-screen my-24">
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
      <div className="container mx-auto flex justify-between items-start gap-y-3 mb-4">
        <div className="w-[80%] flex flex-col items-start justify-center gap-y-5">
          <p className="text-gray-600 text-base">
            Choose your subscription now
          </p>
          <h1 className="md:text-[52px] text-[44px] font-bold leading-tight">
            Our diet works for everyone
          </h1>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 font-semibold ${
                billingCycle === "monthly"
                  ? "bg-black text-white"
                  : "bg-white text-black border"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              General Diet Plan
            </button>
            <button
              className={`px-4 py-2 font-semibold ${
                billingCycle === "annual"
                  ? "bg-black text-white"
                  : "bg-white text-black border"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              I want customize diet plan
              <p className="text-[12px] text-gray-600 text-center">
                (Weight loss, Weight gain, Keto, Athletic)
              </p>
            </button>
          </div>
        </div>
        <div className="h-48 w-[20%] flex justify-end items-center">
          <img src={brandLogo} alt="brand-logo" className="h-auto w-auto" />
        </div>
      </div>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {plans.map((plan, index) => (
            <div className="relative">
              <div
                key={index}
                className="p-6 border border-gray-400 relative bg-white left-0 top-0 z-20 h-full"
              >
                {plan.mostPopular && (
                  <span className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-xs font-semibold uppercase">
                    Most Popular
                  </span>
                )}
                <h2 className="text-xl font-semibold mb-4">{plan.title}</h2>
                <hr className="bg-black mb-4 h-[2px]" />
                <p className="text-2xl font-bold mb-6">
                  {plan.priceAfter}{" "}
                  <div className="inline-block relative">
                    <spn className="text-sm text-gray-400 font-normal ml-2">
                      {plan.priceBefore}
                    </spn>
                    <span className="h-[1px] bg-gray-600 -rotate-[12deg] z-20 absolute top-[65%] left-[55%] -translate-x-[45%] w-[58px] line-through" />
                  </div>
                </p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span>
                        <IoMdCheckmark className="text-black mr-3 h-4 w-4" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  <plan.RazorpayButton />
                  {/* <button className="bg-black text-white px-4 py-2 rounded">
                    Get Started
                  </button> */}
                </div>
              </div>
              <div className="absolute h-full w-full -bottom-3 -right-3 border border-gray-400 bg-white" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Plan1;
