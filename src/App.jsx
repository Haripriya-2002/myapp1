import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import SyllabusPage from '@/pages/SyllabusPage';
import StudyMaterialPage from '@/pages/StudyMaterialPage';
import PracticeTestsPage from '@/pages/PracticeTestsPage';
import StudyPlannerPage from '@/pages/StudyPlannerPage';
import ProfilePage from '@/pages/ProfilePage';
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/syllabus" element={<SyllabusPage />} />
            <Route path="/study-material" element={<StudyMaterialPage />} />
            <Route path="/practice-tests" element={<PracticeTestsPage />} />
            <Route path="/study-planner" element={<StudyPlannerPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;