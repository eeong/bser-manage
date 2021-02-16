<template >
<div >
  <div v-if="games != null">
    <div class="ui three column stackable grid " v-for="(game, i) in games " :key="i">
          <div class="ui column three grid ">
            <div class="ui segment ">
              <div class="ui header item ">#{{game.gameRank}}위</div>
              <img class="ui item circular image" :src="require(`../assets/static/img/00.캐릭터/${game.characterSrc}`)" >
              <div class="ui item">{{getCharacter(game.characterNum-1)}}</div>
            </div>
          </div>
          <div class="ui column three grid attached">
            <div class="ui segment">
              <div class="ui">킬{{game.playerKill}}</div>
              <div class="ui">어시{{game.playerAssistant}}</div>
              <div class="ui">동물킬{{game.monsterKill}}</div>
            </div>
          </div>
          <div class="ui column three grid">
            <div class="top attached ui three item menu">
              <a class="item equip" >
                <div v-if="game.item[0] != null">
                  <div class="ui column relaxed item-desc">
                    <div class="ui header" style="">{{game.item[0].name}}</div>
                    <div class="ui " v-for="(transItem, j) in game.item[0].transKr" :key="j">
                      {{transItem[0]}}: {{transItem[1]}}
                    </div>
                  </div>
                  <img class="ui image"  :src="require(`../assets/static/img/01.무기/${game.item[0].name}.png`)">
                </div>
              </a>
              <a class="item equip" >
                <div v-if="game.item[1] != null">
                  <div class="ui column relaxed item-desc">
                    <div class="ui header" >{{game.item[1].name}}</div>
                    <div class="ui" v-for="(transItem, j) in game.item[1].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</div>
                  </div>
                  <img class="ui image"  :src="require(`../assets/static/img/02.방어구/02.옷/${game.item[1].name}.png`)">
                </div>
              </a>
              <a class="item equip" >
                <div v-if="game.item[2] != null">
                  <div class="ui column relaxed item-desc">
                    <div class="ui header" >{{game.item[2].name}}</div>
                    <div class="ui" v-for="(transItem, j) in game.item[2].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</div>
                  </div>
                  <img class="ui image" :src="require(`../assets/static/img/02.방어구/01.머리/${game.item[2].name}.png`)">
                </div>
              </a>
            </div>
            <div class="attached ui three item menu">
              <a class="item equip" >
                <div v-if="game.item[3] != null">
                  <div class="ui column relaxed item-desc">
                    <div class="ui header" >{{game.item[3].name}}</div>
                    <div class="ui" v-for="(transItem, j) in game.item[3].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</div>
                  </div>
                  <img class="ui image"  :src="require(`../assets/static/img/02.방어구/03.팔/${game.item[3].name}.png`)">
                </div>
              </a>
              <a class="item equip" >
                <div v-if="game.item[4] != null">
                  <div class="ui column relaxed item-desc">
                    <div class="ui header" >{{game.item[4].name}}</div>
                    <div class="ui" v-for="(transItem, j) in game.item[4].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</div>
                  </div>
                  <img class="ui image"  :src="require(`../assets/static/img/02.방어구/04.다리/${game.item[4].name}.png`)">
                </div>
              </a>
              <a class="item equip" >
                <div v-if="game.item[5] != null">
                  <div class="ui column relaxed item-desc">
                    <div class="ui header" >{{game.item[5].name}}</div>
                    <div class="ui" v-for="(transItem, j) in game.item[5].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</div>
                  </div>
                  <img class="ui image"  :src="require(`../assets/static/img/02.방어구/05.장식/${game.item[5].name}.png`)">
                </div>
              </a>
            </div>
          </div>
        <div><button class="ui button compact icon blue " ><i class="plus icon "></i></button></div>  
    </div>
    
  </div>


  <form v-if="user != null" action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i>task
      </div>
      <input type="text" placeholder="Enter task..."  />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
  <i class="info circle icon"></i> Details
      </div>
      <input type="text" placeholder="Enter Details"  />
    </div>
    <div></div>
    <div>{{games[0] || '사용자 전적을 찾을 수 없습니다'}}</div>

    <button class="positive ui button">Submit</button>
  </form>
</div>
</template>

<script>
import { api } from '../helpers/helpers';
import character from '../json/Character.json';

export default {
  name: 'rec-form',
  props: {
    task: {
      type: Object,
      required: false,
      default: () => {
        return {
          task1: '',
          task2: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false,
      user:null,
      games: null,
    };
  },
  computed: {
    
  },
  methods: {
    onSubmit: function() {
      let game = {
        //nickname: this.user.userGames[0].nickname || null,
       // gameId: this.user.userGames[0].gameId || null,
      }
        this.$emit('createOrUpdate', game);
      },

    getCharacter: (i) => {
        return character.data[i].nameKr
    },
    
    
  },

  async mounted() {
    this.user = await api.searchId(this.$route.params.userId)
    this.games = this.user.userGames
    if (this.user.code == 404) {
      alert('먼저 전적을 검색할 닉네임을 입력해주세요.');
      this.$router.push('/search')
    } 
    else if (typeof this.user == 'string'){
      alert(this.user);
      this.$router.push('/search')
    }
    
}
};
</script>

<style scoped>
.error {
  color: red;
}
.ui.equip {
  position: relative;
}
.item {
  display: inline-block !important;
}
.item.equip .item-desc {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  z-index: 2;  
  width: 200%;
  height: auto;
  padding: 1em 0;
  transition: all .25s;
  border: 1px solid #d5d5d6;
  background-color: #f2f4f5;
  box-shadow: 1px 1px 0 0 #bababc;
  left: 100%;
  top: 30%;

}
.item.equip:hover .item-desc{
  visibility: visible;
  opacity: 1; 
}

.item-desc::before {
  position: absolute;
  content: '';
  width: 0.6em;
  height: 0.6em;
  left: -.31em;
  top: 0.5em;
  transform: rotate(45deg);
  background-color: #f2f4f5;
  border-bottom: 1px solid #d5d5d6;
  border-left: 1px solid #d5d5d6;
  box-shadow: 0px 1px 0 0 #bababc;
  z-index: 2;
}
.image.circular {
  width: 40%;
}
</style>