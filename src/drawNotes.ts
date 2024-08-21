interface Note {
    x: number;
    y: number;
    type: 'whole' | 'half' | 'quarter' | 'eighth' | 'sixteenth';
  }
  
  export function drawNotes(context: CanvasRenderingContext2D, notes: Note[]) {
    context.fillStyle = 'black';
  
    notes.forEach(note => {
      context.beginPath();
      context.arc(note.x, note.y, 5, 0, 2 * Math.PI);
      context.fill();
  
      if (note.type !== 'whole') {
        context.beginPath();
        context.moveTo(note.x + 5, note.y);
        context.lineTo(note.x + 5, note.y - 30);
        context.stroke();
      }
    });
  }