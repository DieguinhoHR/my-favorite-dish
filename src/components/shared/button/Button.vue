<template>
  <button type="submit" :class="btnClass">{{ title }}</button>
</template>

<script>
    export default {
        props: ['title', 'btnClass']
    }
</script>