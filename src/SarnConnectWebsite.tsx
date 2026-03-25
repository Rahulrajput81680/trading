import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function SarnConnectWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 bg-black/40 backdrop-blur-xl border-b border-cyan-500/20">
        <h1 className="text-3xl font-extrabold text-cyan-400 tracking-wide">
          SarnConnect
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-200 font-medium">
          <span className="hover:text-cyan-400 cursor-pointer">Home</span>
          <span className="hover:text-cyan-400 cursor-pointer">Services</span>
          <span className="hover:text-cyan-400 cursor-pointer">Plans</span>
          <span className="hover:text-cyan-400 cursor-pointer">FAQ</span>
          <span className="hover:text-cyan-400 cursor-pointer">Contact</span>
        </div>

        <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6">
          Start Service Now
        </Button>
      </nav>

      {/* HERO */}
      <section className="text-center py-32 px-6 bg-gradient-to-r from-blue-900/40 to-cyan-900/40">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-extrabold leading-tight max-w-4xl mx-auto"
        >
          Professional Trading Account Handling Services 🚀
        </motion.h1>

        <p className="text-gray-100 text-xl max-w-2xl mx-auto mt-6">
          Daily monitoring, intraday assistance, IPO handling and portfolio
          support for Zerodha, Angel One, Groww & Upstox users.
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <Button className="px-10 py-6 text-lg rounded-2xl bg-cyan-500 text-black font-bold hover:scale-110 transition">
            Start Handling Service
          </Button>

          <Button className="px-10 py-6 text-lg rounded-2xl border border-cyan-400 text-cyan-300">
            WhatsApp Support
          </Button>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="grid md:grid-cols-4 gap-6 px-12 pb-20 mt-16">
        {[
          "500+ Accounts Managed",
          "Live WhatsApp Support",
          "Trusted Broker Experience",
          "Beginner Friendly Service",
        ].map((item, i) => (
          <Card key={i} className="bg-slate-800 border border-cyan-400 shadow-lg shadow-cyan-900/40">
            <CardContent className="text-white p-6 text-center font-semibold text-lg">
              {item}
            </CardContent>
          </Card>
        ))}
      </section>

      {/* SERVICES */}
      <section className="px-12 pb-24">
        <h2 className="text-5xl font-bold text-center mb-14 text-cyan-400">
          Premium Handling Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Daily Trading Account Monitoring",
            "Intraday Assistance Support",
            "IPO Application Handling",
            "Portfolio Management Support",
            "Broker Coordination Help",
            "Beginner Strategy Guidance",
          ].map((service, index) => (
            <Card key={index} className="bg-slate-800 border border-cyan-500/30 hover:border-cyan-400">
              <CardContent className="text-white p-10 text-center text-lg font-semibold">
                {service}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-12 bg-slate-900">
        <h2 className="text-5xl font-bold text-center mb-14 text-cyan-400">
          Why Traders Choose SarnConnect
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Expert Handling Support",
            "Fast Response Time",
            "Secure Process",
            "Lifetime Guidance",
          ].map((item, index) => (
            <Card key={index} className="bg-slate-800 border border-cyan-400 shadow-lg shadow-cyan-900/40">
              <CardContent className="text-white p-8 text-center font-semibold text-lg">
                {item}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-10 text-center">
        <h2 className="text-5xl font-bold mb-14 text-cyan-400">
          Start Handling in 4 Easy Steps
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Contact on WhatsApp",
            "Share Details Securely",
            "Strategy Discussion",
            "Handling Starts",
          ].map((step, index) => (
            <Card key={index} className="bg-slate-800 border border-cyan-400 shadow-lg shadow-cyan-900/40">
              <CardContent className="text-white p-8 font-medium text-lg">
                {step}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-32 bg-gradient-to-r from-cyan-900/40 to-blue-900/40">
        <h2 className="text-6xl font-extrabold mb-10">
          Let Experts Handle Your Trading Account 📈
        </h2>

        <Button className="px-12 py-6 text-lg rounded-2xl bg-cyan-500 text-black font-bold">
          Start Service Today
        </Button>
      </section>

      {/* CONTACT */}
      <section className="py-24 text-center bg-slate-900">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">
          Contact SarnConnect
        </h2>

        <div className="flex justify-center gap-6">
          <Button className="flex gap-2 rounded-2xl px-8 py-5 bg-cyan-500 text-black font-semibold">
            <Phone size={18} /> Call Now
          </Button>

          <Button className="flex gap-2 rounded-2xl px-8 py-5 border border-cyan-400 text-cyan-300">
            <MessageCircle size={18} /> WhatsApp Support
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-gray-400 border-t border-cyan-500/20">
        © 2026 SarnConnect.in | Trading Account Handling Experts
      </footer>
    </div>
  );
}
