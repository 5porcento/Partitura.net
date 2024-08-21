export function drawStaff(context: CanvasRenderingContext2D) {
    const staffLines = 5;
    const lineSpacing = 20;
    const margin = 50;
  
    context.strokeStyle = 'black';
    context.lineWidth = 2;
  
    for (let i = 0; i < staffLines; i++) {
      const y = margin + i * lineSpacing;
      context.beginPath();
      context.moveTo(margin, y);
      context.lineTo(context.canvas.width - margin, y);
      context.stroke();
    }
  }
  