<script>
export default {

    data() {
        return {
            slider: 50
        }
    },
    props:{index:null},
    methods: {
        enviar() {
            this.$emit('person', this.slider, this.index)
        }
    }
}
</script>

<template>
    <div class="flex">
        <!-- <div class="w-full px-3">
            <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Nombre">
                Nombre:
            </label>
        </div> -->
        <!--  Edad  -->
        <div class="w-full px-3">
            <slot></slot> ({{ slider }}%)
            <br>
            <input
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 mx-auto mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                type="range" min="0" max="100" v-model="slider" @change="enviar">
        </div>
        <!-- Estado civil  -->
        <!-- <div class="w-full px-3">
            <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="estadoCivil">
                Estado civil: </label>
        </div> -->
    </div>
</template>