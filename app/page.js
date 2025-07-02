'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FaChalkboardTeacher, FaComments, FaChartLine } from 'react-icons/fa';
import 'animate.css';

export default function Home() {
  const [isChoosing, setIsChoosing] = useState(false);
  const roleSelectionRef = useRef(null);
  const topRef = useRef(null);
  const router = useRouter();

  const handleRoleSelection = (selectedRole, action) => {
    if (action === 'signup') {
      router.push(`/${selectedRole}/signup`);
    } else {
      router.push(`/${selectedRole}/login`);
    }
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRoleSelection = () => {
    roleSelectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsChoosing(true);
  };

  return (
    <div ref={topRef} className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 text-white py-16 px-6 text-center rounded-lg shadow-2xl mb-8 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-extrabold mb-6">
          Welcome to <span className="text-yellow-300">EduTrack</span>
        </h1>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Empowering students, teachers, and parents with real-time performance tracking and seamless communication.
        </p>
        <button
          onClick={scrollToRoleSelection}
          className="bg-yellow-500 text-blue-900 py-2 px-6 rounded-full font-semibold transition duration-300 hover:bg-yellow-400"
        >
          Get Started
        </button>
      </section>

      {/* Role Selection Section */}
      {isChoosing && (
        <section ref={roleSelectionRef} className="flex flex-col items-center py-16 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Choose Your Role</h2>
          <div className="flex space-x-4">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">I am a Teacher</h3>
              <button
                onClick={() => handleRoleSelection('teacher', 'signup')}
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
              >
                Sign Up
              </button>
              <button
                onClick={() => handleRoleSelection('teacher', 'login')}
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded-md ml-2 hover:bg-gray-400 transition"
              >
                Login
              </button>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">I am a Parent</h3>
              <button
                onClick={() => handleRoleSelection('parent', 'signup')}
                className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition"
              >
                Sign Up
              </button>
              <button
                onClick={() => handleRoleSelection('parent', 'login')}
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded-md ml-2 hover:bg-gray-400 transition"
              >
                Login
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">What Our Users Are Saying</h2>
        <div className="flex justify-center space-x-6">
          <div className="testimonial p-6 bg-white rounded-lg shadow-xl w-80">
            <p className="italic text-gray-600">&quot;EduTrack has transformed how I track my student&apos;s progress!&quot;</p>
            <p className="font-semibold mt-4 text-gray-800">- Sarah J., Teacher</p>
          </div>
          <div className="testimonial p-6 bg-white rounded-lg shadow-xl w-80">
            <p className="italic text-gray-600">&quot;Parent-teacher communication has never been easier!&quot;</p>
            <p className="font-semibold mt-4 text-gray-800">- John K., Parent</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-center text-white">
        <p>&copy; 2025 EduTrack. All rights reserved.</p>
      </footer>
    </div>
  );
}