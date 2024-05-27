import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App).use(router)


// Defining a global property
app.config.globalProperties.$games = [
    {
        id:1,
        name:"game",
        team1:{
          name:"home",
          score:0
        },
        team2:{
          name:"second",
          score:0
        }

      },
      {
        id:2,
        name:"game2",
        team1:{
          name:"home",
          score:0
        },
        team2:{
          name:"second",
          score:0
        }

      }
  ];

  app.mount('#app');