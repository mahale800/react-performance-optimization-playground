
import { useState, memo } from 'react';
import RenderCounter from './RenderCounter';

const CardA = memo(() => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl mt-3">
            <h3 className="text-white font-bold">Card A</h3>
            <RenderCounter name="Card A" />
        </div>
    );
});

const CardB = memo(() => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl mt-3">
            <h3 className="text-white font-bold">Card B</h3>
            <RenderCounter name="Card B" />
        </div>
    );
});

const CardC = memo(() => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl mt-3">
            <h3 className="text-white font-bold">Card C</h3>
            <RenderCounter name="Card C" />
        </div>
    );
});

const Day1After = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="view-container">
            <h2>Day 1 (After): Memoized children do NOT rerender</h2>

            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => setCount(c => c + 1)}
                    className="primary-action-button"
                >
                    + Count
                </button>
                <div className="flex gap-2">
                    <div className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-mono text-gray-300">
                        count:{count}
                    </div>
                    <div className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-mono text-gray-300">
                        Page:1
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <CardA />
                <CardB />
                <CardC />
            </div>

            <p className="mt-8 text-sm text-gray-500">
                Measure: child counters stay constant.
            </p>
        </div>
    );
};

export default Day1After;
