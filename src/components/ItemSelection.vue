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

    <sui-list style="height:350px; overflow:auto;" divided relaxed v-show="isActive('무기')" >
      <sui-list-item class="item-button" :class="selected" v-for="(weapon,i) in weapons" :key="i" @click="onClickItem">
        <sui-image class="ui tiny" rounded :id="weapon.itemGrade" :src="require(`../assets/static/img/01.무기/${rec.weapon}/${weapon.name}.png`)" />
        <sui-list-content>
          <p is="sui-list-header" style="transform: translateY(55%);">{{weapon.name}}</p>
        </sui-list-content>
      </sui-list-item>
    </sui-list>

    <!-- <div class="menu-wrap weapon-menu" v-show="isActive('무기')" >
      <sui-segment attached>
        aa
      </sui-segment>
    </div> -->
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
    weapons:{type:Array},
  },
  
  data: function() {
    return {
      active: '무기',
      items: ['무기', '옷', '머리','팔','다리','장신구'],
      weaponDB:null,
      selected:false,
    }
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
    onClickItem() {

    },
    
  },
  
  watch: {
    
  },
  async mounted() {
    
  }
};
</script>

<style scoped>

.item-button {
  cursor: pointer;
  transition:all .2s
}
.item-button.selected {
  border: 2px solid rgb(52, 97, 43);
  background: rgba(52, 97, 43,0.8);
}

</style>