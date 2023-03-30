// https://pokeapi.co/api/v2/pokemon/pikachu

function getInputValue() {
    // selecionar o elemento input
    var inputElement = document.getElementById("myinput");
  
    // obter o valor do input
    var inputValue = inputElement.value;
  
    // exibir o valor em um alerta
    getPokemon(inputValue);
  }

function getPokemon(nome){

    var n = nome.toLowerCase()
    getData()
    async function getData() {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+n);
          const data = await response.json();

        
          var nome_pokemon = document.getElementById("nomepokemon");
          nome_pokemon.innerHTML = data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1);
          var imagem = document.getElementById("imgpokemon"); // seleciona a imagem pelo id
          imagem.src = data.sprites.front_default;      
        } catch (error) {
          console.error(error);
        }
      }


      

}



