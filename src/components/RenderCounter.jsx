
import { useRef } from 'react';

const RenderCounter = ({ name }) => {
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div
            className="render-counter"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '4px 12px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#d1d5db',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: '500',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontFamily: 'monospace',
                whiteSpace: 'nowrap'
            }}
        >
            {name && <span style={{ marginRight: '6px', color: '#9ca3af' }}>{name}:</span>}
            <span style={{ color: '#fff', fontWeight: 'bold' }}>{renderCount.current}</span>
        </div>
    );
};

export default RenderCounter;
