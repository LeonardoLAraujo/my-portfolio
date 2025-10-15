import { IconTypes } from 'ecv-component';
import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Project } from '../types/project';
import { TagProject } from '../types/tagProject';

@customElement('l-card-project')
export default class LCardProject extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .card{
                width: 100%;
                height: auto;
                max-width: 382px;
                transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 300ms;
                --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
                --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                --tw-bg-opacity: 1;
                background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));
                border-radius: 0.75rem;
                border: 1px solid var(--color-border);
            }

            .card:hover{
                --tw-shadow-color: rgb(45 212 191 / 0.5);
                --tw-shadow: var(--tw-shadow-colored);
            }

            .card iframe{
                width: 100%;
                height: 200px;
                border-top-left-radius: 0.75rem;
                border-top-right-radius: 0.75rem;
            }

            .card__information{
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .card__information h3{
                margin: 0;
                color: #fff;
                font-weight: 700;
                font-size: 23px;
                text-align: center;
            }

            .card__information p{
                color: rgb(156 163 175 / var(--tw-text-opacity, 1));
                margin-bottom: 1rem;
                font-size: 16px;
                margin: 0;
            }   

            .information__tags{
                display: flex;
                gap: 0.5rem;
                align-items: center;
                flex-wrap: wrap;
                width: 100%;
            }

            .tags__technology{
                width: fit-content;
                padding: 0.3rem 0.6rem;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 500;
            }

            .card__buttons{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                gap: 1rem;
            }

            .card__buttons a{
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .buttons__demo{
                color: var(--green);
                transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
            }

            .buttons__demo:hover{
                color: var(--green-dark);
            }

            .buttons__git{
                color: var(--color-text);
                transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
            }

            .buttons__git:hover{
                color: #fff;
            }

            @media (min-width: 1024px){
                .card__buttons{
                    justify-content: space-between;
                }
            }
        `;
    }

    @property({attribute: false})
    project: Project | any;
    
    private _generateTagsProject(): Array<TemplateResult> {
        return this.project.tags.map((tag: TagProject) => html`<div class="tags__technology" style="background-color: ${tag.backgroundColor}; color: ${tag.color}">
                                                                    ${tag.label}
                                                                </div>`);
    }
    
    protected override render(): TemplateResult{
        return html`
            <div class="card">
                ${this.project.iframe}
                <div class="card__information">
                    <h3>${this.project.title}</h3>
                    <p>${this.project.description}</p>
                    <div class="information__tags">
                        ${this._generateTagsProject()}
                    </div>
                    <div class="card__buttons">
                        <a href=${this.project.sourceDemo} class="buttons__demo" target="_blank"><ecv-icon .icon=${IconTypes.Visibility}></ecv-icon> Demo Live</a>
                        <a href=${this.project.sourceGit} class="buttons__git" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="github" class="lucide lucide-github w-4 h-4 mr-1"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            Código (GitHub)
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

}

declare global{
    interface HTMLElementTagNameMap{
        'l-card-project': LCardProject
    }
}