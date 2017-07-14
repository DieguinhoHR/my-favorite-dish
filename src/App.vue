<template>
  <div id="app">
    <header>
      <navbar></navbar>
    </header>

    <main class="container">  
      <router-view></router-view>
    </main>  
  </div>
</template>

<script>
import navbar from '@/components/shared/menu/Nav'

export default {
  components: {
    navbar
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
