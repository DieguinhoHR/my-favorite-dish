<template>
  <div id="app">
    <header>
      <my-menu></my-menu>
    </header>
    
    <transition name="pagina">
      <main class="container">  
        <my-flash></my-flash>        
        <router-view></router-view>
      </main>  
    </transition>

    <footer>
      <p class="text-center text-muted">
        &copy; {{ year() }} - Agilwork<br />
        <small>Todos os direitos reservados</small>
      </p>  
    </footer>
  </div>
</template>

<script>
import Nav from '@/components/shared/menu/Nav'
import Flash from '@/components/Flash'

export default {
  name: 'app',

  components: {
    'my-menu': Nav,
    'my-flash': Flash
  },

  methods: {
    year () {
      let date = new Date()
      return date.getFullYear()
    }
  }  
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
