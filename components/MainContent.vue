<template>
  <main class="flex flex-col items-top justify-evenly min-h-screen bg-gradient-to-t from-yellow-400 via-teal-200 to-teal-300 sm:items-center sm:pt-0 px-5">

    <MainText v-if="showDrink === false" />
    <div class="flex items-top justify-center">
      <ActionButton @customEvent="showDrinkCard" v-if="showDrink === false">
        Ver drink
      </ActionButton>
      <DrinkCard v-if="showDrink === true" :drink="drink" />
    </div>
    <div class="flex gap-x-10 mb-8" v-if="showDrink === true">    
      <ActionButton @customEvent="resetDrink">
        Início
      </ActionButton>
      
      <ActionButton @customEvent="anotherDrink">
        Outro drink
      </ActionButton>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return{
      showDrink: false
    }
  },
  props: {
    drink: {
      required: true
    }
  },
  methods: {
    showDrinkCard(){
      this.showDrink = !this.showDrink
    },
    resetDrink(){
      this.showDrink = false
      this.$emit('outroDrink')
    },
    anotherDrink(){
      this.$emit('outroDrink')
    },
  }
}
</script>
