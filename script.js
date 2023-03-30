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


    // Zerando Variáveis 
    var errors = document.getElementById("error");
    errors.innerHTML = 'loading..   '

    var imagemfront = document.getElementById("imgpokemon");
    imagemfront.src = ''

    var imagemback = document.getElementById("imgpokemon2");
    imagemback.src = ''

    var nome_pokemon = document.getElementById("nomepokemon");
    nome_pokemon.innerHTML = ''


    async function getData() {
        try {

          //ACHEI UM POKEMON
          var errors = document.getElementById("error");
          errors.innerHTML = ''
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+n);
          const data = await response.json();

        
          var nome_pokemon = document.getElementById("nomepokemon");
          nome_pokemon.innerHTML = data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1);

          var imagemfront = document.getElementById("imgpokemon"); // seleciona a imagem pelo id
          imagemfront.src = data.sprites.front_default;      

          var imagemback = document.getElementById("imgpokemon2"); // seleciona a imagem pelo id
          imagemback.src = data.sprites.back_default

          var errors = document.getElementById("error");
          errors.innerHTML = ''
          console.log(data)
        } catch (error) {
          //NÃO ACHEI O POKEMON ESPECIFICADO!
          var imagemfront = document.getElementById("imgpokemon");
          imagemfront.src = ''

          var imagemback = document.getElementById("imgpokemon2");
          imagemback.src = ''

          var nome_pokemon = document.getElementById("nomepokemon");
          nome_pokemon.innerHTML = ''

          var errors = document.getElementById("error");
          errors.innerHTML = 'Não encontramos o Pokemon!'
        }
      }


      

}



