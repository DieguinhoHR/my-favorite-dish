<template>
  <div :class="'alert alert-'+level"
       role="alert"
       v-show="show"
       v-text="body">
  </div>     
</template>

<script>
  export default {
    propos: ['message'],

    data() {
      return {
        body: '',
        level: '',
        show: false
      }
    },
    created() {
      if (this.message) {
        this.flash(this.message)
      }

      window.events.$on(
        'flash', data => this.flash(data)
      )
    },
    methods: {
      flash (data) {
        this.body = data.message,
        this.level = data.level,
        this.show = true

        this.hide()
      },
      hide() {
        setTimeout(() => {
          this.show = false
        }, 10000)
      }
    }
  }
</script>

<style scoped>
  .alert {
    margin-top: 20px
  }
</style>