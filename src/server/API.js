import axios from 'axios'
import { get } from 'core-js/core/dict'

const api = axios.create ({
    
    baseURL: 'https://economia.awesomeapi.com.br/json',



})

export default {

    all(){
        return api.get('/all')
    }

}