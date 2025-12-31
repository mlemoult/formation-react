import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "./LoginPage";
import OrderPage from "./OrderPage";
import ErrorPage from "./ErrorPage";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "/order/:username?",
            element: <OrderPage />,
        },
        {
            path: "*",
            element: <ErrorPage />

        }

    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default Routes;
