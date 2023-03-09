<script>
export default {
    
    data() {
        return {
            dato: "",
        }
    },
    props:{index:null},
    methods: {
        enviar() {
            dato: this.info,
            this.$emit('informacion',this.dato, this.index)
        }
    }
}
</script>

<template>
    <div>
        <slot></slot>
        <input type="text" v-model="dato" name="info" id="info" @input="enviar"
        class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide">
    </div>
</template>