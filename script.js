function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("Light")

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a img
     
    if(html.classList.contains('Light')) {
        //se estiver em light mode, adicona a imagem light
        img.setAttribute('src', './assets/assets/avatar-light.png')
    } else{
        //se estiver sem light mode, manter a imagem//
        img.setAttribute('src','./assets/assets/avatar1.png')
    }
}
