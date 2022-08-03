<template>
    <div class="conversor">
        <h2>{{moeda1}} para {{moeda2}}</h2>
        <input type="text" class="form-label" v-model="moeda1_valor" v-bind:placeholder="moeda1">
        <input type="button" value="Converter" v-on:click="mounted()">
        <h2>{{moeda2_valor}}</h2>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Conversor",
    props: ["moeda1", "moeda2"],
    data(){
        return{
            moeda1_valor: "",
            moeda2_valor: 0,
            conversor: []
        };
    },

    methods:{

        mounted(){
            axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL')
            .then(response => (this.conversor = response))

            console.log(this.conversor['USDBRL'])
        },

        converter(){
            let dePara = this.moeda1 + "-" + this.moeda2
            let url='https://economia.awesomeapi.com.br/json/last/'+ dePara
            
            //console.log(url)

            axios.all([
                axios.get(url)
            ]).then(axios.spread((urlRes)=>{
                this.conversor = urlRes.data   
            }))
            
            // conversor = axios.get(url)
            //     .then(axios.spread((urlRes)=>{ 
            //     conversor = urlRes.data
            // }))

            console.log(this.conversor)
            //console.log(conversor.high)
            //this.moeda2_valor = this.moeda1_valor * parseFloat(this.conversor.high)

        }

    }
}
</script>

<style>

</style>