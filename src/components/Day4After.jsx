
import { useState, lazy, Suspense } from 'react';
import RenderCounter from './RenderCounter';

// Lazy load the component
// This creates a separate chunk in the build
const HeavyLazyComponent = lazy(() => {
    // Artificial delay to make the spinner noticeable for local development
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./HeavyLazyComponent')), 1000);
    });
});

const LoadingFallback = () => (
    <div className="flex flex-col items-center justify-center p-12 border border-dashed border-gray-600 rounded-lg bg-gray-900/50">
        <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-purple-400 font-semibold">Downloading Component Chunk...</p>
    </div>
);

const Day4After = () => {
    const [showComponent, setShowComponent] = useState(false);

    return (
        <div className="view-container">
            <h2>Day 4 (After): Lazy Loading (Code Splitting)</h2>
            <p className="mb-6">
                Code splitting allows you to split your bundle into smaller chunks which can then be loaded on demand.
                This prevents the browser from loading code that the user might not even need yet.
            </p>

            <div className="control-row justify-center mb-8">
                <button
                    onClick={() => setShowComponent(prev => !prev)}
                    className="primary-action-button"
                >
                    {showComponent ? "Reset / Unmount" : "Load Heavy Component"}
                </button>
                <RenderCounter name="Day 4 Parent" />
            </div>

            <div className="min-h-[300px] relative">

                {showComponent && (
                    <div className="mt-6">
                        <Suspense fallback={<LoadingFallback />}>
                            <HeavyLazyComponent />
                        </Suspense>
                    </div>
                )}

                {!showComponent && (
                    <div className="mt-6 text-center text-gray-500 italic p-12 border border-gray-800 rounded-lg bg-black/20">
                        Component is not loaded. Check Network tab (Clear it first), then click Load.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Day4After;
