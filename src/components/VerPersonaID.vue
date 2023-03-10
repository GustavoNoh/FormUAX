<script>
let API_URL = `/api/getPersonasUxd.php`
export default {

data() {
  return {
    persona: [],

  };
},
components: {
  
},
props:{index:null,
},
mounted() {
  axios.get(API_URL)
    .then((response) => {
      this.persona = response.data.personas;
      console.log(response.data);
    })
},
methods:{
    
}
}
</script>
<template>
    <h1>ID: {{ persona }}</h1>
</template>