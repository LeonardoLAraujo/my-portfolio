import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement } from 'lit/decorators.js';
import "../components/l-card-project";  
import { Project } from '../types/project';
import { DATA_PROJECT } from '../data/data-project';

@customElement('l-projects')
export default class LProjects extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .projects{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 1rem;
                border-bottom: 1px solid var(--border-color);
                padding: 5rem 0rem;
            }
            
            h1{
                margin: 0;
                color: #fff;
                font-size: 2.25rem;
                margin-bottom: 3rem;
                text-align: center;
            }

            h1 span{
                color: var(--green);
            }

            .projects__cards{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 1.5rem;
            }
        `;
    }

    private projects: Array<Project> = DATA_PROJECT;

    private _generateCardProjects(): Array<TemplateResult> {
        return this.projects.map((project: Project) => html`<l-card-project .project=${project}></l-card-project>`)
    }

    protected override render(): TemplateResult{
        return html`
            <div class="projects">
                <h1>Meus <span>Projetos</span> em Destaque</h1>
                <div class="projects__cards">
                    ${this._generateCardProjects()}
                </div> 
            </div>
        `;
    }

}

declare global{
    interface HTMLElementTagNameMap{
        'l-projects': LProjects
    }
}