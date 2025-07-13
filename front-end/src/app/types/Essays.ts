export type essayStatus = "ENVIADA" | "CORRIGIDA";

export type Essay = {
    id: number,
    title: string,
    body: string,
    createdAt: string,
    feedback: string,
    grade: number,
    userId: number,
    status: essayStatus,
    competency1: number,
    competency2: number,
    competency3: number,
    competency4: number,
    competency5: number
}