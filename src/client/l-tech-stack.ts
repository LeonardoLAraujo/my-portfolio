import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement } from 'lit/decorators.js';

type Tech = {
    name: string;
    icon: TemplateResult;
    color: string;
}

const TECH_STACK: Tech[] = [
    {
        name: "HTML5 & CSS3", 
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="layout-grid" class="lucide lucide-layout-grid w-10 h-10 text-accent-teal mb-3"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>`, 
        color: "rgb(45 212 191 / var(--tw-text-opacity, 1))"
    },
    {
        name: "JavaScript (ES6+)", 
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="code" class="lucide lucide-code w-10 h-10 text-yellow-400 mb-3"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>`, 
        color: "rgb(250 204 21 / var(--tw-text-opacity, 1))"
    },
    {
        name: "TypeScript",
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="type" class="lucide lucide-type w-10 h-10 text-blue-600 mb-3"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>`,
        color: "rgb(96 165 250 / var(--tw-text-opacity, 1))"
    },
    {
        name: "ReactJS",
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="component" class="lucide lucide-component w-10 h-10 text-blue-400 mb-3"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path></svg>`,
        color: "rgb(37 99 235 / var(--tw-text-opacity, 1))"
    },
    {
        name: "NodeJS",
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="server" class="lucide lucide-server w-10 h-10 text-green-500 mb-3"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect><rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>`,
        color: "rgb(34 197 94 / var(--tw-text-opacity, 1))"
    },
    {
        name: "MySQL",
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="database" class="lucide lucide-database w-10 h-10 text-gray-500 mb-3"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>`,
        color: "rgb(107 114 128 / var(--tw-text-opacity, 1))"
    },
    {
        name: "Git & GitHub",
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="git-fork" class="lucide lucide-git-fork w-10 h-10 text-red-500 mb-3"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path><path d="M12 12v3"></path></svg>`,
        color: "rgb(239 68 68 / var(--tw-text-opacity, 1))"
    },
    {
        name: "Lit Element",
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-400 mb-3">
                        <!-- Componente principal (forma de diamante) -->
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <!-- Linhas de conexão que sugerem a estrutura Web Component -->
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                    </svg>`,
        color: "rgb(129 140 248 / var(--tw-text-opacity, 1))"
    }
]

@customElement('l-tech-stack')
export default class LTechStack extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .tech{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                border-bottom: 1px solid var(--border-color);
                padding: 7rem 0rem;
            }

            h1{
                margin: 0;
                color: #fff;
                font-size: 2.25rem;
                margin-bottom: 3rem;
            }

            h1 span{
                color: var(--green);
            }

            .tech__cards{
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                gap: 2rem;
            }

            .cards__techStack{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition-duration: 300ms;
                transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
                transition-timing-function:  cubic-bezier(0.4, 0, 0.2, 1);
                --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));
                --tw-border-opacity: 1;
                border-color: rgb(55 65 81 / var(--tw-border-opacity, 1));
                border-radius: 0.75rem;
                padding: 1rem;
                color: #fff;
                max-width: 248px;
                width: 100%;
                height: 100px;
            }

            .cards__techStack:hover{
                --tw-shadow-color: rgb(45 212 191 / 0.3);
                --tw-shadow: var(--tw-shadow-colored);
                transform: scaleX(1.05);
                transform: scaleY(1.05);
            }

            .cards__techStack p{
                margin: 0;
                font-size: 20px;
                color: #fff;
                font-weight: 700;
            }

            .cards__techStack .icon svg{
                width: 45px;
                height: 45px;
            }
        `;
    }

    private _generateCardTechStack(): Array<TemplateResult>{
        return TECH_STACK.map((tech: Tech) => html`<div class="cards__techStack"> 
                                                        <div class="icon" style="color: ${tech.color}">
                                                            ${tech.icon}
                                                        </div>
                                                        <p>${tech.name}</p>
                                                    </div>
       `);
    }

    protected override render(): TemplateResult{
        return html`
            <div class="tech">
                <h1>Minha <span>Tech Stack</span></h1>
                <div class="tech__cards">
                    ${this._generateCardTechStack()}
                </div>
            </div>
        `;
    }

}

declare global{
    interface HTMLElementTagNameMap{
        'l-tech-stack': LTechStack
    }
}