'use client';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMoneyBillWave, FaGasPump, FaMobileAlt, FaCreditCard, FaPlane, FaTrain, FaBuilding, FaTicketAlt, FaFileInvoiceDollar, FaAddressCard, FaDesktop } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';
import { FaShieldAlt, FaPhoneAlt, FaPlug } from 'react-icons/fa';
import { GiReceiveMoney } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./globals.css";
import {FaRegHandshake, FaRegThumbsUp, FaLock, FaHeadset} from "react-icons/fa";
import Image from 'next/image';
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
  };
  
  const services = [
    { icon: <FaMoneyBillWave size={30} />, title: 'AEPS Service', color: 'text-blue-600' },
    { icon: <FaAddressCard size={30}  />, title: 'Aadhaar Pay', color: 'text-green-600' },
    { icon: <FaMoneyBillWave size={30}  />, title: 'Money Transfer', color: 'text-yellow-600' },
    { icon: <FaDesktop size={30} />, title: 'Micro ATM', color: 'text-purple-600' },
    { icon: <FaFileInvoiceDollar size={30} />, title: 'Bill Payment', color: 'text-red-600' },
    { icon: <FaGasPump size={30}  />, title: 'Gas Booking', color: 'text-orange-600' },
    { icon: <FaMobileAlt size={30} />, title: 'Mobile Recharge', color: 'text-teal-600' },
    { icon: <FaAddressCard size={30} />, title: 'Pan Cards', color: 'text-pink-600' },
    { icon: <FaFileInvoiceDollar size={30} />, title: 'EMI Bill Pay', color: 'text-indigo-600' },
    { icon: <FaMoneyBillWave size={30} />, title: 'Mini Statement', color: 'text-gray-600' },
    { icon: <FaPlane size={30} />, title: 'Flight Booking', color: 'text-blue-500' },
    { icon: <FaTrain size={30} />, title: 'IRCTC Booking', color: 'text-red-500' },
    { icon: <FaBuilding size={30} />, title: 'LIC Premium', color: 'text-yellow-500' },
    { icon: <FaCreditCard size={30} />, title: 'Credit Card Bill Payment', color: 'text-green-500' },
    { icon: <FaMobileAlt size={30} />, title: 'DTH Recharge', color: 'text-teal-500' },
    { icon: <FaGasPump size={30} />, title: 'Insurance Service', color: 'text-orange-500' },
    { icon: <FaTicketAlt size={30} />, title: 'FasTag Service', color: 'text-pink-500' },
    { icon: <FaCreditCard size={30} />, title: 'Prepaid Card', color: 'text-purple-500' },
    { icon: <GiReceiveMoney size={30} />, title: 'CMS', color: 'text-yellow-600' },
    { icon: <FaMoneyBillTransfer size={30} />, title: 'Money Transfer', color: 'text-green-600' },

  ];
  
  const partners = [
    { src: "/assets/hdfc.png", alt: "Partner 1" },
    { src: "/assets/sbi.png", alt: "Partner 2" },
    { src: "/assets/bob.png", alt: "Partner 3" },
    { src: "/assets/axis.webp", alt: "Partner 4" },
    { src: "/assets/kotak.png", alt: "Partner 5" },
    { src: "/assets/icic.png", alt: "Partner 6" },
  ];
  const plans = [
    {
      title: "Silver Plan",
      features: [
        { text: "Normal Commission", included: true },
        { text: "Email Support", included: true },
        { text: "Normal Support", included: true },
        { text: "Limited Features", included: true },
        { text: "Single Pipeline", included: true },
        { text: "No Notification", included: false },
        { text: "Normal Print", included: true },
        { text: "Single Bank Payout Add", included: true },
        { text: "No Marketing Material", included: false },
        { text: "Single Device Access", included: true },
        { text: "No Certificate", included: false },
      ],
      price: "₹120/mo",
    },
    {
      title: "Gold Plan",
      features: [
        { text: "10% Extra Commission", included: true },
        { text: "Email & Call Support", included: true },
        { text: "Dedicated Support", included: true },
        { text: "Additional Features", included: true },
        { text: "Double Pipeline", included: true },
        { text: "Email Notification", included: true },
        { text: "Normal & Thermal Print", included: true },
        { text: "Double Bank Payout Add", included: true },
        { text: "Digital Marketing Material", included: true },
        { text: "Double Device Access", included: true },
        { text: "Digital Certificate", included: true },
      ],
      price: "₹490/mo",
    },
    {
      title: "Diamond Plan",
      features: [
        { text: "30% Extra Commission", included: true },
        { text: "Priority Relationship Manager", included: true },
        { text: "Priority Support", included: true },
        { text: "Full Features", included: true },
        { text: "Multi Pipeline", included: true },
        { text: "Email Notification", included: true },
        { text: "Normal & Thermal Print", included: true },
        { text: "Multi Bank Payout Add", included: true },
        { text: "Physical Marketing Material", included: true },
        { text: "Multi Device Access", included: true },
        { text: "Physical Certificate", included: true },
      ],
      price: "₹990/mo",
    },
  ];
  const blogs = [
    {
      title: "Aadhaar Enabled Payment System",
      description:
        "Learn how Aadhaar Enabled Payment System (AEPS) simplifies financial transactions and promotes cashless payments.",
      image: "/assets/01.png", // Replace with actual image paths
      link: "/blog/aeps", // Replace with actual URLs
    },
    {
      title: "Aadhaar Card Centre Online",
      description:
        "Discover the ease of managing Aadhaar-related services online with our detailed guide.",
      image: "/assets/02.png",
      link: "/blog/aadhaar-card-centre",
    },
    {
      title: "Bank of Baroda BC Point",
      description:
        "Explore how BC Points from Bank of Baroda offer convenient banking solutions in rural areas.",
      image: "/assets/03.png",
      link: "/blog/bob-bc-point",
    },
  ];
  const features = [
    {
      title: "Zero Costing",
      description:
        "All the digital services should be available in the urban as well as the most rural parts of the country. Therefore, we do not charge any service activation or registration fees.",
      icon: <FaRegHandshake size={40} className="text-blue-600" />,
    },
    {
      title: "Easy To Operate",
      description:
        "Our platform provides the best services in an easy-to-use way. Just sign up and enjoy the seamless integration features for your web and mobile applications.",
      icon: <FaRegThumbsUp size={40} className="text-green-600" />,
    },
    {
      title: "All Platform",
      description:
        "We support all types of platforms, including mobile applications and web panels for members. Whatever technology your application is built on, we provide complete support.",
      icon: <FaMobileAlt size={40} className="text-purple-600" />,
    },
    {
      title: "Safe And Secure",
      description:
        "Near2pay is recognized under the Startup India program by the Indian Government. This ensures safe and secure services for you and your members.",
      icon: <FaLock size={40} className="text-red-600" />,
    },
    {
      title: "24/7 Hour Support",
      description:
        "We offer best-in-class customer service, committed to serving you 24x7. Our experts are ready to provide solutions to your concerns promptly.",
      icon: <FaHeadset size={40} className="text-yellow-600" />,
    },
    {
      title: "Best Commission",
      description:
        "We provide the highest commission rates in the market for all services. Retailers can earn more and maximize their profits by partnering with us.",
      icon: <FaMoneyBillWave size={40} className="text-teal-600" />,
    },
  ];
  return (
    <div>
      {/* Header Section */}
      <header className="text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="hidden sm:flex flex-col sm:flex-row justify-between bg-blue-900 items-center px-4 sm:px-10 py-2 text-sm">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <MdEmail size={20} className="mr-2" />
            <span className="opacity-70 hover:opacity-100 text-base transition">near2pay@gmail.com</span>
          </div>
          <div className="flex items-center">
            <IoIosCall size={20} className="mr-2" />
            <span className="opacity-70 hover:opacity-100 text-base transition">7976623987</span>
          </div>
        </div>

       
      </div>

      <div className="flex justify-between items-center px-4 sm:px-10 py-3 bg-white">
        <div className="text-lg font-bold">
        <Image
  src="/assets/logo.png" 
  alt="Logo" 
  width={130}  // Set appropriate width
  height={100}  // Set appropriate height
  className="h-5 text-gray-950 sm:h-9 mx-auto sm:mx-0" 
  priority  // Optional: Improves loading for important images like logos
/>
        </div>

        <nav className="hidden sm:flex flex-row space-x-8 text-base font-normal text-gray-800">
          <a
            href="#"
            className={`hover:text-blue-900 ${activeLink === "home" ? "text-blue-900" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`hover:text-blue-900 ${activeLink === "about" ? "text-blue-900" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            About Us
          </a>
          <a
            href="#services"
            className={`hover:text-blue-900 ${activeLink === "services" ? "text-blue-900" : ""}`}
            onClick={() => handleLinkClick("services")}
          >
            Services
          </a>
          <a
            href="#plan"
            className={`hover:text-blue-900 ${activeLink === "plan" ? "text-blue-900" : ""}`}
            onClick={() => handleLinkClick("plan")}
          >
            Plan
          </a>
          <a
            href="#blog"
            className={`hover:text-blue-900 ${activeLink === "blog" ? "text-blue-900" : ""}`}
            onClick={() => handleLinkClick("blog")}
          >
            Blog
          </a>
          <a
            href="#contact"
            className={`hover:text-blue-900 ${activeLink === "contact" ? "text-blue-900" : ""}`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact Us
          </a>
        </nav>

        <div className="sm:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-700 focus:outline-none">
            <TiThMenu size={20} />
          </button>
        </div>

        <a href='https://www.near2pay.com/login' className="hidden sm:block bg-blue-800 hover:opacity-70 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition">
          Agent Login &rarr;
        </a>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} sm:hidden bg-white text-gray-800 px-4 py-4`}>
        <nav className="flex flex-col space-y-4">
          <a
            href="#"
            className={`hover:text-blue-700 text-center ${activeLink === "home" ? "text-blue-700" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`hover:text-blue-700 text-center ${activeLink === "about" ? "text-blue-700" : ""}`}
            onClick={() => handleLinkClick("about")}
          >
            About Us
          </a>
          <a
            href="#services"
            className={`hover:text-blue-700 text-center ${activeLink === "services" ? "text-blue-700" : ""}`}
            onClick={() => handleLinkClick("services")}
          >
            Services
          </a>
          <a
            href="#plan"
            className={`hover:text-blue-700 text-center ${activeLink === "plan" ? "text-blue-700" : ""}`}
            onClick={() => handleLinkClick("plan")}
          >
            Plan
          </a>
          <a
            href="#blog"
            className={`hover:text-blue-700 text-center ${activeLink === "blog" ? "text-blue-700" : ""}`}
            onClick={() => handleLinkClick("blog")}
          >
            Blog
          </a>
          <a
            href="#contact"
            className={`hover:text-blue-700 text-center ${activeLink === "contact" ? "text-blue-700" : ""}`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
      {/* Hero Section */}
        {/* Hero Section */}
        <section className="flex items-center justify-between py-20 text-white sm:mt-10 bg-blue-50 px-4 sm:px-10">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0">
          {/* Text Content */}
          <div className="text-center sm:text-left sm:w-1/2">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-gray-900 leading-tight">
              Welcome to Near2pay, Your Solution Partner
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-gray-600 p-1">
              Innovative, Reliable, and Affordable Services to Help Your Business Grow.
            </p>
            <a href='https://www.near2pay.com/login' className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md transition">
            Agent Login
            </a>
          </div>

          {/* Image Content */}
          <div className="sm:w-1/2">
          <Image
  src="/assets/man.png"
  alt="Hero Image"
  width={900}   // Adjust the width as needed
  height={600}  // Adjust the height as needed
  className="w-full h-auto"
/>
          </div>
        </div>
      </section>
      <div className="about-us-container bg-gray-50 py-20 " id='about'>
      {/* About Us Section with Image on Left */}
      <section className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10 " >
        {/* Image on Left */}
        <div className="sm:w-1/2 mb-8 sm:mb-0">
        <Image
  src="/assets/about.png"
  alt="About Us Image"
  width={800}    // Adjust based on layout
  height={600}   // Adjust based on layout
  className="w-full h-auto"
/>
        </div>

        {/* Text Content on Right */}
        <div className="sm:w-1/2 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10">
            We Believe That Quality Of Services Matters
          </p>
          <p className="text-md sm:text-lg text-gray-600 mb-10">
            Better Services Provided by the world&apos;s best leading online service provider in India. We at UdayPay provide Aadhaar Enabled Payment System (AEPS), Domestic Money Transfer, Recharge (Mobile, DTH, Data Card), Bill Payment System (Electricity, Landline, Mobile Bill Payment) of all leading service providers at unbelievably lowest prices.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="flex flex-col sm:flex-row justify-around items-center px-4 sm:px-10 py-10">
        <div className="feature-item text-center mb-8 sm:mb-0  hover:bg-slate-200">
          <div className="icon-container flex items-center justify-center">
            <FaShieldAlt size={50} className="icon text-blue-600 animate-icon" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">Safe And Secure</h3>
          <p className="text-gray-600">Your transactions are fully secured with the highest encryption standards.</p>
        </div>

        <div className="feature-item text-center mb-8 sm:mb-0  hover:bg-slate-200">
          <div className="icon-container flex items-center justify-center">
            <FaPhoneAlt size={50} className="icon text-green-600 animate-icon" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">24/7 Support</h3>
          <p className="text-gray-600">Our team is available round the clock to assist you with any query or issue.</p>
        </div>

        <div className="feature-item text-center hover:bg-slate-200">
          <div className="icon-container flex items-center justify-center">
            <FaPlug size={50} className="icon text-orange-600 animate-icon" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">Easy Integration</h3>
          <p className="text-gray-600">Our system easily integrates with your existing infrastructure for seamless operations.</p>
        </div>
      </section>
    </div>
    {/* our services */}
    <div id='services' className="services-container py-10 bg-gray-50">
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Our Services</h1>
        <p className="text-lg sm:text-xl text-gray-700">Banking & Digital Services</p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-4 sm:px-10 cursor-pointer">
        {services.map((service, index) => (
          <div key={index} className="service-item text-center p-6 rounded-lg shadow-lg bg-white transition transform hover:scale-105 hover:shadow-2xl">
            <div className={`icon-container p-4 rounded-full mb-4 ${service.color}`}>
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
          </div>
        ))}
      </section>
    </div>
    {/* our parters */}
    <div className="partners-container py-20 bg-gray-50 px-10">
      <section className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Our Partners</h1>
        <p className="text-lg sm:text-xl text-gray-700">We are proud to be associated with industry-leading brands</p>
      </section>

      {/* Partners Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 px-4 sm:px-10">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item flex justify-center items-center  cursor-pointer">
            <img
              src={partner.src}
              alt={partner.alt}
              className="partner-logo h-16 sm:h-20 object-contain p-5 transition-transform transform hover:scale-110"
            />
          </div>
        ))}
      </section>
    </div>
    <section className="bg-gray-50 py-20" id='plan'>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Pricing</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Affordable Pricing Packages  
          <br />  
          We are reliable and the first choice of digital financial services provider recommended by our customers. 
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 transition transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {plan.title}
              </h3>
              <p className="text-xl font-semibold text-blue-600 mb-6">
                {plan.price}
              </p>
              <ul className="space-y-4 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    {feature.included ? (
                      <FaCheckCircle className="text-green-500 mr-3" />
                    ) : (
                      <FaTimesCircle className="text-red-500 mr-3" />
                    )}
                    <span
                      className={`text-gray-700 ${
                        !feature.included ? "line-through" : ""
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
             
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-20" id='blog'>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Latest Blog</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Stay Updated To Our Blog & News
          <br />
          Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat.  
          Phasellus nec ligula arcu.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
            >
             <Image
  src={blog.image}
  alt={blog.title}
  width={500}      // Adjust based on layout
  height={224}     // Matches h-56 (56 * 4 = 224px)
  className="w-full h-56 object-cover"
/>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-6">{blog.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>  
    <section className="bg-gray-50 py-20" id='why'>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Why People Choose Our Platform
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Discover the features that make our platform the preferred choice for businesses across the nation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card text-center p-6 rounded-lg shadow-lg bg-white transition transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="icon-container mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-20" id='contact'>
      <div className="container mx-auto px-4 sm:px-10">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
          Have questions? Feel free to reach out to us through any of the following methods or fill out the contact form below. We&apos;re here to help!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Image */}
          <div className="flex justify-center">
          <Image
  src="/assets/contact.png"
  alt="Contact Us"
  width={800}     // Set appropriate width
  height={600}    // Set appropriate height
  className="rounded-lg shadow-lg w-full h-auto object-cover"
/>
          </div>

          {/* Right Side: Contact Details & Form */}
          <div>
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Get In Touch
              </h3>
              <div className="flex items-center mb-6">
                <FaPhoneAlt className="text-blue-600 text-2xl mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91-7976623987</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <FaEnvelope className="text-green-600 text-2xl mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">near2pay@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-red-600 text-2xl mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    
Dholimandi Chomu Jaipur Rajasthan
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={10}
                    placeholder="Write your message here"
                    className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={() => toast.success("Your message has been sent successfully!")}
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-blue-100 text-gray-800 py-10">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
          <Image 
  src="/assets/image.png" 
  alt="Logo" 
  width={150}  // Set appropriate width
  height={200} // Set appropriate height
  className="pb-3" 
  priority  // Optional: Prioritizes loading
/>

            <p className="text-sm">
              We enable local retail stores to offer Assisted Digital Financial
              Services like Cash Deposit, Cash Withdrawal, Balance Inquiry, Bill
              Payments, Micro ATM, Aadhaar Enabled Services (AEPS), DTH-Mobile
              Recharges, POS Services, SMS Payment, Insurance, Money Transfer, etc.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-950 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#plan" className="hover:text-blue-400">Pricing</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#blog" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-950 mb-4">Other Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a  className="hover:text-blue-400">Bill Payment</a></li>
              <li><a  className="hover:text-blue-400">Money Transfer</a></li>
              <li><a  className="hover:text-blue-400">Aadhaar Payments</a></li>
              <li><a  className="hover:text-blue-400">Micro ATM</a></li>
              <li><a  className="hover:text-blue-400">PAN Card</a></li>
              <li><a  className="hover:text-blue-400">Latest Blog</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-gray-950 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <FaPhoneAlt className="text-blue-400 text-xl mr-3" />
                <span>
                7976623987</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-green-400 text-xl mr-3" />
                <span>near2pay@gmail.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-red-400 text-xl mr-3" />
                <span>
                Dholimandi Chomu Jaipur Rajasthan</span>
              </li>
            </ul>
          </div>
        </div>

       
      </div>
    </footer>
    </div>
  );
}
