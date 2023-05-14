// const body = document.body;
// const theme_button = document.querySelector("#botao-alterar-tema");
// const theme_image = document.querySelector(".imagem-botao");
// let theme = "modo-escuro";

// theme_button.addEventListener("click", () => {
//   if (theme === "claro") {
//     theme = "modo-escuro";
//     theme_image.src = "./imagens/moon.png";
//   } else if (theme === "modo-escuro") {
//     theme = "claro";
//     theme_image.src = "./imagens/sun.png";
//   } else {
//     console.error("Algo está errado");
//   }
//   body.className = theme;
// });

const botaoAlterarTema = document.getElementById('botao-alterar-tema');
const body = document.body;
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");
const imagemLogoPokebola = document.getElementById("poke-bola")

botaoAlterarTema.addEventListener("click", ()=>{
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    if(modoEscuroAtivo){
        
        imagemBotaoTrocaTema.setAttribute("src", "./imagens/sun.png"); 
        
    } else {
        
        imagemBotaoTrocaTema.setAttribute("src", "./imagens/moon.png")
        // imagemLogoPokebola.setAttribute("src", "./imagens/purple-bol.png")
        
        
    }
});