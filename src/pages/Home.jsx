import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Home.css";

const Home = () => {
  const [selectedDish, setSelectedDish] = useState("");
  const [amount, setAmount] = useState("");

  const handleOrder = () => {
    if (!selectedDish || !amount) {
      toast.error("Please select a dish and enter amount!");
      return;
    }
    toast.success(`Order placed for ${selectedDish} - ₹${amount}`);
    setSelectedDish("");
    setAmount("");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>🍳 Welcome to Recipe App</h1>
        <p>Discover delicious recipes, add your own, and enjoy cooking!</p>
        <Link to="/recipes">
          <button className="home-btn">View Recipes</button>
        </Link>

        {/* Order Section */}
        <div className="order-section">
          <h2>Order Your Dish</h2>
          <input
            type="text"
            placeholder="Enter Dish Name"
            value={selectedDish}
            onChange={(e) => setSelectedDish(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleOrder} className="order-btn">
            Pay & Order
          </button>
        </div>
      </div>

      <div className="home-image">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
          alt="Cooking"
        />
      </div>
    </div>
  );
};

export default Home;

