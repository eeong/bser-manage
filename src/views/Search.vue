<template>
  <div >
    <search-form ></search-form>
    <h2>Rank 10 
      <select class="ui selection three item stackable tabs menu " v-model="rankMode"> 
      <option class="item" selected="" value="1">Solo</option>
      <option class="item" value="2">Duo</option>
      <option class="item" value="3">Squad</option>
      </select>
    </h2> 
    
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
import SearchForm from "../components/SearchForm"
export default {
  name: 'search',
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
  components:{
    'search-form' : SearchForm,
  },
  data() {
    return {
      errorsPresent: false,
      search_data: '',
      rank:'',
      loader:'active',
      rankMode: 1,
    };
  },
  watch: {
      rankMode: async function (newVal) {
        this.rank = await api.search(newVal)
      }
    },
  methods:{
    onSearch: async function(nickname) {
      if (nickname){
        await this.$router.push({name:'new-task', params:{userId: nickname || `${this.userid}`}});
      }
      else this.errorsPresent= true 
    }

  },
  async mounted(){
    this.rank = await api.search(this.rankMode)
    this.loader = "disabled "
  },
  
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