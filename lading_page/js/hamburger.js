const hamburgerMenu = document.getElementById('navbarNavAltMarkup');

hamburgerMenu.onclick = (e) => {
  const openClose = menu.classList[1]

  if (openClose === 'closed') {
    menu.classList.remove('closed')
    menu.classList.add('opened')
  } 
  else if (openClose === 'opened') {
    menu.classList.add('closed')
    menu.classList.remove('opened')
  }
}
const Linea=document.getElementById('Linea');

Linea.onclick = () => {
    window.location.href = "Linea/index.html";
}
const InicioS=document.getElementById('InicioSesion');

InicioS.onclick = () => {
    window.location.href = "Register/index.html";
}