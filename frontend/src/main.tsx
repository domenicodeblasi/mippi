import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AccessPage from './pages/AccessPage'
import ErrorPage from './pages/ErrorPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AccessPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "sign-in",
    element: <SignIn />
  },
  {
    path: "sign-up",
    element: <SignUp />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
