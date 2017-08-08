<template>
  <div class="container">
    <h1>Usuários</h1>

    <div class="input-group">
      <input type="text" 
             class="form-control" 
             placeholder="Filtra por E-email" 
             v-on:input="filter = $event.target.value">
      <span class="input-group-addon" id="basic-addon2">@myfavoritedish.com</span>
    </div>
    <br />
    <div class="alert alert-danger" role="alert" v-show="isEmailFilter">
      <a href="#" class="alert-link">Nenhum Registro Encontrado!</a>
    </div>

    <table class="table">
      <thead class="thead-inverse">
        <tr>
          <th>ID</th>
          <th>Nome de usuário</th>
          <th>E-mail</th>  
          <th>Data de Criação</th>             
          
        </tr>
      </thead>
      <tbody  v-for="user in usersWithFilter">
        <tr>
          <td scope="row"><router-link :to="{ name: 'user.show', params: { id: user.id }}">{{ user.id }}</router-link></td>          
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>    
          <td>{{ dateFormat(user.created_at) }}</td>      
          <td>
            <router-link :to="{ name: 'user.edit', params: {id: user.id}}">
              <input type="button" class="btn btn-primary" value="Atualizar">
            </router-link>
          </td>
        </tr>   
      </tbody>
    </table>
  </div>
</template>

<script>
import UserService from '@/domain/user/UserService'
import Date from '@/packages/date/Date'

export default {
  data () {
    return { 
      filter: '',
      users: {},   
      isEmailFilter: false,
      service: new UserService(this.$resource)
    }
  },
  created () {    
      return this.service.list()
          .then(res => this.users = res)    
  },
  computed: {
    usersWithFilter() {
      if (this.filter) {
        let expression = new RegExp(this.filter.trim(), 'i')        
        let result =  this.users.filter(user => expression.test(user.email))
     
        if (result.length > 0) {
          this.isEmailFilter = false
          return result
        } else {          
          this.isEmailFilter = true
        }
      } else {
        this.isEmailFilter = false
        return this.users
      }
    }
  },
  methods: {
    dateFormat (date) {
      return Date.dateFormat(date)
    }  
  } 
}
</script>


