
//  import { CSSProperties } from "react";
 import Xarrow from "react-xarrows";

 type BoxStyle = {
   border: string;
   borderRadius: string;
   textAlign: any; // Change this to the appropriate type if using predefined types like TextAlign
   width: string;
   height: string;
   margin: string;
   color: string;
   alignItems: string;
   display: string;
   justifyContent: string;
   animateDrawing: boolean;
 };
 const boxStyle: BoxStyle = {
   border: '1px #999 solid',
   borderRadius: '10px',
   textAlign: 'center',
   width: '100px',
   height: '30px',
   margin: '25px',
   color: 'black',
   alignItems: 'center',
   display: 'flex',
   justifyContent: 'center',
   animateDrawing: true,
 };

 export const Xarrowtest2 = () => {
   return (
   <div
       style={{
         display: 'flex',
         flexDirection: 'column',
         width: '500px',
         position: 'absolute',
       }}
     >
       <div id="elem1" style={boxStyle}>
         elem1
       </div>
       <div id="elem2" style={{ ...boxStyle, position: 'relative', left: '100px' }}>
         elem2
       </div>
       <div id="elem3" style={{ ...boxStyle, position: 'relative', left: '100px' }}>
         elem2
       </div>
       <Xarrow start="elem1" end="elem2" showHead={false} startAnchor={'bottom'} path={'grid'} />
       <Xarrow start="elem1" end="elem3" showHead={false} startAnchor={'bottom'} path={'grid'} />
     </div>
   );
 };




// import React from 'react';
// import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
// import Draggable from 'react-draggable';

// const boxStyle = {border: 'grey solid 2px', borderRadius: '10px', padding: '5px'};

// interface DraggableBoxProps {
//   id: string;
// }


// const DraggableBox: React.FC<DraggableBoxProps> = ({id}) => {
//     const updateXarrow = useXarrow();
//     return (
//         <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
//             <div id={id} style={boxStyle}>
//                 {id}
//             </div>
//         </Draggable>
//     );
// };

// export function Xarrowtest() {
//     return (
//         <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
//             <Xwrapper>
//                 <DraggableBox id={'elem1'}/>
//                 <DraggableBox id={'elem2'}/>
//                 <Xarrow start={'elem1'} end="elem2"/>
                
//             </Xwrapper>
//         </div>
//     );
// }



