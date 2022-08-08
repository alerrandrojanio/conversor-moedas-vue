<template>
  <div>
    <router-link to="/conversor">Conversor</router-link> |
    <router-link to="/variacao">Variação</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  
  components: {
  },

}
</script>

<style>

</style>
