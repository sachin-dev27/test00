import React from "react";
export default function LandingPage({ onStart }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <img
        src="https://tse2.mm.bing.net/th/id/OIP.l4fDRUGZ_acgqIdOd-5tuQHaEJ?pid=Api&P=0&h=220"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />
      <div className="relative z-10 max-w-5xl w-full bg-blue-100/40 backdrop-blur-md rounded-lg p-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center mb-4">
          <span className="text-white">Anonymous</span>
          <span className="text-blue-900">Chat</span>
        </h1>
        <p className="text-center text-gray-800 mb-10 max-w-2xl">
          Connect with strangers from around the world. Share thoughts,
          experiences, and conversations without revealing your identity.
        </p>
        <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mb-10 gap-6">
          <div className="flex flex-col items-start group flex-1 transform transition duration-300 hover:scale-105 hover:-translate-y-1">
            <span className="text-lg font-semibold text-blue-800 group-hover:text-blue-900 transition">
              100% Anonymous
            </span>
            <span className="text-gray-700 group-hover:text-gray-900 transition">
              No registration required. Your identity remains completely private.
            </span>
          </div>

          <div className="flex flex-col items-center group flex-1 transform transition duration-300 hover:scale-105 hover:-translate-y-1">
            <span className="text-lg font-semibold text-blue-800 group-hover:text-blue-900 transition">
              Global Community
            </span>
            <span className="text-gray-700 group-hover:text-gray-900 transition text-center">
              Connect with people from different cultures and backgrounds worldwide.
            </span>
          </div>

          <div className="flex flex-col items-end group flex-1 transform transition duration-300 hover:scale-105 hover:-translate-y-1">
            <span className="text-lg font-semibold text-blue-800 group-hover:text-blue-900 transition">
              Instant Connection
            </span>
            <span className="text-gray-700 group-hover:text-gray-900 transition text-right">
              Start chatting immediately. No waiting, no complex setup process.
            </span>
          </div>
        </div>
        <button
          onClick={onStart}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold mb-2 transition"
        >
          Start Chatting Now
        </button>
        <p className="text-gray-400 text-sm mb-6 text-center">
          No signup required • Free forever • Safe & secure
        </p>
        <hr className="w-3/4 border-gray-300 mb-6" />
        <div className="flex justify-around w-full max-w-4xl text-center text-gray-700">
          <div className="transform transition duration-300 hover:scale-110">
            <span className="block text-blue-600 text-xl font-semibold">10K+</span>
            <span className="text-sm">Active Users</span>
          </div>
          <div className="transform transition duration-300 hover:scale-110">
            <span className="block text-blue-600 text-xl font-semibold">50K+</span>
            <span className="text-sm">Conversations</span>
          </div>
          <div className="transform transition duration-300 hover:scale-110">
            <span className="block text-blue-600 text-xl font-semibold">24/7</span>
            <span className="text-sm">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}