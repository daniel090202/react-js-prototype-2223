import Home from '~/pages/Home';
import Profile from '~/pages/Profile';

// Public routes allow everyone to access.
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
];

// Private routes requires authentication.
const privateRoutes = [];

export { publicRoutes, privateRoutes };
