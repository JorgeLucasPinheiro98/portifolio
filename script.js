const nameTecnologias = [{
    name: "HTML",
    nameImagem:"html"
},{
    name: "CSS",
    nameImagem:"css"
},{
    name: "Javascript",
    nameImagem:"javascript"
},{
    name: "Typescript",
    nameImagem:"typescript"
},{
    name: "Node",
    nameImagem:"node"
}];

function renderTecnologias(name, nameImagem) {
    const element = document.getElementById('card_tecnologias')
    const div = document.createElement("div");
    const p = document.createElement("p")
    const img = document.createElement("img")
    p.innerText = name
    p.className = "text_logo"
    img.src = `imagens/logo_${nameImagem}.png`
    img.className = "logo_tec"
    div.className = "container_logos";
    div.appendChild(img)
    div.appendChild(p)
    element.appendChild(div)
}

function renderPage() {
    for (let i = 0; i < nameTecnologias.length; i++) {
        renderTecnologias(nameTecnologias[i].name, nameTecnologias[i].nameImagem)
    }
}
