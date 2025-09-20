// Import For React
import { type JSX } from "react"
// Import For React Router Dom
import { Route, Routes } from "react-router-dom"
// Import For components
import { PrivateRoute } from "../components"
// Import For Pages
import { Home, Events, Privacy, Conditions, Education, QuizEducation, QuizEvents, QuizHome, Community, Reservations } from "./index"


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
    path: "/events",
    element: <Events />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/quiz/education",
    element: <QuizEducation />,
  },
  {
    path: "/quiz/events",
    element: <QuizEvents />,
  },
  {
    path: "/quiz/home",
    element: <QuizHome />,
  },
  {
    path: "/tourist/reservation",
    element: <PrivateRoute role="tourist">
      <Reservations />
    </PrivateRoute>,
  },
  {
    path: "/tourist/community",
    element: <PrivateRoute role="tourist">
      <Community />
    </PrivateRoute>,
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