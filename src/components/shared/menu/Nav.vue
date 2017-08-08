<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link :to="{ name: 'home' }" class="navbar-brand">My favourite dish</router-link>
        </div>
       
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><router-link :to="{name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'user.create'}" v-if="!isAuth">Cadastre-se</router-link></li>
            <li><router-link :to="{ name: 'login'}" v-if="!isAuth">Login</router-link></li>
            <li><a href="#" v-if="isAuth" @click.prevent="logout">Sair</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Nav',
  data () {
    return {
      isAuth: null
    }
  }, 
  created () {
    this.isAuth = this.$auth.isAuthenticated()
    this.setAuthenticatedUser()
  },
  methods: {
    setAuthenticatedUser () {
      this.$http.get('api/user')
        .then(response => {
          this.$auth.setAuthenticatedUser(response.body)

          console.log(this.$auth.getAuthenticatedUser())
        })               
    },
    logout () {
       return this.$auth.logout()
    }
  }
}
</script>

<style>
  
</style>


