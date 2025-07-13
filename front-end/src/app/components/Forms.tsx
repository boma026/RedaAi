"use client"
import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../utils/api";
import { useUserCtx } from "../context/userContext";
import { useRouter } from "next/navigation";

export default function Forms() {

  const userCtx = useUserCtx();
  const router = useRouter();

  const handleSubscription = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!userCtx.user || !userCtx.name || !userCtx.email || !userCtx.password){
      alert("Preencha todos os campos!");
      return;
    }
    try{
      const res = await api.post("/register", {
        user: userCtx.user,
        name: userCtx.name,
        email: userCtx.email,
        password: userCtx.password
      })
      
      const { createdUser } = res.data;
      console.log(createdUser);
      alert("Login criado com sucesso!");
      router.push("/login");
      
      }catch(e) {

      }   
    }

  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-xl p-10 max-w-2xl w-full text-center">
      <h1 className="font-bold text-3xl mb-10 text-center">Formulário de inscrição</h1>

      <form className="grid grid-cols-2 gap-x-8 gap-y-6"  onSubmit={handleSubscription}>
        <input
          type="text"
          name="usuario"
          placeholder="Digite seu usuário"
          className="p-5 text-lg border border-gray-300 rounded w-full"
          value={userCtx.user}
          onChange={e => userCtx.setUser(e.target.value)}
        />
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          className="p-5 text-lg border border-gray-300 rounded w-full"
          value={userCtx.name}
          onChange={e => userCtx.setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          className="p-5 text-lg border border-gray-300 rounded w-full"
          value={userCtx.email}
          onChange={e => userCtx.setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          className="p-5 text-lg border border-gray-300 rounded w-full"
          value={userCtx.password}
          onChange={e => userCtx.setPassword(e.target.value)}
        />

        <div className="col-span-2">
          <input
            type="submit"
            value="Enviar"
            className="w-full bg-blue-600 text-white text-xl py-4 rounded hover:bg-blue-700 transition duration-200 cursor-pointer"
          />
        </div>
        
      </form>
    </div>
  );
}
