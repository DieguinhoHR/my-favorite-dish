<template>    
    <div>
       <h1>Cadastre-se</h1>
       <hr>

       <form>
            <div class="form-group col-sm-7">
                <label for="username">Nome de Usuário:</label>
                 <input type="text" class="form-control" id="username" v-model="user.username">
            </div>
            <div class="form-group col-sm-7">
                <label for="password">Senha:</label>
                <input type="password" class="form-control" id="password" v-model="user.password">
            </div>
            <div class="form-group col-sm-7">
                <label for="email">E-mail:</label>
                <input type="email" class="form-control" id="email" v-model="user.email">               
            </div>        
            <div class="form-group col-sm-7">
              <input type="submit" class="btn btn-primary" value="Salvar" @click.prevent="save">
            </div>    
        </form>
    </div>
</template>

<script>
import User from '../domain/user/User'
import UserService from '../domain/user/UserService'

export default {  
    data() {
        return  {
            user: new User()
        }
    },
    methods: {
        save () {            
            this.service
                .save(this.user)
                .then(() =>  this.user = new User(), err => console.log(err))               
                
            this.user = new User()   
        }
    }, 
    created () {
        this.service = new UserService(this.$resource)
    }
}

</script>