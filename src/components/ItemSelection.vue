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
    <div class="menu-wrap weapon-menu" v-show="isActive('무기')" >
      <sui-segment attached>
        aa
      </sui-segment>
    </div>
    <div class="menu-wrap weapon-menu" v-show="isActive('옷')" >
      <sui-segment attached>
        bb
      </sui-segment>
    </div>
    <div class="menu-wrap weapon-menu" v-show="isActive('머리')" >
      <sui-segment attached>
        bb
      </sui-segment>
    </div>
    <div class="menu-wrap weapon-menu" v-show="isActive('팔')" >
      <sui-segment attached>
        bb
      </sui-segment>
    </div>
    <div class="menu-wrap weapon-menu" v-show="isActive('다리')" >
      <sui-segment attached>
        bb
      </sui-segment>
    </div>
    <div class="menu-wrap weapon-menu" v-show="isActive('장신구')" >
      <sui-segment attached>
        bb
      </sui-segment>
    </div>
  
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
      active: '무기',
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