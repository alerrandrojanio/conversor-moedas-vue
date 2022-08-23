<template>
<!-- 
 <div class="container grid-lg my-2 py-2 text-dark">
    <div class="card">
      <div class="card-header">
        <div class="h4">CONVERSOR</div>
      </div>
    </div>
  </div>

  <div class="container grid-lg my-2 py-2 text-dark">
    <h2>{{moedaA}} para {{moedaB}}</h2>
    <input type="text" class="form-label" v-model="moeda1_valor" v-bind:placeholder="moeda1">
    <input type="button" value="Converter" v-on:click="converter">
    <h2>{{moeda2_valor}}</h2>
  </div> -->

  <div class="container grid-lg my-2 py-2 text-dark">

    <div class="card">
      
      <div class="card-header">
        <div class="h4">EXIBINDO TODAS AS MOEDAS</div>
      </div>

      <div class="card-body">
        <variacao :quotes="quotes"/>
      </div>
    </div>

  </div>

  
</template>

<script>
import variacao from './components/Variacao.vue'
import api from '@/server/API'
import { onMounted, reactive, toRefs } from 'vue'


export default{
  name: 'App',
  components: {
    variacao,
  },
  
    //expor data da API no componente
    setup(){
        const data = reactive ({ //dados reativos
        quotes: {

        },
    })

    onMounted(async() => {
        const response = await api.all()
        data.quotes = response.data
      }
    )

    return { ...toRefs(data)}
  }
        
}
</script>

<style>

</style>
