import { audioChunks } from './audio-chunks.ts';
import { questions } from './questions.ts';
import { rooms } from './rooms.ts';

// Barrel File
// arquivo que reexporta todos os schemas

export const schema = {
  rooms,
  questions,
  audioChunks,
};
