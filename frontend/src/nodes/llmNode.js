// // llmNode.js
// src/nodes/LLMNode.js

import BaseNode from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM Model"
      inputs={[
        { id: `${id}-system`, className: "!top-[30%]" },
        { id: `${id}-prompt`, className: "!top-[70%]" },
      ]}
      outputs={[{ id: `${id}-response` }]}
    >
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-indigo-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span className="text-xs font-semibold">GPT-4</span>
        </div>
        <p className="text-gray-600 text-xs">
          Processes natural language inputs and generates intelligent responses
        </p>
      </div>
    </BaseNode>
  );
};
// import { Handle, Position } from 'reactflow';

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }
