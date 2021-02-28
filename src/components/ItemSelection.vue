<template>
  <div>
    <sui-menu pointing secondary>
      <a
        is="sui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        @click="select(item)"
      />
      
    </sui-menu>
    <sui-segment attached="top">
      dd
    </sui-segment>
    <sui-segment attached>
      dd
    </sui-segment>
  
  </div>
</template>

<script>

export default {
  name: 'item-selection',
  props: {
    rec:{type:Object},
  },
  
  data: function() {
    return {
      active: 'Home',
      items: ['무기', '옷', '머리','팔','다리','장신구'],
    }
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  },
  
  watch: {
    
  },
  async mounted() {
  
  }
};
</script>

<style scoped>


</style>