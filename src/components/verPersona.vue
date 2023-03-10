<script type="text/javascript">
  
import axios from 'axios'
import inText from '../components/inputText.vue'
import btnNuevo from '../components/btnNuevo.vue'

let API_URL = `/api/getPersonasUxd.php`

export default {

  data() {
    return {
      persona: [],

    };
  },
  components:{
    inText, btnNuevo
  },
  mounted() {
    axios.get(API_URL)
      .then((response) => {
        this.persona = response.data.personas;
        console.log(response.data);
      })
  },
}
</script>

<template>
  <div>
    <div class="card flex-root mb-4 w-full md:w-3/4 px-0 shadow-2xl mx-auto my-5 items-center text-center justify-center rounded-lg">
      <div class="rounded-lg border-current mb-6 ml-6 mr-6 text-center rounded-lg px-5 my-2 text-white">
        <h2>Personajes de UXD</h2>
      </div>
      
      <div class="rounded-lg border-current mb-6 ml-6 mr-6 text-center space-x-9">
        <div class="w-1/3 mx-auto">
          <inText> </inText>
        </div>
        <btnNuevo @click="buscador(buscar)">Buscar</btnNuevo>
        
      </div>
      <div class="rounded-lg border-current mb-6 ml-6 mr-6 text-center space-x-52">
        <btnNuevo>Anterior</btnNuevo>
        <btnNuevo>Siguiente</btnNuevo>
      </div>
    </div>

    <!-- Imprime los personajes de la página -->
    <div class="card flex mb-4 w-full md:w-3/4 px-0 shadow-2xl mx-auto my-5 items-center text-center justify-center rounded-lg">
      <ul>
        <li v-for="p in persona" class="border-double border-4 rounded-lg border-current mb-6 ml-6 mr-6 mt-6 border-black text-">
          <div class="flex mb-6 ml-6 mr-6 text-white text-black">
            <div class="my-5 mx-5 text-center items-center space-x-10">
              <h1 class="text-xl font-mono">
              {{ p.nombre }}
              </h1>
              <ol class="list-disc">
               <li>
                Cita: {{ p.cita }}
               </li> 
               <li>
                Autor: {{ p.citaAutor }}
               </li> 
              </ol>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>