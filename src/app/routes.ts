import { Accordion } from '../pages/Accordion/Accordion';
import { KanbanBoard } from '../pages/KanbanBoard/KanbanBoard';
import type { Route } from '../shared/models';

export const ROUTES: Route[] = [
    { title: 'Kanban Board', path: 'kanban-board', component: KanbanBoard },
    { title: 'Accordion', path: 'accordion', component: Accordion },
];
