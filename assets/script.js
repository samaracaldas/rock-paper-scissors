// Selecionando elementos do DOM
const gameContainer = document.querySelector(".container"), // Seleciona o contêiner do jogo
  userResult = document.querySelector(".resultado_user img"), // Seleciona a imagem do resultado do usuário
  cpuResult = document.querySelector(".resultado_cpu img"), // Seleciona a imagem do resultado da CPU
  result = document.querySelector(".resultado"), // Seleciona o elemento do resultado do jogo
  optionImages = document.querySelectorAll(".opcao_imagem"); // Seleciona todas as imagens das opções

// Adicionando evento de clique a cada imagem das opções
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    // Adiciona a classe "active" à imagem clicada
    image.classList.add("active");

    // Define as imagens de resultado do usuário e da CPU como "pedra" (poderia ser outra opção)
    userResult.src = cpuResult.src = "assets/img/pedra.png";

    // Define o texto do resultado como "Espera aí..."
    result.textContent = "Pedra, papel, tesoura!";

    // Remove a classe "active" de todas as outras imagens de opções
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    // Adiciona a classe "start" ao contêiner do jogo
    gameContainer.classList.add("start");

    // Define um tempo limite para calcular o resultado após 2 segundos
    let time = setTimeout(() => {
      // Remove a classe "start" do contêiner do jogo
      gameContainer.classList.remove("start");

      // Obtém o src da imagem clicada pelo usuário
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      // Gera um número aleatório de 0 a 2 para simular a escolha da CPU
      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["assets/img/pedra.png", "assets/img/papel.png", "assets/img/tesoura.png"];
      cpuResult.src = cpuImages[randomNumber];

      // Mapeia as opções de jogo (pedra, papel, tesoura) com valores R, P, S
      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      // Define os resultados possíveis em um objeto com base na combinação de escolhas
      let outcomes = {
        RR: "Empate",
        RP: "Jorginho",
        RS: "Você",
        PP: "Empate",
        PR: "Você",
        PS: "Jorginho",
        SS: "Empate",
        SR: "Jorginho",
        SP: "Você",
      };

      // Obtém o resultado com base na combinação de escolhas do usuário e da CPU
      let outComeValue = outcomes[userValue + cpuValue];

      // Define o texto do resultado com base na lógica do jogo
      result.textContent = userValue === cpuValue ? "Vixx empatou!" : `${outComeValue} ganhouu!!`;
    }, 2000); // Tempo de espera de 2 segundos para simular o cálculo do resultado
  });
});
