import React, { useEffect, useRef } from "react";

const RazorpayButton2 = () => {
  const formRef = useRef(null);

  useEffect(() => {
    // Clear any existing content in the form
    formRef.current.innerHTML = "";

    // Create the script element
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_ObNidGLy3Egy7t");
    script.async = true;

    // Append the script to the form
    formRef.current.appendChild(script);
  }, []);

  return <form ref={formRef}></form>;
};

export default RazorpayButton2;
