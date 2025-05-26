import { Link } from 'react-router';

export const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-2 shadow-md">
            <div className="flex space-x-8">
                <Link
                    to="/"
                    className="text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Главная
                </Link>
                <Link
                    to="/kanban-board"
                    className="text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Kanban Board
                </Link>
            </div>
        </nav>
    );
};
