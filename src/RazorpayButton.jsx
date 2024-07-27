import React, { useEffect, useRef } from "react";

const RazorpayButton = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[data-payment_button_id="pl_ObNFSqdskOlNQY"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_ObNFSqdskOlNQY");
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, []);

  return <form ref={formRef}></form>;
};

export default RazorpayButton;
