<template>
  <div class="stories-block bordered mb-5">
    <div v-if="storyOpen" class="story-container">
      <button class="close" @click="closeStory()">
        <i class="fa fa-times fa-2x text-white" aria-hidden="true"></i>
      </button>
      <div
        class="story-display"
        :style="`background-image: url(${
          stories[this.activeStory].image
        }); background-size:cover`"
      >
        <div class="darken">
          <div class="d-flex">
            <div class="timebar"></div>
          </div>
          <div class="d-flex p-2">
            <img
              class="my-circle"
              :src="stories[this.activeStory].profile_picture"
              alt=""
            />
            <span class="d-flex align-items-center bolder">
              <a href="#" class="text-white">
                {{ stories[this.activeStory].profile_name }}
              </a>
            </span>
          </div>
        </div>
        <div class="d-flex h-100">
          <button
            @click="
              prevStory()
              changeStory()
            "
            class="w-100 h-100"
          ></button>
          <button
            @click="
              nextStory()
              changeStory()
            "
            class="w-100 h-100"
          ></button>
        </div>
      </div>
    </div>
    <button @click="slideLeft()" class="left-scroll">
      <i class="fa fa-chevron-circle-left fa-2x" aria-hidden="true"></i>
    </button>
    <button @click="slideRight()" class="right-scroll">
      <i class="fa fa-chevron-circle-right fa-2x" aria-hidden="true"></i>
    </button>
    <div class="stories d-flex">
      <div
        v-for="(story, index) in stories"
        :key="index"
        class="text-center block-story"
      >
        <button
          @click="
            storyOpen = true
            openStory(index)
          "
          class="story clickable d-flex justify-content-center"
        >
          <img class="" :src="story.profile_picture" alt="" />
        </button>
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
      storyOpen: false,
      activeStory: null,
      storyTimer: null,
    }
  },
  props: {
    user: Object,
  },
  methods: {
    //API CALLS
    getStories() {
      this.$axios
        .get('https://flynn.boolean.careers/exercises/api/boolgram/profiles')
        .then((resp) => {
          resp.data.forEach((story) => {
            story.image = `https://picsum.photos/id/${Math.ceil(
              Math.random() * (100 - 1) + 1
            )}/1080/1920`
          })
          this.stories.push(...resp.data)
        })
    },

    //SLIDING WITH ARROWS STORIES
    slideLeft() {
      let stories = document.querySelector('.stories')
      stories.scrollLeft = stories.scrollLeft - 160
    },
    slideRight() {
      let stories = document.querySelector('.stories')
      stories.scrollLeft = stories.scrollLeft + 160
    },

    //Opening the story
    openStory(index) {
      this.autoChange()
      this.stopScrolling()
      console.log(Math.ceil(Math.random()))
      this.activeStory = index
      setTimeout((ev) => {
        document.querySelector('.timebar').classList.add('active')
      }, 200)
    },
    closeStory() {
      this.storyOpen = false
      this.resetScrolling()
      clearInterval(this.storyTimer);
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

    //Manage story

    changeStory() {
      document.querySelector('.timebar').classList.add('reset-active')
      document.querySelector('.timebar').classList.remove('reset-active')
      document.querySelector('.timebar').classList.remove('active')
      setTimeout(() => {
        document.querySelector('.timebar').classList.add('active')
      }, 150)
    },
    nextStory() {
      if (this.activeStory != this.stories.length - 1) {
        this.activeStory += 1
        clearInterval(this.storyTimer)
        this.autoChange()
      }
    },
    prevStory() {
      if (this.activeStory != 0) {
        this.activeStory -= 1
        clearInterval(this.storyTimer)
        this.autoChange()
      }
    },
    autoChange() {
      this.storyTimer = setInterval(() => {
        this.nextStory()
        this.changeStory()
        if (this.activeStory == this.stories.length - 1) {
          clearInterval(this.storyTimer)
        }
      }, 5000)
    },
  },
  mounted() {
    this.getStories()
    this.getStories()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.stories-block {
  position: relative;
  .left-scroll {
    filter: drop-shadow(1px 1px 5px #00000080);
    color: white;
    position: absolute;
    z-index: 9;
    left: -50px;
    top: 50%;
    transform: translateY(-50%);
  }
  .right-scroll {
    filter: drop-shadow(1px 1px 5px #00000080);
    color: white;
    position: absolute;
    z-index: 9;
    right: -50px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.stories {
  position: relative;
  padding: 10px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  .story-auth {
    font-size: 0.9em;
    display: inline-block;
    width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  button {
    padding: 0;
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

  img {
    width: 90%;
    height: 90%;
    border-radius: 50%;
    border: 2px solid white;
  }
}
.block-story {
  margin: 6px;
}
.story-display {
  animation: entrance2 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  background: rgb(0, 0, 0);
  width: 54vh;
  height: 96vh;
  border-radius: 10px;
}
.story-container {
  animation: entrance 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0000009f;
  .close {
    right: 25px;
    filter: drop-shadow(0px 0px 5px black);
  }
}
.darken {
  min-height: 250px;
  background: #11111177;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.842) 100%
  );
}
.timebar {
  width: 0;
  height: 2px;
  background: white;
  border-radius: 10px;
}
.active {
  transition: all 5s linear;
  width: 100%;
}
.reset-active {
  transition: none;
  width: 0%;
}
@keyframes timebar {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@media screen and(max-width:750px) {
  .stories-block {
    .left-scroll {
      left: 0px;
    }
    .right-scroll {
      right: 0;
    }
    .story-display {
      width: 100vw;
      height: 100vh;
    }
  }
}
</style>
