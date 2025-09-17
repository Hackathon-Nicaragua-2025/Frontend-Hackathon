// Import For React
import { useMemo, useState } from 'react';
// Import For Types
import type { QuizData, QuizQuestion } from '../types/quiz';

interface QuizProps {
  quiz: QuizData;
}

export const Quiz = ({ quiz }: QuizProps) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);

  const total = quiz.questions.length;
  const currentQuestion: QuizQuestion | undefined = quiz.questions[current];

  const score = useMemo(() => {
    return quiz.questions.reduce((acc, q) => acc + (answers[q.id] === q.correctOptionId ? 1 : 0), 0);
  }, [answers, quiz.questions]);

  const selectOption = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const next = () => {
    if (current < total - 1) setCurrent(c => c + 1);
    else setFinished(true);
  };

  const prev = () => {
    if (current > 0) setCurrent(c => c - 1);
  };

  const restart = () => {
    setAnswers({});
    setCurrent(0);
    setFinished(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-[#0D3C2F] text-center">{quiz.title}</h2>
        {quiz.description ? (
          <p className="text-center text-sm text-[#3F6C5E] mt-1">{quiz.description}</p>
        ) : null}
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between text-sm mb-4">
        <span>Pregunta {Math.min(current + 1, total)} de {total}</span>
        <div className="flex-1 mx-4 h-2 bg-gray-200 rounded">
          <div
            className="h-2 bg-[#0D3C2F] rounded"
            style={{ width: `${(Math.min(current, total - 1) + (finished ? 1 : 0)) / total * 100}%` }}
          />
        </div>
        <span>Puntaje: {score}</span>
      </div>

      {!finished && currentQuestion ? (
        <div className="bg-white rounded-lg shadow p-4">
          <p className="font-semibold mb-3">{currentQuestion.prompt}</p>
          <div className="grid gap-2">
            {currentQuestion.options.map(opt => {
              const isSelected = answers[currentQuestion.id] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => selectOption(currentQuestion.id, opt.id)}
                  className={`text-left px-3 py-2 rounded border transition ${isSelected ? 'bg-[#0D3C2F] text-white border-[#0D3C2F]' : 'bg-white hover:bg-gray-50 border-gray-300'}`}
                >
                  {opt.text}
                </button>
              );
            })}
          </div>

          {/* Explanation on selection */}
          {answers[currentQuestion.id] && currentQuestion.explanation ? (
            <div className="mt-3 text-sm text-[#0A2C22] bg-[#E8F5E9] p-3 rounded">
              {currentQuestion.explanation}
            </div>
          ) : null}

          <div className="flex justify-between mt-4">
            <button onClick={prev} disabled={current === 0} className={`px-4 py-2 rounded ${current === 0 ? 'bg-gray-200 text-gray-500' : 'bg-[#1159CE] text-white hover:opacity-90'}`}>Anterior</button>
            <button onClick={next} className="px-4 py-2 rounded bg-[#0D3C2F] text-white hover:opacity-90">{current === total - 1 ? 'Finalizar' : 'Siguiente'}</button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <h3 className="text-xl font-bold mb-2">Resultados</h3>
          <p className="mb-4">Tu puntaje es {score} de {total}.</p>
          <div className="text-left space-y-3">
            {quiz.questions.map((q, idx) => {
              const chosen = answers[q.id];
              const correct = q.correctOptionId;
              const chosenText = q.options.find(o => o.id === chosen)?.text ?? 'Sin respuesta';
              const correctText = q.options.find(o => o.id === correct)?.text ?? '';
              const isCorrect = chosen === correct;
              return (
                <div key={q.id} className="border rounded p-3">
                  <p className="font-semibold">{idx + 1}. {q.prompt}</p>
                  <p className={`text-sm mt-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    Tu respuesta: {chosenText}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm">Respuesta correcta: {correctText}</p>
                  )}
                  {q.explanation ? (
                    <p className="text-sm mt-1 text-[#0A2C22] bg-[#E8F5E9] p-2 rounded">{q.explanation}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <button onClick={restart} className="mt-4 px-4 py-2 rounded bg-[#1159CE] text-white hover:opacity-90">Reintentar</button>
        </div>
      )}
    </div>
  );
}
