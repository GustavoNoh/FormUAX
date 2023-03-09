<script>
    import btnEnviar from '../components/btnSubmit2.vue';
    import slider from '../components/InputSlider.vue';

    export default{
        components:{
            btnEnviar,slider
        },
        emits: ['person'],
        data(){
            return{
                nombreCompleto:'walter manzanilla',
                pers01:50,
                pers02:50,
                pers03:50,
                pers04:50,
            }
        },
        methods:{
            guardarLocal(){
                localStorage.setItem('nombreCompleto', this.nombreCompleto);
            },
            recuperarLocal(){
                this.nombreCompleto=localStorage.getItem('nombreCompleto');
            },
            pers1(s){
                this.pers01=s;
                console.log(s);
            },
            pers2(s){
                this.pers02=s;
                console.log(s);
            }
        }
    }
</script>

<template>
<h2 class="text-3xl font-bold ">Registra un perfil de persona</h2>    
<p class="text-xl font-medium">Llena los datos con valores hipotéticos</p>
<form>
    <input v-model="nombreCompleto" name="nombreCompleto" id="nombreCompleto" type="text" placeholder="nombre apellido" class="border-b-2 border-green-500 px-3 py-2 my-2">
    <slider @person="pers1">Personalidad 01</slider>
    <slider @person="pers2">Personalidad 02</slider>
    <slider>Personalidad 03</slider>
    <slider>Personalidad 04</slider>
    <br>
    {{ pers01 }} {{ pers02 }}
    <br>
    <btnEnviar :desactivar="false" @click="guardarLocal">Registrar persona</btnEnviar>
    <btnEnviar :desactivar="false" @click="recuperarLocal" >Editar persona</btnEnviar>
    <btnEnviar :desactivar="true">Eliminar persona</btnEnviar>
</form>
</template>