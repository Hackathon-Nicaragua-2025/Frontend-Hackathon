// Import For Router Dom
import { Navigate } from "react-router-dom";
// Import For Auth Context
import { useAuth } from "../context/AuthContext";
// Import For JSX
import type { JSX } from "react";

// Component Private Routes
export const PrivateRoute = ({
  children,
  role,
}: {
  children: JSX.Element;
  role?: "tourist" | "guide" | "admin";
}) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  if (role && user.role !== role) return <Navigate to="/" />;

  return children;
}


