
import { useEffect } from 'react';

const HeavyLazyComponent = () => {
    // Simulate initial delay to force Fallback UI visibility
    // Note: In a real app the delay comes from the network request

    return (
        <div className="p-8 border-2 border-purple-500 rounded-lg bg-purple-900/20 text-center animate-pulse">
            <h2 className="text-3xl font-bold text-purple-300">I am the Heavy Component!</h2>
            <p className="mt-4 text-gray-300">
                I was loaded lazily. If you look at the Network tab in DevTools,
                you'll see a separate chunk file was fetched just now.
            </p>
            <div className="mt-6 p-4 bg-black/50 rounded inline-block text-left text-sm font-mono text-green-400">
                <p>✔ Bundle Split Success</p>
                <p>✔ Suspense Handled</p>
            </div>
        </div>
    );
};

export default HeavyLazyComponent;
