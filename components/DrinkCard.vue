<template>
<div class="max-h-full my-10">

    <div class="bg-white p-5 shadow-2xl max-w-sm">
        <figure>
            <img :src="drink.foto" alt="Drink aleatório" class="h-auto md:h-96">
        </figure>
        <h3 class="text-2xl font-bold">
            {{drink.nome}}
        </h3>
        <div class="font-bold text-yellow-600">
            <p v-if="drink.alcoolico === true">
                Alcoólico
            </p>
            <p v-else>
                Não alcoólico
            </p>
        </div>
        <div @click="showDetails" class="cursor-pointer text-sm text-yellow-600">
            <p v-if="detalhes === false">
            Veja os detalhes
            </p>
            <p v-else>
            Esconder os detalhes
            </p>
        </div>
        <div v-if="detalhes === true" class="py-3">
            <p class="font-semibold text-lg">
                Ingredientes
            </p>
            <p>
                {{listaDeIngredientes}}
            </p>
            <p class="font-semibold text-lg">
                Copo Ideal
            </p>
            <p>
                {{drink.copo}}
            </p>
            <!--
            <p class="font-semibold text-lg">
                Preparo
            </p>
            <p>
                {{drink.instrucoes}}
            </p>
            -->
            <p class="font-semibold text-lg">
                Compartilhe
            </p>
            <ShareDrink :drink="drink" />
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return { 
            detalhes: false
        }
    },
    props: {
        drink: {
            required: true
        }
    },
    computed: {
        listaDeIngredientes(){
            var lista = this.drink.ingredientes.join(', ')
            return lista
        }
    },
    methods:{
        showDetails(){
            this.detalhes = !this.detalhes
        }
    }
}
</script>

<style>

</style>