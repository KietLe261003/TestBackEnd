import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface PrivateProp{
    Role: String
}
const PrivateContext:React.FC<PrivateProp> = ({Role}) => {
    if(Role=="")
        return <Outlet/>
    const {user} = useAuth();
    if(!user)
        return <Navigate to={"/Login"}/>
    return  <Outlet/>
};

export default PrivateContext;