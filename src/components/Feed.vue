<template>
  <div class="feed">
    <post v-for="post,index in posts" :key="index" :post="post"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Post from "./Post.vue"
export default {
  name: 'Feed',
  props: {
    user: Object,
  },
  data: function () {
    return {
      posts: []
    }
  },
   components: {
     Post
  },
  methods:{
    getPosts(){
      this.$axios.get("https://flynn.boolean.careers/exercises/api/boolgram/posts").
      then((resp)=>{
        console.log("POSTS!")
        console.log(resp.data);
        this.posts = resp.data;
      })
    }
  },
  mounted(){

    this.$forceUpdate();  
    this.getPosts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
