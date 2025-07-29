import {useAuth} from '../Context/AuthContext'
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../Services/FireBaseConfig"

function initialPage(){

    const navigate = useNavigate()
    const user = useAuth();

    const handleLogout = async () => {
        try{
            await signOut(auth)
            navigate("/login")
            console.log("Logout com sucesso")
        }catch(err){
            console.log("Ocorreu um erro", err)
        }
    }

    return(
        <div>
            <h1>Ola, {user?.displayName}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default initialPage;