import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Dashboard, SignInPage, SignUpPage } from '@/pages'

export const publicRoutesList = {
  openRoutes: [
    {
      element: <SignInPage />,
      path: '/login',
    },
    {
      element: <SignUpPage />,
      path: '/sign-up',
    },
    {
      element: <Dashboard />,
      index: true,
    },
  ],
}
const publicRoutes: RouteObject[] = [
  {
    children: [...publicRoutesList.openRoutes],
    element: <Outlet />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Dashboard />,
    path: '/',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
