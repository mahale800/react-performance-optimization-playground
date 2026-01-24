
import { useState, useMemo } from 'react';
import RenderCounter from './RenderCounter';

const expensiveCalculation = (num) => {
    console.log('🔄 Expensive Calculation Running...');
    // Simulate heavy work
    let result = 0;
    for (let i = 0; i < 50000000; i++) {
        result += num;
    }
    return result;
};

const Day2After = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(1);

    // 🟢 GOOD: Runs ONLY when 'number' changes
    const result = useMemo(() => {
        return expensiveCalculation(number);
    }, [number]);

    return (
        <div className="view-container">
            <h2>Day 2 (After): Memoized Calculation</h2>
            <p className="mb-4">
                Open console. Click "Re-render" button.
                <br />
                Notice "Expensive Calculation" logs DOES NOT appear (Result is cached).
                <br />
                It only logs when you click "Change Number".
            </p>

            <div className="flex flex-col gap-6">
                <div className="p-6 border border-gray-600 rounded-lg bg-gray-800/50">
                    <div className="control-row mb-4">
                        <button
                            onClick={() => setCount(c => c + 1)}
                            className="primary-action-button"
                        >
                            Re-render (Count: {count})
                        </button>
                        <button
                            onClick={() => setNumber(n => n + 1)}
                            className="primary-action-button"
                        >
                            Change Number ({number})
                        </button>
                    </div>

                    <div className="p-4 bg-black/30 rounded-lg border border-gray-700 font-mono">
                        <p className="text-gray-400 text-sm mb-2">// The calculation is wrapped in useMemo:</p>
                        <p className="text-green-400">const result = useMemo(() =&gt; expensive(number), [number]);</p>
                        <p className="mt-4 text-xl">Result: <span className="text-white font-bold">{result}</span></p>
                    </div>

                    <div className="mt-4">
                        <RenderCounter name="Day 2 Component" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Day2After;
