// Import For React
import { createContext, useContext, useState } from "react";

// Type Roles
type Role = "tourist" | "guide" | "admin";

// Interface User
interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

// Interface Auth Context
interface AuthContextType {
  user: User | null;
  login: (role: Role) => void;
  logout: () => void;
}

// Create Auth Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Context Provider
export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  // State User
  const [user, setUser] = useState<User | null>(null);

  // Function Login
  const login = (role: Role) => {
    setUser({ id: "1", name: "Bryan", email: "bryan@avify.com", role });
  };

  // Function Logout
  const logout = () => {
    setUser(null);
  };

  // Return
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Auth Context Hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthContextProvider");
  }
  return context;
}
