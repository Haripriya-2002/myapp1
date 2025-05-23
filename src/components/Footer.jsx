
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">UPSC Helper</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your comprehensive companion for UPSC CSE preparation. Access study materials, practice tests, and personalized study plans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/syllabus" className="text-gray-400 hover:text-white transition-colors">Syllabus</Link>
              </li>
              <li>
                <Link to="/study-material" className="text-gray-400 hover:text-white transition-colors">Study Material</Link>
              </li>
              <li>
                <Link to="/practice-tests" className="text-gray-400 hover:text-white transition-colors">Practice Tests</Link>
              </li>
              <li>
                <Link to="/study-planner" className="text-gray-400 hover:text-white transition-colors">Study Planner</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4">Resources</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Current Affairs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Previous Year Papers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg mb-4">Contact Us</p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@upschelper.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} UPSC Helper. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
