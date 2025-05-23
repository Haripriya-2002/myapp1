import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { studyResources } from "@/lib/data";
import { BookMarked, Star, Search, Filter } from "lucide-react";

const StudyMaterialPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = ["All", ...new Set(studyResources.map(res => res.category))];
    return uniqueCategories;
  }, []);

  const filteredResources = useMemo(() => {
    return studyResources.filter(resource => {
      const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            resource.author.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

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
          <BookMarked className="mr-3 h-10 w-10 text-primary" /> Study Materials
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600"
          variants={itemVariants}
        >
          Access recommended books and resources for your UPSC preparation.
        </motion.p>
      </header>

      <motion.div className="mb-8 flex flex-col md:flex-row gap-4 items-center" variants={itemVariants}>
        <div className="relative flex-grow w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        <AnimatePresence>
          {filteredResources.length > 0 ? (
            filteredResources.map(resource => (
              <motion.div key={resource.id} variants={itemVariants} layout>
                <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary to-indigo-600 text-white p-6">
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription className="text-indigo-100">By {resource.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-gray-700 mb-4">{resource.description}</p>
                      <p className="text-xs text-gray-500 mb-2">Category: <span className="font-semibold text-primary">{resource.category}</span></p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <span className="text-sm font-semibold text-gray-700">{resource.rating}/5.0</span>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.p 
              className="col-span-full text-center text-gray-500 py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No resources found matching your criteria. Try adjusting your search or filters.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default StudyMaterialPage;