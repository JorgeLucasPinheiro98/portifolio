// Dicionário com todas as traduções do site
const translations = {
    pt: {
        nav_about: "Sobre",
        nav_tech: "Tecnologias",
        nav_projects: "Projetos",
        nav_contacts: "Contatos",
        nav_home: "Home",
        header_tagline: "Desenvolvedor Full-Stack Junior",
        header_description: "Construindo aplicações web do zero, focando em lógica de backend limpa e interfaces funcionais.",
        contact_email: "E-mail",
        section_about_title: "Sobre",
        section_about_text: "Sou Jorge Lucas, formado em Engenharia de Software, pai, marido e entusiasta da tecnologia. Após uma jornada de disciplina e trabalho em equipe no Exército Brasileiro, encontrei no desenvolvimento de software o caminho para transformar ideias em soluções reais — e decidi seguir esse sonho.<br><br>Hoje, estou em transição de carreira, me dedicando integralmente ao universo da programação, com foco no desenvolvimento full stack. Tenho conhecimentos sólidos tanto em front-end quanto em back-end, buscando sempre unir lógica, performance e uma boa experiência para o usuário.",
        section_tech_title: "Tecnologias",
        section_projects_title: "Trabalho",
        project_pomodoro_desc: "Relógio pomodoro que marca os intervalos e avisa sobre os ciclos de trabalho.",
        project_finances_title: "Finanças Pessoais",
        project_finances_desc: "Aplicativo completo de finanças, com gráfico e balanço mensal de juros e rendimentos.",
        view_repo: "Ver repositório &rarr;"
    },
    en: {
        nav_about: "About",
        nav_tech: "Technologies",
        nav_projects: "Projects",
        nav_contacts: "Contact",
        nav_home: "Home",
        header_tagline: "Junior Full-Stack Developer",
        header_description: "Building web applications from scratch, focusing on clean backend logic and functional interfaces.",
        contact_email: "Email",
        section_about_title: "About",
        section_about_text: "I am Jorge Lucas, holding a degree in Software Engineering, a father, husband, and tech enthusiast. After a journey of discipline and teamwork in the Brazilian Army, I discovered software development as the path to transform ideas into real solutions — and decided to pursue this dream.<br><br>Currently in a career transition, I am fully dedicated to the programming universe, focusing on full-stack development. I have solid knowledge in both front-end and back-end, always aiming to combine logic, performance, and a great user experience.",
        section_tech_title: "Technologies",
        section_projects_title: "Work",
        project_pomodoro_desc: "Pomodoro timer that tracks intervals and alerts you about work cycles.",
        project_finances_title: "Personal Finances",
        project_finances_desc: "Complete financial application featuring charts and monthly yield balances.",
        view_repo: "View repository &rarr;"
    },
    fr: {
        nav_about: "À propos",
        nav_tech: "Technologies",
        nav_projects: "Projets",
        nav_contacts: "Contact",
        nav_home: "Accueil",
        header_tagline: "Développeur Full-Stack Junior",
        header_description: "Création d'applications web de zéro, axée sur une logique backend propre et des interfaces fonctionnelles.",
        contact_email: "E-mail",
        section_about_title: "À propos",
        section_about_text: "Je suis Jorge Lucas, diplômé en ingénierie logicielle, père, époux et passionné de technologie. Après un parcours de discipline et de travail d'équipe dans l'Armée Brésilienne, j'ai trouvé dans le développement logiciel le moyen de transformer des idées en solutions réelles.<br><br>Aujourd'hui en reconversion professionnelle, je me consacre entièrement à la programmation full-stack, alliant logique, performance et expérience utilisateur.",
        section_tech_title: "Technologies",
        section_projects_title: "Projets",
        project_pomodoro_desc: "Minuteur Pomodoro qui marque les pauses et alerte sur les cycles de travail.",
        project_finances_title: "Finances Personnelles",
        project_finances_desc: "Application financière complète avec graphiques et bilan mensuel des rendements.",
        view_repo: "Voir le dépôt &rarr;"
    }
};

// Array de tecnologias
const nameTecnologias = [
    { name: "HTML", nameImagem: "html" },
    { name: "CSS", nameImagem: "css" },
    { name: "JavaScript", nameImagem: "javascript" },
    { name: "TypeScript", nameImagem: "typescript" },
    { name: "Node.js", nameImagem: "node" }
];

// Função que altera o idioma dinamicamente
function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : lang);

    // Atualiza os textos dos elementos estáticos que possuem data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Atualiza o estado de destaque nos botões de idioma
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        if (btn.getAttribute('data-lang-btn') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Função que cria e insere cada card de tecnologia
function renderTecnologias(name, nameImagem) {
    const element = document.getElementById('card_tecnologias');
    if (!element) return;

    const div = document.createElement("div");
    const p = document.createElement("p");
    const img = document.createElement("img");

    p.innerText = name;
    p.className = "text_logo";

    img.src = `imagens/logo_${nameImagem}.png`;
    img.alt = `Logo ${name}`;
    img.className = "logo_tec";

    div.className = "container_logos";
    div.appendChild(img);
    div.appendChild(p);

    element.appendChild(div);
}

// Atualiza o texto do botão de tema conforme o tema ativo
function updateThemeButton() {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;

    const currentTheme = document.documentElement.getAttribute('data-theme');
    btn.innerText = currentTheme === 'dark' ? 'Light' : 'Dark';
}

// Função para alternar entre Dark e Light Mode
function changeTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    updateThemeButton();
}

// Função principal disparada pelo onload do body
function renderPage() {
    // 1. Atualiza o estado visual do botão de tema
    updateThemeButton();

    // 2. Aplica o idioma salvo ou o padrão ('pt')
    const savedLang = localStorage.getItem('lang') || 'pt';
    changeLanguage(savedLang);

    // 3. Renderiza as tecnologias no DOM
    const element = document.getElementById('card_tecnologias');
    if (element) {
        element.innerHTML = ''; // Limpa antes de renderizar
        nameTecnologias.forEach(tec => renderTecnologias(tec.name, tec.nameImagem));
    }
}