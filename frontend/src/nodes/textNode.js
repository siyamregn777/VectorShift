// // textNode.js
// src/nodes/TextNode.js
import { useState } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      id={id}
      title="Text"
      outputs={[{ id: `${id}-output` }]}
    >
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor={`${id}-text`}>
          Text Content
        </label>
        <textarea
          id={`${id}-text`}
          value={currText}
          onChange={e => setCurrText(e.target.value)}
          className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 min-h-[60px] transition-colors"
          placeholder="Enter your text here..."
        />
      </div>
    </BaseNode>
  );
};

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input 
//             type="text" 
//             value={currText} 
//             onChange={handleTextChange} 
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }
