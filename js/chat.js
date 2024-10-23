// Mostra ou esconde o chat quando a bolinha é clicada e exibe as opções iniciais
document.getElementById('chat-button').addEventListener('click', function () {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer.style.display === 'none') {
        chatContainer.style.display = 'block';
        showInitialopcoes(); // Exibe as opções quando o chat é aberto
    } else {
        chatContainer.style.display = 'none';
    }
});

// Função para exibir opções iniciais assim que o chat é ativado
function showInitialopcoes() {
    const mensagem = 'Olá! Como posso te ajudar hoje? Clique em uma das opções abaixo:';
    const opcoes = ['📚 Cursos', '🎯 Missão', '👥 Nossa equipe', '📞 Contato'];

    addMessage(mensagem, 'bot');

    opcoes.forEach(option => {
        addOptionButton(option);
    });
}

// Função para lidar com o clique em uma opção
function handleOptionClick(opcaotexto) {
    addMessage(opcaotexto, 'user'); // Adiciona a mensagem do usuário

    if (opcaotexto === '👥 Nossa equipe') {
        showTeamopcoes(); // Mostra as opções da equipe
    } else if (opcaotexto === 'Gustavo') {
        const gustavomensagem = 'Gustavo lorem pisum lorem lorem lorem lorem ipsum lajsjsajasdgr.';
        setTimeout(() => addMessage(gustavomensagem, 'bot'), 500);
    } else if (opcaotexto === 'Felipe') {
        const felipemensagem = 'Olá! Sou Felipe Oliveira, tenho 15 anos e sou um programador iniciante apaixonado por tecnologia. Comecei a aprender programação com HTML, CSS e JavaScript e adoro criar pequenos projetos, como jogos e sites. Estou sempre em busca de novos desafios e sonho em trabalhar em uma grande empresa de tecnologia no futuro!';
        setTimeout(() => addMessage(felipemensagem, 'bot'), 500);
    } else if (opcaotexto === 'Guilherme') {
        const guilhermemensagem = 'Meu nome é gustavo barros e estou curssando o primeuro ano do ensino medio tecnico na fiap school busco aprimorar minhas abilidades como programador e desenvolvedor front end pretendo em breve entrar no mercado de trabalho';
        setTimeout(() => addMessage(guilhermemensagem, 'bot'), 500);
    } else if (opcaotexto === 'Pedro') {
        const pedromensagem = 'Meu nome é Pedro Brito, Sou um desenvolvedor Front-end/Back-end iniciante, estudo na FIAP SCHOOL no 1 ano do ensino medio, busco a todo momento evoluir meu aprendizado e progredir cada vez mais em minha carreira como programador. ';
        setTimeout(() => addMessage(pedromensagem, 'bot'), 500);
    } else if (opcaotexto === '📞 Contato') {
        // Exibe as opções de contato
        showcontatoopcoes();
    } else if (opcaotexto === '📚 Cursos') {
        // Exibe opções de cursos com 8 vídeos
        showCourseVideos();
    } else if (opcaotexto === '🎯 Missão') {
        const missionMessage = 'Nossa missão é ajudar as pessoas a alcançar a liberdade financeira com estratégias práticas e acessíveis.';
        setTimeout(() => addMessage(missionMessage, 'bot'), 500);
    } else {
        const defaultMessage = 'Desculpe, não entendi sua solicitação.';
        setTimeout(() => addMessage(defaultMessage, 'bot'), 500);
    }
}

// Função para exibir as opções da equipe
function showTeamopcoes() {
    const teamMessage = 'Aqui estão os membros da nossa equipe. Clique em um nome para saber mais:';
    const teamopcoes = ['Gustavo', 'Felipe', 'Guilherme', 'Pedro'];

    addMessage(teamMessage, 'bot');

    teamopcoes.forEach(option => {
        addOptionButton(option); // Cria os botões para cada membro da equipe
    });
}

// Função para exibir as opções de contato
function showcontatoopcoes() {
    const contatomensagem = 'Escolha uma forma de contato:';
    const contatoopcoes = ['📞 Telefone', '📧 Email'];

    addMessage(contatomensagem, 'bot');

    contatoopcoes.forEach(option => {
        addOptionButton(option); // Cria os botões de contato
    });
}

// Função para exibir os vídeos dos cursos
function showCourseVideos() {
    const courseMessage = 'Aqui estão 8 vídeos de educação financeira. Clique em um para assistir:';
    const videoopcoes = ['Vídeo 1', 'Vídeo 2', 'Vídeo 3', 'Vídeo 4', 'Vídeo 5', 'Vídeo 6', 'Vídeo 7', 'Vídeo 8'];

    addMessage(courseMessage, 'bot');

    videoopcoes.forEach(option => {
        addOptionButton(option); // Cria os botões dos vídeos
    });
}

// Função para enviar mensagem
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;  // Evita enviar mensagens vazias

    addMessage(userInput, 'user');
    document.getElementById('user-input').value = '';  // Limpa o campo de entrada

    // Responder com base no conteúdo do site
    const botResponse = generateResponse(userInput);
    setTimeout(() => addMessage(botResponse, 'bot'), 500); // Resposta do bot com pequeno atraso
}

// Função para adicionar mensagem ao chat
function addMessage(message, sender) {
    const chatBox = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Mantém o chat rolado para a última mensagem
}

// Função para adicionar botões de opção no chat
function addOptionButton(opcaotexto) {
    const chatBox = document.getElementById('messages');
    const optionElement = document.createElement('div');
    optionElement.className = 'option-button';
    optionElement.textContent = opcaotexto;
    optionElement.addEventListener('click', () => handleOptionClick(opcaotexto)); // Define o evento de clique para a opção
    chatBox.appendChild(optionElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Mantém o chat rolado para a última mensagem
}

// Função para gerar resposta padrão com base no conteúdo
function generateResponse(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput.includes('curso')) {
        return 'Oferecemos cursos de educação financeira focados em poupança, investimento e organização financeira.';
    } else if (userInput.includes('missão')) {
        return 'Nossa missão é ajudar as pessoas a alcançar a liberdade financeira com estratégias práticas e acessíveis.';
    } else if (userInput.includes('equipe')) {
        return 'Nosso time é composto por profissionais qualificados e com ampla experiência em finanças e educação.';
    } else if (userInput.includes('contato')) {
        return 'Para entrar em contato, visite nossa página de contato ou envie um e-mail para contato@porcoins.com.';
    } else {
        return 'Desculpe, não consegui entender sua pergunta. Tente perguntar sobre nossos cursos, missão, contato ou equipe.';
    }
}

// Adiciona o evento de tecla Enter para enviar mensagem
document.getElementById('user-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});


const div = document.getElementById('chat-container');
let isDragging = false;
let offsetX, offsetY;

div.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - div.getBoundingClientRect().left;
    offsetY = e.clientY - div.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        div.style.left = (e.clientX - offsetX) + 'px';
        div.style.top = (e.clientY - offsetY) + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});



//
window.addEventListener('offline', function() {
    window.location.href = 'error.html'; // Redireciona quando estiver offline
});
function reportError() {
           
    alert('Erro reportado com sucesso!'); // Simulação de envio
}

