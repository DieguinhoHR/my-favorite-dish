<template>
    <div>
       <h1>Login</h1>
       <hr>

       <form autocomplete="off">           
            <div class="form-group col-sm-7">
              <label for="email">E-mail:</label>
              <input type="email" class="form-control" id="email" v-model="login.email" required autofocus>               
            </div>      

            <div class="form-group col-sm-7">
              <label for="password">Senha:</label>
              <input type="password" class="form-control" id="password" v-model="login.password" required>
            </div>

            <div class="form-group col-sm-7">
              <input type="submit" class="btn btn-primary" value="Logar" @click.prevent="validateLogin">
            </div>    
        </form>
    </div>
</template>

<script>
  import Login from '../../domain/login/Login'

  export default {
    data() {
        return {
            login: new Login()
        }
    },
    methods: {
        validateLogin() {
            this.$auth.login(this.login)
        }
    },
    created () {
      console.log(process.env)
    }
  }
</script>