<template>
    <div class="flex justify-center my-5">
        <span class="material-icons-outlined text-4xl text-white bg-green-500 p-1">
            <a :href="whatsContent" rel="nofollow" target="_blank">
                whatsapp
            </a>
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            whatsContent: `whatsapp://send?text=Opa!!! É hora de um drink especial. Eu dei sorte e encontrei \ 
uma receita de *${this.drink.nome}*. Tenta você também lá no Drink Aleatório ${this.$config.homeUrl}`
        }
    },
    props: {
        drink: {
            required: true
        },
    }
}
</script>

<style>

</style>