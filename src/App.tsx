import { Link } from 'react-router';

function App() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    Small React projects
                </h1>

                <div className="mb-8 space-x-4">
                    <Link
                        to="/kanban-board"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Kanban board
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default App;
