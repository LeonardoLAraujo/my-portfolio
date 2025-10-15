import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('l-footer')
export default class LFooter extends LitElement{

    static override get styles(): CSSResult{
        return css`
            div{
                width: calc(100% - 32px);
                padding: 2rem 1rem;
                background-color: var(--gray);
            }

            p{
                margin: 0;
                font-size: 16px;
                color: var(--color-text);
                text-align: center;
            }

            p span{
                color: var(--green);
            }
        `;
    }

    protected override render(): TemplateResult{
        return html`
            <div>
                <p> ©2025 Leonardo Leal Araújo | <span>leonardoleal018@gmail.com</span>. Desenvolvido com <span>Lit Element, HTML&CSS, Typescript, NodeJs, FireBase, Vite</span></p>
            </div>
        `;
    }

}

declare global{
    interface HTMLElementTagNameMap{
        'l-footer': LFooter
    }
}