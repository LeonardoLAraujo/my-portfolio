export class Contact {

    public static async sendContact(name: string, email: string, message: string){

        const request = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const response = await request.json();

        return response;
    }
}