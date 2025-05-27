import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Navbar } from './Navbar';
import { Main } from '../pages/Main/Main';
import { ROUTES } from './routes';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                {ROUTES.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
