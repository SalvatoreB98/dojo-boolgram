<template>
  <div class="feed">
    <div
      v-if="areLikesOpened"
      v-on:openLikes="openLikes"
      class="likes-background"
    >
      <div class="likes-container">
        <h5 class="text-center p-2 header">Mi piace</h5>
        <button class="close" @click="closeLikes">
          <i class="fa fa-times fa-2x" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <post
      @openLikes="openLikes(index)"
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      :today="today"
      :index="index"
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
      areLikesOpened: false,
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
    // openLikes(index) {
    //   console.log('OPEN LIKES')
    //   this.$emit('openLikes', index)
    // },
    openLikes() {
      console.log('OPEN!L')
      this.areLikesOpened = true
      this.stopScrolling()
    },
    closeLikes() {
      this.areLikesOpened = false
      this.resetScrolling()
    },
    stopScrolling() {
      let body = document.querySelector('body')
      body.style.height = '100%'
      body.style.overflow = 'hidden'
    },
    resetScrolling() {
      let body = document.querySelector('body')
      body.style.height = 'auto'
      body.style.overflow = 'auto'
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
.likes-background {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: entrance 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: fixed;
  z-index: 10;
  background: #00000057;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.likes-container {
  position: relative;
  animation: entrance2 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 10px;
  background-color: white;
  max-width: 400px;
  min-height: 400px;
  max-height: 400px;
  width: 400px;
  .fa {
    color: rgb(0, 0, 0);
  }
}
.header{
  border-bottom: 1px solid #d4d4d4;
}
.close{
  position: absolute;
  top: 0;
  right: 0px;
}
@keyframes entrance {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
@keyframes entrance2 {
  0% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 100%;
  }
}
</style>
