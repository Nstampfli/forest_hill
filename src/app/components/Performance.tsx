"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomModal from "./ui/Modal";
import TrainingForm from "./training/TrainingForm";
import Goals from "./goals/Goals";

type Session = {
  type: string;
  date: string;
  duration: number;
  calories: number;
  intensity: string;
  goal: string;
  notes: string;
};

const Performance: React.FC = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const storedSessions = localStorage.getItem("sessions");
    if (storedSessions) {
      setSessions(JSON.parse(storedSessions));
    }
  }, []);

  const handleAddSession = (newSession: Session) => {
    const updatedSessions = [...sessions, newSession];
    setSessions(updatedSessions);
    localStorage.setItem("sessions", JSON.stringify(updatedSessions));
  };

  const handleDeleteSession = (index: number) => {
    const updatedSessions = sessions.filter((_, i) => i !== index);
    setSessions(updatedSessions);
    localStorage.setItem("sessions", JSON.stringify(updatedSessions));
  };

  const filteredSessions = filterType
    ? sessions.filter((session) =>
        session.type.toLowerCase().includes(filterType.toLowerCase())
      )
    : sessions;

  return (
    <div className="p-4">
      <div className="mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Mes Séances</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary-500 text-white px-4 py-2 rounded-lg"
            >
              Ajouter
            </button>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Filtrer par type"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="p-2 border rounded-lg w-full"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-2">Type</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Durée (min)</th>
                  <th className="p-2">Calories</th>
                  <th className="p-2">Intensité</th>
                  <th className="p-2">Objectif</th>
                  <th className="p-2">Notes</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filteredSessions.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="p-4 text-center text-gray-500">
                        Aucun séance ajoutée pour le moment.
                      </td>
                    </tr>
                  ) : (
                    filteredSessions.map((session, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="border-b"
                      >
                        <td className="py-2 px-4 text-center">{session.type}</td>
                        <td className="py-2 px-4 text-center">{session.date}</td>
                        <td className="py-2 px-4 text-center">{session.duration}</td>
                        <td className="py-2 px-4 text-center">{session.calories}</td>
                        <td className="py-2 px-4 text-center">{session.intensity}</td>
                        <td className="py-2 px-4 text-center">{session.goal}</td>
                        <td className="py-2 px-4 text-center">{session.notes}</td>
                        <td className="py-2 px-4 text-center">
                          <button
                            onClick={() => handleDeleteSession(index)}
                            className="text-red-500"
                          >
                            Supprimer
                          </button>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <Goals />
        </div>
      </div>
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TrainingForm
          onSave={(newSession) => {
            handleAddSession(newSession);
            setIsModalOpen(false);
          }}
        />
      </CustomModal>
    </div>
  );
};

export default Performance;
