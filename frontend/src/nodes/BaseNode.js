//BaseNode.js
import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, title, inputs = [], outputs = [], children }) => {
  return (
    <div className="w-64 min-h-[120px] border-2 border-indigo-100 rounded-xl bg-white shadow-lg p-4 box-border relative transition-all hover:shadow-xl">
      {/* Input Handles (Left) */}
      {inputs.map(({ id: handleId, style }) => (
        <Handle
          key={handleId}
          type="target"
          position={Position.Left}
          id={handleId}
          className="w-3 h-3 !bg-indigo-500 border-2 border-white"
        />
      ))}

      {/* Title */}
      <div className="text-indigo-600 font-bold text-md mb-4 select-none flex items-center">
        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
        {title}
      </div>

      {/* Content */}
      <div className="space-y-4 text-gray-700">{children}</div>

      {/* Output Handles (Right) */}
      {outputs.map(({ id: handleId, style }) => (
        <Handle
          key={handleId}
          type="source"
          position={Position.Right}
          id={handleId}
          className="w-3 h-3 !bg-indigo-500 border-2 border-white"
        />
      ))}
    </div>
  );
};

export default BaseNode;