import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { NotFoundPage } from './pages/404/not-found-page'
import { SingInPage } from './pages/sign-in-page/sing-in-page'
import { SignUpPage } from './pages/sign-up-page/sign-up-page'

export const Router = () => {
  return <RouterProvider router={router} />
}

const publicRoutes: RouteObject[] = [
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/login',
    element: <SingInPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>hello</div>,
  },
]

function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])
