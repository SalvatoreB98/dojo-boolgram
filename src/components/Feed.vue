<template>
  <div class="feed">
    <post/>
  </div>
</template>

<script>
import Post from "./Post.vue"
export default {
  name: 'Feed',
  props: {
    user: Object,
  },
   components: {
     Post
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
