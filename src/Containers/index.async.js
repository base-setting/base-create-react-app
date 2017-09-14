import asyncRoute from 'Lib/asyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const About = asyncRoute(() => import('./About'));
export const Foo = asyncRoute(() => import('./About/Foo'));
export const Boo = asyncRoute(() => import('./About/Boo'));
export const Test = asyncRoute(() => import('./Test'));

