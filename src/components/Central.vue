<template>
  <div>
    <main class="pt-5">
      <div class="d-flex my-wrap justify-content-center">
        <section class="side">
          <stories />
          <feed />
        </section>
        <section class="side-bar">
          <div class="d-flex align-items-center">
            <div class="p-2">
              <img
                class="img-fluid rounded-circle img-fluid profile"
                src="../assets/profile.jpg"
                alt=""
                
              />
            </div>
            <div class="p-2 flex-grow-1 flex-shrink-0">
              <strong>salvatore_butera </strong>
              <div class="text-secondary" style="text-align: left">
                Salvatore Butera
              </div>
            </div>
            <div class="">
              <a class="text-nowrap" style="text-decoration: none" href="#"
                >Passa a</a
              >
            </div>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <div class="text-secondary" style="font-weight: 600">
              Suggerimenti per te
            </div>
            <div style="font-weight: 600">Mostra tutti</div>
          </div>
          <div>
            <div class="d-flex align-items-center mt-3 justify-content-between suggested">
              <div class="story">
                <img class="" src="../assets/profile.jpg" alt="" />
              </div>
              <div class="p-2">
                <div>
                  <strong class="story-auth"> salvatore_butera </strong>
                </div>
                <div>
                  <span class="text-nowrap small" style="font-weight:500; color:gray"> Consigliati da intstagram </span>
                </div>
              </div>
              <div>
                <a class="text-nowrap" style="text-decoration: none" href="#">
                  Segui
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import Stories from './Stories.vue'
import Feed from './Feed.vue'
export default {
  name: 'Central',
  props: {
    user: Object,
  },
  components: {
    Stories,
    Feed,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main {
  font-size: 0.9em;
  background-color: #fafafa;
}
.side {
  width: 100%;
  flex-grow: 1;
  max-width: 600px;
}
.side-bar {
  position: sticky;
  font-size: 0.9em;
  margin-left: 30px;
  .profile{
    width: 56px ;
  }
  .suggested{
    .story{
        width: 42px;
        min-width: 42px;
        height: 42px;
        min-height: 42px;
        max-height: 42px;
    }
  }
}
@media screen and (max-width: 900px) {
  .side-bar {
    display: none;
  }
}
</style>
