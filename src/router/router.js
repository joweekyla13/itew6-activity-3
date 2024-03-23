import { NavigationGuardNext } from 'vue-router';

const beforeEachGuard = (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) &&
    !isAuthenticated) {
        next('/login'); // Redirect to login if not authenticated
    } else {
        next(); // Allow navigation to proceed
    }
};

const router = createRouter({
// ... other router configuration
    routes,
    scrollBehavior: () => ({ x: 0, y: 0 }),
        guards: [
            {
            beforeEnter: beforeEachGuard,
            },
        ],
    });
export default router;
