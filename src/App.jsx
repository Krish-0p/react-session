import { useState } from 'react'
import { User, Calendar, Hash, GraduationCap } from 'lucide-react'

function App() {
  const [studentData] = useState({
    name: "Krish Schezwan",
    studentId: "23104079",
    program: "Information Technology",
    year: "TE",
    email: "23104079@apsit.edu.in",
    issueDate: "Aug 2025",
    expiryDate: "Aug 2026",
    university: "APSIT"
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {/* ID Card Container */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <GraduationCap className="text-white w-8 h-8" />
            <h1 className="text-white font-bold text-lg">{studentData.university}</h1>
          </div>
          <p className="text-blue-100 text-sm mt-1">Student Identification Card</p>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Profile Section */}
          <div className="flex items-start space-x-4 mb-6">
            {/* Profile Photo Placeholder */}
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
              <User className="w-12 h-12 text-gray-500" />
            </div>
            
            {/* Student Info */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-1">{studentData.name}</h2>
              <p className="text-gray-600 font-medium">{studentData.program}</p>
              <p className="text-sm text-gray-500">{studentData.year}</p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Hash className="w-4 h-4 text-blue-600" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Student ID</p>
                <p className="font-mono font-semibold text-gray-800">{studentData.studentId}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-blue-600" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Valid Period</p>
                <p className="text-sm text-gray-800">{studentData.issueDate} - {studentData.expiryDate}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <p className="text-sm text-blue-600">{studentData.email}</p>
            </div>
          </div>

          {/* Barcode Placeholder */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="h-12 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-md flex items-center justify-center">
              <div className="flex space-x-1">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1 bg-white ${
                      Math.random() > 0.5 ? 'h-8' : 'h-6'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-2 font-mono">{studentData.studentId}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            This card is property of {studentData.university}. Please return if found.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App