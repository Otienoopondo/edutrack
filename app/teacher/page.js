"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from './components/Navbar';
import { FaUserPlus, FaClipboardList, FaComments, FaRobot } from 'react-icons/fa';

export default function TeacherDashboard() {
  const [showForm, setShowForm] = useState(null);
  const [feedback, setFeedback] = useState("Analyzing student's progress...");
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChatRedirect = () => {
    router.push('/teacher/chat');
  };

  const handleAIRecommendations = () => {
    setFeedback("We suggest focusing on students struggling with Science and Mathematics.");
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (type) => {
    if (Object.values(formData).some(value => !value.trim())) {
      setMessage("All fields must be filled out!");
      return;
    }
    console.log("Submitted Data:", formData);
    setMessage(`${type} submitted successfully!`);
    setTimeout(() => setMessage(""), 3000);
    setShowForm(null);
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen font-sans">
      <Navbar />
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Teacher Dashboard</h1>

        {message && <p className="text-green-600 text-center font-semibold mb-4">{message}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-4">
              <FaUserPlus className="text-primary text-4xl" />
              <span className="text-lg font-semibold text-gray-600">Student Registration</span>
            </div>
            <p className="text-gray-500 mb-4">Register new students and keep track of their progress.</p>
            <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-3 px-6 rounded-full w-full hover:from-purple-600 hover:to-red-600 transition-all duration-300" onClick={() => setShowForm(showForm === 'register' ? null : 'register')}>
              Register Student
            </button>
            {showForm === 'register' && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <input name="admissionNumber" type="text" placeholder="Student Admission Number" className="block w-full p-2 border rounded mb-2" onChange={handleInputChange} />
                <input name="studentName" type="text" placeholder="Student Name" className="block w-full p-2 border rounded mb-2" onChange={handleInputChange} />
                <input name="parentID" type="text" placeholder="Parent ID Number" className="block w-full p-2 border rounded mb-2" onChange={handleInputChange} />
                <input name="parentPhone" type="text" placeholder="Parent Phone Number" className="block w-full p-2 border rounded mb-2" onChange={handleInputChange} />
                <button onClick={() => handleSubmit("Registration")} className="bg-blue-500 text-white py-1 px-4 rounded">Submit</button>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-4">
              <FaClipboardList className="text-primary text-4xl" />
              <span className="text-lg font-semibold text-gray-600">Input Assessment Marks</span>
            </div>
            <p className="text-gray-500 mb-4">Add marks and evaluate student performance with ease.</p>
            <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-3 px-6 rounded-full w-full hover:from-purple-600 hover:to-red-600 transition-all duration-300" onClick={() => setShowForm(showForm === 'marks' ? null : 'marks')}>
              Add Marks
            </button>
            {showForm === 'marks' && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <input name="studentName" type="text" placeholder="Student Name" className="block w-full p-2 border rounded mb-2" onChange={handleInputChange} />
                <input name="admissionNumber" type="text" placeholder="Student Admission Number" className="block w-full p-2 border rounded mb-2" onChange={handleInputChange} />
                <input name="math" type="number" placeholder="Mathematics" className="block w-full p-2 border rounded mb-2" onChange={handleInputChange} />
                <input name="english" type="number" placeholder="English" className="block w-full p-2 border rounded mb-2" onChange={handleInputChange} />
                <input name="kiswahili" type="number" placeholder="Kiswahili" className="block w-full p-2 border rounded mb-2" onChange={handleInputChange} />
                <input name="science" type="number" placeholder="Science" className="block w-full p-2 border rounded mb-2" onChange={handleInputChange} />
                <input name="socialStudies" type="number" placeholder="Social Studies" className="block w-full p-2 border rounded mb-2" onChange={handleInputChange} />
                <button onClick={() => handleSubmit("Marks Entry")} className="bg-blue-500 text-white py-1 px-4 rounded">Submit</button>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-4">
              <FaRobot className="text-primary text-4xl" />
              <span className="text-lg font-semibold text-gray-600">AI Insights</span>
            </div>
            <p className="text-gray-500 mb-4">Get AI-generated suggestions for student improvement.</p>
            <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-3 px-6 rounded-full w-full hover:from-purple-600 hover:to-red-600 transition-all duration-300" onClick={handleAIRecommendations}>
              View Insights
            </button>
            {feedback && <p className="mt-4 text-gray-500 text-sm">{feedback}</p>}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <div className="flex items-center justify-between mb-4">
              <FaComments className="text-primary text-4xl" />
              <span className="text-lg font-semibold text-gray-600">Chat with Parents</span>
            </div>
            <p className="text-gray-500 mb-4">Communicate with parents in real time.</p>
            <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-3 px-6 rounded-full w-full hover:from-purple-600 hover:to-red-600 transition-all duration-300" onClick={handleChatRedirect}>
              Open Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
