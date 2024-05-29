<template>
  <div class="container mt-3">
    <div class="text-center mb-3">
      <h2>{{ game.team1.name }} vs {{ game.team2.name }}</h2>
      <div class="d-flex justify-content-center align-items-center">
        <span class="score-display me-3">{{ game.team1.score }}</span>
        <button class="btn btn-primary" @click="toggleTimer">
          {{ timerRunning ? 'Pause' : 'Start' }} Time
        </button>
        <span class="score-display ms-3">{{ game.team2.score }}</span>
      </div>
      <div>Time: {{ displayTime }}</div>
      <div>Period: {{ game.period }}</div>
    </div>
    <div class="row justify-content-around">
      <div class="col-6 col-md-4">
        <h3>Team 1</h3>
        <button class="btn btn-success mb-1" @click="scorePoint('team1', 1)">+1 Point</button>
        <button class="btn btn-success mb-1" @click="scorePoint('team1', 2)">+2 Points</button>
        <button class="btn btn-success mb-1" @click="scorePoint('team1', 3)">+3 Points</button>
      </div>
      <div class="col-6 col-md-4">
        <h3>Team 2</h3>
        <button class="btn btn-info mb-1" @click="scorePoint('team2', 1)">+1 Point</button>
        <button class="btn btn-info mb-1" @click="scorePoint('team2', 2)">+2 Points</button>
        <button class="btn btn-info mb-1" @click="scorePoint('team2', 3)">+3 Points</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.score-display {
  font-size: 2rem; /* Large font size for score */
  font-weight: bold;
  min-width: 60px; /* Ensure the score has enough space even when zero */
  display: flex;
  justify-content: center;
}
@media (max-width: 576px) {
  .d-flex {
    flex-direction: row !important; /* Force horizontal layout on small devices */
  }
}
</style>

<script>



export default {
 
  data() {
    return {
      game: {
       team1:{
          name:"Martigny",
          score:0
       },
       team2:{
          name:"Sion",
          score:0
       }
    },
      timerRunning: false,
      time: 0 // Time in seconds
    };
  },
  computed: {
    displayTime() {
      const minutes = Math.floor(this.time / 60);
      const seconds = this.time % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  },
  methods: {
    toggleTimer() {
      this.timerRunning = !this.timerRunning;
      if (this.timerRunning) {
        this.startTimer();
      } else {
        clearInterval(this.interval);
      }
    },
    startTimer() {
      this.interval = setInterval(() => {
        this.time++;
      }, 1000);
    },
    scorePoint(team, points) {
      this.game[team].score += points;
      // Emit event or save to server
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
