import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import "ecv-component";
import { IconTypes } from 'ecv-component';
import "./menu-links";
import LPortfolio from '../l-portfolio';
@customElement('l-menu')
export default class LMenu extends LitElement{

    static override get styles(): CSSResult{
        return css`
            header{
                --tw-backdrop-blur: blur(4px);
                position: fixed;
                width: 100%;
                top: 0;
                backdrop-filter: blur(2px);
                -webkit-backdrop-filter: blur(12px);
                z-index: 3;
            }

            .menu{
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: var(--gray);
                padding: 1rem 2rem;
                --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
               
            }

            h1{
                color: var(--green);
                font-size: 1.5rem;
                font-weight: bold;
                line-height: 2rem;
                margin: 0;
            }

            h1:hover{
                color: #fff;
            }

            .menu__links{
                display: none;
            }

            .menu__mobile{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                background-color: var(--gray);
                padding: 1rem;
                align-items: center;
                justify-content: center;
                border-top: 2px solid var(--border-color);
            }

           ecv-icon{
                cursor: pointer;
           }

            @media (min-width: 1024px){
                .menu__sandwich{
                    display: none;
                }

                .menu__mobile{
                    display: none;
                }

                .menu__links{
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }

                .contact{
                    border-radius: 6px;
                }
            }
        `;
    }

    @state()
    private _isMenuOpen: boolean = false;

    @property({attribute: false})
    referencePortfolio!: LPortfolio | any;

    private _generateMenuLinks(label: string, isContact: boolean, onPressed?: Function): TemplateResult{
        return html`<menu-link ?isContact=${isContact} .name=${label} @click=${onPressed}></menu-link>`;
    }


    private _menuMobile(): TemplateResult{
        return html`
            <div class="menu__mobile">
                ${this._generateMenuLinks("Sobre", false ,() => {this.referencePortfolio.lAboutMe?.scrollIntoView({ behavior: 'smooth' }), this._openMenuSandwich()})}
                ${this._generateMenuLinks("Habilidades", false ,() => {this.referencePortfolio.lTechStack?.scrollIntoView({ behavior: 'smooth' }), this._openMenuSandwich()})}
                ${this._generateMenuLinks("Projetos", false ,() => {this.referencePortfolio.lProjects?.scrollIntoView({ behavior: 'smooth' }), this._openMenuSandwich()})}
                ${this._generateMenuLinks("Contato", true ,() => {this.referencePortfolio.lContact?.scrollIntoView({ behavior: 'smooth' }), this._openMenuSandwich()})}
            </div>
        `;
    }

    private _openMenuSandwich(): void{
        this._isMenuOpen = !this._isMenuOpen;
    }

    protected override render(): TemplateResult{
        return html`
            <header>
                <div class="menu">
                    <h1>< Leonardo Leal /></h1>
                    <ecv-icon class="menu__sandwich" .icon=${IconTypes.Menu} .iconStyle=${{color: "#fff", size: "40px"}} @click=${this._openMenuSandwich}></ecv-icon>
                    <div class="menu__links">
                        ${this._generateMenuLinks("Sobre", false ,() => {this.referencePortfolio.lAboutMe?.scrollIntoView({ behavior: 'smooth' })})}
                        ${this._generateMenuLinks("Habilidades", false ,() => {this.referencePortfolio.lTechStack?.scrollIntoView({ behavior: 'smooth' })})}
                        ${this._generateMenuLinks("Projetos", false ,() => {this.referencePortfolio.lProjects?.scrollIntoView({ behavior: 'smooth' })})}
                        ${this._generateMenuLinks("Contato", true ,() => {this.referencePortfolio.lContact?.scrollIntoView({ behavior: 'smooth' })})}
                    </div>
                </div>
                ${this._isMenuOpen ? this._menuMobile() : null}
            </header>
            
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
        'l-menu': LMenu
   }
}