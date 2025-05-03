import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import backgroundImage from "../assets/img/topBackgoundImage.png";
import stripeImage from "../assets/img/stripe.png";
import airbnbImage from "../assets/img/airbnb.png";
import shopifyImage from "../assets/img/shopify.png";
import ebayImage from "../assets/img/ebay_logo.svg.png";
import forbesImage from "../assets/img/forbes.png";
import scalableSolutions from "../assets/img/scalable solutions.png";
import inventoryImage from "../assets/img/real time inventory.png";
import seamlessImage from "../assets/img/seamless integration.png";
import featuresBlue from "../assets/img/features bluebg.png";
import testimonialImage from "../assets/img/testimonial image.png";
import ctaImage from "../assets/img/CTA image.png";
import BackToTopButton from './BackToTopButton';

const features = [
    {
      title: "Smarter Inventory Management",
      description: [
        "Track inventory levels in real time across multiple locations.",
        "Optimise stock levels with AI-powered forecasting.",
        "Automate reordering to avoid stockouts and overstocking.",
      ],
    },
    {
      title: "Centralized Data & Insights",
      description: [
        "Access a single source of truth for all inventory-related data.",
        "Generate custom reports to analyse trends and improve decision-making.",
        "Leverage real-time dashboards for actionable insights.",
      ],
    },
    {
      title: "Integrated ERP Functionality",
      description: [
        "Connect inventory to finance, procurement, and sales modules seamlessly.",
        "Manage your entire supply chain from one platform.",
        "Ensure data consistency across your entire organisation.",
      ],
    },
    {
      title: "Advanced Security Compliance",
      description: [
        "Enterprise-grade data encryption to keep your business secure.",
        "Ensure compliance with industry standards like ISO, GDPR, and more.",
        "Role-based access controls for sensitive data.",
      ],
    },
  ];
  
  const testimonials = [
    {
      name: "Sarah J. Artisan Market",
      role: "CEO Trustfund, New York",
      text: "SmartSphere Has Transformed The Way We Manage Our Inventory. Our Efficiency Has Improved By 40%",
      image: "../assets/img/testimonial image.png",
    },
    {
      name: "James K.",
      role: "CEO of EcoGoods",
      text: "The Integration With Our ERP System Was Seamless. I've Never Seen Implementation This Smooth",
      image: "/path/to/image2.jpg",
    },
    {
      name: "Michael Lee",
      role: "Logistics Head at GlobalTradeCo",
      text: "The AI Forecasting Has Helped Us Cut Down Waste By 30%. It's A Game-Changer!",
      image: "/path/to/image3.jpg",
    },
  ];

  function Features() {
    return (
      <section className="features px-4 py-8">
        <h2 className="text-xl font-semibold text-center mb-8">FEATURES SECTION</h2>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={70}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        centeredSlides={false} 
      >
          {features.map((feature, index) => (
            <SwiperSlide
            key={index}
            className="feature-slide border-2 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-[rgba(107,90,205,1)] hover:text-white min-h-[458px] max-w-[350px] flex flex-col justify-between"
          >
              {/* Image Section */}
              <div className="flex justify-start mb-4">
                <img
                  src={featuresBlue}
                  alt={feature.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
  
              {/* Text Section */}
              <div className="text-left flex flex-col  flex-grow">
                <h3 className="text-2xl font-semibold text-[black] mb-4">
                  {feature.title}
                </h3>
                <ul className="feature-list space-y-2 mb-4 list-disc pl-5">
                  {feature.description.map((point, idx) => (
                    <li key={idx} className="text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-start mt-auto"></div>
                <button
                  className="learn-more-btn bg-[white] text-[#6B5ACD] border border-[#6B5ACD] px-4 py-2 rounded-lg transition-colors"
                  onClick={() => alert(`More about: ${feature.title}`)}
                >
                  Learn More →
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }
  

function LandingPage() {
  return (
    <div className="font-montserrat">
      {/* Navigation Section */}
      <nav className="flex justify-between items-center p-6 font-montserrat fixed top-0 left-0 w-full z-50 bg-[rgba(233,204,255,1)]">
        {/* Logo Section */}
        <div className="absolute top-6 left-16">
          <span
            className="font-black text-3xl leading-[35px] tracking-tight text-center"
            style={{ fontFamily: "montserrat", color: "rgba(107, 90, 205, 1)" }}
          >
            SMARTSPHERE
          </span>
        </div>

        {/* Navigation Links */}
        <div className="absolute top-1 flex space-x-12 w-full justify-center mt-6">
          <Link
            to="/landingPage"
            className="font-bold text-black hover:text-[rgba(117,105,187,1)] hover:underline"
          >
            Home
          </Link>
          <Link
            to="#"
            className="font-bold text-black hover:text-[rgba(117,105,187,1)] hover:underline"
          >
            Service
          </Link>
          <Link
            to="#"
            className="font-bold text-black hover:text-[rgba(117,105,187,1)] hover:underline"
          >
            Blogs
          </Link>
          <Link
            to="#"
            className="font-bold text-black hover:text-[rgba(117,105,187,1)] hover:underline"
          >
            About Us
          </Link>
        </div>

        {/* Authentication Links */}
        <div className="flex space-x-4 ml-auto items-center -mt-2">
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="border-2 border-[rgba(117,105,187,1)] text-[rgba(117,105,187,1)] px-6 py-3 rounded-full hover:bg-purple-700 hover:text-white focus:outline-none"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="bg-[rgba(117,105,187,1)] text-white px-6 py-3 rounded-full hover:bg-purple-700 focus:outline-none"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero relative bg-[rgba(233,204,255,1)] pt-16 pb-32">
        <div className="container flex justify-between items-center mx-auto px-6">
          {/* Text Section */}
          <div className="hero-text w-full md:w-1/2 text-left text-white">
            <h2
              className="text-7xl font-black mb-4 text-[#6b5acc] leading-[1.25]"
              style={{ color: "rgba(107, 90, 205, 1)" }}
            >
              Your All-In-One <br /> Inventory <br /> Solution
            </h2>
            <p
              className="mt-4 text-lg mb-6"
              style={{ color: "rgba(81, 80, 80, 1)" }}
            >
              Streamline your inventory operations, reduce costs, <br />
              and improve accuracy, and scale effortlessly with a <br />
              platform designed for modern businesses.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="font-bold bg-[rgba(107,90,205,1)] text-white px-6 py-3 rounded-lg hover:bg-purple-700"
              >
                ACCESS SMARTSPHERE →
              </a>
              <a
                href="#"
                className="font-bold bg-transparent border-2 border-[rgba(117,105,187,1)] text-[rgba(117,105,187,1)] px-6 py-3 rounded-lg hover:bg-purple-100"
              >
                WATCH DEMO{" "}
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="intro-right w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={backgroundImage}
              alt="SMARTSPHERE Illustration"
              className="w-full h-auto"
            ></img>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="trusted-container relative py-8 rounded-lg shadow-lg -mt-12 max-w-7xl mx-auto z-10" style={{ backgroundColor: 'white' }}>
        <div className="max-w-screen-xl mx-auto text-center">
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: "rgba(66, 66, 66, 1)" }}
          >
            Trusted and Backed by
          </h3>
          <div className="flex justify-center gap-12">
            <img src={airbnbImage} alt="Airbnb" className="w-36 h-8" />
            <img src={stripeImage} alt="Stripe" className="h-8" />
            <img src={shopifyImage} alt="Shopify" className="h-8" />
            <img src={ebayImage} alt="eBay" className="h-8" />
            <img src={forbesImage} alt="Forbes" className="h-8" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services mt-[calc(150px)]">
        <div className="container mx-auto px-6">
          <h2 className="text-1xl font-semibold text-center mb-4 text-black -mt-16 ">
            Our Services
          </h2>

          {/* Grid Layout for Services */}
          <div className="min-h-screen pt-24 gap-12">

            {/* Real-Time Inventory Tracking Service */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text Section */}
      <div className="service-text text-left">
        <h3 className="text-4xl font-bold text-[#6B5ACD] mb-4">REAL TIME INVENTORY TRACKING</h3>
        <p className="text-gray-700 mb-4 text-2xl">
          Always know what you have and where it is <br /> with up-to-date insights.
        </p>
      </div>

      {/* Image Section */}
      <div className="service-image flex justify-center">
        <img
          src={inventoryImage} 
          alt="Inventory Tracking" 
          className="w-[400px] h-[auto] object-contain"
        />
      </div>
    </div>

            {/* Seamless integration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* Image Section */}
  <div className="service-image flex justify-center md:justify-start">
    <img
      src={seamlessImage} 
      alt="Inventory Tracking" 
      className="w-[400px] h-[auto] object-contain"
    />
  </div>

  {/* Text Section */}
  <div className="service-text text-right md:text-left">
    <h3 className="text-4xl font-bold text-[#6B5ACD] mb-4">SEAMLESS INTEGRATION</h3>
    <p className="text-gray-700 mb-4 text-2xl">
      Connect SmartSphere with <br /> your ERP, CRM, and e-commerce <br /> systems effortlessly.
    </p>
  </div>
</div>



            {/* Scalable solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text Section */}
      <div className="service-text text-left">
        <h3 className="text-4xl font-bold text-[#6B5ACD] mb-4">SCALABLE SOLUTIONS</h3>
        <p className="text-gray-700 mb-4 text-2xl">
        Our platform grows with your business from startups to
        enterprises.
        </p>
        <a href="#" className="text-[#6B5ACD] inline-block text-2xl">Learn More →</a>
      </div>

      {/* Image Section */}
      <div className="service-image flex justify-center">
        <img
          src={scalableSolutions} 
          alt="Inventory Tracking" 
          className="w-[500px] h-[auto] object-contain"
        />
      </div>
    </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <section className="testimonials py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-black mb-6">Testimonials</h3>
          <h2 className="text-4xl font-bold text-black mb-8">Read What Our Clients Have To Say</h2>

           {/* See All Button */}
    <div className="text-center mb-8">
      <button className="px-16 py-3 text-white bg-[#6B5ACD] rounded-full transition-colors duration-300 hover:bg-[#4e46a6]">
        See All →
      </button>
    </div>

          <div className="flex justify-center space-x-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg w-80 flex flex-col items-center transition-transform duration-300 hover:scale-105"
              >
               {/* Custom Quotation Mark */}
          <div className="mb-6 text-[#6B5ACD] text-9xl font-bold">
            <span className="inline-block transform ">“</span>
          </div>
          
                <p className="text-gray-700 mb-4 font-semibold text-left">{testimonial.text}</p>
                <div className="flex items-center mt-auto space-x-4">
                  <img
                    src={testimonialImage}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <strong className="block text-black text-1xl">{testimonial.name}</strong>
                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta py-16 bg-white">
  <div className="container mx-auto px-6 flex items-center justify-between">
    {/* Image Section */}
    <div className="flex-1 pr-8">
      <img
        src={ctaImage} // Update with your image path
        alt="Team Collaboration"
        className="w-full rounded-xl object-cover"
      />
    </div>

    {/* Text Section */}
    <div className="flex-1">
    <h2 className="text-3xl font-semibold text-teal-700 mb-4">
        SmartSphere <span className="text-xl text-gray-600 mb-8">is your partner in simplifying inventory management and driving efficiency. 
            Don't wait to transform your business.</span>
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        
      </p>
      <p className="text-lg text-teal-700 font-semibold mb-8">
        START YOUR FREE TRIAL TODAY <br /><br />
      </p>
      <button className="bg-[#6B5ACD] text-white px-6 py-3 rounded-full transition-colors duration-300 hover:bg-[#4e46a6]">
      View Pricing →
      </button>
    </div>
  </div>
</section>


      {/* Footer Section */}
      <section className="footer bg-gradient-to-r from-[#6B5ACD] to-[#9D77D9] rounded-xl max-w-7xl mx-auto py-8">
  <div className="container mx-auto px-6 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
      {/* Our Company Section */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Our Company</h4>
        <ul>
          <li><a href="#" className="text-gray-200 hover:text-white">About</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white">Location</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white">Portfolio</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white">Office</a></li>
        </ul>
      </div>

      {/* Our Services Section */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Our Services</h4>
        <ul>
          <li><a href="#" className="text-gray-200 hover:text-white">Business Financial Planning</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white">Business Growth Analysis</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white">Business Research Data</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white">Customer Based Targeting</a></li>
        </ul>
      </div>

      {/* Stay Connected Section */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Stay Connected</h4>
        <ul>
          <li><a href="#" className="text-gray-200 hover:text-white">LinkedIn</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white">Twitter</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white">Facebook</a></li>
        </ul>
      </div>

      {/* Legal Section */}
      <div>
        <h4 className="font-semibold text-lg mb-4">Legal</h4>
        <ul>
          <li><a href="#" className="text-gray-200 hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-200 hover:text-white">Terms Of Service</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Social Media Icons */}
  <div className="flex justify-center gap-4 mt-6">
    <a href="#" className="text-white hover:text-gray-300">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" className="text-white hover:text-gray-300">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="#" className="text-white hover:text-gray-300">
      <i className="fab fa-twitter"></i>
    </a>
  </div>
</section>

{/* Copyright Section */}
<div className="text-center text-black mt-8">
    <p>&copy; Copyrights (c) 2024 | All rights reserved</p> <br />
  </div>

  {/* Back to Top Button */}
  <BackToTopButton />

    </div>
  );
}

export default LandingPage;
