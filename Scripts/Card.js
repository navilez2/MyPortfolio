var DivCont = 0;
    function addCard(id, title, subTitle, srcImage, divBaseButtonName) {
        // Cria os elementos
        var divCard = document.createElement('div');
        var divCardBody = document.createElement('div');
        var divCardBodyText = document.createElement('div');
        var baseDivButton = document.createElement('button');
        var closeButton = document.createElement('a');
        var infoButton = document.createElement('a');
        var Title = document.createElement('h5');
        var SubTitle = document.createElement('p');
        var userID = document.createElement('input');
        var imageElement = document.createElement('img');

        // Obtém a referência à div onde deseja adicionar o HTML
        var cardContainer = document.getElementById('cardContainer');

        //Configura as Divs
        componentConfig(divCard, 'card_#' + DivCont, 'card', 'card cardConfig');
        componentConfig(divCardBody, 'cardBody', '', 'card-body cardBodyConfig');
        componentConfig(divCardBodyText, '', 'cardBodyText', 'cardBodyText custom-scrollbar');

        //Configura os Inputs
        componentConfig(userID, '', 'userID', 'hiddenInput', '', 'hidden', id);

        //Configura as Imagens
        componentConfig(imageElement, '', '', 'card - img - top', '', '', '', srcImage, 'userImage');


        //Configura os Titulos
        componentConfig(Title, 'cardTitle', '', 'card-title', title);

        //Configura os Paragrafos
        componentConfig(SubTitle, 'cardText', '', 'card-text', subTitle);

        //Configura os botoes
        componentConfig(closeButton, 'closeDiv_#' + DivCont, '', 'btn-close position-absolute btnClose');
        componentConfig(infoButton, 'infoDiv_#' + DivCont, '', 'btn position-absolute btnInfo');
        componentConfig(baseDivButton, 'deletDiv_#' + DivCont, '', 'btn btn-dark btnRate', divBaseButtonName);


        //Adiciona eventos
        closeButton.addEventListener('click', function () {
            limparDiv(closeButton.id);
        });

        baseDivButton.addEventListener('click', function () {
            abrirModal(userID.value, Title.textContent, gerarNumeroAleatorio(10), '', '');
        });

        imageElement.onerror = function () {
            this.src = 'images/noPhoto.png';
            this.alt = 'ErrorImage';
        };

        //Adiciona funções aos componentes html
        cardContainer.getCardCollection = function () {
            return document.querySelectorAll("#" + cardContainer.id + " > *");
        }
        divCard.getID = function () {
            return userID.value;
        }
        divCard.getTitle = function () {
            return Title.textContent;
        }
        divCard.getSubTitle = function () {
            return SubTitle.textContent;
        }


        // Adiciona os elementos filhos à div "cardContainer"
        cardContainer.appendChild(divCard);

        // Adiciona os elementos filhos à div "divCard"
        divCard.appendChild(imageElement);
        divCard.appendChild(closeButton);
        divCard.appendChild(divCardBody);


        // Adiciona os elementos filhos à div "divCardBody"
        divCardBody.appendChild(divCardBodyText);
        divCardBody.appendChild(infoButton);
        divCardBody.appendChild(baseDivButton);
        divCardBody.appendChild(userID);

        // Adiciona os elementos filhos à div "divCardBodyText"
        divCardBodyText.appendChild(Title);
        divCardBodyText.appendChild(SubTitle);

        DivCont = DivCont + 1;
    }

    //===========FUNÇÃO DE CONFIGURAÇÃO DE COMPONENTES HTML===========
    function componentConfig(component, id, name, className, textContent, type, value, src, alt) {
        component.id = id
        component.name = name
        component.className = className
        component.textContent = textContent
        component.type = type
        component.value = value
        component.src = src
        component.alt = alt
    }
    //==============================================================
    function limparDiv(element) {

        var botaoApagar = document.getElementById(element);
        var divCard = botaoApagar.parentNode;

        cardContainer.removeChild(divCard);

    }

    var nomes = [
        'Carlos', 'Luisa', 'Rafael', 'Juliana', 'Gustavo',
        'Isabela', 'Fernando', 'Amanda', 'Rodrigo', 'Camila',
        'Mariana', 'Eduardo', 'Laura', 'Gabriel', 'Sophia',
        'Leonardo', 'Beatriz', 'Lucas', 'Carolina', 'Henrique'
    ];

    var sobrenomes = [
        'Gomes', 'Martins', 'Lima', 'Ferreira', 'Almeida',
        'Rocha', 'Melo', 'Santos', 'Oliveira', 'Silva',
        'Pereira', 'Rodrigues', 'Costa', 'Souza', 'Sousa',
        'Carvalho', 'Pinto', 'Dias', 'Cruz', 'Andrade'
    ];
    var cargos = [
        'Desenvolvedor de Software', 'Engenheiro de Software', 'Analista de Sistemas', 'Arquiteto de Soluções', 'Administrador de Banco de Dados',
        'Gerente de Projetos de TI', 'Especialista em Segurança da Informação', 'Analista de Redes', 'Designer de Interface de Usuário (UI)', 'Designer de Experiência do Usuário (UX)',
        'Especialista em Inteligência Artificial (IA)', 'Analista de Dados', 'Engenheiro de DevOps', 'Administrador de Sistemas', 'Especialista em Cloud Computing',
        'Consultor de TI', 'Especialista em Big Data', 'Especialista em Cibersegurança', 'Gerente de Infraestrutura de TI', 'Especialista em Internet das Coisas (IoT)']

    function gerarNomeAleatorio() {
        var nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
        var sobrenomeAleatorio = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
        return nomeAleatorio + ' ' + sobrenomeAleatorio;
    }
    function gerarCargoAleatorio() {
        var cargoAleatorio = cargos[Math.floor(Math.random() * cargos.length)];

        return cargoAleatorio
    }
    function gerarNumeroAleatorio(max) {
        return Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }

    function abrirModal(id, nome, nota, listaComportamento, observacao) {
        var modal = new bootstrap.Modal(document.getElementById('modalAvaliar'));
        var nomeUsuario = document.getElementById('nomeUsuario');
        var userID = document.getElementById('userID');
        var txtNota = document.getElementById('txtNota');
        var notaAtual = document.getElementById('notaAtual');
        txtNota.value = nota;
        notaAtual.innerHTML = txtNota.value;
        nomeUsuario.textContent = nome;

        modal.show();
    }



    
