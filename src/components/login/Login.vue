<template>
    <div>
       <h1>Login</h1>
       <hr>

       <form autocomplete="off">           
            <div class="form-group col-sm-7">
              <label for="email">E-mail:</label>
              <input type="email" class="form-control" id="email" v-model="login.email">               
            </div>      
          
            <div class="form-group col-sm-7">
              <label for="password">Senha:</label>
              <input type="password" class="form-control" id="password" v-model="login.password">
            </div>

            <div class="form-group col-sm-7">
              <input type="submit" class="btn btn-primary" value="Logar" @click.prevent="loginValidate">
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
        loginValidate() {
          let data = {
            client_id: 2,
            client_secret: 'BmstZJ3SUspixo6GtdJNmkXyfD6Edr6AobRwOAT6',
            grant_type: 'password',
            username: this.login.email,
            password: this.login.password
          }
          this.$http.post('http://localhost:8000/oauth/token', data)
                    .then(response => {
                      console.log(response) 
                    })
        }
    }   
  }
</script>