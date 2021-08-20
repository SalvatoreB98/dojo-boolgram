<template>
  <div id="app">
    <navbar />
    <central class="pt-5" />
  </div>
</template>

<script>
import Central from './components/Central.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Central,
    Central,
  },
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  a {
    font-weight: 600;
    color: #1da0f6;
  }
}
.my-wrap {
  width: 900px;
  margin: auto;
}
main {
  background-color: #fafafa;
}
//UTILITIES
.bordered {
  width: auto;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
}

.clickable {
  cursor: pointer;
}
button {
  border: none;
  margin: 0;
  padding: 10px;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable `input` types in iOS */
  -webkit-appearance: none;
  outline: none;

}
@media screen and (max-width: 900px) {
  .my-wrap {
    width: 100%;
    margin: 0;
  }
}
</style>
