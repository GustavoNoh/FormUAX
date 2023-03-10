<script type="text/javascript">

import axios from 'axios'
import inText from '../components/inputText.vue'
import btnNuevo from '../components/btnNuevo.vue'
import labelView from '../components/labelView.vue'
import { RouterLink, RouterView } from 'vue-router'

let API_URL = `/api/getPersonasUxd.php`

export default {

  data() {
    return {
      persona: [],

    };
  },
  components: {
    inText, btnNuevo, labelView
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
    <div
      class="card flex-root mb-4 w-full md:w-3/4 px-0 shadow-2xl mx-auto my-5 items-center text-center justify-center rounded-lg">
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
  <div
    class="card flex mb-4 w-full md:w-3/4 px-0 shadow-2xl mx-auto my-5 items-center text-center justify-center rounded-lg">
    <div class="mx-3 mb-6 justify-center items-center rounded-lg inline-block">
      <div  v-for="p in persona" class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2"><RouterLink to="/VerPersonaID">{{p.nombre}}</RouterLink></div>
          <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
              eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
      <!-- <div v-for="p in persona" class="block border-double border-4 rounded-lg border-current mb-6 ml-6 mr-6 mt-6 border-black text-black">
            <div class="w-full px-3 flex space-x-5">
              <labelView> ID: {{ p.id }}</labelView>
              <labelView> Nombre: {{ p.nombre }}</labelView>
            </div>
              Edad 
            <div class="w-full px-3 flex space-x-5">
                <labelView> Edad: {{ p.edad }}</labelView>
                <labelView> Estado civil: {{ p.estadoCivil }}</labelView>
              </div>
              <div class="w-full px-3 flex">
                <labelView> Trabajo: {{ p.trabajo }}</labelView>
              </div>
              <div class="w-full px-3 flex">
                <labelView> Residencia: {{ p.residencia }}</labelView>
              </div>
            </div> -->
      </div>
      <!-- <ul>
          <li v-for="p in persona" class="border-double border-4 rounded-lg border-current mb-6 ml-6 mr-6 mt-6 border-black text-">
            <div class="block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:tracking-wide">
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
      </ul> -->
  </div>

</div></template>