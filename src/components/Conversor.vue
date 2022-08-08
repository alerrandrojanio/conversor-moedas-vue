<template>
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
    </div>
</template>

<script>
import api from '@/server/API'

export default {
  name: "Conversor",
    props: ["moedaA", "moedaB"],
    data(){
        return{
            moedaA_valor: "",
            moedaB_valor: 0,
            
        };
    },

}
</script>

<style>
.h4 {
  text-align: center;
  margin-bottom: 10px;
}

</style>
