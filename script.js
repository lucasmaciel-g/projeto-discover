function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector(".avatar img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/lucas-light.jpeg")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/lucas-dark.jpeg")
  }
}