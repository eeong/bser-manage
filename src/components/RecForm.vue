<template >
<div >
  <div v-if="games != null">
    <div class="ui text container">
      <h1 >전적확인 : 최근 10게임 </h1>
      <h2 >{{games[0].nickname}}</h2>
      <div class="ui three column stackable grid centered celled " v-for="(game, i) in games " :key="i" style="position:relative;">
            <div class="ui column three ">
              <div class="ui segment">
                <div class="ui header item">#{{game.gameRank}}위 </div><div class="ui item"></div>
                <div class="ui item ">
                  <img class="ui item circular image" :src="require(`../assets/static/img/00.캐릭터/${game.characterSrc}`)" >
                  <div class="ui item">{{getCharacter(game.characterNum-1)}}/{{game.item[0].transKr[0][1]}}</div>
                </div>
              </div>
            </div>
            <div class="ui column three ">
              <div class="ui segment">
                <div class="ui three item ">
                  <div class="ui">K/ D/ H</div>
                  <div class="ui ">{{game.playerKill}}/ {{game.playerAssistant}}/ {{game.monsterKill}}</div>
                  <div class="ui"></div>
                </div>
                <div class="ui three item ">
                  <div class="ui">레벨/ 딜량/ MMR</div>
                  <div class="ui " v-if="games[i-1]">{{game.characterLevel}}/ {{game.damageToPlayer}}/ {{games[i-1].mmrBefore}}</div>
                  <div class="ui " v-if="i==0">{{game.characterLevel}}/ {{game.damageToPlayer}}/ {{currnetMmr.userRank.mmr}}</div>
                  <div class="ui"></div>
                </div>
                
              </div>
            </div>
            <div class="ui column three">
              <item-comp :game='game'>
              </item-comp>
            </div>
          <div class="plus-button column"><button class="ui button compact icon blue " @click="onSubmit(game)" ><i class="plus icon "></i></button></div>  
      </div>
    </div>
  </div>
  <div v-if="user != null"  >
    <div>{{games[0] || '사용자 전적을 찾을 수 없습니다'}}</div>

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
      user:null,
      games: null,
      currnetMmr:'',
    };
  },
  components: {
    'item-comp': itemComp
  },
  methods: {
    onSubmit: function(x) {
      let game = {
        title: `${new Date() }`+`${this.getCharacter(x.characterNum-1)}`,
        nickname: x.nickname || null,
        userNum: x.gameId || null,
        item: x.item
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
    this.currnetMmr = await api.searchRank(this.games[0].nickname,this.games[0].matchingTeamMode)
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

.image.circular {
  width: 40%;
}
.plus-button {
  position: absolute !important;
  top: 50%;
  right: -35%;
  box-shadow: none !important;
  transform: translateY(-60%);
  text-align: right;
}
.img-wrap {
  padding: 0.92857143em 0 ;
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