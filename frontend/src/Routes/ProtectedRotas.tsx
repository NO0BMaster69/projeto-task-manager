import { Navigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"
import {JSX} from "react";


export function PrivateRoutes({children}: {children: JSX.Element}) {
    const user = useAuth()
    return user ? children : <Navigate to="/login" replace></Navigate>
}

export function PublicRoutes({children}: {children: JSX.Element}) {
    const user = useAuth()
    return user ? <Navigate to="/initialPage" replace></Navigate> : children
}