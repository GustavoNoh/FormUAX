<script>
export default {
    
    data() {
        return {
            slider: 50
        }
    },
    methods: {
        enviar() {
            this.$emit('person',this.slider)
        }
    }
}
</script>

<template>
    <div>
        <slot></slot> ({{ slider }}%)
        <br>
        <input type="range" min="0" max="100" v-model="slider" @change="enviar">

    </div>
</template>