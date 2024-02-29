let chave = "2429ab01a619db044787c3e367fe5e62"
function colocaNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    /* document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C" */
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp)+ "ºC"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML =  "Umidade relativa do ar "+dados.main.humidity+ "%"
    document.querySelector(".iconeNuv").src = "https://openweathermap.org/img/wn/"+dados.weather[0].icon+".png"


}             

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave +
    "&lang=pt_br" +
    "&units=metric").then( resposta => resposta.json())
          
    
    colocaNaTela(dados)        
}


function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
        
    buscarCidade(cidade)

}