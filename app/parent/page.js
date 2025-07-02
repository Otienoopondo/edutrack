"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from '../teacher/components/Navbar';
import { FaChartLine, FaGraduationCap, FaComments } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.js registration
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ParentDashboard() {
  const [showReport, setShowReport] = useState(false);
  const [feedback, setFeedback] = useState("Analyzing the performance...");
  const router = useRouter();

  // Dummy chart data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Student Performance',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#6C63FF',
        backgroundColor: 'rgba(108, 99, 255, 0.2)',
        fill: true,
      },
    ],
  };

  const handleAIRecommendations = () => {
    setFeedback("We recommend focusing on improving Science and English to boost overall performance.");
  };

  const handleChatRedirect = () => {
    router.push('/parent/chat');
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen font-sans">
      <Navbar /> {/* Navbar */}

      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Parent Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Student Progress Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-4">
              <FaChartLine className="text-primary text-4xl" />
              <span className="text-lg font-semibold text-gray-600">Student Progress</span>
            </div>
            <p className="text-gray-500 mb-4">Monitor your child's academic performance over time.</p>
            <button
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-3 px-6 rounded-full w-full hover:from-purple-600 hover:to-red-600 transition-all duration-300"
              onClick={() => setShowReport(!showReport)}
            >
              View Report
            </button>
          </div>

          {/* AI Recommendations Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-4">
              <FaGraduationCap className="text-primary text-4xl" />
              <span className="text-lg font-semibold text-gray-600">Personalized Feedback</span>
            </div>
            <p className="text-gray-500 mb-4">Receive personalized feedback on your child's progress.</p>
            <button
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-3 px-6 rounded-full w-full hover:from-purple-600 hover:to-red-600 transition-all duration-300"
              onClick={handleAIRecommendations}
            >
              Get Feedback
            </button>
            {feedback && <p className="mt-4 text-gray-500 text-sm">{feedback}</p>}
          </div>

          {/* Communication Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-4">
              <FaComments className="text-primary text-4xl" />
              <span className="text-lg font-semibold text-gray-600">Chat with Teacher</span>
            </div>
            <p className="text-gray-500 mb-4">Direct communication with the teacher about your child's progress.</p>
            <button
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-3 px-6 rounded-full w-full hover:from-purple-600 hover:to-red-600 transition-all duration-300"
              onClick={handleChatRedirect}
            >
              Chat Now
            </button>
          </div>

        </div>

        {/* Render the student performance report chart when 'View Report' button is clicked */}
        {showReport && (
          <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Student Performance Chart</h2>
            <Line data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
}