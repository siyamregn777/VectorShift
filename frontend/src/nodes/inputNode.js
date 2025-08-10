// src/nodes/InputNode.js

import { useState } from 'react';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input"
      outputs={[{ id: `${id}-value` }]}
    >
      {/* Outer wrapper: vertical layout with gap between sections */}
      <div className="flex flex-col gap-4">
        {/* Name field: label above input with a small gap */}
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-gray-700"
            htmlFor={`${id}-name`}
          >
            Name
          </label>
          <input
            id={`${id}-name`}
            type="text"
            value={currName}
            onChange={e => setCurrName(e.target.value)}
            className="w-full border border-gray-300 rounded-none px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Input name"
          />
        </div>

        {/* Type field: label above select with a small gap */}
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-gray-700"
            htmlFor={`${id}-type`}
          >
            Type
          </label>
          <select
            id={`${id}-type`}
            value={inputType}
            onChange={e => setInputType(e.target.value)}
            className="w-full border border-gray-300 rounded-none px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};


// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const InputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
//   const [inputType, setInputType] = useState(data.inputType || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setInputType(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Input</span>
//       </div>
//       <div>
//         <label>
//           Name:
//           <input 
//             type="text" 
//             value={currName} 
//             onChange={handleNameChange} 
//           />
//         </label>
//         <label>
//           Type:
//           <select value={inputType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">File</option>
//           </select>
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-value`}
//       />
//     </div>
//   );
// }