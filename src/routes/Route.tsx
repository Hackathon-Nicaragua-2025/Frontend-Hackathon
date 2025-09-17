// Import For React
import { type JSX } from "react"
// Import For React Router Dom
import { Route, Routes } from "react-router-dom"
// Import For Pages
import { Home, Privacy, Conditions } from "./index"


// Interface Route
interface Route {
  path: string;
  element: JSX.Element;
}

// Constant Routes
export const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacy",
    element: <Privacy />
  },
  {
    path: "/conditions",
    element: <Conditions />
  }
]

// Function Render Routes
export const renderRoutes = (routes: Route[]) => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}