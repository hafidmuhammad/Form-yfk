// components/forms/PaymentConfirmation.tsx
import React, { useEffect, useState } from "react";

const PaymentConfirmation: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation after the component mounts
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100); // Start fade-in animation shortly after the component mounts

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
      <h3 className="text-lg font-semibold mb-4">Payment Confirmation</h3>
      <p className="animate-slide-up">Your payment was successful! Thank you for your order.</p>
      <p className="animate-slide-up delay-150">You will receive a confirmation email shortly with all the details.</p>
    </div>
  );
};

export default PaymentConfirmation;
