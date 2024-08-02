import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import '../style.css'
import App from "./App.jsx";
import {AuthProvider} from "./context/Context.jsx";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'
import {Watch} from "./components/AR/Watch-page/Watch.jsx";
import {Page} from "./components/AR/watch_page/Page.jsx";
import {Category} from "./components/category/Category.jsx";
import {Genre} from "./components/category/Genre.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/details/:type/:id",
        element: <Watch />,
    },
    {
        path: "/watch/:type/:id",
        element: <Page />,
    },
    {
        path: "/category/:type/:name/:keyword",
        element: <Category />,
    },
    {
        path: "/category/:type/:name",
        element: <Category />,
    },
    {
        path: "/genre/:name/:id",
        element: <Genre />,
    },

]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<AuthProvider>
    <QueryClientProvider client={queryClient} >


      <RouterProvider router={router} />
    </QueryClientProvider >

</AuthProvider>
  </React.StrictMode>,
)
