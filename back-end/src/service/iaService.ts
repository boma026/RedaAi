import dotenv from "dotenv";
import axios from "axios";
import { CorrectionResult } from "../types";

dotenv.config();

const OPENROUTER_BASE_URL = process.env.OPEN_ROUTER_API_BASE_URL!;
if (!OPENROUTER_BASE_URL) {
  throw new Error("Variável de ambiente OPEN_ROUTER_API_BASE_URL não definida.");
}
const API_KEY = process.env.OPEN_ROUTER_API_KEY;
if (!API_KEY) {
  throw new Error("Variável de ambiente API_KEY não definida");
}

export async function essayCorrect(text: string): Promise<CorrectionResult> {
  try {
    const res = await axios.post(
      OPENROUTER_BASE_URL,
      {
        model: "mistralai/mistral-7b-instruct:free",
        messages: [
          {
            role: "system",
            content: `Você é um corretor de redações do ENEM. Avalie o texto abaixo com base nos cinco critérios do ENEM:

1. Demonstrar domínio da norma padrão da língua portuguesa;
2. Compreender a proposta de redação;
3. Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos;
4. Demonstrar conhecimento dos mecanismos linguísticos necessários para a construção da argumentação;
5. Elaborar proposta de intervenção para o problema abordado.

Para cada competência, atribua uma nota de 0 a 200. Depois, calcule a nota final (0–1000). Em seguida, escreva um comentário construtivo em português com sugestões de melhoria.

Formato da resposta:
Competência 1: <nota>
Competência 2: <nota>
Competência 3: <nota>
Competência 4: <nota>
Competência 5: <nota>
Nota final: <nota final>
Comentário: <texto explicativo>`
          },
          { role: "user", content: `Redação do aluno:\n\n${text}` }
        ],
        max_tokens: 800,
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const content: string = res.data.choices[0].message.content;

    const c1 = parseInt(content.match(/Competência 1:\s*(\d{1,3})/i)?.[1] || "0");
    const c2 = parseInt(content.match(/Competência 2:\s*(\d{1,3})/i)?.[1] || "0");
    const c3 = parseInt(content.match(/Competência 3:\s*(\d{1,3})/i)?.[1] || "0");
    const c4 = parseInt(content.match(/Competência 4:\s*(\d{1,3})/i)?.[1] || "0");
    const c5 = parseInt(content.match(/Competência 5:\s*(\d{1,3})/i)?.[1] || "0");
    const finalGrade = parseInt(content.match(/Nota final:\s*(\d{1,4})/i)?.[1] || "0");
    const comment = content.match(/Comentário:\s*([\s\S]*)/i)?.[1]?.trim() || "";

    return {
      grade: finalGrade,
      feedback: comment,
      competency1: c1,
      competency2: c2,
      competency3: c3,
      competency4: c4,
      competency5: c5
    };

  } catch (error: any) {
    console.error("Erro na correção com OpenRouter:", error?.response?.data || error.message);
    return {
      
      grade: 0,
      feedback: "Erro ao corrigir a redação. Tente novamente mais tarde.",
      competency1: 0,
      competency2: 0,
      competency3: 0,
      competency4: 0,
      competency5: 0
    };
  }
}
