
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, BookOpen, Home, Calendar, BookMarked, Award, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getFromLocalStorage } from "@/lib/localStorage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userData = getFromLocalStorage("userData", { name: "User" });

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="h-5 w-5 mr-2" /> },
    { name: "Syllabus", path: "/syllabus", icon: <BookOpen className="h-5 w-5 mr-2" /> },
    { name: "Study Material", path: "/study-material", icon: <BookMarked className="h-5 w-5 mr-2" /> },
    { name: "Practice Tests", path: "/practice-tests", icon: <Award className="h-5 w-5 mr-2" /> },
    { name: "Study Planner", path: "/study-planner", icon: <Calendar className="h-5 w-5 mr-2" /> },
    { name: "Profile", path: "/profile", icon: <User className="h-5 w-5 mr-2" /> }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900">UPSC Helper</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4 flex items-center">
              <Avatar className="h-8 w-8 bg-primary text-white">
                <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="flex items-center text-gray-700 hover:bg-gray-100 hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
