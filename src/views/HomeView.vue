<template>
  <div class="home">
   

    <ul>
      <li v-for="item in games" :key="item.id" @click="openItem(item)">
        {{ item.name }}
      </li>
    </ul>

  
  </div>
</template>

<script>
// @ is an alias to /src


  
export default {
  name: 'HomeView',
  components: {
 
    
  },
  methods: {
    openItem(item) {
      this.$router.push({ name: 'Game', params: { id: item.id } });
    }
  },
  data(){
    return{
      games:this.$games
    }
  }
}
</script>
