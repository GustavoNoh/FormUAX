<script>
  import axios from 'axios'
  
  export default {
  
    data() {
      return {
        
        Nombre: '',
        Edad:  '',
        EstadoCivil: " ",
        Trabajo:" ",
        Residencia: " ",
        Cita: " ",
        CitaAutor: " ",
        Bio: " ",
        Personalidad1: " ",
        Personalidad2: " ",
        Personalidad3: " ",
        Personalidad4: " ",
        Objetivos: [],
        Frustraciones: [],
        Motivaciones: [],
        Marcas: " "
  
      }
    },
  
    mounted() {
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
          <div class="flex">
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="nombre">
                Nombre:
              </label>
              <input placeholder="Gustavo Enrique"
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                type="text" name="nombre" id="nombre" v-model="Nombre">
            </div>
            <!-- <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="apellido">
                Apellidos:
              </label>
              <input
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                id="Apellidos" type="text" placeholder="Noh Helguera">
            </div> -->
          </div>
          <!-- <div class="w-full px-3">
            <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="apellido">
              Otro campo puedo poner aquí:
            </label>
            <input
              class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
              id="Apellidos" type="text" placeholder="Noh Helguera">
          </div>
          <div class="flex">
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="apellido">
                Otro campo puedo poner aquí:
              </label>
              <input
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                id="Apellidos" type="text" placeholder="Noh Helguera">
            </div>
            <div class="w-full px-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="apellido">
                Otro campo puedo poner aquí:
              </label>
              <input
                class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide"
                id="Apellidos" type="text" placeholder="Noh Helguera">
            </div>
          </div> -->

          <div class="bg-primario1 w-1/3 my-10 px-auto mx-auto py-1 rounded-lg hover:bg-primario4">
            <button @click="Registro" class="px-3 py-3 rounded-lg hover:bg-primario4 text-white">REGISTRARSE</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
  