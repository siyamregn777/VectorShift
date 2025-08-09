import { Handle, Position } from 'reactflow';

const BaseNode = ({ 
  id, 
  title, 
  inputs = [],    // array of { id: string, style: object (optional) }
  outputs = [],   // array of { id: string, style: object (optional) }
  children        // content inside the node
}) => {
  return (
    <div style={{ width: 200, minHeight: 80, border: '1px solid black', padding: 8, boxSizing: 'border-box' }}>
      {/* Render input handles on the left */}
      {inputs.map(({ id: handleId, style }, idx) => (
        <Handle
          key={handleId}
          type="target"
          position={Position.Left}
          id={handleId}
          style={style}
        />
      ))}

      {/* Title */}
      <div style={{ fontWeight: 'bold', marginBottom: 8 }}>{title}</div>

      {/* Main content passed from each node */}
      <div>
        {children}
      </div>

      {/* Render output handles on the right */}
      {outputs.map(({ id: handleId, style }, idx) => (
        <Handle
          key={handleId}
          type="source"
          position={Position.Right}
          id={handleId}
          style={style}
        />
      ))}
    </div>
  );
};

export default BaseNode;
