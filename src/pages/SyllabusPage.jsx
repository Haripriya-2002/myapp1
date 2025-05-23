import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { syllabusData } from "@/lib/data";
import { Book, Target } from "lucide-react";

const SyllabusPage = () => {
  const { preliminaryExam, mainExam } = syllabusData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <header className="mb-12 text-center">
        <motion.h1 
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          UPSC CSE Syllabus
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Detailed breakdown of the Preliminary and Main Examination syllabus.
        </motion.p>
      </header>

      <section className="mb-16">
        <motion.h2 
          className="text-3xl font-semibold text-gray-800 mb-6 flex items-center"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Target className="mr-3 h-8 w-8 text-primary" /> Preliminary Examination
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader className="bg-gradient-to-r from-primary to-indigo-600 text-white rounded-t-lg">
                <CardTitle>Paper I: General Studies</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {preliminaryExam.paperI.map((item, index) => (
                    <AccordionItem value={`paper1-item-${index}`} key={index}>
                      <AccordionTrigger className="text-base font-medium hover:text-primary">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                          {item.topics.map((topic, topicIndex) => (
                            <li key={topicIndex}>{topic}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                <CardTitle>Paper II: Civil Services Aptitude Test (CSAT)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {preliminaryExam.paperII.map((item, index) => (
                    <AccordionItem value={`paper2-item-${index}`} key={index}>
                      <AccordionTrigger className="text-base font-medium hover:text-green-600">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                          {item.topics.map((topic, topicIndex) => (
                            <li key={topicIndex}>{topic}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section>
        <motion.h2 
          className="text-3xl font-semibold text-gray-800 mb-6 flex items-center"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Book className="mr-3 h-8 w-8 text-primary" /> Main Examination
        </motion.h2>
        <div className="space-y-6">
          {mainExam.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{paper.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {paper.description && <p className="text-sm text-gray-700 mb-4">{paper.description}</p>}
                  {paper.topics && (
                    <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                      {paper.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default SyllabusPage;