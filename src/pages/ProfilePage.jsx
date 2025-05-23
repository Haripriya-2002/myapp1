import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Edit3, Save, CheckCircle, XCircle, Target, BookOpen, Award } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { saveToLocalStorage, getFromLocalStorage } from "@/lib/localStorage";

const ProfilePage = () => {
  const { toast } = useToast();
  const [userData, setUserData] = useState(
    getFromLocalStorage("userData", {
      name: "Aspiring Civil Servant",
      email: "user@example.com",
      profileImage: "",
      studyTarget: "Complete Prelims Syllabus",
      preferredSubjects: ["Polity", "History"],
    })
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(userData);

  useEffect(() => {
    saveToLocalStorage("userData", userData);
  }, [userData]);

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      if (editData.name.trim() === "" || editData.email.trim() === "") {
        toast({ title: "Error", description: "Name and email cannot be empty.", variant: "destructive" });
        return;
      }
      setUserData(editData);
      toast({ title: "Success", description: "Profile updated successfully." });
    } else {
      setEditData(userData); // Reset editData to current userData
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditData({ ...editData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Mock data for progress - replace with actual data source later
  const studyProgress = {
    prelims: 75,
    mains: 40,
    optional: 60,
    testsAttempted: 15,
    averageScore: 65,
  };
  
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
          <User className="mr-3 h-10 w-10 text-primary" /> My Profile
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600"
          variants={itemVariants}
        >
          Manage your personal information and track your preparation journey.
        </motion.p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div className="md:col-span-1" variants={itemVariants}>
          <Card className="shadow-xl bg-white">
            <CardHeader className="items-center text-center bg-gradient-to-br from-primary to-indigo-600 text-white rounded-t-lg p-6">
              <motion.div whileHover={{ scale: 1.1 }} className="relative">
                <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                  <AvatarImage src={isEditing ? editData.profileImage : userData.profileImage} alt={userData.name} />
                  <AvatarFallback className="text-4xl bg-gray-300 text-gray-700">
                    {userData.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <label htmlFor="profileUpload" className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100">
                    <Edit3 className="h-4 w-4 text-primary"/>
                    <input id="profileUpload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  </label>
                )}
              </motion.div>
              <CardTitle className="text-2xl mt-4">{isEditing ? editData.name : userData.name}</CardTitle>
              <CardDescription className="text-indigo-100">{isEditing ? editData.email : userData.email}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={editData.name} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={editData.email} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="studyTarget">Current Study Target</Label>
                    <Input id="studyTarget" name="studyTarget" value={editData.studyTarget} onChange={handleInputChange} />
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-sm text-gray-700">
                  <p><strong className="text-gray-900">Current Target:</strong> {userData.studyTarget}</p>
                  <p><strong className="text-gray-900">Preferred Subjects:</strong> {userData.preferredSubjects.join(", ")}</p>
                </div>
              )}
              <Button onClick={handleEditToggle} className="w-full mt-6">
                {isEditing ? (
                  <> <Save className="mr-2 h-4 w-4" /> Save Changes </>
                ) : (
                  <> <Edit3 className="mr-2 h-4 w-4" /> Edit Profile </>
                )}
              </Button>
              {isEditing && (
                 <Button onClick={() => { setIsEditing(false); setEditData(userData); }} variant="outline" className="w-full mt-2">
                    <XCircle className="mr-2 h-4 w-4" /> Cancel
                 </Button>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div className="md:col-span-2" variants={itemVariants}>
          <Card className="shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl">Preparation Overview</CardTitle>
              <CardDescription>Your progress across different stages of the exam.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="prelimsProgress" className="flex items-center text-gray-700 mb-1">
                  <Target className="mr-2 h-5 w-5 text-primary" /> Prelims Syllabus Coverage
                </Label>
                <Progress value={studyProgress.prelims} id="prelimsProgress" className="h-3" />
                <p className="text-xs text-gray-500 mt-1">{studyProgress.prelims}% completed</p>
              </div>
              <div>
                <Label htmlFor="mainsProgress" className="flex items-center text-gray-700 mb-1">
                  <BookOpen className="mr-2 h-5 w-5 text-green-600" /> Mains Syllabus Coverage
                </Label>
                <Progress value={studyProgress.mains} id="mainsProgress" className="h-3 [&>*]:bg-green-600" />
                <p className="text-xs text-gray-500 mt-1">{studyProgress.mains}% completed</p>
              </div>
              <div>
                <Label htmlFor="optionalProgress" className="flex items-center text-gray-700 mb-1">
                  <BookOpen className="mr-2 h-5 w-5 text-purple-600" /> Optional Subject Coverage
                </Label>
                <Progress value={studyProgress.optional} id="optionalProgress" className="h-3 [&>*]:bg-purple-600" />
                <p className="text-xs text-gray-500 mt-1">{studyProgress.optional}% completed</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">{studyProgress.testsAttempted}</p>
                  <p className="text-sm text-gray-600">Tests Attempted</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">{studyProgress.averageScore}%</p>
                  <p className="text-sm text-gray-600">Average Score</p>
                </div>
              </div>
              
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;