import HomePage from './pages/home';

interface RouteStruct {
    title: string;
    page: () => JSX.Element,
    path: string;
}

const routes: RouteStruct[] = [{
    title: 'Home',
    page: HomePage,
    path: '/home',
},{
    title: 'Home',
    page: HomePage,
    path: '/',
}];
export default routes;
