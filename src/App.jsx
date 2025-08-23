import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import LandingPage from "./components/LandingPage";
import "./index.css";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen">
      {showLogin ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <LoginForm />
        </div>
      ) : (
        <LandingPage onStart={() => setShowLogin(true)} />
      )}
    </div>
  );
}
