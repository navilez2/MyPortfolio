function scrollToSection(target) {
    const slideElement = document.getElementById(target); // ID do slide para o qual você deseja rolar
    slideElement.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até o slide
}
/* function Aviso(type, text) {
    const alert = document.createElement('div');
    let estrutura = '<div class="alert alert-{type} position-fixed top-0 w-100 text-md-center alert-dismissible fade show" role="alert">{text}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    estrutura = estrutura.replace(/{(nome|idade)}/g,)


    alert.innerHTML = estrutura
} */
