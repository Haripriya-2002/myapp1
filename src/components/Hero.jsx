import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Your Complete UPSC CSE 
                <span className="text-primary"> Preparation Partner</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Comprehensive study materials, practice tests, and personalized study plans to help you crack one of India's toughest examinations.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/study-material">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-semibold">
                  <Link to="/syllabus">
                    Explore Syllabus
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img  alt="UPSC preparation study materials and books" className="w-full h-auto rounded-2xl" src="https://images.unsplash.com/photo-1620837913485-75ec3d6fea99" />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Comprehensive</p>
                    <p className="text-xs text-gray-500">Study Materials</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-primary" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Practice</p>
                    <p className="text-xs text-gray-500">Mock Tests</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg hidden sm:flex"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-primary" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Personalized</p>
                    <p className="text-xs text-gray-500">Study Plans</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Platform?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to prepare effectively for the UPSC Civil Services Examination
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen className="h-10 w-10 text-primary" />,
              title: "Comprehensive Study Material",
              description: "Access detailed notes, books, and resources covering the entire UPSC syllabus"
            },
            {
              icon: <Award className="h-10 w-10 text-primary" />,
              title: "Practice Tests & Mock Exams",
              description: "Test your knowledge with our extensive collection of practice questions and full-length mock exams"
            },
            {
              icon: <Calendar className="h-10 w-10 text-primary" />,
              title: "Personalized Study Plans",
              description: "Get customized study schedules based on your strengths, weaknesses, and available time"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;