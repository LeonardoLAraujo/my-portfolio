export class Contact {

    public static async sendContact(name: string, email: string, message: string){

        const request = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        let response;

        try {
            response = await request.json();
        } catch (err) {
            console.error("Erro ao parsear JSON:", await request.text());
            return;
        }

        return response;
    }
}