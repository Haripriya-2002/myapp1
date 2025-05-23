import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, PlusCircle, Edit2, Trash2, CheckSquare, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { studyPlans } from "@/lib/data";
import { saveToLocalStorage, getFromLocalStorage } from "@/lib/localStorage";

const StudyPlannerPage = () => {
  const { toast } = useToast();
  const [tasks, setTasks] = useState(getFromLocalStorage("studyTasks", []));
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    saveToLocalStorage("studyTasks", tasks);
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      toast({ title: "Error", description: "Task cannot be empty.", variant: "destructive" });
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
    toast({ title: "Success", description: "Task added successfully." });
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    toast({ title: "Success", description: "Task deleted." });
  };

  const startEditTask = (task) => {
    setEditingTask(task.id);
    setEditingText(task.text);
  };

  const saveEditTask = (id) => {
    if (editingText.trim() === "") {
      toast({ title: "Error", description: "Task text cannot be empty.", variant: "destructive" });
      return;
    }
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: editingText } : task
      )
    );
    setEditingTask(null);
    setEditingText("");
    toast({ title: "Success", description: "Task updated." });
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
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
          <Calendar className="mr-3 h-10 w-10 text-primary" /> Study Planner
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600"
          variants={itemVariants}
        >
          Organize your study schedule and track your progress.
        </motion.p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants}>
          <Card className="shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-primary to-indigo-600 text-white rounded-t-lg">
              <CardTitle>My Study Tasks</CardTitle>
              <CardDescription className="text-indigo-100">Manage your daily and weekly study goals.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={addTask} className="flex gap-2 mb-6">
                <Input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Add a new study task..."
                  className="flex-grow"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  <PlusCircle className="h-5 w-5 mr-2" /> Add
                </Button>
              </form>

              {tasks.length > 0 && (
                <div className="mb-4">
                  <Label htmlFor="progress">Overall Progress</Label>
                  <Progress value={progressPercentage} id="progress" className="w-full mt-1 h-3" />
                  <p className="text-sm text-gray-600 mt-1">{completedTasks} of {totalTasks} tasks completed ({progressPercentage.toFixed(0)}%)</p>
                </div>
              )}

              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {tasks.map(task => (
                  <motion.div
                    key={task.id}
                    layout
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className={`flex items-center justify-between p-3 rounded-md transition-colors duration-200 ${
                      task.completed ? "bg-green-100" : "bg-gray-100"
                    }`}
                  >
                    {editingTask === task.id ? (
                      <Input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        className="flex-grow mr-2"
                        onBlur={() => saveEditTask(task.id)}
                        autoFocus
                      />
                    ) : (
                      <div className="flex items-center flex-grow">
                        <Button variant="ghost" size="icon" onClick={() => toggleTask(task.id)} className="mr-2">
                          {task.completed ? <CheckSquare className="h-5 w-5 text-green-600" /> : <Square className="h-5 w-5 text-gray-400" />}
                        </Button>
                        <span className={`flex-grow ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                          {task.text}
                        </span>
                      </div>
                    )}
                    <div className="flex gap-1">
                      {editingTask === task.id ? (
                        <Button variant="ghost" size="icon" onClick={() => saveEditTask(task.id)}>
                           <CheckSquare className="h-5 w-5 text-green-500" />
                        </Button>
                      ) : (
                        <Button variant="ghost" size="icon" onClick={() => startEditTask(task)}>
                          <Edit2 className="h-5 w-5 text-blue-500" />
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)}>
                        <Trash2 className="h-5 w-5 text-red-500" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
              {tasks.length === 0 && (
                <p className="text-center text-gray-500 py-4">No tasks yet. Add some to get started!</p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
              <CardTitle>Sample Study Plans</CardTitle>
              <CardDescription className="text-teal-100">Get inspired by these pre-defined study plans.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {studyPlans.map(plan => (
                  <Card key={plan.id} className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-lg">{plan.title}</CardTitle>
                      <CardDescription>{plan.duration} - {plan.difficulty}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-2">{plan.description}</p>
                      <ul className="list-disc pl-5 text-xs text-gray-600">
                        {plan.phases.map((phase, index) => (
                          <li key={index}><strong>{phase.title}:</strong> {phase.activities.join(", ")}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                       <Button variant="outline" size="sm">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StudyPlannerPage;