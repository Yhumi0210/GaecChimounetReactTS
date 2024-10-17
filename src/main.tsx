import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/scss/index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/pages/HomePage.tsx'
import LegalMentions from './components/pages/LegalMentions.tsx'

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/LegalMentions",
                element: <LegalMentions/>,
            },
            // {
            //     path: "*",
            //     element: <NotFound/>,
            // },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)