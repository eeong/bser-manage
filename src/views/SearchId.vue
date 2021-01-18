<template>
  <div v-if="user">
    <h1 >Search</h1>
    <p v-if="user !== null">{{user.userGames[0].nickname}}</p>
  </div>
</template>

<script>
import {api} from '../helpers/helpers';
export default {
  name: 'searchId',
  props: {
  
  },
  data() {
    return{
      user:null,
      userid:this.$route.params.userId,
    }
  },
  methods: {
    
  },
  async mounted() {
    this.user = await api.searchId(this.$route.params.userId)
  }
};
  

</script>

