const perguntas = [
    {
      pergunta: "O que significa a sigla ESG?",
      respostas: [
        "Earning, Saving, Generating",
        "Environmental, Social, Governance",
        "Energy, Sustainability, Growth"
      ],
      correta: 1 // Environmental, Social, Governance
    },
    {
      pergunta: "Qual dos seguintes fatores NÃO está associado ao critério 'Social' do ESG?",
      respostas: [
        "Direitos humanos",
        "Diversidade e inclusão",
        "Eficiência energética"
      ],
      correta: 2 // Eficiência energética
    },
    {
      pergunta: "O que é governança corporativa no contexto do ESG?",
      respostas: [
        "A gestão eficaz dos recursos naturais",
        "O compromisso com a transparência e a ética nos negócios",
        "A promoção da igualdade de gênero no local de trabalho"
      ],
      correta: 1 // O compromisso com a transparência e a ética nos negócios
    },
    {
      pergunta: "Qual é o objetivo principal do investimento sustentável de acordo com o ESG?",
      respostas: [
        "Maximizar o retorno financeiro a curto prazo",
        "Promover o desenvolvimento econômico exclusivamente",
        "Gerar impacto social e ambiental positivo além de retornos financeiros"
      ],
      correta: 2 // Gerar impacto social e ambiental positivo além de retornos financeiros
    },
    {
      pergunta: "O que é um critério ambiental no contexto do ESG?",
      respostas: [
        "A promoção da diversidade no local de trabalho",
        "A gestão eficaz dos recursos naturais",
        "A transparência na divulgação de informações financeiras"
      ],
      correta: 1 // A gestão eficaz dos recursos naturais
    },
    {
      pergunta: "Quais são os três pilares principais do ESG?",
      respostas: [
        "Economia, Sustentabilidade, Governança",
        "Ecologia, Sociedade, Governo",
        "Ambiental, Social, Governança"
      ],
      correta: 2 // Ambiental, Social, Governança
    },
    {
      pergunta: "Qual das seguintes atividades está alinhada com os princípios do ESG?",
      respostas: [
        "Descartar resíduos químicos em um rio próximo",
        "Reduzir as emissões de carbono e adotar práticas sustentáveis",
        "Ignorar a diversidade de gênero na contratação de funcionários"
      ],
      correta: 1 // Reduzir as emissões de carbono e adotar práticas sustentáveis
    },
    {
      pergunta: "O que é uma métrica de 'governança' no contexto do ESG?",
      respostas: [
        "O número de produtos vendidos pela empresa",
        "A diversidade étnica dos funcionários",
        "A composição do conselho de administração e sua independência"
      ],
      correta: 2 // A composição do conselho de administração e sua independência
    },
    {
      pergunta: "Por que as empresas estão cada vez mais interessadas em adotar princípios ESG?",
      respostas: [
        "Para aumentar a desigualdade social",
        "Para reduzir o escrutínio público",
        "Para atrair investidores preocupados com questões sociais e ambientais"
      ],
      correta: 2 // Para atrair investidores preocupados com questões sociais e ambientais
    },
    {
      pergunta: "O que significa 'S' no ESG?",
      respostas: [
        "Sustentabilidade",
        "Segurança",
        "Serviços"
      ],
      correta: 1 // Sustentabilidade
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length 
  const mostratTotal = document.querySelector('#acertos span')
  mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta 
     corretas.delete(item)
     if(estaCorreta) {
       corretas.add(item)
     }
   mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas
   
    }
    
    
    
    
    quizItem.querySelector('dl').appendChild(dt)
  
  
  
  }
  
  quizItem.querySelector('dl dt').remove()
  
  //Coloca a pergunta na tela
  quiz.appendChild(quizItem) 
  
  }
  