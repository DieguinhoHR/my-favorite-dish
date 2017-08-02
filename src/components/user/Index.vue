<template>
  <div class="container">
    <table class="table" v-for="user in users">
      <thead class="thead-inverse">
        <tr>
          <th>ID</th>
          <th>Nome de usuário</th>
          <th>E-mail</th>      
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>          
        </tr>   
      </tbody>
    </table>
  </div>
</template>

<script>
import UserService from '@/domain/user/UserService'

export default {
  data () {
    return { 
      users: {},   
      service: new UserService(this.$resource)
    }
  },
  created () {    
      return this.service.list()
          .then(res => this.users = res)    
  } 
}
</script>


