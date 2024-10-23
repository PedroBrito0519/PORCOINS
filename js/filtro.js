document.getElementById('filterForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const option = document.getElementById('option').value;

    if (option) {
        document.getElementById('filterForm').style.display = 'none';
        if (option === "materiais.html") {
            showMaterialQuestion();
        } else if (option === "links.html") {
            window.location.href = option;
        } else {
            showNextQuestion();
        }
    } else {
        alert('Por favor, selecione uma opção.');
    }
});

let userResponses = {
    subject: '',
    experience: ''
};

function showNextQuestion() {
    const questionContainer = document.createElement('div');
    questionContainer.className = 'container_filtro'; 
    document.body.appendChild(questionContainer);

    let questionText = 'O que você pretende aprender sobre Educação Financeira?';
    let nextOptions = 'Finanças Pessoais, Orçamento Familiar, Investimentos, Gastos Conscientes';

    questionContainer.innerHTML = `
        <h1>${questionText}</h1>
        <label for="nextOption">Escolha uma opção:</label>
        <select id="nextOption">
            <option value="">Selecione</option>
            ${nextOptions.split(', ').map(option => `<option value="${option}">${option}</option>`).join('')}
        </select>
        <button id="submitResponse">Enviar Resposta</button>
    `;

    document.getElementById('submitResponse').addEventListener('click', function () {
        const selectedNextOption = document.getElementById('nextOption').value;

        if (selectedNextOption) {
            questionContainer.style.display = 'none';
            userResponses.subject = selectedNextOption; // Salva a resposta do usuário
            showExperienceQuestion(); // Chama a próxima pergunta
        } else {
            alert('Por favor, selecione uma opção.');
        }
    });
}

function showExperienceQuestion() {
    const questionContainer = document.createElement('div');
    questionContainer.className = 'container_filtro';
    document.body.appendChild(questionContainer);

    let questionText = 'Qual é o seu nível de experiência?';
    let nextOptions = 'Iniciante, Médio, Alto';

    questionContainer.innerHTML = `
        <h1>${questionText}</h1>
        <label for="experienceOption">Escolha uma opção:</label>
        <select id="experienceOption">
            <option value="">Selecione</option>
            ${nextOptions.split(', ').map(option => `<option value="${option}">${option}</option>`).join('')}
        </select>
        <button id="submitExperienceResponse">Enviar Resposta</button>
    `;

    document.getElementById('submitExperienceResponse').addEventListener('click', function () {
        const selectedExperienceOption = document.getElementById('experienceOption').value;

        if (selectedExperienceOption) {
            questionContainer.style.display = 'none';
            userResponses.experience = selectedExperienceOption; // Salva a resposta do usuário
            displayCourseOption(); // Chama a função para mostrar a opção do curso
        } else {
            alert('Por favor, selecione uma opção.');
        }
    });
}

function displayCourseOption() {
    const courseContainer = document.createElement('div');
    courseContainer.className = 'container_filtro';
    document.body.appendChild(courseContainer);

    let courseLink = '';
    let courseName = '';

    switch (userResponses.subject) {
        case 'Finanças Pessoais':
            courseLink = 'Financias.html';
            courseName = 'Financias Pessoais';
            break;
        case 'Orçamento Familiar':
            courseLink = 'Orcamento.html';
            courseName = 'Orçamento Familiar';
            break;
        case 'Investimentos':
            courseLink = 'Investimento.html';
            courseName = 'Investimentos';
            break;
        case 'Gastos Conscientes':
            courseLink = 'Gastos.html';
            courseName = 'Gastos Conscientes';
            break;
        default:
            courseName = 'Curso Indisponível';
            break;
    }

    courseContainer.innerHTML = `
        <h1>Você será direcionado para:</h1>
        <p><a href="${courseLink}" target="_blank">${courseName}</a></p>
        <button id="finish">Concluir</button>
    `;

    document.getElementById('finish').addEventListener('click', function () {
        alert('Obrigado por participar! Você será redirecionado para o curso.');
        window.location.href = courseLink; // Redireciona para o link ao clicar em "Concluir"
    });
}


    document.getElementById('finish').addEventListener('click', function () {
        alert('Obrigado por participar! Você será redirecionado para o curso.');
        window.location.href = courseLink;
    });

    showMaterialQuestion(); // Chama a função para mostrar a pergunta sobre materiais


function showMaterialQuestion() {
    const materialContainer = document.createElement('div');
    materialContainer.className = 'container_filtro';
    document.body.appendChild(materialContainer);

    const materialOptions = 'Material 1, Material 2, Material 3, Material 4';

    materialContainer.innerHTML = `
        <h1>Escolha um material:</h1>
        <label for="materialOption">Escolha uma opção:</label>
        <select id="materialOption">
            <option value="">Selecione</option>
            ${materialOptions.split(', ').map(option => `<option value="${option}">${option}</option>`).join('')}
        </select>
        <button id="submitMaterialResponse">Enviar Resposta</button>
    `;

    document.getElementById('submitMaterialResponse').addEventListener('click', function () {
        const selectedMaterialOption = document.getElementById('materialOption').value;

        if (selectedMaterialOption) {
            materialContainer.style.display = 'none';
            displayMaterialLink(selectedMaterialOption);
        } else {
            alert('Por favor, selecione uma opção.');
        }
    });
}

function displayMaterialLink(selectedMaterialOption) {
    const materialLinkContainer = document.createElement('div');
    materialLinkContainer.className = 'container_filtro';
    document.body.appendChild(materialLinkContainer);

    let materialLink = '';

    switch (selectedMaterialOption) {
        case 'Material 1':
        case 'Material 2':
        case 'Material 3':
        case 'Material 4':
            materialLink = 'materiais.html'; // Modifique conforme necessário
            break;
        default:
            materialLink = '#';
            break;
    }

    materialLinkContainer.innerHTML = `
        <h1>Você será direcionado para:</h1>
        <p><a href="${materialLink}" target="_blank">${materialLink}</a></p>
        <button id="finishMaterial">Concluir</button>
    `;

    document.getElementById('finishMaterial').addEventListener('click', function () {
        alert('Obrigado por participar! Você será redirecionado para o material.');
        window.location.href = materialLink;
    });
}





window.addEventListener('offline', function() {
    window.location.href = 'error.html'; // Redireciona quando estiver offline
});
function reportError() {
           
    alert('Erro reportado com sucesso!'); // Simulação de envio
}

const glowEffect = document.querySelector('.glow-effect');

// A função de movimento do mouse para criar o efeito de brilho
document.addEventListener('mousemove', (event) => {
    glowEffect.style.left = `${event.pageX - 75}px`; // Centraliza o brilho
    glowEffect.style.top = `${event.pageY - 75}px`; // Centraliza o brilho
    glowEffect.style.opacity = '1'; // Torna o brilho visível

    // Após 0.2 segundos, remove a opacidade
    setTimeout(() => {
        glowEffect.style.opacity = '0';
    }, 200);
});

// Cria pequenos pixels que seguem o movimento do mouse
document.addEventListener('mousemove', (e) => {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.left = `${e.clientX}px`;
    pixel.style.top = `${e.clientY}px`;
    document.body.appendChild(pixel);

    // Remove o pixel após a animação
    setTimeout(() => {
        pixel.remove();
    }, 500); // Tempo para o pixel desaparecer
});
