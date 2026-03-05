import { Navigate } from "react-router-dom";
import type React from "react";


interface ProtectedRouteProps {
    children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) 
{
   
       debugger;
            if(sessionStorage.getItem("isLoggedInUser"))
            {
                return <>{children}</>;
            } else {
               return <Navigate to="/login" replace={true}/>
            }
       

}

export default ProtectedRoute;