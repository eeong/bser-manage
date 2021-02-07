<template>
  <div >
    <h1>전적검색</h1>
      <div class="ui action input">
        <input type="text" v-on:keyup.enter="onSearch(userid)" v-model="userid" class="ui input" style="display:inline-block" placeholder="전적을 확인할 닉네임을 입력해주세요">
        <button type="submit" @click="onSearch(userid)" class="ui button red" style="display:inline-block" >검색 
        </button>
      </div>
    <h2>Rank 10</h2> 
      <ul class="topRanks-list ui two column doubling grid container segment">
        <div class="ui loader" :class="loader"></div>
          <li class="topRanks ui column " v-for="(info , i) in rank" :key="i" @click="onSearch(info.nickname)">
              <div class="ui segment three column grid button ">
                <h3 class="rank-info rank column">{{info.rank}}</h3>
                <h5 class="rank-info rank-nickname column">{{info.nickname}}</h5>
                <p class="rank-info mmr column">MMR: {{info.mmr}}</p>
              </div>
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
      loader:'active',
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
    this.loader = "disabled "
  }
  
};

</script>

<style lang="css" scoped>

.topRanks {
  background-color: #eeecec;
}
.topRanks h3,h5 {
  margin: 0;
}
</style>