<template>
    <button
        @click="customEvent"
        class="rounded-full h-40 w-40 bg-transparent p-10 shadow-2xl uppercase font-black"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    methods: {
        customEvent(){
            this.$emit('customEvent')
        }
    }
}
</script>

<style>

</style>