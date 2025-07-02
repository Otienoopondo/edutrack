export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white p-4 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">EduTrack</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-300">Home</a></li>
            {/* Removed Teacher Dashboard link from navbar */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
