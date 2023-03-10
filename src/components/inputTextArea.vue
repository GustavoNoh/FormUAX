<script>
export default {
    
    data() {
        return {
            dato: "",
        }
    },
    props:{},
    methods: {
        enviar() {
            dato: this.info,
            this.$emit('informacion',this.dato)
        }
    }
}
</script>

<template>
    <div>
        <slot></slot>
        <textarea type="text" v-model="dato" name="info" id="info" @input="enviar"
              rows="4" cols="25" class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 mx-auto mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide" 
              ></textarea>
        </div>
</template>