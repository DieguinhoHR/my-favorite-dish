<template>    
    <div>
       <h1>Atualizar</h1>
       <hr>

       <form>
            <div class="form-group col-sm-7">
                <label for="username">Nome de Usuário:</label>
                <div :class="{
                      'form-group': true,
                      'has-feedback': true,
                      'has-success': user.username && !errors.has('username'),
                      'has-error': errors.has('username') }">
                       <input type="username"
                              v-model.trim="user.username"
                              name="username"
                              id="username"
                              class="form-control"
                              maxlength="255"
                              data-vv-as="Usuário"
                              data-vv-rules="required|min:4|max:100"
                              v-validate>
                </div>              
                <span v-show="errors.has('username')" class="alert alert-danger">{{ errors.first('username') }}</span>
            </div>
            <div class="form-group col-sm-7">
                <label for="password">Senha:</label>
                   <div :class="{
                      'form-group': true,
                      'has-feedback': true,
                      'has-success': user.password && !errors.has('password'),
                      'has-error': errors.has('password') }">
                       <input type="password"
                              v-model.trim="user.password"
                              name="password"
                              id="password"
                              class="form-control"
                              maxlength="255"                            
                              v-validate>
                   </div>
                   <span v-show="errors.has('password')" class="alert alert-danger">{{ errors.first('password') }}</span>
            </div>
             
            <div class="form-group col-sm-7">
                <label for="email">E-mail:</label>
                <div :class="{
                      'form-group': true,
                      'has-feedback': true,
                      'has-success': user.email && !errors.has('email'),
                      'has-error': errors.has('email') }">
                      <input type="email"
                             v-model.trim="user.email"
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
              <input type="submit" class="btn btn-success" value="Atualizar" @click.prevent="update">
            </div>    
        </form>
    </div>
</template>

<script>
import UserService from '@/domain/user/UserService'

export default {  
    data() {
        return  {
            user: [],
            id: this.$route.params.id
        }
    },      
    created () {      
      this.service = new UserService(this.$resource)

      this.service
        .show(this.id)
        .then(res => this.user = res)
    },
    methods: {
      update () {
        this.service
          .update(this.id, this.user)
          .then(res => this.user = res)          
          .then(flash('Usuário atualizado com sucesso'))
          .then(this.$router.push({ name: 'users' }))
      }
    }
}

</script>