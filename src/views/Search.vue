<template>
  <div >
    <h1>전적검색</h1>
      <input type="text" v-on:keyup.enter="onSearch(userid)" v-model="userid" class="form-control col-md-8 mr-4" style="display:inline-block" placeholder="전적을 확인할 닉네임을 입력해주세요">
      <button type="submit" @click="onSearch(userid)" class="btn btn-info col-md-1 py-1" style="display:inline-block" >검색 
      </button>
    <h2>Rank 10</h2> 
      <ul class="topRanks-list ui two column doubling grid container ">
              <li class="topRanks ui column " v-for="(info , i) in rank" :key="i" @click="onSearch(info.nickname)">
                  <div class="ui segment three column grid ">
                    <h3 class="rank-info rank column">{{info.rank}}</h3>
                    <h5 class="rank-info rank-nickname m-0 column">{{info.nickname}}</h5>
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

.topRanks {
  background-color: #e9e9e9;

}

</style>