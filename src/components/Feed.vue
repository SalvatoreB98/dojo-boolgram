<template>
  <div class="feed">
    <post
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      :today="today"
    />
    <div v-if="isLoading" class="loading text-center">
      <img src="../assets/spinner.gif" alt="" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import Post from './Post.vue'
export default {
  name: 'Feed',
  props: {
    user: Object,
  },
  data: function () {
    return {
      moment: moment,
      posts: [],
      today: moment().format('YYYY-MM-DD'),
      isLoading: true,
    }
  },
  components: {
    Post,
  },
  methods: {
    getPosts() {
      this.isLoading = true
      this.$axios
        .get('https://flynn.boolean.careers/exercises/api/boolgram/posts')
        .then((resp) => {
          console.log('POSTS!')
          console.log(resp.data)
          this.posts.push(...resp.data)
          this.isLoading = false
        })
    },
  },
  mounted() {
    this.$forceUpdate()
    this.getPosts()
    window.addEventListener('scroll', () => {
      // check if we hit the bottom of the page
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 20
      ) {
        this.getPosts()
      }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
