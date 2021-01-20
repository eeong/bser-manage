<template >
<div>

 <form v-if="user !== null" action="#" @submit.prevent="onSubmit">
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

    

    <button class="positive ui button">Submit</button>
  </form>
</div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'task-form',
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
    },
   /*  game: {
      type: Object,
      required: false,
      default: () => {
        return {
          nickname: '',
          gameId:'',
        };
      }
    }, */
    
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
        nickname:this.user.userGames[0].nickname,
        gameId: this.user.userGames[0].gameId
      }
        this.$emit('createOrUpdate', game);
      
    }
  },
  async mounted() {
    this.user = await api.searchId(this.$route.params.userId)
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>