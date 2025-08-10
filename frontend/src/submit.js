// // submit.js
// submit.js
import React from 'react';

export const SubmitButton = () => {
  return (
    <div className="flex items-center justify-center">
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        Submit
      </button>
    </div>
  );
};

// export const SubmitButton = () => {

//     return (
//         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <button type="submit">Submit</button>
//         </div>
//     );
// }