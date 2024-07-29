import React, { useEffect, useRef } from "react";

const RazorpayButton3 = () => {
  const formRef = useRef(null);

  useEffect(() => {
    // Ensure the script is not added multiple times
    if (!formRef.current) return;

    // Clear any existing content in the form
    formRef.current.innerHTML = "";

    // Create the script element
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_ObO7PQzcVW57Ed");
    script.async = true;

    // Append the script to the form
    formRef.current.appendChild(script);
  }, []);

  return <form ref={formRef}></form>;
};

export default RazorpayButton3;
