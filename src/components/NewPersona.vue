<script>


import axios from 'axios'
import btnEnviar from '../components/btnSubmit.vue'
import btnNuevo from '../components/btnNuevo.vue'
import inText from '../components/inputText.vue'
import inTextArea from '../components/inputTextArea.vue'
import inRange from '../components/inputRange.vue'

export default {

  data() {
    return {
      countMarca: 0,
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
      vMotivacion: "",
      newObje: "",
      Objetivos: [""],
      newFrus: "",
      Frustraciones: [""],
      Motivaciones: [],
      
      Marcas: "",
      

    }
  },

  mounted() {
  },
  components: {
    btnEnviar, btnNuevo,inText,inTextArea,inRange
  },
  methods: {
    newMarca(){
      this.Marcas.push(this.newMarca)
      // Marca = Marca + innerHTML.newMarca
      // const newMarca = "<input>"
      // newMarca.class = "block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
      // // Marca.innerHTML.class = ""
      // Marca.innerHTML.class = ""
      console.log(this.Marcas)
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
          objetivos: this.Objetivos,
          frustraciones: this.Frustraciones,
          motivaciones: this.Motivaciones,
          marcas: this.Marcas

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
      <h1 class="text-3xl font-bold py-3">PERSONAJE UAX</h1>
      <form>
        <div class="mx-3 mb-6 justify-center items-center rounded-lg">
          <!-- Div de datos personales -->
          <div class="flex">
            <div class="w-full px-3">
              
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Nombre">
                Nombre:
              </label>
              <inText placeholder="ej: Gustavo Noh" name="nombre" id="nombre" v-model="Nombre"></inText>
              
            </div>
            <!--  Fecha de nacimiento, pendiente calcular la edad con la misma fecha  -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Edad">
                  Edad:
                </label>
                <inText placeholder="ej: 22" name="edad" id="edad" v-model="Edad"></inText>
            </div>
            <!-- Estado civil  -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="estadoCivil"> Estado
                civil: </label>
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
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="trabajo">
                Trabajo:
              </label>
              <inText placeholder="ej: Programador web" name="Trabajo" id="Trabajo" v-model="Trabajo"></inText>
            </div>
            <!-- Residencia  -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="residencia">
                Residencia:
              </label>
              <inText placeholder="ej: Calle 9a x 16 y 18, Telchac Pueblo" name="Residencia" id="Residencia" v-model="Residencia"></inText>
            </div>
          </div>
          <!-- Div para la cita y autor -->
          <div class="block">
            <!-- Cita -->
            <div class="w-full">
              <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="residencia">
                Cita:
              </label>
              <inText placeholder="ej: Si la oportunidad no toca a la puerta, construye una" name="cita" id="cita" v-model="Cita"></inText>
              
            </div>
            </div>
            <!-- Autor -->
            <div class="flex justify-end mx-3">
              <div>
                <label class="block uppercase text-gray-700 text-xs font-bold py-2 mx-5" for="residencia">
                Autor:
                </label>
              </div>
              <div>
                <inText placeholder="ej: Milton Berle" name="autor" id="autor" v-model="Autor"></inText>
              </div>
            </div>
          </div>
          <div class="flex w-full">
            <!-- Div para biografia -->
            <div class="w-full px-3 w-full">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Biografia">
                BIOGRAFÍA:
              </label>
              <inTextArea name="Bio" id="Bio" v-model="Bio" placeholder="ej: He is the founder of design studio and graphic design blog. He specialized in logo design, branding, web design and offer design services" ></inTextArea>
              
            </div>
            <!-- Div para las personalidades -->
            <div class="w-full px-3">
              
              <div class="block w-full">
                <!-- Div personalidad 1 -->
                <div class="flex justify-end mx-3">
                  <div>
                    <label class="block uppercase text-gray-700 text-xs font-bold py-2 mx-5" for="Personalidad">
                    Personalidad 1:
                    </label>
                  </div>
                  <div>
                    <inRange name="personalidad" id="personalidad" v-model="Personalidad1"></inRange>
                  </div>
                </div>
                <!-- Div personalidad 2 -->
                <div class="flex justify-end mx-3">
                  <div>
                    <label class="block uppercase text-gray-700 text-xs font-bold py-2 mx-5" for="Personalidad">
                    Personalidad 2:
                    </label>
                  </div>
                  <div>
                    <inRange name="personalidad" id="personalidad" v-model="Personalidad2"></inRange>
                  </div>
                </div>
                <!-- Div personalidad 3 -->
                <div class="flex justify-end mx-3">
                  <div>
                    <label class="block uppercase text-gray-700 text-xs font-bold py-2 mx-5" for="Personalidad">
                    Personalidad 3:
                    </label>
                  </div>
                  <div>
                    <inRange name="personalidad" id="personalidad" v-model="Personalidad3"></inRange>
                  </div>
                </div>
                <!-- Div personalidad 4 -->
                <div class="flex justify-end mx-3">
                  <div>
                    <label class="block uppercase text-gray-700 text-xs font-bold py-2 mx-5" for="Personalidad">
                    Personalidad 4:
                    </label>
                  </div>
                  <div>
                    <inRange name="personalidad" id="personalidad" v-model="Personalidad4"></inRange>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div class="w-full px-3" id="inputMarca">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Marca">
                Marcas:
              </label>
              <!-- <div v-for="(n, index) in Marcas"> -->
              <inText name="marca" id="marca" v-model="Marcas" placeholder="ej: Sony, Apple, etc"></inText>
                <!-- <btnNuevo v-on:click.prevent="this.Marcas.push(newMarca)"> </btnNuevo> -->
            </div>
          <!-- Marca y objetivos -->
          <div class="flex">
            <!-- Marca -->
            
            <!-- Objetivos -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Objetivos">
                Objetivos:
              </label>
              <div v-for="(n, index) in Objetivos">
                <inText name="objetivos" id="objetivos" v-model="Objetivos.n" placeholder="ej: Strive for a design that's user friendly and beautiful"></inText>
              </div>
                <btnNuevo v-on:click.prevent="this.Objetivos.push(newObje)"> </btnNuevo>
            </div>
            <!-- Frustraciones  -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Frustraciones">
                Frustraciones:
              </label>
              <div v-for="(n, index) in Frustraciones">
                <inText name="frustraciones" id="frustraciones" v-model="n.value" placeholder="ej: expectations are not clear"></inText>
              </div>
                <btnNuevo v-on:click.prevent="this.Frustraciones.push(newFrus)"> </btnNuevo>
                <!-- <button class="px-3 py-1 rounded-lg hover:bg-primario1 bg-primario2 mb-5 text-white">Agregar nuevo</button> -->
            </div>
          </div>
          <!-- Frustraciones y Motivaciones -->
          <div class="flex">
            
            <!-- Motivaciones -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Motivaciones">
                Motivaciones:
              </label>
              <div class="flex space-x-4">
                <inText name="motivaciones" id="motivaciones" v-model="Motivaciones" placeholder="ej: Incentive"></inText>
                <inRange name="motivaciones" id="motivaciones" v-model="Motivacion"></inRange>
              </div>
                
                <div class="block">
                  <btnNuevo> </btnNuevo>
                </div>
                
            </div>
          </div>

          <btnEnviar @click="Registro"></btnEnviar>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
  