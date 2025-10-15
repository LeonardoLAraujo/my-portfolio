import { IconTypes } from 'ecv-component';
import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('l-about-me')
export default class LAboutMe extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .about{
                width: 100%;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 3rem;
                border-bottom: 1px solid var(--border-color);
            }

            h1{
                margin: 0;
                color: #fff;
                font-size: 2.25rem;
            }

            h1 span{
                color: var(--green);
            }

            .detail__text{
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }

            .detail__text p{
                margin: 0;
                color: rgb(156 163 175 / var(--tw-text-opacity, 1));
                max-width: 672px;
                line-height: 1.625;
            }

            .text__highlight{
                border-left: 5px solid var(--green);
                padding-left: 1rem;
            }

            .about__detail{
                display: flex;
                flex-direction: column;
                gap: 2rem;
                align-items: center;
            }

            .about__information{
                background-color: var(--gray);
                --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
                --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                padding: 1.5rem;
                border-radius: 0.75rem;
                width: 100%;
                max-width: 400px;
                display: flex;
                flex-direction: column;
                transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 300ms;
            }

            .about__information:hover{
                --tw-shadow-color: rgb(45 212 191 / 0.5);
                --tw-shadow: var(--tw-shadow-colored);
            }

            .about__information h2{
                margin: 0;
                margin-bottom: 1rem;
                color: var(--green);
            }

            .information__item{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--color-text);
                margin-bottom: 0.5rem;
            }

            @media (min-width: 1024px){
                .about__detail{
                    flex-direction: row;
                    gap: 5rem;
                }

                .detail__text p{
                    font-size: 19px;
                }
            }
           
        `;
    }

    private _generateInformation(icon: IconTypes, label: string): TemplateResult{
        return html`
            <div class="information__item">
                <ecv-icon .icon=${icon} .iconStyle=${{color: "var(--green)", size: "30px"}}></ecv-icon>
                <span>${label}</span>
            </div>
        `;
    }

    protected override render(): TemplateResult{
        return html`
            <div class="about">
                <h1><span>Sobre</span> Mim</h1>
                <div class="about__detail">
                    <div class="detail__text">
                        <p>
                            Profissional com graduação em Ciência da Computação e em Análise e Desenvolvimento de Sistemas, 
                            atualmente cursando pós-graduação em Data Science e Analytics. Possuo 2 anos de experiência em 
                            desenvolvimento web, sempre atuando com comprometimento, foco em resultados e constante busca por 
                            atualização e aprimoramento técnico para entregar soluções de qualidade.
                        </p>
                        <p class="text__highlight">
                            <i>"Transformando ideias complexas em interfaces de usuário elegantes e funcionais."</i>
                        </p>
                    </div>

                     <div class="about__information">
                        <h2>Dados Rapidos</h2>
                        ${this._generateInformation('distance' as IconTypes, 'Localização: Rio grande da Serra - SP')}
                        ${this._generateInformation('work_history' as IconTypes, 'Especialidade: Front-end / Back-end')}
                    </div>
                </div>

               
            </div>
        `;
    }
}

declare global{
    interface HTMLElementTagNameMap{
        'l-about-me': LAboutMe
    }
}