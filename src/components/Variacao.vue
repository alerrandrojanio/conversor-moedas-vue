<template>
  <div class="container grid-lg my-2 py-2 text-dark">
    <div class="card">
      
      <div class="card-header">
        <div class="h4">EXIBINDO TODAS AS MOEDAS</div>
      </div>

      <div class="card-body">
        <!-- <App :quotes="quotes"/> -->
      </div>
    </div>

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
                    :class="{'label-error': quote.pctChange < 0, 'label-sucess': quote.pctChange > 0}">
                    
                    {{ quote.pctChange}}
                    </span>    
                </td>
            </tr>
        </tbody>
        
    </div>
  </div>
</template>

<script>
import api from '@/server/API'
import { onMounted, reactive, toRefs } from 'vue'


export default{
    props: {
        quotes: { type: Object, required: true }
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
.h4 {
  text-align: center;
  margin-bottom: 10px;
}

</style>