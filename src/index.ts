import { drawStaff } from './drawStaff';
import { drawClef } from './drawClef';
import { drawNotes } from './drawNotes';
import { setupInteractivity } from './interactive';

window.onload = () => {
  const canvas = document.getElementById('sheetMusic') as HTMLCanvasElement;
  const context = canvas.getContext('2d');
  if (context) {
    drawStaff(context);
    drawClef(context, 50, 120); // Desenha a clave de sol na posição inicial
    setupInteractivity(canvas, context); // Configura a interatividade do usuário
  }
};