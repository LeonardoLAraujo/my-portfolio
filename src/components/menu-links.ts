import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('menu-link')
export default class MenuLink extends LitElement{

    static override get styles(): CSSResult{
        return css`
            :host{
                width: 100%;
                display: block;
                text-align: center;
            }

            div{
                font-size: 1.125rem;    
                font-weight: 500;
                line-height: 1.75rem;
                border-bottom: 2px solid transparent;
                cursor: pointer;
                transition: 300ms;
                width: calc(100% - 1.5rem);
            }

            div:hover{
                color: var(--green);
            }

            .contact{
                display: block;
                background-color: var(--green);
                text-align: center;
                --tw-text-opacity: 1;
                color: rgb(17 24 39 / var(--tw-text-opacity, 1));
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                padding-left: 0.75rem;
                padding-right: 0.75rem;
                border-radius: 6px;
            }

            .contact:hover{
                color: #fff;
                background-color: #13a38e;
            }
        `;
    }

    @property({type: String})
    link: string = "#";

    @property({type: String})
    name: string = "";

    @property({type: Boolean})
    isContact: boolean = false;

    @property({ type: Boolean })
    isActive: boolean = false;

    protected override render(): TemplateResult{
        return html`
            <style>
                div{
                    color: ${this.isActive ? "var(--green)" : "rgb(209 213 219 / var(--tw-text-opacity, 1))"};
                }
            </style>
            <div class=${this.isContact ? "contact" : ""} href=${this.link} >${this.name}</div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'menu-link': MenuLink
   }
}