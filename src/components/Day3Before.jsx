
import { useState } from 'react';
import RenderCounter from './RenderCounter';

// Generate heavy dataset
const generateItems = () => {
    const items = [];
    for (let i = 0; i < 5000; i++) {
        items.push(`Item ${i} - ${Math.random().toString(36).substring(7)}`);
    }
    return items;
};

const allItems = generateItems();

const Day3Before = () => {
    const [query, setQuery] = useState('');

    // 🔴 BAD: Filtering and rendering ALL items on every keystroke
    const filteredItems = allItems.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="view-container">
            <h2>Day 3 (Before): Rendering Large Lists</h2>
            <p className="mb-4">
                Type in the search box.
                <br />
                This renders ALL matching items immediately.
                with 5000 items, clear the input to see the lag.
            </p>

            <div className="mb-8 p-4 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search 5000 items..."
                    className="search-input mb-4"
                />

                <div className="flex flex-col gap-2 mb-4 pl-2 border-l-2 border-gray-700">
                    <div className="text-sm text-gray-400 font-medium">
                        Found {filteredItems.length} matches
                    </div>
                    <div className="text-sm text-red-300 font-bold bg-red-900/20 py-1 px-3 rounded-md w-fit">
                        Rendering ALL {filteredItems.length} items
                    </div>
                </div>

                <div className="flex justify-end border-t border-gray-700/50 pt-3">
                    <RenderCounter name="Search Component" />
                </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 h-96 overflow-auto border border-gray-700 relative">
                <ul className="divide-y divide-gray-700/50">
                    {filteredItems.map((item, index) => (
                        <li key={`${item}-${index}`} className="py-2 px-2 hover:bg-gray-700/50 transition-colors">
                            {item}
                            <span className="text-xs text-gray-500 ml-2">
                                (Index: {allItems.indexOf(item)})
                            </span>
                        </li>
                    ))}
                </ul>
                {filteredItems.length === 0 && (
                    <div className="text-center text-gray-500 mt-10">
                        No items match your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Day3Before;
