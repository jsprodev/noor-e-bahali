"use client";
import Image from "next/image";
import {
  Heart,
  Users,
  Shield,
  Zap,
  Building2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Menu,
  X as CloseIcon,
  Rocket,
  MessageCircleMore,
  Landmark,
} from "lucide-react";
import { CertificatesSection } from "@/app/components/CertificatesSection";
import { useState } from "react";

export const NBWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-60px) rotateY(20deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0);
          }
        }
        @keyframes scaleInDown {
          from {
            opacity: 0;
            transform: scale(0.85) translateY(-30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(16, 185, 129, 0.6);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
        .animate-slide-in-right {
          animation: slideInRight 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scaleInDown 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Noor-E-Bahali Foundation"
            width={1082}
            height={334}
            className="h-12 sm:h-14 w-auto"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            <a href="#home" className="text-gray-700 hover:text-teal-600 transition text-sm lg:text-base">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition text-sm lg:text-base">
              About
            </a>
            <a href="#values" className="text-gray-700 hover:text-teal-600 transition font-medium text-sm lg:text-base">
              Values
            </a>
            <a href="#work" className="text-gray-700 hover:text-teal-600 transition font-medium text-sm lg:text-base">
              Impact
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-teal-600 transition font-medium text-sm lg:text-base"
            >
              Contact
            </a>
          </div>
          <a
            href="#donate"
            className="bg-teal-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:shadow-lg hover:shadow-teal-500/30 transition font-medium text-xs sm:text-sm"
          >
            Donate
          </a>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-teal-600"
          >
            {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200/50">
            <div className="px-4 py-3 space-y-2">
              <a href="#home" className="block text-gray-600 hover:text-teal-600 transition py-2 text-sm">
                Home
              </a>
              <a href="#about" className="block text-gray-600 hover:text-teal-600 transition py-2 text-sm">
                About
              </a>
              <a href="#values" className="block text-gray-600 hover:text-teal-600 transition py-2 text-sm font-medium">
                Values
              </a>
              <a href="#work" className="block text-gray-600 hover:text-teal-600 transition py-2 text-sm font-medium">
                Impact
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-teal-600 transition py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-white to-teal-50"></div>
        <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-gradient-to-br from-gray-200/20 to-teal-200/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-40 sm:w-56 lg:w-80 h-40 sm:h-56 lg:h-80 bg-gradient-to-tr from-teal-200/20 to-teal-200/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 mb-6 bg-teal-100/50 backdrop-blur px-3 sm:px-4 py-2 rounded-full border border-teal-200/50 animate-scale-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse-glow"></div>
            <span className="text-xs sm:text-sm font-medium text-teal-700">SECP Registered NGO Since 2025</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            <span
              className="inline-block bg-gradient-to-r from-teal-900 via-teal-700 to-teal-500 bg-clip-text text-transparent animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Transforming Lives
            </span>
            <br />
            <span className="inline-block text-gray-700 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              with Compassion
            </span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Dedicated to social welfare, rehabilitation, and humanitarian support across Pakistan. Empowering special
            needs children and vulnerable families.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.65s" }}
          >
            <a
              href="#donate"
              className="bg-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl hover:shadow-teal-500/30 transition font-semibold flex items-center justify-center gap-2 group text-sm sm:text-base hover:scale-105 hover:-translate-y-1"
            >
              Start Donating <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              {/* <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wide">
                  About Us
                </span>
              </div> */}

              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-teal-700 mb-4 sm:mb-6 leading-tight">
                Who We Are
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Noor-E-Bahali Foundation is a <strong>SECP-registered non-governmental organization (NGO)</strong>{" "}
                licensed under <strong>Section 42 of the Companies Act, 2017</strong>. Established in 2025 and formally
                granted its license by the Securities and Exchange Commission of Pakistan on{" "}
                <strong>30th June 2025</strong>.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We are dedicated to social welfare, rehabilitation, and humanitarian support across Pakistan. Our work
                focuses on special needs children, underprivileged families, and disaster-affected communities.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-teal-100 rounded-2xl sm:rounded-3xl"></div>
              <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-teal-200/50 bg-white/80 backdrop-blur">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 inline-flex items-center gap-3">
                  <span>
                    <Rocket className="size-8 text-gray-600" />
                  </span>
                  <span className="text-gray-600">Our Mission</span>
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Physical therapy and developmental support for special children",
                    "Awareness programs and community engagement",
                    "Relief and reconstruction in disaster-affected areas",
                    "Professional care, community engagement and humanitarian service",
                  ].map((mission, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4">
                      <CheckCircle2 className="w-5 sm:w-6 h-5 sm:h-6 text-teal-500 flex-shrink-0 mt-1" />
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{mission}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        id="values"
        className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-teal-100/20 rounded-full blur-3xl -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-16">
            {/* <span className="text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wide">
              Core Values
            </span> */}
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-600 mt-2 sm:mt-3">What Drives Us</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-sm:max-w-52 mx-auto">
            {[
              { icon: Heart, title: "Compassion", desc: "Serving humanity with empathy and respect" },
              { icon: Users, title: "Inclusion", desc: "Ensuring equitable care and opportunity for all" },
              { icon: Shield, title: "Integrity", desc: "Maintaining transparency and accountability" },
              { icon: Zap, title: "Empowerment", desc: "Encouraging resilience and independence" },
              { icon: Users, title: "Community", desc: "Creating impact through collective effort" },
            ].map((value, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="flex flex-col items-center justify-center  relative p-4 sm:p-6 rounded-2xl border border-emerald-200/30 bg-white hover:border-emerald-300 transition duration-300">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition duration-300">
                    <value.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-700 mb-2 text-base sm:text-lg">{value.title}</h3>
                  <p className="text-sm  text-gray-600 leading-relaxed text-center">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section id="work" className="py-12 sm:py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-teal-700 mt-2 sm:mt-3 mb-3 sm:mb-5">
              Your Donation Makes Real Impact
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We focus our efforts on areas where we can create lasting, meaningful change
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Therapy assistance and rehabilitation facilitation",
              "Orthotics for special needs children",
              "Transport and food aid",
              "Community awareness programs",
              "Relief and rehabilitation support for disaster-affected communities",
              "Sustainable operational support",
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-4 sm:p-6 rounded-2xl border border-teal-200 bg-gradient-to-br from-white to-teal-50 hover:border-teal-300 hover:shadow-lg transition duration-300"
              >
                <div className="flex gap-3 sm:gap-4 items-center">
                  <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-teal-500 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 font-medium group-hover:text-teal-700 transition">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section
        id="donate"
        className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-100 to-teal-100/50 relative overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-teal-100/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-8 text-gray-600  max-sm:text-center">
                Help Us Make a Difference
              </h2>
              <p className="text-sm sm:text-lg  leading-relaxed mb-4 sm:mb-6 text-gray-800 ">
                Your support enables Noor-E-Bahali Foundation to continue its mission and meet day-to-day operational
                expenses, including therapy facilitation, welfare activities and community programs.
              </p>
              <p className="text-sm sm:text-lg  leading-relaxed">
                Every donation Zakat, Sadaqah, or general charity plays a vital role in sustaining daily operations and
                expanding outreach to those in need.
              </p>
            </div>

            <div className="relative">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-emerald-500/10 rounded-2xl sm:rounded-3xl"></div> */}
              <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-teal-600/10 bg-white/90 backdrop-blur-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex flex-inline items-center gap-3 text-teal-600">
                  <Landmark className="size-8 text-teal-600" />
                  Banking Details
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="pb-4 sm:pb-6 border-b border-gray-200/80">
                    <p className="text-teal-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">Bank Name</p>
                    <p className="text-lg sm:text-xl font-semibold text-gray-700">Faysal Bank</p>
                  </div>
                  <div className="pb-4 sm:pb-6 border-b border-gray-200/80">
                    <p className="text-teal-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                      Account Number
                    </p>
                    <p className="text-lg sm:text-xl font-mono font-semibold break-all text-gray-700">
                      3726301000001257
                    </p>
                  </div>
                  <div>
                    <p className="text-teal-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">Branch</p>
                    <p className="text-lg sm:text-xl font-semibold text-gray-700">D-17, Islamabad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4  bg-gradient-to-br from-gray-100/50 to-teal-100/50 rounded-2xl sm:rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative p-6 sm:p-12 rounded-2xl sm:rounded-3xl border border-emerald-200/50 bg-white/80 backdrop-blur">
              {/* <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full"></div>
                <span className="text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wide">
                  Leadership
                </span>
              </div> */}

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-600 mb-4 sm:mb-6 flex flex-inline items-center gap-3">
                <MessageCircleMore className="size-8 text-teal-600" /> Message from CEO
              </h2>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                At Noor-E-Bahali Foundation, our work is guided by compassion, responsibility, and service to humanity.
                As a SECP-registered organization under Section 42 of the Companies Act, 2017, all our initiatives
                strictly align with our approved objectives.
              </p>
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
                We remain committed to supporting special needs children through therapy and rehabilitation
                facilitation, while also carrying out charitable welfare and disaster-response activities. Transparency,
                accountability, and responsible use of funds are central to our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & License Section */}
      <CertificatesSection />

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-600 mb-2 sm:mb-5">Lets Get In Touch</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700">We'd love to hear from you</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-52 sm:max-w-4xl mx-auto">
            {[
              { icon: Mail, label: "Email", value: "noorebahali@gmail.com", href: "mailto:noorebahali@gmail.com" },
              { icon: Phone, label: "WhatsApp", value: "+92 3173358335", href: "https://wa.me/923173358335" },
              { icon: MapPin, label: "Location", value: "D-17, Islamabad, Pakistan", href: "#contact" },
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.href}
                className="group relative transform transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl"></div>
                <div className="relative p-6 sm:p-8 rounded-2xl border border-teal-300/50 bg-white group-hover:border-teal-300 transition duration-300 text-center shadow-xl  hover:shadow-teal-300/10 group-hover:-translate-y-1">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300 group-hover:animate-pulse-glow">
                    <contact.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <p className="text-teal-600 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
                    {contact.label}
                  </p>
                  <p className="text-gray-900 text-sm sm:text-base font-semibold group-hover:text-teal-600 transition">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-100 via-teal-50 to-gray-100 text-gray-700 py-8 sm:py-12  border-teal-200/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="font-medium text-xs sm:text-base mb-2">
              &copy; 2025 Noor-E-Bahali Foundation. All rights reserved.{" "}
              {/* <span className="text-emerald-600 font-semibold">SECP Registered NGO</span> */}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Developed with <span className="text-red-500">❤️</span> by{" "}
              <a
                href="https://hbkm.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-600 font-semibold transition"
              >
                hbkm.dev
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NBWebsite;
