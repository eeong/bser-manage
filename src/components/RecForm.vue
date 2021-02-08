<template >
<div>

  <form v-if="user != null" action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i>task
      </div>
      <input type="text" placeholder="Enter task..." v-model="user.userGames[0].nickname" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
  <i class="info circle icon"></i> Details
      </div>
      <input type="text" placeholder="Enter Details" v-model="user.userGames[0].gameId" />
    </div>

    <div>{{user.userGames[0] || '사용자 전적을 찾을 수 없습니다'}}</div>

    <button class="positive ui button">Submit</button>
  </form>
</div>
</template>

<script>
import { api } from '../helpers/helpers';
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
      
    };
  },
  methods: {
    onSubmit: function() {
      let game = {
        nickname: this.user.userGames[0].nickname || null,
        gameId: this.user.userGames[0].gameId || null,
        
      }
        this.$emit('createOrUpdate', game);
      
    }
  },
  async mounted() {
    this.user = await api.searchId(this.$route.params.userId)
    
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