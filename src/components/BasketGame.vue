<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <section id="time" class="display-2">00:00</section>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
  
  <script>
import { Game } from "./../classes/Games.js";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      games: this.$games,
      game: this.$games[0],
    };
  },
  setup(props) {
    // setup() receives props as the first argument.
    console.log(props);
  },
  onMounted(){
    this.game = new Game() ;
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>