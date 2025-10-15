export class Contact {

    public static async sendContact(name: string, email: string, message: string){

        const request = await fetch("/contact", {
            method: "post",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({name, email, message})
        });

        const response = await request.json();

        console.log(response);

        return response;

    }
}