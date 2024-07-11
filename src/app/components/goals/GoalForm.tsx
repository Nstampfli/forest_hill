"use client";

import { useState } from "react";

type GoalFormProps = {
  onSave: (goal: {
    description: string;
    targetDate: string;
    currentPerformance: string;
    desiredPerformance: string;
  }) => void;
};

const GoalForm: React.FC<GoalFormProps> = ({ onSave }) => {
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [currentPerformance, setCurrentPerformance] = useState("");
  const [desiredPerformance, setDesiredPerformance] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      description,
      targetDate,
      currentPerformance,
      desiredPerformance,
    });
    setDescription("");
    setTargetDate("");
    setCurrentPerformance("");
    setDesiredPerformance("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="p-2 border rounded-lg w-full"
        />
        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          required
          className="p-2 border rounded-lg w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Performance actuelle"
          value={currentPerformance}
          onChange={(e) => setCurrentPerformance(e.target.value)}
          required
          className="p-2 border rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Objectif"
          value={desiredPerformance}
          onChange={(e) => setDesiredPerformance(e.target.value)}
          required
          className="p-2 border rounded-lg w-full"
        />
      </div>
      <button type="submit" className="bg-primary-500 text-white px-4 py-2 rounded-lg">
        Ajouter
      </button>
    </form>
  );
};

export default GoalForm;
