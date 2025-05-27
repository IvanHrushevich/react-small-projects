import { Link } from 'react-router';
import { ROUTES } from '../../app/routes';

export const Main = () => {
    return (
        <div className="p-6">
            <nav className="flex flex-col space-y-3 w-64">
                {ROUTES.map((route) => (
                    <Link
                        key={route.path}
                        to={route.path}
                        className="px-4 py-3 text-gray-700 bg-blue-50  hover:bg-blue-100 hover:text-blue-600 rounded transition-colors"
                    >
                        {route.title}
                    </Link>
                ))}
            </nav>
        </div>
    );
};
