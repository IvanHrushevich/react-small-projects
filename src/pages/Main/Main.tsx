import { Link } from 'react-router';

export const Main = () => {
    return (
        <div className="p-6">
            <nav className="flex flex-col space-y-3 w-64">
                <Link
                    to="/kanban-board"
                    className="px-4 py-3 text-gray-700 bg-blue-50  hover:bg-blue-100 hover:text-blue-600 rounded transition-colors"
                >
                    Kanban Board
                </Link>
            </nav>
        </div>
    );
};
