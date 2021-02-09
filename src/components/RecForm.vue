<template >
<div>
  <div class="ui three column doubling grid" v-if="this.games != null">
        <div class="ui column three grid">
          <div class="column">{{games[0].gameRank}}위</div>
          <div class="column">{{games[0].characterNum}}</div>
          <div class="column" >{{getCharacter(games,0)[0].name}}</div>
        </div>
        <div class="ui column three grid">
          <div class="column"></div>
          <div class="column"></div>
          <div class="column"></div>
        </div>
        <div class="ui column three grid">
          <div class="top attached ui three item menu">
            <a class="item">Item</a>
            <a class="item">Item</a>
            <a class="item">Item</a>
          </div>
          <div class="attached ui three item menu">
            <a class="item">Item</a>
            <a class="item">Item</a>
            <a class="item">Item</a>
          </div>
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
    getCharacter: (v,i) => {
        return character.data.filter(function(obj) {
          return obj['code'] == v[i].characterNum
        })
    }
  },
  async mounted() {
    this.user = await api.searchId(this.$route.params.userId)
    this.games = this.user.userGames
    if (this.user.code == 404) {
      alert('먼저 전적을 검색할 닉네임을 입력해주세요.');
      this.$router.push('/search')
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>