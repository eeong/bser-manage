<template>
  <div>
    <h1>Edit task</h1>
    <rec-form @createOrUpdate="createOrUpdate" :task=this.task></rec-form>
  </div>
</template>

<script>
import recForm from '../components/RecForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edit',
  components: {
    'rec-form': recForm
  },
  data: function() {
    return {
      task: {}
    };
  },
  methods: {
    createOrUpdate: async function(task) {
      await api.updatetask(task);
      this.flash('task updated sucessfully!', 'success');
      this.$router.push(`/tasks/${task._id}`);
    }
  },
  async mounted() {
    this.task = await api.gettask(this.$route.params.id);
  }
};
</script>