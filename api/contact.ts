import { VercelRequest, VercelResponse } from "@vercel/node";
import admin from "firebase-admin";

// Inicializa Firebase Admin apenas uma vez
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT!);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// Função handler da API
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Só aceita POST
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, message: "Método não permitido" });
    }

    const { name, email, message } = req.body;

    // Valida campos
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Algum campo está vazio" });
    }

    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "E-mail inválido" });
    }

    // Adiciona contato no Firestore
    await db.collection("contatos").add({
      name,
      email,
      message,
      criadoEm: new Date(),
    });

    return res.status(200).json({ success: true, message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar contato:", error);
    return res.status(500).json({ success: false, message: "Erro no servidor" });
  }
}
