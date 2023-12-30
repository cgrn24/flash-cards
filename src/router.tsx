import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { NotFoundPage } from './pages/404/not-found-page'
import { Profile } from './pages/profile/profile'
import { SingInPage } from './pages/sign-in-page/sing-in-page'
import { SignUpPage } from './pages/sign-up-page/sign-up-page'
import { useMeQuery } from './services/auth/auth.service'

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
    path: '/profile',
    element: <Profile />,
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
  const { isError, isLoading } = useMeQuery()

  if (isLoading) return

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])
