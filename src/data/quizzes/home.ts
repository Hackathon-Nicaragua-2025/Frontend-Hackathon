import type { QuizData } from '../../types/quiz';

export const homeQuiz: QuizData = {
  id: 'home',
  title: 'Quiz: Avify y Conservación',
  description: 'Repasa los mensajes clave de la página de inicio.',
  questions: [
    {
      id: 'q1',
      prompt: '¿Cuál es una de las misiones de Avify según la página principal?',
      options: [
        { id: 'a', text: 'Promover prácticas de turismo responsable' },
        { id: 'b', text: 'Fomentar la caza de aves' },
        { id: 'c', text: 'No apoyar iniciativas de conservación' },
        { id: 'd', text: 'Evitar el monitoreo de especies' },
      ],
      correctOptionId: 'a',
    },
    {
      id: 'q2',
      prompt: '¿Qué recomienda Avify a los visitantes?',
      options: [
        { id: 'a', text: 'Salir de los senderos' },
        { id: 'b', text: 'Mantener el silencio y no dejar basura' },
        { id: 'c', text: 'Extraer plantas' },
        { id: 'd', text: 'Encender fogatas donde sea' },
      ],
      correctOptionId: 'b',
    },
  ],
};
