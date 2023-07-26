function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a forma normal.
    img.setAttribute("src", "./assets/avatar.png")
  }
  const img1 = document.querySelector("#profile")
  if (html.classList.toggle("lights")) {
    img.setAttribute("alt", "Foto de Ivan Ítalo no sol")
  } else {
    img.setAttribute("alt", "Foto de Ivan Ítalo")
  }
}
