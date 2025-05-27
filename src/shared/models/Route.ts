import type { FC } from 'react';

export interface Route {
    title: string;
    path: string;
    component: FC;
}
