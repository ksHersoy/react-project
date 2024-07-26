import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";


const routes = [
    {
        path: '/',
        element: <Home />,
        auth: true
    },
    {
        path: '/login',
        element: <Login />

    },
    {
        path: '*',
        element: <NotFound />

    }
]

const authCheck = routes => routes.map(route => {
    if (route?.auth)
        route.element = <PrivateRoute>{route.element}</PrivateRoute>

    return route
})

export default authCheck(routes)