// Import For Types
import type { QuizData } from '../types/quiz';

// Export For Quiz
export const eventsQuiz: QuizData = {
  id: 'events',
  title: 'Quiz: Eventos y Avistamientos',
  description: 'Comprueba tu conocimiento sobre los eventos.',
  questions: [
    {
      id: 'q1',
      prompt: '¿En qué época se facilita observar al Guardabarranco?',
      options: [
        { id: 'a', text: 'Época seca' },
        { id: 'b', text: 'Época lluviosa' },
        { id: 'c', text: 'Solo en diciembre' },
        { id: 'd', text: 'Solo en junio' },
      ],
      correctOptionId: 'a',
      explanation: 'Según eventos.json, durante la época seca es más fácil observar al Guardabarranco.',
    },
    {
      id: 'q2',
      prompt: '¿Dónde se celebra el Festival Internacional de Aves Migratorias?',
      options: [
        { id: 'a', text: 'Reserva Natural Volcán Mombacho' },
        { id: 'b', text: 'Managua' },
        { id: 'c', text: 'Todo el país' },
        { id: 'd', text: 'Pacífico y Centro' },
      ],
      correctOptionId: 'a',
    },
    {
      id: 'q3',
      prompt: 'El Conteo ciudadano de aves es un evento de tipo…',
      options: [
        { id: 'a', text: 'Avistamiento' },
        { id: 'b', text: 'Evento Cultural' },
        { id: 'c', text: 'Ciencia Ciudadana' },
        { id: 'd', text: 'Evento Especial' },
      ],
      correctOptionId: 'c',
    },
  ],
};
