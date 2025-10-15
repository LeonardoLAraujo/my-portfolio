import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, query } from 'lit/decorators.js';

@customElement('l-loading')
export default class LLoading extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .loading{
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
            }

            .loading__spinner{
                width: 60px;
                height: 60px;
                border: 5px solid rgba(255, 255, 255, 0.3);
                border-top-color: var(--green);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            @keyframes spin{
                100% {
                    transform: rotate(360deg);
                }
            }
            
        `;
    }

    @query(".loading")
    private _loading!: HTMLDivElement;

    public show(): void {
        this._loading.style.visibility = "visible";
    }

    public hide(): void {
        this._loading.style.visibility = "hidden";
    }

    protected override render(): TemplateResult{
        return html`
            <div class="loading">
                <div class="loading__spinner"></div>
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
        'l-loading': LLoading
   }
}