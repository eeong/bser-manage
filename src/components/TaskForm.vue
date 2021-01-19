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
      <input type="text" placeholder="Enter Details" v-model="task.task2" />
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
    }
  },
  data() {
    return {
      errorsPresent: false,
      user:null
    };
  },
  methods: {
    onSubmit: function() {
      if (this.task.task1 === '' || this.task.task2 === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.task);
      }
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