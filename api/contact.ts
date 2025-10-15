import { VercelRequest, VercelResponse } from "@vercel/node";
import admin from "firebase-admin";

if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT!);
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

const db = admin.firestore();

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") return res.status(405).json({ success: false, message: "Erro ao Enviar os Dados"});

    const { name, email, message } = req.body;

    if (!name || !email || !message) return res.status(400).json({ success: false, message: "Algum campo está vázio"});

    await db.collection("contatos").add({ name, email, message, criadoEm: new Date() });

    return res.status(200).json({ success: true, message: "Mensagem enviada com sucesso!" });
}
