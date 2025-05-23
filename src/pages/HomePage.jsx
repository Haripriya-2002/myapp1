import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BookOpen, Edit, BarChart, Users, ArrowRight, Quote, CalendarDays } from 'lucide-react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 sm:mx-4">
        <span className="text-2xl sm:text-4xl font-bold text-primary">{timeLeft[interval]}</span>
        <span className="text-xs sm:text-sm uppercase text-gray-600">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center">
      {timerComponents.length ? timerComponents : <span>The day is here!</span>}
    </div>
  );
};

const HomePage = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Explore Syllabus",
      description: "Dive deep into the UPSC CSE syllabus for Prelims and Mains.",
      link: "/syllabus",
      delay: 0.2,
    },
    {
      icon: <Edit className="h-8 w-8 text-primary" />,
      title: "Practice Tests",
      description: "Sharpen your knowledge with our extensive mock tests.",
      link: "/practice-tests",
      delay: 0.3,
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Study Planner",
      description: "Organize your study schedule and track your progress effectively.",
      link: "/study-planner",
      delay: 0.4,
    },
  ];

  const examDate = "2026-05-24T00:00:00";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] py-8 md:py-12 bg-gradient-to-br from-gray-50 to-indigo-100"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 md:mb-12"
        >
          <Quote className="h-12 w-12 text-primary mx-auto mb-4" />
          <blockquote className="text-2xl md:text-3xl italic text-gray-700 font-serif max-w-3xl mx-auto">
            "Success is not final, failure is not fatal: It is the courage to continue that counts."
          </blockquote>
          <p className="mt-3 text-gray-500">- Winston Churchill (Attributed)</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center text-gray-900 mb-2">
            <CalendarDays className="h-7 w-7 mr-3 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Countdown to UPSC CSE Prelims 2026</h2>
          </div>
          <p className="text-md md:text-lg text-gray-600 mb-6">Target Date: May 24, 2026</p>
          <div className="p-4 sm:p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg inline-block border border-gray-200">
            <CountdownTimer targetDate={examDate} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16 max-w-4xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay + 0.4 }}
              className="h-full"
            >
              <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col bg-white rounded-xl overflow-hidden">
                <CardHeader className="items-center text-center pt-6">
                  <div className="p-3 bg-primary/10 rounded-full mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full font-semibold">
                    <Link to={feature.link}>
                      Go to {feature.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Button asChild size="lg" variant="outline" className="font-semibold border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Link to="/study-material">
              <BookOpen className="mr-2 h-5 w-5" /> View Study Materials
            </Link>
          </Button>
          <Button asChild size="lg" className="font-semibold">
            <Link to="/profile">
              <Users className="mr-2 h-5 w-5" /> Your Profile & Progress
            </Link>
          </Button>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 md:mt-16"
          >
            <img  
              alt="Illustration of diverse students collaborating and studying for exams with books and laptops"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1620837913485-75ec3d6fea99" />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default HomePage;