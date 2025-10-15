// api/contact.js
const admin = require("firebase-admin");

if (!admin.apps.length) {
    if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
        throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable is not set");
    }
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

const db = admin.firestore();

module.exports = async (req: any, res: any) => {
    if (req.method !== "POST") 
        return res.status(405).json({ success: false, message: "Método não permitido" });

    const { name, email, message } = req.body;

    if (!name || !email || !message) 
        return res.status(400).json({ success: false, message: "Algum campo está vazio" });

    try {
        await db.collection("contatos").add({ name, email, message, criadoEm: new Date() });
        return res.status(200).json({ success: true, message: "Mensagem enviada com sucesso!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Erro no servidor" });
    }
};
