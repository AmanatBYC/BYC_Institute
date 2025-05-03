import React from "react";

export default function BYCWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-green-600 text-white py-6 px-4 shadow-md">
        <h1 className="text-3xl font-bold">BYC (Baro Youth Courage)</h1>
        <p className="text-sm">समाज में बदलाव के लिए शिक्षा और सेवा</p>
      </header>

      <section className="py-10 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">हमारा उद्देश्य</h2>
        <p className="text-lg">
          BYC की स्थापना 04 अक्टूबर 2022 को हुई थी। इसका उद्देश्य समाज में शिक्षा
          के माध्यम से सकारात्मक बदलाव लाना और गरीबों की मदद करना है।
        </p>
      </section>

      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold mb-4">हमारी गतिविधियाँ</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>1 से 6 तक के बच्चों के लिए शैक्षणिक सहायता</li>
          <li>BYC INSTITUTE में न्यूनतम फीस पर शिक्षा</li>
          <li>सामाजिक जागरूकता अभियान</li>
        </ul>
      </section>

      <section className="py-10 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">BYC की तस्वीरें</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/byc1.jpg" alt="BYC Activity 1" className="rounded-xl shadow-md" />
          <img src="/images/byc2.jpg" alt="BYC Activity 2" className="rounded-xl shadow-md" />
          <img src="/images/byc3.jpg" alt="BYC Activity 3" className="rounded-xl shadow-md" />
        </div>
      </section>

      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold mb-4">संपर्क करें</h2>
        <p>संस्थापक: Mohammad Amanat</p>
        <p>स्थान: Begusarai, Bihar</p>
        <p>मोबाइल: 0000000000</p>
        <p>Email: byc.info@email.com</p>
      </section>

      <footer className="bg-green-600 text-white text-center py-4">
        © 2025 BYC - All Rights Reserved
      </footer>
    </div>
  );
}