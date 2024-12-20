'use client';

import React, { useState } from 'react';
import { Card } from './ui/card';
import { ChevronRight, RotateCcw, ArrowLeft } from 'lucide-react';
import { questions, results } from '../jobFinderData';

export default function JobFinder() {
  const [currentQuestionId, setCurrentQuestionId] = useState('start');
  const [history, setHistory] = useState<Array<{ id: string; answer: string }>>([
    { id: 'start', answer: 'Start' }
  ]);

  const handleOption = (nextId: string | null, answerText: string) => {
    if (nextId) {
      setCurrentQuestionId(nextId);
      setHistory([...history, { id: nextId, answer: answerText }]);
    }
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentQuestionId(newHistory[newHistory.length - 1].id);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionId('start');
    setHistory([{ id: 'start', answer: 'Start' }]);
  };

  const jumpToHistoryPoint = (index: number) => {
    if (index >= history.length) return;
    
    const newHistory = history.slice(0, index + 1);
    setHistory(newHistory);
    setCurrentQuestionId(newHistory[newHistory.length - 1].id);
  };

  const currentQuestion = questions[currentQuestionId];
  const result = results[currentQuestionId];

  const getResultClassName = (type: 'success' | 'warning' | 'error') => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-500 h-full';
      case 'warning': return 'bg-yellow-50 border-yellow-500 h-full';
      case 'error': return 'bg-red-50 border-red-500 h-full';
      default: return 'bg-gray-50 border-gray-500 h-full';
    }
  };

  return (
    <Card className="p-3 sm:p-6 bg-white shadow-lg">
      {/* Breadcrumbs */}
      <div className="mb-6 sm:mb-8 px-2 sm:px-4">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {history.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
              <button
                onClick={() => jumpToHistoryPoint(index)}
                className={`${
                  index === history.length - 1 
                    ? 'font-semibold text-blue-600 cursor-default' 
                    : 'hover:text-blue-500 hover:underline cursor-pointer'
                } transition-colors`}
                disabled={index === history.length - 1}
              >
                {item.answer}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="px-2 sm:px-4">
        {result ? (
          // Ergebnis anzeigen
          <div className={`p-4 sm:p-8 rounded-lg border-l-4 ${getResultClassName(result.type)}`}>
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{result.text}</h2>
            <ul className="space-y-3 sm:space-y-4 pl-2 sm:pl-4">
              {result.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 sm:mr-3 mt-1.5 text-base sm:text-lg">•</span>
                  <span className="flex-1 text-sm sm:text-base">{detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={resetQuiz}
                className="flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Neu starten
              </button>
              <button
                onClick={handleBack}
                className="flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </button>
            </div>
          </div>
        ) : (
          // Frage anzeigen
          <div className="p-2 sm:p-4">
            <h2 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">{currentQuestion.text}</h2>
            <div className="space-y-3 sm:space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOption(option.nextId, option.text)}
                  className="w-full p-4 sm:p-6 text-sm sm:text-base text-left rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-blue-300 transition-all hover:shadow-md"
                >
                  {option.text}
                </button>
              ))}
            </div>
            {history.length > 1 && (
              <button
                onClick={handleBack}
                className="mt-6 sm:mt-8 flex items-center text-gray-600 hover:text-gray-900 transition px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg hover:bg-gray-100"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}