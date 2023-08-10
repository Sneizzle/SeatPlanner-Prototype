import { useEffect, useRef } from "react";

import { Settings } from "../../Classes/settings";
import '../../Styles/Canvas.css';
import '../../img/officepicture.png';
import MapOverLay from '../../game/utils/MapOverlay';


function GridGame() {



    const canvasStyle: React.CSSProperties = {
        border: '1px solid #000000',
    }
    const canvasref = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        console.log(canvasref.current)
        //     // Get the canvas document ID and get the context
        const canvas = canvasref.current;
        const ctx = canvas?.getContext('2d');
        const canvasSize = (Settings.grid.nodeSize + Settings.grid.nodeOffset) * Settings.grid.dimension + Settings.grid.nodeOffset
        canvas?.setAttribute('width', canvasSize.toString())
        canvas?.setAttribute('height', canvasSize.toString())
        //adjustment
        const size = Settings.grid.nodeSize
        const offset = Settings.grid.nodeOffset
        for (let y = 0; y < Settings.grid.dimension; y++) {
            for (let x = 0; x < Settings.grid.dimension; x++) {
                if (ctx) {
                    ctx.beginPath()
                    ctx.fillStyle = Settings.grid.color
                    ctx.rect((size + offset) * x, (size + offset) * y, size, size)
                    ctx.fill()
                }
            }
        }
    }, []);
    return (
        <div>
            <MapOverLay></MapOverLay>


            <div>
                <h1 className="title">This is the Grid Game page</h1>
                <canvas ref={canvasref} id="myCanvas" style={canvasStyle}>



                </canvas>
            </div></div>
    );
}
export default GridGame;