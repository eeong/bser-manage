<template>
  <div>
    <h1>전적확인 : 최근 10게임</h1>
    <rec-form @createOrUpdate="createOrUpdate"></rec-form>
  </div>
</template>

<script>
import recForm from '../components/RecForm.vue';
import { api } from '../helpers/helpers';
export default {
  name: 'new',
  components: {
    'rec-form': recForm
  },
  data(){
    return {
      user:null,
    }
  },
  methods: {
    createOrUpdate: async function(task) {
      const res = await api.createrec(task);
      this.flash(`템빌드가 저장되었습니다${res}`, 'success');
      this.$router.push(`/recs`);
    }
  },
  
};
</script>