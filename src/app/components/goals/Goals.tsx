"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Goal = {
  description: string;
  date: string;
  currentPerformance: string;
  goalPerformance: string;
  completed: boolean;
};

const Goals: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [currentPerformance, setCurrentPerformance] = useState("");
  const [goalPerformance, setGoalPerformance] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    const storedGoals = localStorage.getItem("goals");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  const handleAddGoal = () => {
    if (description && date && currentPerformance && goalPerformance) {
      const newGoal = {
        description,
        date,
        currentPerformance,
        goalPerformance,
        completed: false,
      };
      const updatedGoals = [...goals, newGoal];
      setGoals(updatedGoals);
      localStorage.setItem("goals", JSON.stringify(updatedGoals));
      setDescription("");
      setDate("");
      setCurrentPerformance("");
      setGoalPerformance("");
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleToggleComplete = (index: number) => {
    const updatedGoals = goals.map((goal, i) =>
      i === index ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updatedGoals);
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
  };

  const handleDeleteGoal = (index: number) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
    localStorage.setItem("goals", JSON.stringify(updatedGoals));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Mes Objectifs</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-4 border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="block mb-2 font-medium">Description</label>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`p-3 border rounded-lg w-full ${
                !isFormValid && !description ? "border-red-500" : ""
              }`}
              required
            />
            {!isFormValid && !description && (
              <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 font-medium">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`p-3 border rounded-lg w-full ${
                !isFormValid && !date ? "border-red-500" : ""
              }`}
              required
            />
            {!isFormValid && !date && (
              <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 font-medium">Performance actuelle</label>
            <input
              type="text"
              placeholder="Performance actuelle"
              value={currentPerformance}
              onChange={(e) => setCurrentPerformance(e.target.value)}
              className={`p-3 border rounded-lg w-full ${
                !isFormValid && !currentPerformance ? "border-red-500" : ""
              }`}
              required
            />
            {!isFormValid && !currentPerformance && (
              <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="block mb-2 font-medium">Objectif</label>
            <input
              type="text"
              placeholder="Objectif"
              value={goalPerformance}
              onChange={(e) => setGoalPerformance(e.target.value)}
              className={`p-3 border rounded-lg w-full ${
                !isFormValid && !goalPerformance ? "border-red-500" : ""
              }`}
              required
            />
            {!isFormValid && !goalPerformance && (
              <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
            )}
          </div>
          <div className="flex items-end justify-end md:col-span-2">
            <button
              onClick={handleAddGoal}
              className="bg-primary-500 text-white px-6 py-3 rounded-lg"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
      <div>
        {goals.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">Aucun objectif ajouté pour le moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence>
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className={`p-4 border rounded-lg flex flex-col justify-between ${
                    goal.completed ? "bg-green-100 dark:bg-green-900" : "bg-white dark:bg-gray-800"
                  } ${goal.completed ? "border-green-500" : "border-gray-200 dark:border-gray-600"}`}
                >
                  <div>
                    <h3 className="text-lg font-bold mb-2">{goal.description}</h3>
                    <p className="mb-1"><strong>Date:</strong> {goal.date}</p>
                    <p className="mb-1"><strong>Performance actuelle:</strong> {goal.currentPerformance}</p>
                    <p className="mb-1"><strong>Objectif:</strong> {goal.goalPerformance}</p>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() => handleToggleComplete(index)}
                      className={`px-4 py-2 rounded-lg ${
                        goal.completed ? "bg-yellow-500 text-white" : "bg-green-500 text-white"
                      }`}
                    >
                      {goal.completed ? "Annuler" : "Compléter"}
                    </button>
                    <button
                      onClick={() => handleDeleteGoal(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                      Supprimer
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Goals;
