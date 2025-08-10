// // outputNode.js
// src/nodes/OutputNode.js
import { useState } from 'react';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Output"
      inputs={[{ id: `${id}-value` }]}
    >
      <div className="space-y-2">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor={`${id}-name`}>
            Output Name
          </label>
          <input
            id={`${id}-name`}
            type="text"
            value={currName}
            onChange={e => setCurrName(e.target.value)}
            className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 transition-colors"
            placeholder="Enter output name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor={`${id}-type`}>
            Output Type
          </label>
          <select
            id={`${id}-type`}
            value={outputType}
            onChange={e => setOutputType(e.target.value)}
            className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjd2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im03IDEwIDUgNSA1LTUiLz48L3N2Zz4=')] bg-no-repeat bg-[center_right_0.5rem] bg-[length:1rem]"
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};
// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const OutputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
//   const [outputType, setOutputType] = useState(data.outputType || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setOutputType(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-value`}
//       />
//       <div>
//         <span>Output</span>
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
//           <select value={outputType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">Image</option>
//           </select>
//         </label>
//       </div>
//     </div>
//   );
// }
