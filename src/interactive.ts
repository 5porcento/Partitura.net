import { drawNotes } from './drawNotes';
import { drawStaff } from './drawStaff';
import { drawClef } from './drawClef';
interface Note {
  x: number;
  y: number;
  type: 'whole' | 'half' | 'quarter' | 'eighth' | 'sixteenth';
}

let notes: Note[] = [];

export function setupInteractivity(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Adiciona uma nota na posição clicada
    const note: Note = { x, y, type: 'quarter' };
    notes.push(note);

    // Redesenha a partitura com as novas notas
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawStaff(context);
    drawClef(context, 50, 120);
    drawNotes(context, notes);
  });
}