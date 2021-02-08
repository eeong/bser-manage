<template >
<div>
	<h1>전적검색</h1>
      <div class="ui action input ">
        <input type="text" v-on:keyup.enter="onSearch(userid)" v-model="userid" class="ui input" style="display:inline-block" placeholder="닉네임을 입력해주세요">
        <button type="submit" @click="onSearch(userid)" class="ui button red" style="display:inline-block" >검색 
        </button>
      </div>
    <h1>랭크검색</h1>
    <div class="ui action input ">
      <input type="text" v-on:keyup.enter="onSearchRank(useridRank)" v-model="useridRank" class="ui input" style="display:inline-block" placeholder="닉네임을 입력해주세요">
      <select class="ui compact selection dropdown" v-model="gameMode" style="padding: 10px;">
        <option selected="" value="1">Solo</option>
        <option value="2">Duo</option>
        <option value="3">Squad</option>
      </select>
      <button type="submit" @click="onSearchRank(userid)" class="ui button red" style="display:inline-block" >검색 
      </button>
    </div>
</div>
</template>

<script>
export default {
  name: 'search-form',
  props: {
  
  },
  data() {
    return {
      errorsPresent: false,
      user:null,
      gameMode: 1,
      userid:'',
      useridRank:'',
    };
  },
  methods: {
    onSearch: async function(nickname) {
      if (this.userid !== undefined){
        await this.$router.push({name:'new', params:{userId: nickname || `${this.userid}`}});
      }
      else this.errorsPresent= true 
    },
    onSearchRank: async function(nickname, gameMode) {
      if (this.userid !== undefined){
        await this.$router.push({name:'rank', params:{userId: nickname || `${this.userid}`, gameMode: gameMode || this.gameMode}});
      }
      else this.errorsPresent= true 
    },
    
  }
  
};
</script>

<style scoped>
.error {
  color: red;
}
</style>