import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import ME from '../images/avatar.jpg';
import LPortfolio from '../l-portfolio';

@customElement('l-introduction')
export default class LIntroduction extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .introduction{
                width: 100%;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 1rem;
                border-bottom: 1px solid var(--border-color);
            }

            .introduction__image{
                --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
                --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                border-color: rgb(45 212 191 / var(--tw-border-opacity, 1));
                border-radius: 50%;
                overflow: hidden;
            }

            .introduction__image img{
                object-fit: cover;
                max-width: 100%;
                width: 280px;
                height: auto;
                border-radius: 50%;
                vertical-align: middle;
            }

            .introduction__name{
                color: #fff;
                line-height: 1.25;
                font-weight: 800;
                font-size: 2.25rem;
                text-align: center;
                margin: 0rem;
            }

            .introduction__name span{
                color: var(--green);
            }

            p{
                margin: 0;
                padding: 0;
                color: rgb(156 163 175 / var(--tw-text-opacity, 1));
                font-size: 1.25rem;
                line-height: 1.75rem;
                text-align: center;
            }

            .introduction__buttons{
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
            }

            .btn{
                transition-duration: 300ms;
                --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                border: none;
                padding-top: 0.75rem;
                padding-bottom: 0.75rem;
                padding-left: 2rem;
                padding-right: 2rem;
                border-radius: 9999px;
                font-weight: 700;
                width: 100%;
                font-size: 1.125rem;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                gap: 0.5rem;    
                cursor: pointer;
            }

            .btn--outline{
                --tw-text-opacity: 1;
                color: rgb(17 24 39 / var(--tw-text-opacity, 1));
                background-color: var(--green);
            }

            .btn--fill{
                color: rgb(45 212 191 / var(--tw-bg-opacity, 1));
                border: 2px solid var(--green);
                background-color: transparent;
            }

            .btn--outline:hover{
                background-color: #13a38e;
            }

            .btn--fill:hover{
                background-color: rgb(20 184 166 / var(--tw-bg-opacity, 1));
                color: rgb(17 24 39 / var(--tw-text-opacity, 1));
            }

            @media (min-width: 640px){
                .introduction__name{
                    font-size: 3.75rem;
                }

                p{
                    font-size: 1.5rem;
                    line-height: 2rem;
                    margin-bottom: 2rem;
                    width: 100%;
                    max-width: 635px;
                }

                .introduction__buttons{
                    flex-wrap: nowrap;
                    width: 500px;
                }
            }
        `;
    }

    @property({attribute: false})
    referencePortfolio!: LPortfolio | any;

    private _goToLinkedin(): void {
        window.open("https://www.linkedin.com/in/leonardo-leal-ara%C3%BAjo-2653b91b9/", "_blank")
    }

    private _goToMyProjects(): void {
        this.referencePortfolio.lProjects?.scrollIntoView({ behavior: 'smooth' })
    }

    protected override render(): TemplateResult{
        return html`
            <div class="introduction"> 
                <div class="introduction__image">
                    <img src=${ME} alt="Avatar" />
                </div>
                <h1 class="introduction__name">Olá, eu sou <span>Leonardo Leal</span></h1>
                <p>
                    Desenvolvedor Full-Stack focado em construir experiências digitais rápidas, acessíveis e escaláveis.
                </p>
                <div class="introduction__buttons">
                    <button href="#projects" class="btn btn--outline" @click=${this._goToMyProjects}>Ver meus Projetos</button>
                    <button href="#contact" class="btn btn--fill" @click=${this._goToLinkedin}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="linkedin" class="lucide lucide-linkedin inline w-5 h-5 mr-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> Linkedin</button>
                </div>
            </div>
        `;
    }

}

declare global{
    interface HTMLElementTagNameMap{
        'l-introduction': LIntroduction
    }
}