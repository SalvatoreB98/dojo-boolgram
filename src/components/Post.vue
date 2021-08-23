<template>
  <div class="post bordered mb-5">
    <div class="author d-flex align-items-center">
      <div class="auth-img story">
        <img class="img-fluid" :src="post.post_image" alt="" />
      </div>
      <div
        class="d-flex w-100 justify-content-between"
        style="margin-left: 10px"
      >
        <a class="" href="">{{ post.profile_name }}</a>
        <div><i class="fa fa-ellipsis-h fa-2x" aria-hidden="true"></i></div>
      </div>
    </div>
    <div class="img-container">
      <img class="w-100 h-100" :src="post.post_image" alt="" />
    </div>
    <div class="block">
      <div class="action-container">
        <i class="fa fa-heart-o clickable" aria-hidden="true"></i>
        <i class="fa fa-comment-o clickable" aria-hidden="true"></i>
        <i class="fa fa-paper-plane-o clickable" aria-hidden="true"></i>
      </div>
      <div class="likes padding-block">
        <div v-if="post.likes.length == 1">
          Piace a <a href=""> {{ post.likes[0].username }} </a>
        </div>
        <div v-if="post.likes.length > 1">
          Piace a
          <a href=""> {{ post.likes[0].username }} </a>
          <span v-if="post.likes.length > 2">
            e
            <a href="">altri {{ post.likes.length - 1 }} </a>
          </span>
          <span v-else>
            e a
            <a href=""> {{ post.likes[1].username }} </a>
          </span>
        </div>
      </div>
      <div class="padding-block mt-2">
        <a href=""> {{ post.profile_name }} </a>
        <span class="description"> {{ post.post_text }}</span>
      </div>
      <div class="comments padding-block">
        <button class="clickable text-secondary">
          Mostra tutti e {{ post.comments.length }} i commenti
        </button>

        <div v-if="post.comments.length > 0">
          <a href="">
            {{ post.comments[0].username }}
          </a>
          <span class="comment"> {{ post.comments[0].text }} </span>
        </div>
      </div>

      <div class="date text-secondary">1 GIORNO FA</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object,
  },
  data: function () {
    return {
      openComments: false,
      clickedLikes: false,
    }
  },
  mounted() {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  .post {
    a {
      color: black;
      text-decoration: none;
    }
  }
}
.post {
  text-align: left;
}
.img-container {
  width: 100%;
  img {
    object-fit: cover;
  }
}
.author {
  font-size: 0.9em;
  a {
    color: black;
    font-weight: 500;
    text-decoration: none;
  }
  padding: 10px 10px;
  .auth-img.story {
    margin: 0;
    height: 42px;
    min-width: 42px;
    width: 42px;
  }
}
.padding-block {
  padding: 0px 5px;
}
.block {
  font-size: 0.9em;
  padding: 0px 10px;
}
.action-container {
  display: flex;
  align-items: center;
  height: 40px;
  text-align: left;
  i {
    padding: 10px;
    font-size: 25px;
  }
}
.likes {
  font-weight: 300;
  strong {
    font-weight: 500;
  }
}
.date {
  padding: 10px;
  font-size: 10px;
}
button.clickable {
  padding: 0;
}
</style>
