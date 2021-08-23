<template>
  <div class="stories-block bordered mb-5"> 
    <button @click="slideLeft()" class="left-scroll">
        <i class="fa fa-chevron-circle-left fa-2x" aria-hidden="true"></i>
      </button>
      <button @click="slideRight()" class="right-scroll">
        <i class="fa fa-chevron-circle-right fa-2x" aria-hidden="true"></i>
      </button>
    <div class="stories d-flex">
      <div v-for="(story, index) in stories" :key="index">
        <div class="story clickable">
          <img class="" :src="story.profile_picture" alt="" />
        </div>
        <span class="story-auth"> {{ story.profile_name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stories',
  data: function () {
    return {
      stories: [],
    }
  },
  props: {
    user: Object,
  },
  methods: {
    getStories() {
      this.$axios
        .get('https://flynn.boolean.careers/exercises/api/boolgram/profiles')
        .then((resp) => {

          this.stories = resp.data
        })
    },
    slideLeft() {
      let stories = document.querySelector('.stories')
      stories.scrollLeft = stories.scrollLeft - 50
    },
    slideRight() {
      let stories = document.querySelector('.stories')
      stories.scrollLeft = stories.scrollLeft + 50
    },
  },
  mounted() {
    this.getStories()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.stories-block{
  position: relative;
  .left-scroll {
    filter: drop-shadow(1px 1px 5px #00000080);
    color: white;
    position: absolute;
    z-index: 9;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .right-scroll {
    filter: drop-shadow(1px 1px 5px #00000080);
    color: white;
    position: absolute;
    z-index: 9;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.stories {
  position: relative;
  padding: 10px 0px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  .story-auth {
    font-size: 0.9em;
    display: inline-block;
    width: 64px;
    margin-left: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.story-auth {
  text-align: center;
}
.story {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(250, 164, 92);
  background: linear-gradient(45deg, #faa45c 0%, #cd2d89 100%);
  border-radius: 50%;
  height: 66px;
  width: 66px;
  min-width: 66px;
  margin-left: 15px;
  img {
    width: 90%;
    height: 90%;
    border-radius: 50%;
    border: 2px solid white;
  }
}
</style>
