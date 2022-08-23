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

    <div class="table">

        <thead>
            <tr>
                <th>CÓDIGO</th>
                <th>NOME</th>
                <th>COTAÇÃO MAX.</th>
                <th>COTAÇÃO MIN.</th>
                <th>VARIAÇÃO</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(quote, key) in quotes" :key="key">
                <td>{{ key }}</td>
                <td>{{ quote.name }}</td>
                <td>{{ quote.high }}</td>
                <td>{{ quote.low }}</td>
                <td>
                  <span class="label label-rounded text-small" 
                  :class="{'label-error': quote.pctChange < 0, 'label-success': quote.pctChange > 0, 'label-secondary': quote.pctChange == 0}">
                    
                    {{ quote.pctChange }} %
                  </span>    
                </td>
            </tr>
        </tbody>
        
    </div>

  </div>

</template>

<script>
export default {
     props: { quotes: { type: Object, required: true }},
  }

</script>

<style>
.h4 {
  text-align: center;
  margin-bottom: 10px;
}

</style>