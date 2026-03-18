import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-50 py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-amber-100 to-[#cdb285] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#cdb285] to-amber-50 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#8b6914] to-[#cdb285] bg-clip-text text-transparent tracking-tight mb-4 font-serif">
            Contact Us
          </h1>
          <p className="mt-4 text-stone-700 text-xl max-w-3xl mx-auto leading-relaxed">
            Have a question or want to collaborate? Fill out the form or reach
            out directly — we'd love to connect and bring your ideas to life!
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#cdb285] to-[#b8860b] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            <form className="relative bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-amber-100 backdrop-blur-sm">
              <div className="text-center mb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#b8860b] to-[#cdb285] rounded-full mb-4 shadow-lg">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8b6914] to-[#cdb285] bg-clip-text text-transparent font-serif">
                  Send Us a Message
                </h2>
                <p className="text-stone-600 mt-2">
                  We'll get back to you within 24 hours
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-stone-200 px-4 py-3 bg-stone-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#cdb285] transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-stone-200 px-4 py-3 bg-stone-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#cdb285] transition"
                  required
                />
              </div>

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-xl border border-stone-200 px-4 py-3 bg-stone-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#cdb285] transition"
              />

              <textarea
                placeholder="Your Message..."
                rows="5"
                className="w-full rounded-xl border border-stone-200 px-4 py-3 bg-stone-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#cdb285] transition resize-none"
                required
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#b8860b] to-[#cdb285] text-white py-4 rounded-xl font-semibold hover:from-[#a0780a] hover:to-[#bda577] transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-amber-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            {/* Info Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#cdb285] to-[#b8860b] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-amber-100 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8b6914] to-[#cdb285] bg-clip-text text-transparent font-serif">
                    Contact Information
                  </h2>
                  <p className="text-stone-600 mt-2">
                    Let's start a conversation
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      label: "Visit Us",
                      text:
                        "Bazaar Road, Devanahalli\nBengaluru Rural Dist, Karnataka\n562110",
                    },
                    {
                      icon: Mail,
                      label: "Email Us",
                      text: "benakajs@gmail.com",
                    },
                    {
                      icon: Phone,
                      label: "Call Us",
                      text: "+91 97317 73777",
                    },
                    {
                      icon: Clock,
                      label: "Working Hours",
                      text: "Mon – Sat: 9:00 AM – 6:00 PM",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-amber-50 transition transform hover:scale-[1.02]"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-r from-[#b8860b] to-[#cdb285] shadow-lg">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-stone-900">
                          {item.label}
                        </p>
                        <p className="text-stone-700 whitespace-pre-line leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#cdb285] to-[#b8860b] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-amber-100 backdrop-blur-sm">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.372911186543!2d77.70818240940572!3d13.248990191704948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e3244c3ecdf1%3A0x82bc6d6b271cd06!2sBenaka%20Jewellers!5e1!3m2!1sen!2sin!4v1760766264162!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-0"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-amber-100">
                  <p className="text-sm font-semibold text-stone-800">
                    Our Location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
