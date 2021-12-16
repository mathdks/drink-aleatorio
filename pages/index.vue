<template>
  <div>
    <TopBar />
    <MainContent @outroDrink="findAnotherDrink" :drink="drink" />
    <FooterBar />
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    //Solicita um drink aleatório
    const getRandomDrink = await $axios.get()

    //Armazena todos os detalhes do drink
    var drinkDetails = getRandomDrink.data.drinks[0]

    //Mostra o nome do drink
    var nome = drinkDetails.strDrink

    //Mostra o copo utilizado
    var copo = drinkDetails.strGlass

    //Mostra se o drink é alcoólico ou não
    var alcoolico = null

    drinkDetails.strAlcoholic === 'Alcoholic' ? alcoolico = true : alcoolico = false

    //Organiza os ingredientes
    var ingredientes = []

    drinkDetails.strIngredient1 !== null && drinkDetails.strIngredient1 !== '' ? ingredientes.push(drinkDetails.strIngredient1) : null
    drinkDetails.strIngredient2 !== null && drinkDetails.strIngredient2 !== '' ? ingredientes.push(drinkDetails.strIngredient2) : null
    drinkDetails.strIngredient3 !== null && drinkDetails.strIngredient3 !== '' ? ingredientes.push(drinkDetails.strIngredient3) : null
    drinkDetails.strIngredient4 !== null && drinkDetails.strIngredient4 !== '' ? ingredientes.push(drinkDetails.strIngredient4) : null
    drinkDetails.strIngredient5 !== null && drinkDetails.strIngredient5 !== '' ? ingredientes.push(drinkDetails.strIngredient5) : null
    drinkDetails.strIngredient6 !== null && drinkDetails.strIngredient6 !== '' ? ingredientes.push(drinkDetails.strIngredient6) : null
    drinkDetails.strIngredient7 !== null && drinkDetails.strIngredient7 !== '' ? ingredientes.push(drinkDetails.strIngredient7) : null
    drinkDetails.strIngredient8 !== null && drinkDetails.strIngredient8 !== '' ? ingredientes.push(drinkDetails.strIngredient8) : null
    drinkDetails.strIngredient9 !== null && drinkDetails.strIngredient9 !== '' ? ingredientes.push(drinkDetails.strIngredient9) : null
    drinkDetails.strIngredient10 !== null && drinkDetails.strIngredient10 !== '' ? ingredientes.push(drinkDetails.strIngredient10) : null
    drinkDetails.strIngredient11 !== null && drinkDetails.strIngredient11 !== '' ? ingredientes.push(drinkDetails.strIngredient11) : null
    drinkDetails.strIngredient12 !== null && drinkDetails.strIngredient12 !== '' ? ingredientes.push(drinkDetails.strIngredient12) : null
    drinkDetails.strIngredient13 !== null && drinkDetails.strIngredient13 !== '' ? ingredientes.push(drinkDetails.strIngredient13) : null
    drinkDetails.strIngredient14 !== null && drinkDetails.strIngredient14 !== '' ? ingredientes.push(drinkDetails.strIngredient14) : null
    drinkDetails.strIngredient15 !== null && drinkDetails.strIngredient15 !== '' ? ingredientes.push(drinkDetails.strIngredient15) : null

    //Mostra a foto do drink
    var foto = drinkDetails.strDrinkThumb

    //Mostra as instruções do preparo
    var instrucoes = drinkDetails.strInstructions
    
    return { drink: {
        nome: nome,
        foto: foto,
        alcoolico: alcoolico,
        copo: copo,
        ingredientes: ingredientes,
        instrucoes: instrucoes
      }
    }
  },
  methods: {
    findAnotherDrink(){
      this.$nuxt.refresh()
    }
  }
}
</script>
