import { useEffect, useRef } from "react";



function GridGame() {




    const canvasStyle: React.CSSProperties = {
        border: '1px solid #000000'
    }


    const canvasref = useRef<HTMLCanvasElement>(null);


    useEffect(() => {

        console.log(canvasref.current)
        //     // Get the canvas document ID and get the context
        const canvas = canvasref.current;
        const ctx = canvas?.getContext('2d');

        // draw on the canvas:
        if (ctx) {
            //  ctx.moveTo(0,0);
            //  ctx.lineTo(200, 100);
            //  ctx.stroke();


            ctx.beginPath()
            ctx.fillStyle = 'rgba(255,0,0,1)'
            ctx.rect(10, 10, 50, 50)
            ctx.fill()

        }

    }, []);

    return (
        <div>
            <h1>This is the Grid Game page</h1>
            <canvas ref={canvasref} id="myCanvas" width="500" height="500" style={canvasStyle}>
            </canvas>
        </div>
    );
}

export default GridGame;