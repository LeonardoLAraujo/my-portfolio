import {LitElement, html, css, TemplateResult, CSSResult, PropertyValues} from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { Contact } from '../controller/send-contact';
import { ObjectReturn } from '../types/objectReturn';
import "../components/l-loading";
import LLoading from '../components/l-loading';

@customElement('l-contact')
export default class LContact extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .contact{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 1rem;
                padding: 5rem 0rem;
            }
            
            h1{
                margin: 0;
                color: #fff;
                font-size: 2.25rem;
                text-align: center;
            }

            h1 span{
                color: var(--green);
            }
            
            .contact p{
                margin: 0;
                color: var(--color-text);
                max-width: 790px;
                text-align: center;
            }

            .contact__form{
                display: flex;
                flex-direction: column;
                background-color: var(--gray);
                --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
                --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                border: 1px solid rgb(55 65 81 / var(--tw-border-opacity, 1));
                border-radius: 0.75rem;
                padding: 2rem;
                width: calc(100% - 2rem);
                max-width: 700px;
                gap: 1rem;
                margin-top: 1rem;
            }

            .contact__form div{
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: 0.5rem;
                color: rgb(209 213 219 / var(--tw-text-opacity, 1));
            }

            .contact__form div input,
            .contact__form div textarea{
                color: rgb(255 255 255 / var(--tw-text-opacity, 1));
                padding: 1rem;
                background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));
                border: 1px solid rgb(55 65 81 / var(--tw-border-opacity, 1));
                outline: none;
                font-size: 17px;
                border-radius: 10px;
                font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            }

            .contact__form div textarea{
                height: 200px;
                resize: none;
            }

            .contact__form button{
                --tw-space-y-reverse: 0;
                margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
                margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
                transition-duration: 300ms;
                transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                color: rgb(17 24 39 / var(--tw-text-opacity, 1));
                font-weight: 700;
                padding-top: 0.75rem;
                padding-bottom: 0.75rem;
                padding-left: 1.5rem;
                padding-right: 1.5rem;
                border-radius: 0.5rem;
                background-color: rgb(45 212 191 / var(--tw-bg-opacity, 1));
                border: none;
                font-size: 17px;
                cursor: pointer;
            }

            .contact__form button:hover{
               background-color: var(--green-dark);
               color: #fff;
            }

            .form__divisor{
                width: 100%;
                border: 1px solid rgb(55 65 81 / var(--tw-border-opacity, 1));
                margin: 2rem 0rem;
            }

            .contact__form .form__icons{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                flex-wrap: wrap;
            }

            .form__icons a{
                text-decoration: none;
                color: var(--color-text);
            }

            .form__icons svg{
                width: fit-content;
                cursor: pointer;
                transition: all 300ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
            }

            .form__icons svg:hover{
                color: var(--green);
            }

            .form__icons div{
                width: fit-content;
            }

            .form__icons div svg{
                width: 32px;
                color: var(--color-text); 
            }

            .contact .status{
                display: none;
                font-size: 18px;
                font-weight: 700;
            }

        `;
    }

    @state()
    private _responseData: ObjectReturn | undefined;

    @query(".name")
    private _inputName!: HTMLInputElement;

    @query(".email")
    private _inputEmail!: HTMLInputElement;

    @query(".message")
    private _textAreaMessage!: HTMLTextAreaElement;

    @query(".status")
    private _status!: HTMLParagraphElement;

    @query("l-loading")
    private _lLoading!: LLoading;

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        
    }

    private _openWhatsapp(): void {
        window.open("https://wa.me/5511977510233?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto", "_blank");
    }

    private async _sendContact(e: MouseEvent): Promise<void> {  
        e.preventDefault();

        //this._lLoading.show();

        if(this._inputName.value.trim() == "" || this._inputEmail.value.trim() == "" || this._textAreaMessage.value.trim() == ""){
            this._responseData = {success: false, message: "Existe Campos Vázios"};

            this._lLoading.hide();

            this._status.style.display = "block";
            setTimeout(() => {
                this._status.style.display = "none";
            }, 2000);

            return;
        }

        this._responseData = await Contact.sendContact(this._inputName.value, this._inputEmail.value, this._textAreaMessage.value);

        if(this._responseData?.success){
            this._inputName.value = "";
            this._inputEmail.value = "";
            this._textAreaMessage.value = "";
        }

        this._lLoading.hide();

        this._status.style.display = "block";
        setTimeout(() => {
            this._status.style.display = "none";
        }, 2000);
    }

    protected override render(): TemplateResult{
        return html`
            <style>
                .contact .status{
                    color: ${this._responseData?.success ? "var(--green)" : "rgb(248 113 113 / var(--tw-text-opacity, 1))"};
                }
            </style>
            <l-loading></l-loading>
            <div class="contact">
                <h1>Vamos <span>Trabalhar Juntos</span> ?</h1>
                <p>Estou aberto a novas oportunidades de trabalho, projetos freelancer e colaborações. Envie uma mensagem ou conecte-se comigo!</p>
                <form class="contact__form" @submit=${this._sendContact}>
                    <div>
                        <label>Nome Completo</label>
                        <input type="text" class="name" required>
                    </div>
                    <div>
                        <label>Seu E-mail</label>
                        <input type="email" class="email" required>
                    </div>
                    <div>
                        <label>Mensagem</label>
                        <textarea type="text" class="message" required></textarea>
                    </div>
                    <p class="status">${this._responseData?.message}</p>
                    <button type="submit">Enviar Mensagem</button>
                    <div class="form__divisor"></div>
                    <p>Ou encontre-me nas redes sociais:</p>
                    <div class="form__icons">
                        <a href="https://github.com/LeonardoLAraujo" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="github" class="lucide lucide-github w-7 h-7"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/leonardo-leal-ara%C3%BAjo-2653b91b9/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="linkedin" class="lucide lucide-linkedin w-7 h-7"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <div @click=${this._openWhatsapp}>
                            <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
                                <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"></path>
                            </svg>
                        </div>
                    </div>
                </form>
            </div>
        `;
    }

}

declare global{
    interface HTMLElementTagNameMap{
        'l-contact': LContact
    }
}