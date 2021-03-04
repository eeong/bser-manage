<template >
<div >
  <div >
    <div class="ui text container" >
      <h1 >전적확인 : 최근 10게임 </h1>
      <h2 v-if="games != null">{{games[0].nickname}}</h2>
        <div class="ui column " style="position:relative;">
          <div class="ui loader" :class="loader"></div>
          <div class="ui three column stackable grid centered celled " v-for="(game, i) in games " :key="i" style="position:relative;">
                <div class="ui column " >
                    <h2 class="item header" style="display:inline-block;">#{{game.gameRank}}위</h2> 
                    <h4 class="header" style="display:inline-block; margin:0;">{{gamemode.team[game.matchingTeamMode]}} {{gamemode.mode[game.matchingMode]}}</h4>
                      <img class="ui circular image" :src="require(`../assets/static/img/00.캐릭터/${game.characterSrc}`)" >
                      <div class="ui orange bottom right attached label" >{{getCharacter(game.characterNum-1)}}/{{game.item[0].transKr[0][1]}}</div>
                </div>
                <div class="ui three column">
                  <div class="ui three ">
                    <div class="ui mini statistic " >
                      <div class="value">K {{game.playerKill}} / A {{game.playerAssistant}} / H {{game.monsterKill}}</div>
                    </div>
                  </div>
                    
                    <div class="ui three bottom">
                      <div class="ui mini statistic">
                        <div class="value">{{game.characterLevel}}</div>
                        <div class="label">Lv</div>
                        <div class="value">{{game.damageToPlayer}}</div>
                        <div class="label">Dealt</div>
                        <div class="value" v-if="games[i-1]">{{games[i-1].mmrBefore}}</div>
                        <div class="value" v-if="i == 0 && currentMmr!=null">{{currentMmr.userRank.mmr}}</div>
                        <div class="label">MMR</div>
                      </div>
                      
                    </div>
                    
                </div>
                <div class="ui column three item-wrap">
                  <item-comp :taken='game' />
                </div>
              <div class="plus-button">
                <sui-popup content="이 템트리를 빌드에 추가합니다" size="mini">
                  <button slot="trigger" class="ui button compact icon blue " @click="onSubmit(game)" ><i class="plus icon "></i>
                  </button>
                </sui-popup>
              </div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import { api } from '../helpers/helpers';
import character from '../json/Character.json';
import itemComp from '../components/Itemcomp';

export default {
  name: 'rec-form',
  props: {
    
  },
  data() {
    return {
      errorsPresent: false,
      loader: 'active',
      user:null,
      games: null,
      currentMmr:null,
      gamemode:{"team":['','솔로','듀오','스쿼드'],"mode":['일반','일반','일반','랭크']}
    };
  },
  components: {
    'item-comp': itemComp
  },
  methods: {
    onSubmit: function(x) {
      let game = {
        nickname: x.nickname || null,
        userNum: x.gameId || null,
        mode:this.gamemode.team[x.matchingTeamMode],
        weapon: x.item[0].transKr[0][1],
        character: `${this.getCharacter(x.characterNum-1)}`,
        characterSrc: x.characterSrc,
        item: x.item
      }
        this.$emit('createOrUpdate', game);
      },

    getCharacter: (i) => {
        return character.data[i].nameKr
    },
    reloadPage(){
      if (this.user == null)
      this.$router.go(0);
    }  
  },
  

  async mounted() {
    this.user = await api.searchId(this.$route.params.userId)
    this.games = this.user.userGames
    this.loader = 'disabled';
    if (this.user.code == 404) {
      alert('먼저 전적을 검색할 닉네임을 입력해주세요.');
      this.$router.push('/search')
    } 
    else if (typeof this.user == 'string'){
      alert(this.user);
      this.$router.push('/search')
    }
    this.reloadPage()
    if(this.user.code == 200) this.currentMmr = await api.searchMmr(this.games[0].userNum,this.games[0].matchingTeamMode);
},
  
};
</script>

<style scoped>
.error {
  color: red;
}

.image.circular {
  width: 40%;
}
.plus-button {
  position: absolute !important;
  top: 50%;
  right: -10%;
  box-shadow: none !important;
  transform: translateY(-65%);
  text-align: right;
}
.img-wrap {
  padding: 0.92857143em 0 ;
  
}
.item-wrap {
  margin-top: 0.75em;
  width: 29% !important;
}

.ui.tabular.menu {
  border-bottom: none;
}
.segment.ui {
  border: none ;
  box-shadow: none ;
}
.ui.menu .item {
  padding:0;
}
.ui.three.bottom {
  font-size: 6px;
  padding-top: 0.5em;
}
.ui.mini.statistic {
  font-size: 1.375rem; 
  margin: 0;
  margin-bottom: 0.25em;
}
.ui.mini.statistic .value {
  font-size: 0.9em !important;
  text-align: left !important;
}
.ui.mini.statistic .label {
  font-size: 0.625em;
  text-align: left !important;
}

@media screen and (max-width:767px) {
  
  .ui.button.compact {
    position: absolute;
    left: 50%;
    bottom: 0;
    display: block;
  }
  .plus-button {
    position: relative !important;
    right: 0;
    text-align: center;
  }
}
</style>