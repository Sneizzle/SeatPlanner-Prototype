import { useRef, useEffect } from 'react';


const DrawRedLine = () => {
  const canvasRef = useRef<HTMLCanvasElement|null>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = '/image.jpg';

    img.onload = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const aspectRatio = img.width / img.height;

      let newWidth = screenWidth;
      let newHeight = screenWidth / aspectRatio;

      if (newHeight > screenHeight) {
        newHeight = screenHeight;
        newWidth = screenHeight * aspectRatio;
      }

      // Set canvas dimensions to match the scaled image
      canvas.width = newWidth;
      canvas.height = newHeight;

      if(ctx!==null){
      // Draw the scaled image on the canvas
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      // Draw a red line (adjust coordinates as needed based on scaled dimensions)
      ctx.beginPath();
      ctx.moveTo(100, 500);
      ctx.lineTo(50, -50000);
      
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
           ctx.stroke();
      }
   
    };
  }, [canvasRef]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DrawRedLine;
