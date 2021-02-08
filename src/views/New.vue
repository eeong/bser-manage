<template>
  <div>
    <h1>전적확인</h1>
    <task-form @createOrUpdate="createOrUpdate"></task-form>
  </div>
</template>

<script>
import taskForm from '../components/TaskForm.vue';
import { api } from '../helpers/helpers';
export default {
  name: 'new',
  components: {
    'task-form': taskForm
  },
  data(){
    return {
      user:null,
    }
  },
  methods: {
    createOrUpdate: async function(task) {
      const res = await api.createtask(task);
      this.flash('task created', 'success');
      this.$router.push(`/tasks/${res._id}`);
    }
  },
  mounted(){
    if (this.user == undefined) {
      alert('먼저 전적을 검색할 닉네임을 입력해주세요.');
      this.$router.push('/search')
    }
  }
};
</script>