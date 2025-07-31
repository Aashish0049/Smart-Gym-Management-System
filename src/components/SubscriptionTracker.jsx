// src/components/SubscriptionTracker.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const plans = [
  { name: "1 Month", price: 1000 },
  { name: "3 Months", price: 3000 },
  { name: "6 Months", price: 5000 },
  { name: "12 Months", price: 8000 },
];

const paymentMethods = ["Credit Card", "Debit Card", "UPI", "Net Banking"];

const SubscriptionTracker = () => {
  const [showPlans, setShowPlans] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => {
      setShowPlans(false);
      setSelectedPlan(null);
      setSelectedMethod(null);
      setShowPaymentForm(false);
      setPaymentSuccess(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <Button onClick={() => setShowPlans(!showPlans)}>
        {showPlans ? "Hide Plans" : "View Subscription Plans"}
      </Button>

      <AnimatePresence>
        {showPlans && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                whileHover={{ scale: 1.05 }}
                className={`p-4 rounded-2xl shadow-xl border cursor-pointer ${
                  selectedPlan?.name === plan.name
                    ? "bg-green-100 border-green-500"
                    : "bg-white"
                }`}
                onClick={() => {
                  setSelectedPlan(plan);
                  setSelectedMethod(null);
                  setShowPaymentForm(false);
                  setPaymentSuccess(false);
                }}
              >
                <h3 className="text-xl font-semibold text-center">{plan.name}</h3>
                <p className="text-center mt-2 text-gray-700">₹{plan.price}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedPlan && !selectedMethod && !paymentSuccess && (
          <motion.div
            key="methods"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 w-full max-w-md text-center"
          >
            <h4 className="text-lg font-bold mb-3">
              Select Payment Method for {selectedPlan.name} (₹{selectedPlan.price})
            </h4>
            <div className="grid gap-3">
              {paymentMethods.map((method) => (
                <Button
                  key={method}
                  className="w-full"
                  onClick={() => setSelectedMethod(method)}
                >
                  {method}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedMethod && !paymentSuccess && (
          <motion.form
            onSubmit={handlePayment}
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
          >
            <h4 className="text-lg font-bold mb-4 text-center">
              {selectedMethod} Payment
            </h4>

            {["Credit Card", "Debit Card"].includes(selectedMethod) && (
              <>
                <input
                  required
                  type="text"
                  placeholder="Card Number"
                  className="w-full mb-3 px-3 py-2 border rounded"
                />
                <input
                  required
                  type="text"
                  placeholder="Name on Card"
                  className="w-full mb-3 px-3 py-2 border rounded"
                />
                <div className="flex gap-3">
                  <input
                    required
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 border rounded"
                  />
                  <input
                    required
                    type="text"
                    placeholder="CVV"
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </>
            )}

            {selectedMethod === "UPI" && (
              <input
                required
                type="text"
                placeholder="Enter UPI ID"
                className="w-full mb-3 px-3 py-2 border rounded"
              />
            )}

            {selectedMethod === "Net Banking" && (
              <select
                required
                className="w-full mb-3 px-3 py-2 border rounded"
              >
                <option value="">Select Bank</option>
                <option value="SBI">SBI</option>
                <option value="ICICI">ICICI</option>
                <option value="HDFC">HDFC</option>
                <option value="PNB">PNB</option>
              </select>
            )}

            <Button type="submit" className="w-full mt-4">
              Pay ₹{selectedPlan.price}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {paymentSuccess && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-4 bg-green-100 border border-green-500 rounded-xl text-center"
          >
            <h4 className="text-green-700 font-bold text-lg">
              ✅ Payment Successful!
            </h4>
            <p className="text-green-600">Thank you for your subscription.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubscriptionTracker;
