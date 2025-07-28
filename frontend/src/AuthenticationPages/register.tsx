"use client"

import type React from "react"

import { useState } from "react"
import { Link } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth, db} from "../Services/FireBaseConfig.tsx";
import  {updateProfile} from 'firebase/auth'
import { setDoc, doc} from 'firebase/firestore'
import { useNavigate } from "react-router-dom"

export default function RegisterPage() {

    const [formData, setFormData] = useState({
        nome: "",
        apelido: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms:false,
    })
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
            userCredential,
            loading,
            error,
    ] = useCreateUserWithEmailAndPassword(auth)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {name, value, type, checked} = e.target;
        setFormData((prev) =>  ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))

    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Dados submetidos:", formData);

        if (formData.password != formData.confirmPassword) {
            alert("As palavras-passe nao coincidem")
            return
        }

        try {

            const cred = await createUserWithEmailAndPassword(formData.email, formData.password)

            if (cred && cred.user){
                await updateProfile(cred.user,{
                    displayName: `${formData.nome} - ${formData.apelido}`,
                })

                await setDoc(doc(db, 'users', cred.user.uid), {
                    uid: cred.user.uid,
                    nome: formData.nome,
                    apelido: formData.apelido,
                    email: formData.email,
                })

                navigate("/login")
                console.log("Utilizador criado !!")
            }
        }catch(e) {
            console.error("Erro ao registrar", e)
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
                    <h1 className="text-4xl font-bold mb-4">Bem vindo</h1>
                    <p className="text-lg opacity-90">Registe-se para aceder ao nosso site.</p>
                </div>
            </div>

            {/* Right Side - Register Form */}
            <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Registo</h2>
                        <p className="text-gray-600 text-sm">Crie sua conta para dispor de todos as nossa funcionalidades</p>
                    </div>

                    <form onSubmit={handleSubmit}  className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="nome" className="sr-only">
                                    Nome
                                </label>
                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    placeholder="Nome"
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="apelido" className="sr-only">
                                    Apelido
                                </label>
                                <input
                                    id="apelido"
                                    name="apelido"
                                    type="text"
                                    placeholder="Apelido"
                                    value={formData.apelido}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">
                                E-mail
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">
                                Palavra-passe
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Palavra-passe"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">
                                Confirme a Palavra-passe
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirme a Palavra-passe"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                id="acceptTerms"
                                name="acceptTerms"
                                type="checkbox"
                                checked={formData.acceptTerms}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                required
                            />
                            <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                                Aceito os Termos de Uso e a Política de Privacidade
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
                        >
                            Criar
                        </button>

                        <div className="text-center">
                            <span className="text-gray-600 text-sm">Já tem conta? </span>
                            <Link to="/login" className="text-blue-600 hover:text-blue-800 text-sm underline transition-colors">
                                Fazer login.
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
