import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from '../AuthenticationPages/login'
import Register from '../AuthenticationPages/register'
import Initial from '../Pages/initialPage'
import { PrivateRoutes, PublicRoutes } from './ProtectedRotas'

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />

                <Route
                    path="/login"
                    element={
                        <PublicRoutes>
                            <Login />
                        </PublicRoutes>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <PublicRoutes>
                            <Register />
                        </PublicRoutes>
                    }
                />

                <Route
                    path="/initialPage"
                    element={
                        <PrivateRoutes>
                            <Initial />
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </Router>
    )
}

export default Rotas