import useAuth from "../../hooks/useAuth";
import {Navigate} from 'react-router-dom'

export default function RedirectAuthenticate({children}){
    const {authenticatedUser} = useAuth()
    if(authenticatedUser){
    return <Navigate to={'/'}/>
    }
    return children
}