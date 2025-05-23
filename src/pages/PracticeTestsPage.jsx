import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockTests } from "@/lib/data";
import { Award, Clock, BarChart, Search } from "lucide-react";

const PracticeTestsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTests = mockTests.filter(test =>
    test.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="container mx-auto px-4 py-8"
    >
      <header className="mb-12 text-center">
        <motion.h1 
          className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center"
          variants={itemVariants}
        >
          <Award className="mr-3 h-10 w-10 text-primary" /> Practice Tests
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600"
          variants={itemVariants}
        >
          Evaluate your preparation with our comprehensive mock tests.
        </motion.p>
      </header>

      <motion.div className="mb-8" variants={itemVariants}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search tests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full max-w-md mx-auto"
          />
        </div>
      </motion.div>

      {filteredTests.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {filteredTests.map(test => (
            <motion.div key={test.id} variants={itemVariants}>
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6">
                  <CardTitle className="text-xl">{test.title}</CardTitle>
                  <CardDescription className="text-teal-100">{test.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-center">
                      <BarChart className="h-5 w-5 mr-2 text-green-600" />
                      <span>{test.questions} Questions</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-green-600" />
                      <span>{test.duration} Minutes</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-green-600" />
                      <span>Difficulty: {test.difficulty}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 bg-gray-50 border-t">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Start Test</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p 
          className="text-center text-gray-500 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No tests found matching your search criteria.
        </motion.p>
      )}
    </motion.div>
  );
};

export default PracticeTestsPage;