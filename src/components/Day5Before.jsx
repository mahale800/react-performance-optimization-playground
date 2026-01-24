
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

const Day5Before = () => {
    // 🔴 BAD: Toggle state is hoisted here, causing everything to re-render
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="view-container">
            <h2>Day 5 (Before): State Hoisted to Parent</h2>
            <p className="mb-6">
                The state <code>isOpen</code> is held in this top-level container.
                <br />
                Clicking "Toggle Content" re-renders this container AND the "Heavy Sibling".
            </p>

            <div className="p-6 border border-red-500 rounded bg-red-900/10 max-w-2xl mx-auto">
                <div className="control-row justify-center mb-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="primary-action-button"
                    >
                        Toggle Content
                    </button>
                </div>

                {isOpen && <div className="p-2 bg-red-800/30 rounded mb-2">✨ Toggled Content! ✨</div>}

                <RenderCounter name="Parent Container" />
                <HeavySibling />
            </div>
        </div>
    );
};

export default Day5Before;
