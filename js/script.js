
let btnMenu = document.getElementById("btn-menu")
let menu = document.getElementById("menu-mobile")
let overlay = document.getElementById("overlay-menu")

btnMenu.addEventListener("click", ()=>{
 menu.classList.add("abrir-menu")
})

menu.addEventListener("click", ()=>{
    menu.classList.remove("abrir-menu")
   })
overlay.addEventListener("click", ()=>{
    menu.classList.remove("abrir-menu")
   })



window.addEventListener("scroll", function(){
    let header = this.document.querySelector("#header")
    header.classList.toggle('rolagem', window.scrollY > 0)
  })
var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'sim'
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}


// Função para ocultar a tela de carregamento após o carregamento da página
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const pageContent = document.getElementById('page-content');
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';  // Esconde a tela de carregamento
        pageContent.style.display = 'block';  // Mostra o conteúdo da página
    }, 1500);  // Sincroniza com a duração da animação da moeda
}
document.addEventListener("DOMContentLoaded", function () {
    const frases = [
        "Bem-vindo ao porCOINS",
        "Educação de qualidade",
        "Cursos para os jovens"
    ];

    const imagens = [
       "imagens/1frase_topo.png",
        "imagens/2frase_topo.png",
        "imagens/teens_topo.png"
    ];
   //texto
    let frasesindex = 0;
    let caractersfrases = 0;
    let sedeletar = false;
    const velocidade = 80; // Velocidade da digitação
    const deletavelocidade = 50; // Velocidade de deletar
    const pausafrases = 2043; // Pausa entre as frases
    const elementotexto = document.getElementById("dynamicText");
    const elementImagem = document.getElementById("animatedImage");

    function typeWriter() {
        const veuvelocidade = frases[frasesindex];
        if (!sedeletar) {
            elementotexto.textContent += veuvelocidade.charAt(caractersfrases);
            caractersfrases++;
            if (caractersfrases === veuvelocidade.length) {
                sedeletar = true;
                setTimeout(typeWriter, pausafrases);
            } else {
                setTimeout(typeWriter, velocidade);
            }
        } else {
            elementotexto.textContent = veuvelocidade.substring(0, caractersfrases - 1);
            caractersfrases--;
            if (caractersfrases === 0) {
                sedeletar = false;
                frasesindex = (frasesindex + 1) % frases.length;
                //fim do texto
                // Troca a imagem
                elementImagem.src = imagens[frasesindex];

                setTimeout(typeWriter, velocidade);
            } else {
                setTimeout(typeWriter, deletavelocidade);
            }
        }
    }

    // Inicia o efeito de digitação
    typeWriter();
});
VanillaTilt.init(document.querySelectorAll(".cardd"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});




let currentTitleIndex = 0;
const titleElement = document.getElementById("scroll-title");

function changeTitle() {
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    titleElement.textContent = titles[currentTitleIndex];
}

// Muda o título a cada 3 segundos (3000 ms)
setInterval(changeTitle, 3000);
function changeTitle() {
    titleElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        titleElement.textContent = titles[currentTitleIndex];
        titleElement.style.opacity = 1; // Fade in
    }, 500); // Tempo de fade out
}



// Hide sections initially
document.addEventListener('DOMContentLoaded', function() {
    const timeSection = document.getElementById('time');
    const inspSection = document.getElementById('Inspiracao');
    const oferecemosSection = document.getElementById('oferecemos');

    // Set initial display to none
    timeSection.style.display = 'none';
    inspSection.style.display = 'none';
    oferecemosSection.style.display = 'none'; // Inicialmente oculta a seção "oferecemos"
});

// Toggle functionality for the time section
document.getElementById('btn-time').addEventListener('click', function() {
    const timeSection = document.getElementById('time');
    if (timeSection.style.display === 'block') {
        timeSection.style.display = 'none';
    } else {
        timeSection.style.display = 'block';
    }
});

// Toggle functionality for the inspiration section
document.getElementById('inspiracao-btn').addEventListener('click', function() {
    const inspSection = document.getElementById('Inspiracao');
    if (inspSection.style.display === 'none' || inspSection.style.display === '') {
        inspSection.style.display = 'block'; // Open the section
    } else {
        inspSection.style.display = 'none'; // Close the section
    }
});

// Toggle functionality for the "oferecemos" section
document.getElementById('oferecemos-btn').addEventListener('click', function() {
    const oferecemosSection = document.getElementById('oferecemos');
    if (oferecemosSection.style.display === 'none' || oferecemosSection.style.display === '') {
        oferecemosSection.style.display = 'block'; // Open the section
    } else {
        oferecemosSection.style.display = 'none'; // Close the section
    }
});


//ERRO
window.addEventListener('offline', function() {
    window.location.href = 'error.html'; // Redireciona quando estiver offline
});
function reportError() {
           
    alert('Erro reportado com sucesso!'); // Simulação de envio
}

