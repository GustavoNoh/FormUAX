<script>


import axios from 'axios'
import btnEnviar from '../components/btnSubmit.vue'

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
      vMotivacion: "",
      Objetivos: [],
      Frustraciones: [],
      Motivaciones: [],
      Marcas: ""

    }
  },

  mounted() {
  },
  components: {
    btnEnviar
  },
  methods: {

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
              <input placeholder="ej: Gustavo Noh"
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                type="text" name="nombre" id="nombre" v-model="Nombre">
            </div>
            <!--  Fecha de nacimiento, pendiente calcular la edad con la misma fecha  -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="fechaNac">
                  Fecha de Nacimiento:
                </label>
                <input
                  class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="date" name="fechaNac" id='fechaNac'>
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
              <input placeholder="ej: Programador web"
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                type="text" name="Trabajo" id="Trabajo" v-model="Trabajo">
            </div>
            <!-- Residencia  -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="residencia">
                Residencia:
              </label>
              <input placeholder="ej: Calle 9a x 16 y 18, Telchac Pueblo"
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                type="text" name="Residencia" id="Residencia" v-model="Residencia">
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
              <input placeholder="ej: Si la oportunidad no toca a la puerta, construye una"
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                type="text" name="cita" id="cita" v-model="Cita">
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
                <input placeholder="ej: Milton Berle"
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 mx-auto mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                type="text" name="autor" id="autor" v-model="CitaAutor">
              </div>
            </div>
          </div>
          <div class="flex w-full">
            <!-- Div para biografia -->
            <div class="w-full px-3 w-full">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Biografia">
                BIOGRAFÍA:
              </label>
              <textarea placeholder="ej: He is the founder of design studio and graphic design blog. He specialized in logo design, branding, web design and offer design services" 
              rows="6" cols="25" class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 mx-auto mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide" 
              type="text" name="Bio" id="Bio" v-model="Bio"></textarea>
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
                    <input 
                    class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 mx-auto mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                    min="0" max="100" type="range" name="personalidad" id="personalidad" v-model="Personalidad1">
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
                    <input 
                    class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 mx-auto mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                    min="0" max="100" type="range" name="personalidad" id="personalidad" v-model="Personalidad2">
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
                    <input 
                    class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 mx-auto mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                    min="0" max="100" type="range" name="personalidad" id="personalidad" v-model="Personalidad3">
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
                    <input 
                    class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 mx-auto mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                    min="0" max="100" type="range" name="personalidad" id="personalidad" v-model="Personalidad4">
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <!-- Div de datos personales -->
          <div class="flex">
            <!-- Marca -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Marca">
                Marca:
              </label>
              <input placeholder="ej: SONY"
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                type="text" name="marca" id="marca" v-model="Marcas">
                <button class="px-3 py-1 rounded-lg hover:bg-primario1 bg-primario2 mb-5 text-white">Agregar nuevo</button>
            </div>
            <!-- Objetivos -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Objetivos">
                Objetivos:
              </label>
              <input placeholder="ej: Strive for a design that's user friendly and beautiful"
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                type="text" name="objetivos" id="objetivos" v-model="Objetivos">
                <button class="px-3 py-1 rounded-lg hover:bg-primario1 bg-primario2 mb-5 text-white">Agregar nuevo</button>
            </div>
          </div>
          <div class="flex">
            <!-- Frustraciones  -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Frustraciones">
                Frustraciones:
              </label>
              <input placeholder="ej: expectations are not clear"
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                type="text" name="frustraciones" id="frustraciones" v-model="Frustraciones">
                <button class="px-3 py-1 rounded-lg hover:bg-primario1 bg-primario2 mb-5 text-white">Agregar nuevo</button>
            </div>
            <!-- Motivaciones -->
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="Motivaciones">
                Motivaciones:
              </label>
              <div class="flex space-x-4">
                <input placeholder="ej: Incentive"
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                type="text" name="motivaciones" id="motivaciones" v-model="Motivaciones">
                <input 
                    class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 mx-auto mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                    min="0" max="100" type="range" name="personalidad" id="personalidad" v-model="Motivacion">
              </div>
                
                <div class="block">
                  <button class="px-3 py-1 rounded-lg hover:bg-primario1 bg-primario2 mb-5 text-white">Agregar nuevo</button>
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
  