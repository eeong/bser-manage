r<template>
  <div>
    <h1>Search</h1>
      <input type="text" v-on:keyup.enter="onSearch" v-model="userid" class="form-control col-md-8 mr-4" style="display:inline-block" placeholder="전적을 확인할 닉네임을 입력해주세요">
      <button type="submit" @click="onSearch" class="btn btn-info col-md-1 py-1" style="display:inline-block" >검색 
      </button>
    <h2>Rank 10</h2> 
      <ul class="topRanks-list">
        <li class="topRanks" v-for="(info , i) in rank" :key="i" @click="onSearch(info.nickname)">
          <h3 class="rank-info rank">{{info.rank}}</h3>
          <h5 class="rank-info rank-nickname">{{info.nickname}}</h5>
          <p class="rank-info mmr">MMR: {{info.mmr}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
import {api} from "../helpers/helpers"
export default {
  name: 'search-form',
  props: {
    user: {
      type: Object,
      required: false,
      default: () => {
        return {
          id: '',
          
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false,
      search_data: '',
      userid:'',
      rank:'',
    };
  },
  methods: {
    onSearch: async function(nickname) {
      if (this.userid !== undefined){
        await this.$router.push({name:'new-task', params:{userId: nickname || `${this.userid}`}});
      }
      else this.errorsPresent= true 
    },
    
  },
  async mounted(){
    this.rank = await api.search()
  }
  
};
  

</script>

<style lang="css" scoped>
.topRanks-list {
  padding: 0; 
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
}
.topRanks {
  padding: 0.5em;
  background-color: #3eacbb;
  border-radius: 3px;
  flex: 48% 0 0;
  margin: 0.5em 0 ; 
  display: flex;
  cursor: pointer;
}
.topRanks .rank-info {vertical-align: center; margin: 12px 0; text-align: center; }
.topRanks .rank { flex: 20% 0 0; font-size: 1.5em;}
.topRanks .rank-nickname {flex:50% 0 0; font-size: 1em; padding-top: 4px;}
.topRanks .mmr {flex:30% 0 0; font-size: 0.875em; padding-top: 4px;}
</style>