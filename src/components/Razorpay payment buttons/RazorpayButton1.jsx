import React, { useEffect, useRef } from "react";

const RazorpayButton1 = () => {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      // Clear any existing content in the form
      formRef.current.innerHTML = "";

      // Create the script element
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_ObNg06ObjKdlmx");
      script.async = true;

      // Append the script to the form
      formRef.current.appendChild(script);
    }
  }, []);

  return <form ref={formRef} className=""></form>;
};

export default RazorpayButton1;
