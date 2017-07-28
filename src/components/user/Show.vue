<template>
  <div>
    <h1>{{ users.username }}</h1>
    <button class="btn btn-success">Deletar Perfil</button>
  </div>
</template>

<script>
  import UserService from '@/domain/user/UserService'

  export default {
    data() {
      return {
        users: []
      }
    },
    created() {
      let id = this.$route.params.id
      this.service = new UserService(this.$resource)

      this.service
        .show(id)
        .then(res => this.users = res)
    }
  }
</script>