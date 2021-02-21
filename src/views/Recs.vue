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
            <a class="item" v-for="i in paging.end" :key="i" @click="pageClick(i)">{{i}}</a>
        </div>
      </div>
      <div></div>
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
      recss:[],
      armors:[],
      weapons:[],
      paging:{
        total:'',
        index:0,
        end:'',
        pageNum:5,

      },
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
      const newrecs = this.recss.filter(recss => recss._id !== id);
      this.recss = newrecs;
    },
    getPage(){
      let pages = this.paging.index*this.paging.pageNum;
      let pagesShow = (pages + this.paging.pageNum)>=(this.recss.length) ? this.recss.length : (pages + this.paging.pageNum);
      this.recs = this.recss.slice(pages,pagesShow)
    },
    pageClick(i){
      this.paging.index = i-1;
    }
  },
  watch:{
    'paging.index':function(){
      this.getPage();
    }
  },
  async mounted() {
    this.recss = await api.getrecs();
    this.paging.total = this.recss.length;
    this.paging.end = Math.floor(this.paging.total/this.paging.pageNum) + 1;
    this.getPage();
    /* this.armors = await api.getarmor();
    this.weapons = await api.getweapon(); */
  }
};
</script>

<style scoped>
  a {cursor: pointer; }
</style>