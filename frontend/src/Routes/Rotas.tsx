import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from '../AuthenticationPages/login'
import Register from '../AuthenticationPages/register'
import Initial from '../Pages/initialPage.tsx'

function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to='/login' replace/>}/>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/initialPage' element={<Initial />} />
            </Routes>
        </Router>
    )
}

export default Rotas