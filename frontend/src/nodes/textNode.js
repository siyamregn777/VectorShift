// // textNode.js
// src/nodes/TextNode.js
// src/nodes/TextNode.js
import { useState, useEffect, useRef } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 200,
    height: 120
  });

  // Detect variables in text and update handles
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)];
    const uniqueVars = [...new Set(matches.map(match => match[1]))];
    
    setVariables(uniqueVars);
  }, [currText]);

  // Adjust node size based on text content
  useEffect(() => {
    if (textareaRef.current) {
      const { scrollWidth, scrollHeight } = textareaRef.current;
      const newWidth = Math.max(200, Math.min(scrollWidth + 40, 400));
      const newHeight = Math.max(120, Math.min(scrollHeight + 40, 300));
      
      setDimensions({
        width: newWidth,
        height: newHeight
      });
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    if (data?.onTextChange) {
      data.onTextChange(e.target.value);
    }
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map(varName => ({
        id: `${id}-${varName}`,
        className: "!bg-green-500"
      }))}
      outputs={[{ id: `${id}-output` }]}
      style={{ width: dimensions.width, minHeight: dimensions.height }}
    >
      <div className="w-full h-full">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Text Content
        </label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 resize-none"
          style={{ 
            height: dimensions.height - 80, // Account for node padding and title
            minHeight: '60px'
          }}
          placeholder="Enter text or {{variables}}..."
        />
      </div>
    </BaseNode>
  );
};

// import { useState } from 'react';
// import BaseNode from './BaseNode';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   return (
//     <BaseNode
//       id={id}
//       title="Text"
//       outputs={[{ id: `${id}-output` }]}
//     >
//       <div>
//         <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor={`${id}-text`}>
//           Text Content
//         </label>
//         <textarea
//           id={`${id}-text`}
//           value={currText}
//           onChange={e => setCurrText(e.target.value)}
//           className="w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 min-h-[60px] transition-colors"
//           placeholder="Enter your text here..."
//         />
//       </div>
//     </BaseNode>
//   );
// };

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
