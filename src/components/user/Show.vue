<template>
  <div>
    <h1>{{ user.email }}</h1>
    <button class="btn btn-danger" @click.prevent="onDelete(user)">
      Deletar Perfil
    </button>
  </div>
</template>
 
<script>
  import UserService from '@/domain/user/UserService'

  export default {
    data() {
      return {
        user: []
      }
    },
    created() {
      let id = this.$route.params.id
      this.service = new UserService(this.$resource)

      this.service
        .show(id)
        .then(res => this.user = res)
    },
    methods: {
      onDelete(user) {
        this.service
          .delete(user.id)
          .then(res => this.user = res)
          .then(flash('Registro excluido com sucesso'))
          .then(this.$router.push({ name:'user.index' }))          
      }
    }
  }
</script>