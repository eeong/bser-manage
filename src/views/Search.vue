r<template>
  <div>
    <h1>Search</h1>
        <input type="text" v-on:keyup.enter="onSearch" v-model="userid" class="form-control col-md-8 mr-4" style="display:inline-block" placeholder="전적을 확인할 닉네임을 입력해주세요">
        <button type="submit" @click="onSearch" class="btn btn-info col-md-1 py-1" style="display:inline-block" >검색 
        </button>
      
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
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
      userid:''
    };
  },
  methods: {
    onSearch: async function() {
      if (this.userid !== undefined){
        await this.$router.push({name:'searchId', params:{userId:`${this.userid}`}});
      }
      else this.errorsPresent= true 
    },
    
  },
  async mounted() {
    this.search_data = await api.search();
  }
};
  

</script>

