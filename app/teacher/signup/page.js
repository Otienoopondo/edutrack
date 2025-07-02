'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebase';

export default function TeacherSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email.trim(),
        formData.password.trim()
      );
      console.log('Teacher signup successful:', userCredential.user);

      alert('Teacher signup successful!');
      router.push('/teacher');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Teacher Signup</h1>
      <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <input 
          name="email" 
          type="email"
          placeholder="Email Address" 
          onChange={handleChange} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-md" 
          required 
        />
        <input 
          name="name" 
          placeholder="Full Name" 
          onChange={handleChange} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-md" 
          required 
        />
        <input 
          name="phone" 
          type="tel" 
          placeholder="Phone Number" 
          onChange={handleChange} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-md" 
          required 
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          onChange={handleChange} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-md" 
          required 
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500 transition">
          Sign Up
        </button>
      </form>
      <button onClick={() => router.push('/')} className="mt-4 text-yellow-400 hover:underline">Go Back</button>
    </div>
  );
}
