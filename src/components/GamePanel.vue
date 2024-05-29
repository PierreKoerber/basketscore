<template>


<main class="scoreboard">
            
          
            

            <div class="row">
                <div class="col">

                    <h1 id="home-header">{{ game.team1.name }}</h1>
                    <div id="home-score" class="score-display">{{ game.team1.score }}</div>
    
                    <div class="buttons">
                      <button class="btn btn-outline-secondary mb-1" @click="scorePoint('team1', 1)">+1</button>
                      <button class="btn btn-outline-secondary mb-1" @click="scorePoint('team1', 2)">+2</button>
                      <button class="btn btn-outline-secondary mb-1" @click="scorePoint('team1', 3)">+3</button>
                    </div>
                </div>
                <div class="col">
                    <h3>Period</h3>
                    <section id="time" class="score-display">{{ displayTime }}</section>
                    <div id="period">1</div>
                   
                </div>
                <div class="col">
                    
                    <h1 id="guest-header">{{ game.team2.name }}</h1>
                    <div id="guest-score" class="score-display">{{ game.team2.score }}</div>
                    <div class="buttons">
                   
                        <button class="btn btn-outline-secondary mb-1" @click="scorePoint('team2', 1)">+1</button>
                        <button class="btn btn-outline-secondary mb-1" @click="scorePoint('team2', 2)">+2</button>
                        <button class="btn btn-outline-secondary mb-1" @click="scorePoint('team2', 3)">+3</button>
                    </div>
                </div>
              </div>
           
            
            
            <section>
              <button class="btn btn-primary" @click="toggleTimer">
          {{ timerRunning ? 'Pause' : 'Start' }} Time
        </button>
            </section>
        </main>

  
</template>

<style scoped>
.score-display {
  font-size: 10rem; /* Large font size for score */
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
