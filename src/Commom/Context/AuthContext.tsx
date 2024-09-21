import { createContext, PropsWithChildren, useContext, useState } from "react";
import { User } from "../../Type/User";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    user: User | undefined;
    login: (user: User) => void;
    logout: () => void;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({children}:PropsWithChildren)=>{
    const [user, setUser] = useState<User | undefined>(undefined);
    const navigate = useNavigate();
    const login = (userData: User) => {
      localStorage.setItem("User", JSON.stringify(userData));
      setUser(userData);
      alert("Đăng nhập thành công Wellcome")
      navigate("/");
    };
    const logout = () => {
      localStorage.removeItem("User");
      setUser(undefined);
      alert("Đăng xuất thành công good bye")
    };
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
}
export const useAuth = ()=>{
  const context=useContext(AuthContext);
  if(!context)
    throw new Error("useAuth must be used within an AuthProvider");
  return context
}