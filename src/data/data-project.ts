import { html } from "lit";
import { Project } from "../types/project";

export const DATA_PROJECT: Project[] = [
    {
        iframe: html`<iframe width="560" allow="compute-pressure" height="315" src="https://www.youtube.com/embed/tPBbeszlIXw?si=SOSituoSHXrcNiwh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: "🧩 ECV Component",
        description: `ECV Component é uma biblioteca de Web Components construída com Lit Element, desenvolvida para promover a reutilização, padronização e aceleração no desenvolvimento de interfaces visuais.
        O nome “ECV” vem de Visual Componentization Elements, destacando o foco em criar componentes visuais reutilizáveis`,
        tags: [
            {label: "Typescript", backgroundColor: "rgb(2 132 199 / 0.2)", color: "rgb(56 189 248 / var(--tw-text-opacity, 1))"},
            {label: "HTML & CSS3", backgroundColor: "rgb(234 88 12 / 0.2)", color: "rgb(251 146 60 / var(--tw-text-opacity, 1))"},
            {label: "Lit Element", backgroundColor: "rgb(37 99 235 / 0.2)", color: "rgb(96 165 250 / var(--tw-text-opacity, 1))"},
            {label: "NodeJs", backgroundColor: "rgb(22 163 74 / 0.2)", color: "rgb(74 222 128 / var(--tw-text-opacity, 1))"},
            {label: "Vite", backgroundColor: "rgb(202 138 4 / 0.2)", color: "rgb(250 204 21 / var(--tw-text-opacity, 1))"},
            {label: "NPM", backgroundColor: "rgb(219 39 119 / 0.2)", color: "rgb(244 114 182 / var(--tw-text-opacity, 1))"},
        ],
        sourceDemo: "https://www.npmjs.com/package/ecv-component",
        sourceGit: "https://github.com/LeonardoLAraujo/ecv-component",
    },
    {
        iframe: html`<iframe width="560" allow="compute-pressure" height="315" src="https://www.youtube.com/embed/L-hQnWvCWpg?si=KJBKqI1ezafaZz0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: "▶️ Lit Player YouTube",
        description: `O lit-player-youtube é um componente customizado construído com Lit (Web Components) para incorporar vídeos do YouTube de forma mais leve,
        modular e flexível. Ele permite que você tenha um player funcional, personalizável e integrado ao ecossistema de componentes, aproveitando reatividade
        e encapsulamento.`,
        tags: [
            {label: "Typescript", backgroundColor: "rgb(2 132 199 / 0.2)", color: "rgb(56 189 248 / var(--tw-text-opacity, 1))"},
            {label: "HTML & CSS3", backgroundColor: "rgb(234 88 12 / 0.2)", color: "rgb(251 146 60 / var(--tw-text-opacity, 1))"},
            {label: "Lit Element", backgroundColor: "rgb(37 99 235 / 0.2)", color: "rgb(96 165 250 / var(--tw-text-opacity, 1))"},
            {label: "NodeJs", backgroundColor: "rgb(22 163 74 / 0.2)", color: "rgb(74 222 128 / var(--tw-text-opacity, 1))"},
            {label: "Vite", backgroundColor: "rgb(202 138 4 / 0.2)", color: "rgb(250 204 21 / var(--tw-text-opacity, 1))"},
            {label: "NPM", backgroundColor: "rgb(219 39 119 / 0.2)", color: "rgb(244 114 182 / var(--tw-text-opacity, 1))"},
        ],
        sourceDemo: "https://www.npmjs.com/package/lit-player-youtube",
        sourceGit: "https://github.com/LeonardoLAraujo/lit-player-youtube",
    },
    {
        iframe: html`<iframe width="560" allow="compute-pressure" height="315" src="https://www.youtube.com/embed/vidQooTkmzQ?si=fQtj1PV5MI2vLSOK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: "🩺 Project Medicine",
        description: `O Project Medicine é uma plataforma desenvolvida para auxiliar estudantes na área da medicina, oferecendo recursos de estudo,
        organização de conteúdos e suporte educacional. Com uma interface moderna construída em TypeScript (alta predominância no código) e um design
        responsivo, o projeto busca facilitar o aprendizado de forma prática e atrativa`,
        tags: [
            {label: "Typescript", backgroundColor: "rgb(2 132 199 / 0.2)", color: "rgb(56 189 248 / var(--tw-text-opacity, 1))"},
            {label: "HTML & CSS3", backgroundColor: "rgb(234 88 12 / 0.2)", color: "rgb(251 146 60 / var(--tw-text-opacity, 1))"},
            {label: "Lit Element", backgroundColor: "rgb(37 99 235 / 0.2)", color: "rgb(96 165 250 / var(--tw-text-opacity, 1))"},
            {label: "NodeJs", backgroundColor: "rgb(22 163 74 / 0.2)", color: "rgb(74 222 128 / var(--tw-text-opacity, 1))"},
            {label: "Vite", backgroundColor: "rgb(202 138 4 / 0.2)", color: "rgb(250 204 21 / var(--tw-text-opacity, 1))"}
        ],
        sourceDemo: "https://project-medicine-n7y4.vercel.app/",
        sourceGit: "https://github.com/LeonardoLAraujo/Project-Medicine",
    },
    {
        iframe: html`<iframe width="560" allow="compute-pressure" height="315" src="https://www.youtube.com/embed/pBxzA9aMmwY?si=ua1_ylvp5vsR2gvh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: "📚 Studies of Basic Subjects",
        description: `Uma plataforma criada para estudantes de matérias básicas, oferecendo conteúdos de apoio, organização didática e interface simples 
        para otimizar o aprendizado. Desenvolvida em TypeScript; busca facilitar o estudo de disciplinas fundamentais de forma acessível para quem está 
        começando ou revisando conceitos principais.`,
        tags: [
            {label: "Typescript", backgroundColor: "rgb(2 132 199 / 0.2)", color: "rgb(56 189 248 / var(--tw-text-opacity, 1))"},
            {label: "HTML & CSS3", backgroundColor: "rgb(234 88 12 / 0.2)", color: "rgb(251 146 60 / var(--tw-text-opacity, 1))"},
            {label: "Lit Element", backgroundColor: "rgb(37 99 235 / 0.2)", color: "rgb(96 165 250 / var(--tw-text-opacity, 1))"},
            {label: "NodeJs", backgroundColor: "rgb(22 163 74 / 0.2)", color: "rgb(74 222 128 / var(--tw-text-opacity, 1))"},
            {label: "Vite", backgroundColor: "rgb(202 138 4 / 0.2)", color: "rgb(250 204 21 / var(--tw-text-opacity, 1))"}
        ],
        sourceDemo: "https://studies-of-basic-subjects.vercel.app/",
        sourceGit: "https://github.com/LeonardoLAraujo/Studies-of-basic-subjects",
    },
    {
        iframe: html`<iframe width="560" allow="compute-pressure" height="315" src="https://www.youtube.com/embed/p2Guu8--1o4?si=pGylbr3rt9D9CzyZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: "🎬 Video Interativo",
        description: `Uma aplicação inovadora que combina vídeo com interatividade — permitindo que o usuário interaja com elementos
        enquanto assiste, transformando o vídeo em algo dinâmico e envolvente.`,
        tags: [
            {label: "Javascript", backgroundColor: "rgb(2 132 199 / 0.2)", color: "rgb(56 189 248 / var(--tw-text-opacity, 1))"},
            {label: "HTML & CSS3", backgroundColor: "rgb(234 88 12 / 0.2)", color: "rgb(251 146 60 / var(--tw-text-opacity, 1))"},
            {label: "Lit Element", backgroundColor: "rgb(37 99 235 / 0.2)", color: "rgb(96 165 250 / var(--tw-text-opacity, 1))"},
            {label: "Vite", backgroundColor: "rgb(202 138 4 / 0.2)", color: "rgb(250 204 21 / var(--tw-text-opacity, 1))"}
        ],
        sourceDemo: "https://video-interativo.vercel.app/",
        sourceGit: "https://github.com/LeonardoLAraujo/Video-Interativo",
    },
    {
        iframe: html`<iframe width="560" allow="compute-pressure" height="315" src="https://www.youtube.com/embed/TDwD8oFUrdk?si=qBj7gdrSfqqlQqp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: "♿ Projeto “Acessibilidade”",
        description: `O Acessibilidade é uma iniciativa voltada para tornar aplicações e interfaces mais inclusivas, garantindo que pessoas com deficiências possam 
        interagir com mais facilidade e autonomia. O repositório no GitHub contém código em JavaScript (predominantemente), componentes visuais, 
        scripts de acessibilidade (ex: ecv-accessibility.js) e elementos de layout pensado para atender boas práticas de acessibilidade. 
        Esse projeto demonstra seu compromisso com a usabilidade universal e com o desenvolvimento ético de software, onde todos os usuários são considerados.`,
        tags: [
            {label: "Javascript", backgroundColor: "rgb(2 132 199 / 0.2)", color: "rgb(56 189 248 / var(--tw-text-opacity, 1))"},
            {label: "HTML & CSS3", backgroundColor: "rgb(234 88 12 / 0.2)", color: "rgb(251 146 60 / var(--tw-text-opacity, 1))"},
            {label: "Lit Element", backgroundColor: "rgb(37 99 235 / 0.2)", color: "rgb(96 165 250 / var(--tw-text-opacity, 1))"},
            {label: "Vite", backgroundColor: "rgb(202 138 4 / 0.2)", color: "rgb(250 204 21 / var(--tw-text-opacity, 1))"}
        ],
        sourceDemo: "https://acessibilidade-sage-pi.vercel.app/",
        sourceGit: "https://github.com/LeonardoLAraujo/Acessibilidade",
    },
    {
        iframe: html`<iframe width="560" allow="compute-pressure" height="315" src="https://www.youtube.com/embed/phJ--aDKUms?si=mCOSx_fY8U65Q_pD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: "🥊 FIGHTERS-IN-VILA",
        description: `FIGHTERS-IN-VILA é um projeto experimental focado em mecânicas de combate, interatividade visual e ambientação imersiva. 
        Ele mistura elementos de jogo e narrativa para criar uma experiência onde os “lutadores” interagem dentro de um cenário com estilo próprio. 
        O repositório no GitHub reúne código, assets visuais e lógica de comportamento dos personagens.`,
        tags: [
            {label: "Javascript", backgroundColor: "rgb(2 132 199 / 0.2)", color: "rgb(56 189 248 / var(--tw-text-opacity, 1))"},
            {label: "HTML & CSS3", backgroundColor: "rgb(234 88 12 / 0.2)", color: "rgb(251 146 60 / var(--tw-text-opacity, 1))"},
            {label: "Lit Element", backgroundColor: "rgb(37 99 235 / 0.2)", color: "rgb(96 165 250 / var(--tw-text-opacity, 1))"},
            {label: "Vite", backgroundColor: "rgb(202 138 4 / 0.2)", color: "rgb(250 204 21 / var(--tw-text-opacity, 1))"}
        ],
        sourceDemo: "https://figthers-in-vila.vercel.app/",
        sourceGit: "https://github.com/LeonardoLAraujo/FIGTHERS-IN-VILA",
    },
    {
        iframe: html`<iframe width="560" height="315" src="https://www.youtube.com/embed/RiQhsizfJGQ?si=f-LbLVqXBVDZRcJC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        title: "🎥 Meu Portfólio",
        description: ``,
        tags: [
            {label: "Typescript", backgroundColor: "rgb(2 132 199 / 0.2)", color: "rgb(56 189 248 / var(--tw-text-opacity, 1))"},
            {label: "HTML & CSS3", backgroundColor: "rgb(234 88 12 / 0.2)", color: "rgb(251 146 60 / var(--tw-text-opacity, 1))"},
            {label: "Lit Element", backgroundColor: "rgb(37 99 235 / 0.2)", color: "rgb(96 165 250 / var(--tw-text-opacity, 1))"},
            {label: "NodeJs", backgroundColor: "rgb(22 163 74 / 0.2)", color: "rgb(74 222 128 / var(--tw-text-opacity, 1))"},
            {label: "Vite", backgroundColor: "rgb(202 138 4 / 0.2)", color: "rgb(250 204 21 / var(--tw-text-opacity, 1))"},
            {label: "FireBase", backgroundColor: "rgb(75 85 99 / 0.2)", color: "rgb(156 163 175 / var(--tw-text-opacity, 1))"},
        ],
        sourceDemo: "https://portfolio-leonardo-leal.vercel.app/",
        sourceGit: "https://github.com/LeonardoLAraujo/my-portfolio",
    },
];