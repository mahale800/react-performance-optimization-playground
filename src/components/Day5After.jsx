
import { useState } from 'react';
import RenderCounter from './RenderCounter';

const HeavySibling = () => {
    return (
        <div className="p-4 bg-gray-800 border border-gray-600 rounded mt-4">
            <h4 className="text-gray-400 font-bold">I am a Heavy Sibling</h4>
            <p className="text-xs text-gray-500">I shouldn't re-render just because the toggle changed!</p>
            <RenderCounter name="Sibling" />
        </div>
    );
};

// 🟢 GOOD: Toggle state is moved down into this component
const IsolatedToggle = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <div className="control-row justify-center mb-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="primary-action-button"
                >
                    Toggle Content
                </button>
                <RenderCounter name="Isolated Toggle" />
                {children}
            </div>
            {isOpen && <div className="p-2 bg-green-800/30 rounded mb-2 text-center">✨ Toggled Content! ✨</div>}
        </div>
    );
};

const Day5After = () => {
    return (
        <div className="view-container">
            <h2>Day 5 (After): State Colocation</h2>
            <p className="mb-6">
                The state is moved <strong>down</strong> into the button component itself.
                <br />
                This container and the "Heavy Sibling" <strong>NEVER</strong> re-render when toggling.
            </p>

            <div className="p-6 border border-green-500 rounded bg-green-900/10 max-w-2xl mx-auto">
                <IsolatedToggle>
                    <RenderCounter name="Parent Container" />
                </IsolatedToggle>
                <HeavySibling />
            </div>
        </div>
    );
};

export default Day5After;
