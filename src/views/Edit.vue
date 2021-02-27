<template>
  <div class="ui text container">
      <h1>빌드 수정하기</h1>
      
      <div class="ui inverted segment celled" v-if="rec != null">
        <div class="ui image">
          <img class="ui image small spaced " :src="require(`../assets/static/img/00.캐릭터/${rec.characterSrc}`)" alt="캐릭터">
          <sui-popup :content="rec.weapon">
            <img slot="trigger" class="ui image label ribbon circular w-type" :src="require(`../assets/static/img/type/${rec.weapon}.png`)" alt="weapontype">
          </sui-popup>
        </div>
        <div class="ui transparent inverted input header">
          <input type="text" :placeholder="rec.title" v-model="rec.title">
        </div>
      </div>
    <char-selection v-if="rec != null" :rec="rec" />
    <item-comp v-if="rec != null" :game="rec" />
    
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
import ItemComp from '../components/ItemcompHori';
import CharSelection from '../components/CharSelection';

export default {
  name: 'edit',
  components: {
    "item-comp": ItemComp,
    "char-selection": CharSelection,
  },
  data: function() {
    return {
      title:"",
      loader:"active",
      rec:null,
      
    };
  },
  watch:{
    
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
  background: linear-gradient(#575252, #413e3e) ;
  overflow: hidden;
  height: 8rem;
}

.ui.image.ribbon.w-type {
  width: 40px;
  height: 40px;
  top: 15%;
  left: -3%;
}
</style>