import React from 'react';

export type Training = {
  type: string;
  date: string;
  duration: string;
  calories: string;
  intensity: string;
  goal: string;
  notes: string;
};

type TrainingListProps = {
  trainings: Training[];
  onDeleteTraining: (index: number) => void;
};

export function TrainingList({ trainings, onDeleteTraining }: TrainingListProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50">Type</th>
            <th className="px-6 py-3 bg-gray-50">Date</th>
            <th className="px-6 py-3 bg-gray-50">Durée</th>
            <th className="px-6 py-3 bg-gray-50">Calories</th>
            <th className="px-6 py-3 bg-gray-50">Intensité</th>
            <th className="px-6 py-3 bg-gray-50">Objectif</th>
            <th className="px-6 py-3 bg-gray-50">Notes</th>
            <th className="px-6 py-3 bg-gray-50">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {trainings.map((training, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{training.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{training.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{training.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap">{training.calories}</td>
              <td className="px-6 py-4 whitespace-nowrap">{training.intensity}</td>
              <td className="px-6 py-4 whitespace-nowrap">{training.goal}</td>
              <td className="px-6 py-4 whitespace-nowrap">{training.notes}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => onDeleteTraining(index)}
                  className="text-red-600 hover:text-red-900"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
