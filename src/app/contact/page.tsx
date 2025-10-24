"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import AppImage from "@/components/AppImage";
import { Mail, Smartphone, MapPin, Forward } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log(formData);
      alert("¡Mensaje enviado correctamente!");
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (err) {
      console.error(err);
      alert("Error al enviar el mensaje");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-xl p-6 shadow-2xl text-slate-900 flex items-center">
          <AppImage icon="logo" size={56} />
          <div className="ml-4">
            <h1 className="text-slate-100 text-2xl font-bold tracking-wide">
              Contact
            </h1>
            <p className="text-cyan-400 text-sm opacity-80">
              • Get in Touch with Worlds 2025 •
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-10">
            <div className="bg-slate-900/60 p-6 rounded-xl shadow-2xl border border-cyan-400/20">
              <h2 className="text-lg font-bold text-cyan-300/90 mb-2">
                Contact Information
              </h2>
              <p className="text-slate-200/90 leading-relaxed">
                Have questions about Worlds 2025? We are here to help! Reach out
                through any of the channels below or send us a message directly.
              </p>
            </div>

            <div className="space-y-10">
              <div className="bg-slate-900/60 p-4 rounded-xl shadow-2xl border border-cyan-400/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-300 text-xl font-bold">
                    <Mail />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-cyan-200/80">contact@worlds2025.gg</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl shadow-2xl border border-emerald-400/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-300 text-xl font-bold">
                    <Smartphone />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-emerald-200/80">+34 (666) 666-666</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl shadow-2xl border border-purple-400/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-300 text-xl font-bold">
                    <MapPin />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-purple-200/80">
                      Beijing - Shanghái - Chengdú / Event • 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900/60 p-6 rounded-xl shadow-2xl border border-emerald-400/20 space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-300 text-xl font-bold">
                <Forward />
              </div>
              <h2 className="text-lg font-bold text-emerald-300/90">
                Send a Message
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-slate-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  placeholder="Enter your name"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-emerald-400/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 transition"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-emerald-400/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 transition"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-slate-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Write your message here..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-emerald-400/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 resize-none transition"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg text-slate-900 font-bold shadow-lg ${
                  isSubmitting
                    ? "bg-emerald-300/60 cursor-not-allowed"
                    : "bg-linear-to-r from-emerald-400 to-cyan-400 hover:opacity-90"
                } transition`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
