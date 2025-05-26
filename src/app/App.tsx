import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import KanbanBoard from '../pages/kanban-board/KanbanBoard';
import { Navbar } from './Navbar';
import { Main } from '../pages/Main/Main';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/kanban-board" element={<KanbanBoard />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
