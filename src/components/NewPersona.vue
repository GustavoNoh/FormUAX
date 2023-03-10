<script>


import axios from 'axios'
import btnEnviar from '../components/btnSubmit.vue'
import btnNuevo from '../components/btnNuevo.vue'
import labelView from '../components/labelView.vue'
import inText from '../components/inputText.vue'
import inSlider from '../components/InputSlider.vue'
import inTextArea from '../components/inputTextArea.vue'


export default {

  data() {
    return {

      Nombre: '',
      Edad: '',
      EstadoCivil: " ",
      Trabajo: "",
      Residencia: "",
      Cita: "",
      CitaAutor: "",
      Bio: "",
      Personalidad1: "",
      Personalidad2: "",
      Personalidad3: "",
      Personalidad4: "",
      newObje: "",
      ArrayObjetivos: [{ value: '' }],
      newFrus: "",
      ArrayFrustraciones: [{ value: '' }],
      newMot: "",
      ArrayMotivaciones: [{ value: '', porcentaje: '' }],
      Marcas: ""

    }
  },

  mounted() {
  },
  components: {
    btnEnviar, inText, btnNuevo, inSlider, inTextArea, labelView
  },
  emits: ['informacion', 'informacionTextArea', 'informacionSelect', 'person'],

  methods: {
    nombreVal(s) {
      this.Nombre = s
      console.log(this.Nombre)
    },
    edadVal(s) {
      this.Edad = s
      console.log(this.Edad)
    },
    trabajoVal(s) {
      this.Trabajo = s
      console.log(this.Trabajo)
    },
    residenciaVal(s) {
      this.Residencia = s
      console.log(this.Residencia)
    },
    citaVal(s) {
      this.Cita = s
      console.log(this.Cita)
    },
    autorVal(s) {
      this.CitaAutor = s
      console.log(this.CitaAutor)
    },
    bioVal(s) {
      this.Bio = s
      console.log(this.Bio)
    },
    marcasVal(s) {
      this.Marcas = s
      console.log(this.Marcas)
    },
    objetivosVal(s, index) {
      this.ArrayObjetivos[index] = { value: s }
      console.log(this.ArrayObjetivos)
    },
    frustracionesVal(s, index) {
      this.ArrayFrustraciones[index] = { value: s }
      console.log(this.ArrayFrustraciones)
    },
    MotivacionesText(s, index) {
      this.ArrayMotivaciones[index] = { value: s , porcentaje: this.ArrayMotivaciones[index].value }
      
    },
    MotivacionesVal(s, index) {
      this.ArrayMotivaciones[index] = { value: this.ArrayMotivaciones[index].value , porcentaje: s }
      
    },
    pers1(s) {
      this.Personalidad1 = s;
      console.log(s);
    },
    pers2(s) {
      this.Personalidad2 = s;
      console.log(s);
    },
    pers3(s) {
      this.Personalidad3 = s;
      console.log(s);
    },
    pers4(s) {
      this.Personalidad4 = s;
      console.log(s);
    },


    Registro() {
      axios
        .post("/api/guardarPersonasUxd.php", {

          nombre: this.Nombre,
          edad: this.Edad,
          estadoCivil: this.EstadoCivil,
          trabajo: this.Trabajo,
          residencia: this.Residencia,
          cita: this.Cita,
          citaAutor: this.CitaAutor,
          bio: this.Bio,
          personalidad01: this.Personalidad1,
          personalidad02: this.Personalidad2,
          personalidad03: this.Personalidad3,
          personalidad04: this.Personalidad4,
          marcas: this.Marcas,
          objetivos: this.ArrayObjetivos,
          frustraciones: this.ArrayFrustraciones,
          motivaciones: this.ArrayMotivaciones,


        })
        .then((response) => {
          console.log(response.status)
        });

    }
  },
}

</script>


<template>
  <div
    class="card flex mb-4 w-full md:w-3/4 px-0 shadow-2xl mx-auto my-5 items-center text-center justify-center rounded-lg">
    <div id="formulario" class="md:w-1-3 w-4/5 lg:w-3/4 items-center text-center">
      <h1 class="text-3xl font-bold py-3">AGREGAR</h1>
      <form>
        <div class="mx-3 mb-6 justify-center items-center rounded-lg">
          <!-- Div de datos personales -->
          <div class="flex">
            <div class="w-full px-3">
              <labelView>Nombre:</labelView>
              <inText @informacion="nombreVal"></inText>
            </div>
            <!--  Edad  -->
            <div class="w-full px-3">
              <labelView>Edad:</labelView>
              <inText @informacion="edadVal"></inText>
            </div>
            <!-- Estado civil  -->
            <div class="w-full px-3">
              <labelView>Estado Civil:</labelView>
              <!-- select del valor de estado civil -->
              <select
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="EstadoCivil" id="EstadoCivil" v-model="EstadoCivil">
                <option value="1">Soltero</option>
                <option value="2">Casado</option>
                <option value="3">Divorciado</option>
                <option value="4">Separado</option>
                <option value="5">Union libre</option>
                <option value="6">Viudo</option>
              </select>
            </div>
          </div>
          <!-- Div de datos personales -->
          <div class="flex">
            <!-- Trabajo -->
            <div class="w-full px-3">
              <labelView>Trabajo:</labelView>
              <inText @informacion="trabajoVal"></inText>
            </div>
            <!-- Residencia  -->
            <div class="w-full px-3">
              <labelView>Residencia:</labelView>
              <inText @informacion="residenciaVal"></inText>
            </div>
          </div>
          <!-- Div para la cita y autor -->
          <div class="block">
            <!-- Cita -->
            <div class="w-full">
              <div class="w-full px-3">
                <labelView>Cita:</labelView>
                <inText @informacion="citaVal"></inText>
              </div>
            </div>
            <!-- Autor -->
            <div class="flex justify-end mx-3">
              <div>
                <labelView>Autor:</labelView>
              </div>
              <div>
                <inText @informacion="autorVal"></inText>
              </div>
            </div>
          </div>
          <!-- Div para biografia -->
          <div class="block w-full">
            <labelView>Biografía:</labelView>
            <inTextArea @informacion="bioVal"></inTextArea>
          </div>
          <!-- Personalidad -->
          <div class="block w-full">
            <inSlider @person="pers1">
              PERSONALIDAD 1
            </inSlider>
          </div>
          <!-- Personalidad -->
          <div class="block w-full">
            <inSlider @person="pers2">
              PERSONALIDAD 2
            </inSlider>
          </div>
          <!-- Personalidad -->
          <div class="block w-full">
            <inSlider @person="pers3">
              PERSONALIDAD 2
            </inSlider>
          </div>
          <!-- Personalidad -->
          <div class="block w-full">
            <inSlider @person="pers4">
              PERSONALIDAD 2
            </inSlider>
          </div>
          <!-- Marca -->
          <div class="w-full px-3">
            <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Marca">
              Marcas:
            </label>
            <inText @informacion="marcasVal"></inText>
          </div>
          <!-- Div de Objetivos y Frustaraciones -->
          <div class="flex">  

            <!-- Objetivos -->
            <div class="w-full px-3">
              <labelView>Objetivos:</labelView>
              <div v-for="(obj, index) in ArrayObjetivos">
                <inText @informacion="objetivosVal" :index="index"> </inText>
              </div>
              <btnNuevo v-on:click.prevent="this.ArrayObjetivos.push(newObje)">Agregar Nuevo</btnNuevo>
            </div>
            <!-- Frustraciones  -->
            <div class="w-full px-3">
              <labelView>Frustraciones:</labelView>
              <div v-for="(frus, index) in ArrayFrustraciones">
                <inText @informacion="frustracionesVal" :index="index"> </inText>
              </div>
              <btnNuevo v-on:click.prevent="this.ArrayFrustraciones.push(newFrus)">Agregar Nuevo</btnNuevo>
            </div>
          </div>
          <!-- Motivaciones -->
          <div class="w-full px-3 block">
            <labelView>Motivaciones:</labelView>
            <div v-for="(mot, index) in ArrayMotivaciones"  class="flex">
              <!-- Trabajo -->
              <div class="w-full px-3 flex-root">

                <inText @informacion="MotivacionesText" :index="index"> </inText>
              </div>
              <!-- Residencia  -->
              <div class="w-full px-3 flex-root">
                <inSlider @person="MotivacionesVal" :index="index"> </inSlider>
              </div>
            </div>
            <btnNuevo v-on:click.prevent="this.ArrayMotivaciones.push(newMot)">Agregar Nuevo</btnNuevo>

          </div>


          <btnEnviar @click="Registro"></btnEnviar>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
  