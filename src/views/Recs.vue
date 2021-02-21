<template>
  <div>
    <div class="ui text container">
      <h1>템빌드저장소</h1>
      <table id="recs" class="ui celled compact table">
        <tr v-for="(rec, i) in recs" :key="i">
          <td width="75">
            <a class="ui teal ribbon label">{{rec.weapon}} </a>
            <img class="ui item tiny circular image" :src="require(`../assets/static/img/00.캐릭터/${rec.characterSrc}`)" >
          </td>
          <td >
            <div class="ui two column grid">
              <router-link class="four column" :to="{ name: 'show', params: { id: rec._id }}">{{ rec.date.slice(0,10) }} {{ rec.nickname }} {{ rec.mode }}</router-link>
                <div class="four column ">
                    <item-comp :game="rec">
                    </item-comp>
                </div>
            </div>
          </td>
          
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'edit', params: { id: rec._id }}">
              <i class="ui icon edit grey"></i>
            </router-link>
          </td>
          <td width="75" class="center aligned" @click.prevent="onDestroy(rec._id)">
            <a ><i class="ui grey icon trash"></i></a>
          </td>
        </tr>
        
      </table>
      <div></div>
      <div class="ui secondary menu">
        <div class="ui pagination menu right">
            <a class="item" :class="active">1</a>
            <a class="item">2</a>
            <a class="item">3</a>
        </div>
      </div>
      <div>{{recs}}</div>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
import itemComp from '../components/Itemcomp';


export default {
  name: 'recs',
  data() {
    return {
      recs: [],
      armors:[],
      weapons:[],
      page:'',
      active:[true,false,false,false],
    };
  },
  components:{
    'item-comp': itemComp
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('삭제 하시겠습니까?');
      if (!sure) return;
      await api.deleterec(id);
      this.flash('해당 템빌드가 삭제되었습니다!', 'success');
      const newrecs = this.recs.filter(recs => recs._id !== id);
      this.recs = newrecs;
    }
  },
  async mounted() {
    this.recs = await api.getrecs();
    /* this.armors = await api.getarmor();
    this.weapons = await api.getweapon(); */
  }
};
</script>

<style scoped>
  a {cursor: pointer; }
</style>