
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      setUser({ role: "admin", email });
      return "admin";
    } else if (email === "customer@gmail.com" && password === "customer1234") {
      setUser({ role: "customer", email });
      return "customer";
    } else {
      alert("Invalid credentials");
      return null;
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
