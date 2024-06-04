// import React, { useState } from 'react';
// import { Range, getTrackBackground } from 'react-range';

// interface DoubleSliderProps {
//   min: number;
//   max: number;
// }

// function DoubleSlider({ min, max }: DoubleSliderProps): JSX.Element {
//   const [values, setValues] = useState<number[]>([min, max]);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         margin: '2em 0'
//       }}>
//       <Range
//         values={values}
//         step={1}
//         min={min}
//         max={max}
//         onChange={(values) => setValues(values)}
//         renderTrack={({ props, children }) => (
//           <div
//             role={props.role}
//             style={{
//               ...props.style,
//               height: '6px',
//               width: '100%',
//               background: getTrackBackground({
//                 values,
//                 colors: ['#ccc', '#548BF4', '#ccc'],
//                 min: min,
//                 max: max
//               }),
//               borderRadius: '4px',
//               margin: '0 15px'
//             }}
//             ref={props.ref}
//           >
//             {children}
//           </div>
//         )}
//         renderThumb={({ props }) => (
//           <div
//             role={props.role}
//             style={{
//               ...props.style,
//               height: '20px',
//               width: '20px',
//               borderRadius: '50%',
//               backgroundColor: '#FFF',
//               border: '1px solid #ccc'
//             }}
//             ref={props.ref}
//           />
//         )}
//       />
//       <output style={{ marginTop: '20px' }} id="output">
//         {values[0]} - {values[1]}
//       </output>
//     </div>
//   );
// }

// export default DoubleSlider;
