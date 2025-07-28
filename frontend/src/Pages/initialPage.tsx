import { auth } from "../Services/FireBaseConfig"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function initialPage(){

    const navigate = useNavigate()
    const user = auth.currentUser;

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
            {user ? (
                <div>
                    <h1>Ola, {user.displayName}</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ): (
                <p>A carregar utilizador</p>
            )}

        </div>
    )
}

export default initialPage;