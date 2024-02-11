const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação para estilização de páginas web.",
            "Um framework para desenvolvimento de aplicativos móveis.",
            "Uma linguagem de programação utilizada para tornar as páginas web interativas."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do 'console.log()' em JavaScript?",
        respostas: [
            "Exibir um prompt na tela solicitando entrada do usuário.",
            "Imprimir informações no console do navegador.",
            "Alterar o estilo de elementos HTML."
        ],
        correta: 1
    },
    {
        pergunta: "Qual destes não é um tipo de dado em JavaScript?",
        respostas: [
            "String",
            "Boolean",
            "Float"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Uma função que executa repetidamente um bloco de código.",
            "Um objeto que armazena coleções de elementos de dados.",
            "Um método para declarar variáveis em JavaScript."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '&&' em JavaScript?",
        respostas: [
            "Concatenar strings.",
            "Verificar se uma condição ou outra é verdadeira.",
            "Verificar se duas condições são verdadeiras."
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um elemento HTML.",
            "Um loop que executa um bloco de código várias vezes.",
            "Um bloco de código reutilizável que pode ser executado várias vezes."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o operador de comparação para 'igualdade estrita' em JavaScript?",
        respostas: [
            "==",
            "===",
            "="
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma condição 'if' em JavaScript?",
        respostas: [
            "Um loop que executa um bloco de código repetidamente enquanto uma condição é verdadeira.",
            "Um operador usado para atribuir um valor a uma variável.",
            "Uma estrutura de controle que executa um bloco de código se uma condição especificada for verdadeira."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a sintaxe correta para um comentário de uma única linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "' Este é um comentário"
        ],
        correta: 0
    },
    {
        pergunta: "O que é DOM em JavaScript?",
        respostas: [
            "Um método para criar funções anônimas.",
            "Um tipo de dado para armazenar valores booleanos.",
            "Uma interface que representa documentos HTML e XML, permitindo que scripts manipulem sua estrutura e conteúdo."
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');
const mostrarTotal = document.querySelector('#acertos span')

const corretas = new Set()
const totalDePerguntas = perguntas.length


document.querySelector('#acertos')

//loop para criar as perguntas
for(const item of perguntas) {
    //clona a template
    const quizItem = template.content.cloneNode(true);
    //altera o texto da pergunta
    quizItem.querySelector('h3').textContent = item.pergunta;
    
    for(const resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta;
            corretas.delete(item)
            if (estaCorreta){
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
        }
        
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    
    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela (pega o template clonado e joga na div visível)
    quiz.appendChild(quizItem);
}