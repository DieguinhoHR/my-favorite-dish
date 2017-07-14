<template>
  <div id="app">
    <header>
      <my-menu></my-menu>
    </header>

    <transition name="pagina">
      <main class="container">  
        <router-view></router-view>
      </main>  
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/shared/menu/Nav'

export default {
  components: {
    'my-menu': Nav
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
