<template>
  <div>
    <div class="ui text container">
      <h1>빌드 수정하기</h1>
      
      <div class="ui inverted segment">
        <img class="ui image small rounded spaced top aligned" :src="require(`../assets/static/img/00.캐릭터/${rec.characterSrc}`)" alt="캐릭터">
        
        <div class="ui transparent inverted input header">
          <input type="text" :placeholder="rec.title" v-model="rec.title">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'edit',
  components: {
  },
  data: function() {
    return {
      title:"",
      loader:"active",
      rec:null,
    };
  },
  methods: {
    /* createOrUpdate: async function(task) {
      await api.updatetask(task);
      this.flash('task updated sucessfully!', 'success');
      this.$router.push(`/tasks/${task._id}`);
    } */
  },
  async mounted() {
    this.rec = await api.getrec(this.$route.params.id);
    this.loader = 'disabled';
  }
};
</script>

<style scoped>
.ui.inverted.segment {
  background: #413e3e;
  overflow: hidden;
  height: 8rem;
}

.ui.image.small.rounded.spaced {
  transform:translate(-30%, -10%);
  background: rgb(109,138,60);
  background: radial-gradient(circle, #617935,#91b965 70%);
}

</style>