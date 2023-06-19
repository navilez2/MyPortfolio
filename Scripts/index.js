function scrollToSection(target) {
    const slideElement = document.getElementById(target); // ID do slide para o qual você deseja rolar
    slideElement.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até o slide
}
