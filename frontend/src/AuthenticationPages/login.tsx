"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../Services/FireBaseConfig.tsx'


export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try{

            const cred = await signInWithEmailAndPassword(auth, email, password)
            console.log("Login com sucesso", cred.user)
            navigate("/initialPage")

        }catch(err: any){
            console.error("Erro ao logar", err.message)
            setError("Email ou palavra passe errados")
        }
    }


    return (
        <div className="min-h-screen flex">
            {/* Left Side - Purple Background */}
            <div className="flex-1 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 relative overflow-hidden flex items-center justify-center">
                {/* Decorative curved lines */}
                <div className="absolute inset-0">
                    <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 400 800" fill="none">
                        <path
                            d="M400 0C300 100 200 200 150 400C100 600 200 700 400 800"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                    <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 400 800" fill="none">
                        <path
                            d="M0 800C100 700 200 600 250 400C300 200 200 100 0 0"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>

                <div className="text-white z-10 max-w-md px-8">
                    <h1 className="text-4xl font-bold mb-4">Task Flow</h1>
                    <p className="text-lg opacity-90">O melhor gerenciador de projetos de Portugal</p>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Login</h2>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="sr-only">
                                Palavra-passe
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Palavra-passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                required
                            />
                        </div>

                        <div className="text-left">
                            <a href="/forgot-password" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                Esqueceu-se da palavra-passe? <span className="underline">Clique aqui.</span>
                            </a>
                        </div>

                        <button
                            type="submit"
                            onClick={handleLogin}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
                        >
                            Entrar
                        </button>

                        <div className="text-center">
                            <span className="text-gray-600 text-sm">Não tem conta? </span>
                            <Link to="/register" className="text-blue-600 hover:text-blue-800 text-sm underline transition-colors">
                                Criar conta.
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}