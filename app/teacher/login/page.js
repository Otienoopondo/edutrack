'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebase';

export default function TeacherLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email.trim(), password.trim())
      .then((userCredential) => {
        console.log('Teacher login successful:', userCredential.user);
        alert('Teacher login successful!');
        router.push('/teacher');
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Teacher Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-500 transition duration-300">
            Login
          </button>
        </form>
        <button 
          onClick={() => router.push('/')} 
          className="mt-4 text-green-500 hover:underline w-full"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
