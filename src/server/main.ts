import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import dotenv from "dotenv";
import admin from "firebase-admin";
import dns from "dns";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

async function checkDomainExists(email: string): Promise<boolean> {
    const domain = email.split("@")[1];
    return new Promise((resolve) => {
        dns.resolveMx(domain, (err, addresses) => {
            if (err || !addresses || addresses.length === 0) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}

// Inicializar Firebase Admin
if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
    throw new Error("Variável de ambiente FIREBASE_SERVICE_ACCOUNT não definida!");
}

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.post("/contact", async (request: any, response: any) => {
    try{
        const name = request.body.name;
        const email = request.body.email;
        const message = request.body.message;

        if (!name || !email || !message || message.length > 1000) {
            return response.status(400).json({ success: false, message: "Algum campo está vázio"});
        }

        if (!isValidEmail(email)) {
            return response.status(400).json({ success: false, message: "E-mail Inválido"});
        }

        const domainExists = await checkDomainExists(email);
        if (!domainExists) {
            return response.status(400).json({ success: false, message: "Domínio de e-mail inexistente." });
        }
    
        await db.collection("contatos").add({name, email, message, criadoEm: new Date() });

        return response.json({ success: true, message: "Mensagem enviada com sucesso!" });
    }catch(error){
        console.log(`Error send Contact: ${error}`);
    }
});

ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000..."),
);
