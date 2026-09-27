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
renderTecnologias("HTML", "html")
renderTecnologias("CSS", "css")
renderTecnologias("JavaScript", "javascript")
