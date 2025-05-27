import { useState } from 'react';
import data from './data';

export const Accordion = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [multipleSelectedIds, setMultipleSelectedIds] = useState<Array<string | null>>([]);
    const [multiSelection, setMultiSelection] = useState(false);

    const handleSingleSelection = (id: string) => setSelectedId(id === selectedId ? null : id);

    const handleMultiSelection = (id: string) => {
        setMultipleSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <button
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-lg transition-colors cursor-pointer mb-4"
                onClick={() => {
                    setMultiSelection(!multiSelection);
                    setMultipleSelectedIds([]);
                    setSelectedId(null);
                }}
            >
                Toggle Multi Selection
            </button>
            <div className="space-y-2">
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div
                            key={item.id}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div
                                onClick={
                                    multiSelection
                                        ? () => handleMultiSelection(item.id)
                                        : () => handleSingleSelection(item.id)
                                }
                                className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                            >
                                <h3 className="text-lg font-medium text-gray-800">
                                    {item.question}
                                </h3>
                                <span className="text-xl font-bold text-gray-600">
                                    {item.id === selectedId ? '-' : '+'}
                                </span>
                            </div>

                            {((multiSelection && multipleSelectedIds.indexOf(item.id) !== -1) ||
                                (!multiSelection && item.id === selectedId)) && (
                                <div className="p-4 bg-white text-gray-700 border-t border-gray-100">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 py-8">No data</div>
                )}
            </div>
        </div>
    );
};
