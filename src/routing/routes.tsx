import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import GameDetailsPage from "../pages/GameDetailsPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'games/:slug', element: <GameDetailsPage /> },
            { path: 'about', element: <AboutPage /> }
        ]
    }
])

export default router