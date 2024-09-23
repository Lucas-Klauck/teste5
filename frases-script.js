const frases = [
    "Você não é Google, mas tem tudo o que eu procuro.",
    "Se você fosse uma estrela, seria a mais brilhante de todo o universo.",
    "Cada vez que olho para você, me perco em um universo de beleza.",
    "Se beleza fosse tempo, você seria a eternidade.",
    "Você ilumina qualquer lugar só com seu sorriso.",
    "Se eu fosse o sol, queria brilhar só para você.",
    "Pode até chover lá fora, mas aqui dentro você faz tudo brilhar.",
    "Você é o poema mais bonito que a vida já escreveu.",
    "Não sou fotógrafo, mas posso capturar o seu sorriso no meu coração.",
    "Ao seu lado, qualquer momento se torna especial."
  ];
  
  document.getElementById('generate-btn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    document.getElementById('quote').textContent = frases[randomIndex];
  });