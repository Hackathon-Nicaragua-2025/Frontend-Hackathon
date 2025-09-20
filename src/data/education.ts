// Import For Types
import type { QuizData } from '../types/quiz';

// Export For Quiz
export const educationQuiz: QuizData = {
  id: 'education',
  title: 'Quiz: Educación y Conservación',
  description: 'Pon a prueba lo aprendido sobre el cuidado de aves y reservas naturales.',
  questions: [
    {
      id: 'q1',
      prompt: '¿Qué NO debes hacer para evitar afectar a las aves en sus nidos?',
      options: [
        { id: 'a', text: 'Evitar acercarte demasiado a los nidos' },
        { id: 'b', text: 'Tocar huevos o crías para verlos mejor' },
        { id: 'c', text: 'Respetar sus hábitats' },
        { id: 'd', text: 'Colocar bebederos seguros' },
      ],
      correctOptionId: 'b',
      explanation: 'No se deben tocar huevos o crías. Acercarse demasiado puede causar estrés y abandono del nido.',
    },
    {
      id: 'q2',
      prompt: '¿Qué práctica ayuda a restaurar áreas dañadas en reservas naturales?',
      options: [
        { id: 'a', text: 'Salir de los senderos para explorar' },
        { id: 'b', text: 'Reforestación' },
        { id: 'c', text: 'Dejar la basura en puntos ocultos' },
        { id: 'd', text: 'Hacer fogatas en cualquier lugar' },
      ],
      correctOptionId: 'b',
      explanation: 'La reforestación ayuda a recuperar ecosistemas y promueve la biodiversidad.',
    },
    {
      id: 'q3',
      prompt: 'Para una visita responsable, ¿qué acción es correcta?',
      options: [
        { id: 'a', text: 'Seguir senderos marcados' },
        { id: 'b', text: 'Hacer ruido para llamar aves' },
        { id: 'c', text: 'Tomar plantas de recuerdo' },
        { id: 'd', text: 'Encender fogatas fuera de zonas autorizadas' },
      ],
      correctOptionId: 'a',
      explanation: 'Seguir senderos marcados reduce el impacto en la flora y fauna.',
    },
  ],
};
