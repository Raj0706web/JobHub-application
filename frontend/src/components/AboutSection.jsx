import React from "react";
import { Briefcase, Users, Globe, Target } from "lucide-react";
import JobHuntIllustration from "@/assets/job_hunt.svg";
export const AboutSection = () => {
  const features = [
    {
      icon: <Briefcase className="w-10 h-10 text-[#F83002] mx-auto mb-4" />,
      title: "Career Opportunities",
      desc: "Thousands of curated job listings from trusted employers.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#F83002] mx-auto mb-4" />,
      title: "For Employers",
      desc: "Post jobs and connect with qualified candidates quickly.",
    },
    {
      icon: <Globe className="w-10 h-10 text-[#F83002] mx-auto mb-4" />,
      title: "Global Reach",
      desc: "Opportunities spanning multiple industries and locations.",
    },
    {
      icon: <Target className="w-10 h-10 text-[#F83002] mx-auto mb-4" />,
      title: "Career Guidance",
      desc: "Resume tips, interview prep, and career growth resources.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Intro Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Welcome to <span className="text-[#F83002]">Job Hub</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Your trusted career companion, bridging the gap between talented 
              professionals and top-tier companies. Whether you’re starting your 
              career, making a big move, or building your dream team, Job Hub 
              is here to make it happen.
            </p>
            <p className="text-gray-600 mb-8">
              We combine cutting-edge technology with real human insights to 
              help you find the right match — fast.
            </p>
            <button className="px-6 py-3 bg-[#F83002] text-white rounded-lg font-medium shadow hover:bg-[#d62802] transition">
              Learn More
            </button>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <img
              src={JobHuntIllustration} 
              alt="Job search illustration"
              loading="lazy"
              className="w-96 max-w-full"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition transform"
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-gray-500 text-sm text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="bg-white mt-20 p-10 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Our Mission & Vision
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Our mission is simple — empower individuals to achieve their 
            professional goals while helping organizations discover exceptional 
            talent. We envision a world where finding the right job or the right 
            candidate is seamless, efficient, and rewarding for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};
