import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, query } from 'lit/decorators.js';
import './components/menu';
import './client/l-introduction';
import './client/l-about-me';
import './client/l-tech-stack';
import "./client/l-projects";
import "./client/l-contact";
import "./client/l-footer";
import LAboutMe from './client/l-about-me';
import LTechStack from './client/l-tech-stack';
import LProjects from './client/l-projects';
import LContact from './client/l-contact';

@customElement('l-portfolio')
export default class LPortfolio extends LitElement{

    static override get styles(): CSSResult{
        return css`
            main{
                padding: 0rem 2rem;
            }

            @media (min-width: 1024px){
                main{
                    padding: 0rem 5rem;
                }
            }
        `;
    }

    @query("l-about-me")
    public lAboutMe!: LAboutMe;

    @query("l-tech-stack")
    public lTechStack!: LTechStack;

    @query("l-projects")
    public lProjects!: LProjects;

    @query("l-contact")
    public lContact!: LContact;

    protected override render(): TemplateResult{
        return html`
            <l-menu .referencePortfolio=${this}></l-menu>
            <main>
                <l-introduction .referencePortfolio=${this}></l-introduction>
                <l-about-me></l-about-me>
                <l-tech-stack></l-tech-stack>
                <l-projects></l-projects>
                <l-contact></l-contact>
            </main>
            <l-footer></l-footer>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
        'l-portfolio': LPortfolio
   }
}