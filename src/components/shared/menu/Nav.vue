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
          <router-link to="/" class="navbar-brand">My favourite dish</router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><router-link to="/">Home</router-link></li>
            <li><router-link to="/register">Cadastre-se</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>

<script>
  export default {
      
  }
</script>
