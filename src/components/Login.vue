<template>
    <div>
       <h1>Login</h1>
       <hr>

       <form autocomplete="off">           
            <div class="form-group col-sm-7">
                <label for="email">E-mail:</label>
                <div :class="{
                      'form-group': true,
                      'has-feedback': true,
                      'has-success': login.email && !errors.has('email'),
                      'has-error': errors.has('email') }">
                      <input type="email"
                             v-model.trim="login.email"
                             name="email"
                             id="email"
                             class="form-control"
                             maxlength="255"
                             data-vv-as="E-mail"
                             data-vv-rules="required|email|max:255"
                             v-validate>
                </div>      
                <span v-show="errors.has('email')" class="alert alert-danger">{{ errors.first('email') }}</span>
            </div>

            <div class="form-group col-sm-7">
                <label for="password">Senha:</label>
                   <div :class="{
                      'form-group': true,
                      'has-feedback': true,
                      'has-success': login.password && !errors.has('password'),
                      'has-error': errors.has('password') }">
                       <input type="password"
                              v-model.trim="login.password"
                              name="password"
                              id="password"
                              class="form-control"
                              maxlength="255"
                              data-vv-as="Senha"
                              data-vv-rules="required"
                              v-validate>
                   </div>
                   <span v-show="errors.has('password')" class="alert alert-danger">{{ errors.first('password') }}</span>
            </div>            

            <div class="form-group col-sm-7">
              <input type="submit" class="btn btn-success" value="Logar" @click.prevent="loginValidate">
            </div>    
        </form>
    </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
        return {
          login: {
            email: '',
            password: ''
          }     
        }
    },
    methods: {
        loginValidate() {
          let data = {
            client_id: 2,
            client_secret: '67lTf5JHrLp5qUn0wxZQU8Pi81xicVrr4izhs17s',
            grant_type: 'password',
            username: this.login.email,
            password: this.login.password
          }
          this.$http.post('http://localhost:8000/oauth/token', data)
                    .then(response => {
                      this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())

                      this.$router.push('users')                      
                    }, err => flash('Usuário ou senha inválido', 'danger'))
        }
    }   
  }
</script>