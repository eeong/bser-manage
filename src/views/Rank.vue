<template>
  <div>
    <h1>랭크</h1>
    <ul>
      
    </ul>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'rank',
  components: {
    
  },
  data(){
    return {
      user:null,
      rank:null,
    }
  },
  methods: {
    
  },
  async mounted(){
    this.rank = await api.searchRank(this.$route.params.userId, this.$route.params.gameMode )
  }
};
</script>