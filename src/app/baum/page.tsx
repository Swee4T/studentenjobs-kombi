'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';

type Question = {
  id: string;
  text: string;
  options: {
    text: string;
    nextId: string | null;
  }[];
};

type Result = {
  id: string;
  text: string;
  details: string[];
  type: 'success' | 'warning' | 'error';
};

const questions: { [key: string]: Question } = {
  start: {
    id: 'start',
    text: 'Welchen Job möchtest du ausführen?',
    options: [
      { text: 'Werkstudent', nextId: 'werkstudent_previous' },
      { text: 'Minijob', nextId: 'minijob_previous' },
      { text: 'Kurzfristige Beschäftigung', nextId: 'kurz_previous' }
    ]
  },
  werkstudent_previous: {
    id: 'werkstudent_previous',
    text: 'Hast oder hattest du dieses Jahr schon eine andere Tätigkeit ausgeführt?',
    options: [
      { text: 'Nein', nextId: 'werkstudent_success' },
      { text: 'Ja, einen Minijob', nextId: 'werkstudent_with_minijob' },
      { text: 'Ja, eine kurzfristige Beschäftigung', nextId: 'werkstudent_days' }
    ]
  },
  werkstudent_days: {
    id: 'werkstudent_days',
    text: 'Hast du bereits über 70 Arbeitstage gearbeitet?',
    options: [
      { text: 'Ja', nextId: 'result_over_70' },
      { text: 'Nein', nextId: 'werkstudent_success' }
    ]
  }
  // ... weitere Fragen hier
};

const results: { [key: string]: Result } = {
  werkstudent_success: {
    id: 'werkstudent_success',
    text: 'Du kannst als Werkstudent arbeiten! 👍',
    details: [
      'Maximal 20 Stunden pro Woche während der Vorlesungszeit',
      'Keine Stundenbegrenzung in den Semesterferien',
      'Sozialversicherungspflichtig mit Ermäßigung'
    ],
    type: 'success'
  },
  result_over_70: {
    id: 'result_over_70',
    text: 'Diese Kombination ist leider nicht möglich! ❌',
    details: [
      'Du hast das 70-Tage-Limit bereits überschritten',
      'Warte bis zum nächsten Kalenderjahr',
      'Alternativ: Wechsel zu einem Minijob möglich'
    ],
    type: 'error'
  }
  // ... weitere Ergebnisse hier
};

export default function JobFinder() {
  const [currentQuestionId, setCurrentQuestionId] = useState('start');
  const [history, setHistory] = useState<string[]>(['start']);

  const handleOption = (nextId: string | null) => {
    if (nextId) {
      setCurrentQuestionId(nextId);
      setHistory([...history, nextId]);
    }
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentQuestionId(newHistory[newHistory.length - 1]);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionId('start');
    setHistory(['start']);
  };

  const currentQuestion = questions[currentQuestionId];
  const result = results[currentQuestionId];

  const getResultClassName = (type: Result['type']) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-500';
      case 'warning': return 'bg-yellow-50 border-yellow-500';
      case 'error': return 'bg-red-50 border-red-500';
      default: return 'bg-gray-50 border-gray-500';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="p-6">
        <CardContent>
          {result ? (
            <div className={`p-6 rounded-lg border-l-4 ${getResultClassName(result.type)}`}>
              <h2 className="text-xl font-bold mb-4">{result.text}</h2>
              <ul className="space-y-2">
                {result.details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <button
                onClick={resetQuiz}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Neu starten
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-6">{currentQuestion.text}</h2>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOption(option.nextId)}
                    className="w-full p-3 text-left rounded border hover:bg-gray-50 transition"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
              {history.length > 1 && (
                <button
                  onClick={handleBack}
                  className="mt-6 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  ← Zurück
                </button>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}