import { useState } from 'react';
import data from './data';

export const Accordion = () => {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSingleSelection = (id: string) =>
        setSelected(id === selected ? null : id);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="space-y-2">
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <div
                            key={item.id}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div
                                onClick={() => handleSingleSelection(item.id)}
                                className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                            >
                                <h3 className="text-lg font-medium text-gray-800">
                                    {item.question}
                                </h3>
                                <span className="text-xl font-bold text-gray-600">
                                    {item.id === selected ? '-' : '+'}
                                </span>
                            </div>

                            {item.id === selected && (
                                <div className="p-4 bg-white text-gray-700 border-t border-gray-100">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 py-8">
                        No data found
                    </div>
                )}
            </div>
        </div>
    );
};
