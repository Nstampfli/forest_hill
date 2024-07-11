"use client";

import { useState } from "react";

type TrainingFormProps = {
  onSave: (session: {
    type: string;
    date: string;
    duration: number;
    calories: number;
    intensity: string;
    goal: string;
    notes: string;
  }) => void;
};

const TrainingForm: React.FC<TrainingFormProps> = ({ onSave }) => {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState<number | "">(0);
  const [calories, setCalories] = useState<number | "">(0);
  const [intensity, setIntensity] = useState("");
  const [goal, setGoal] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type && date && duration !== "" && calories !== "" && intensity && goal) {
      onSave({
        type,
        date,
        duration: Number(duration),
        calories: Number(calories),
        intensity,
        goal,
        notes,
      });
      setType("");
      setDate("");
      setDuration(0);
      setCalories(0);
      setIntensity("");
      setGoal("");
      setNotes("");
    } else {
      alert("Veuillez remplir tous les champs obligatoires");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Type</label>
          <input
            type="text"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="p-2 border rounded-lg w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="p-2 border rounded-lg w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Durée (minutes)</label>
          <input
            type="number"
            placeholder="Durée"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            required
            className="p-2 border rounded-lg w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Calories</label>
          <input
            type="number"
            placeholder="Calories"
            value={calories}
            onChange={(e) => setCalories(parseInt(e.target.value))}
            required
            className="p-2 border rounded-lg w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Intensité</label>
          <select
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
            required
            className="p-2 border rounded-lg w-full"
          >
            <option value="">Sélectionnez une intensité</option>
            <option value="Faible">Faible</option>
            <option value="Modérée">Modérée</option>
            <option value="Élevée">Élevée</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Objectif</label>
          <input
            type="text"
            placeholder="Objectif"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
            className="p-2 border rounded-lg w-full"
          />
        </div>
      </div>
      <div>
        <label className="block mb-2">Notes</label>
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="p-2 border rounded-lg w-full"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-primary-500 text-white px-4 py-2 rounded-lg"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default TrainingForm;
