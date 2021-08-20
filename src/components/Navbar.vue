<template>
  <div class="nav-container">
    <nav class="my-wrap">
      <div class="d-flex justify-content-between align-items-center w-100">
        <div class="logo-container">
          <img alt="Vue logo" class="logo" src="../assets/logo.png" />
        </div>
        <input type="text" placeholder="Cerca" />
        <div class="d-flex justify-content-between pl-2">
          <i class="fa fa-home fa-2x ml-2" aria-hidden="true"></i>
          <i class="fa fa-heart-o fa-2x ml-2" aria-hidden="true"></i>
          <i class="fa"><img class="profile" src="../assets/profile.jpg" alt=""> </i>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    user: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-container {
  background: white;
  width: 100%;
  position: fixed;
  z-index: 10;
  border-bottom: 1px solid #cfcfcf;
  display: flex;
  height: 55px;
  align-items: center;
}
nav {
  background-color: white;
  .logo {
    padding: 5px;
    max-height: 45px;
  }
  i{
    display: inline-block;
    margin: 0px 10px;
  }
  .profile{
    width: 33px;
    height: 33px;
    border-radius: 50%;
  }
}
</style>
