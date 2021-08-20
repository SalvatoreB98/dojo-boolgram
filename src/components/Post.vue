<template>
  <div class="post bordered mb-5">
    <div class="author d-flex align-items-center">
      <div class="auth-img story">
        <img class="img-fluid" src="../assets/profile.jpg" alt="" />
      </div>
      <div class="d-flex w-100 justify-content-between" style="margin-left:10px;">
        <a class="" href="">salvatore_butera</a>
        <div> <i class="fa fa-ellipsis-h fa-2x" aria-hidden="true"></i> </div>
      </div>
    </div>
    <div class="img-container">
      <img class="w-100 h-100"
        src="https://cdn.pixabay.com/photo/2021/05/08/09/08/sunset-6237951_960_720.jpg"
        alt=""/>
    </div>
    <div class="block">
      <div class="action-container">
        <i class="fa fa-heart-o clickable" aria-hidden="true"></i>
        <i class="fa fa-comment-o clickable" aria-hidden="true"></i>
        <i class="fa fa-paper-plane-o clickable" aria-hidden="true"></i>
      </div>
      <div class="likes padding-block">
        <div>Piace a <strong> salvatore_butera </strong> e altri <strong> 909</strong> </div> 
      </div>
      <div class="padding-block mt-2">
        <strong> salvatore_butera </strong> <span class="description"> Sunset &#129409;; </span>
      </div>
      <div class="comments padding-block">
        <span class="clickable text-secondary">Mostra tutti e 10 i commenti</span>
        <div><strong> User1 </strong> <span class="comment"> Awesome </span></div>
        <div><strong> User2 </strong> <span class="comment"> Super! O.o </span></div>
      </div>
      <div class="date text-secondary">
        1 GIORNO FA
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  a{
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
.padding-block{
  padding: 0px 5px;
}
.block{
  font-size: 0.9em;
  padding: 0px 10px;
}
.action-container{
  display: flex;
  align-items: center;
  height: 40px;
  text-align: left;
  i{
    
    padding: 10px ;
    font-size: 25px;
  }
}
.likes{
  font-weight: 300;
  strong{
    font-weight: 500;
  }
}
.date{
  padding: 10px;
  font-size: 10px;
}
</style>
