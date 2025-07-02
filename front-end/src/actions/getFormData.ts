"use server"

import axios from "axios";

export default async function getFormData  (formData: FormData) {
    const usuario = formData.get("usuario");
    const cpf = formData.get("cpf");
    const email = formData.get("email");
    const password = formData.get("password");

    // fazer aqui as requisições pra jogar os resultados disso no back
    const res = await axios.post
}