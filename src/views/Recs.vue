<template>
  <div>
    <div class="ui text container">
      <h1>템빌드</h1>
      <table id="recs" class="ui celled compact table" style="position:relative;">
        <div class="ui loader" :class="loader" ></div>
        <tr v-for="(rec, i) in recs" :key="i">
          <td width="75">
            <a class="ui teal ribbon label">{{rec.weapon}} </a>
            <img class="ui item tiny circular image" :src="require(`../assets/static/img/00.캐릭터/${rec.characterSrc}`)" >
          </td>
          <td >
            <div class="ui two column grid">
              <router-link class="four column" :to="{ name: 'show', params: { id: rec._id }}">
                {{ rec.title }} 
              </router-link>
                <div class="four column ">
                    <item-comp :game="rec">
                    </item-comp>
                </div>
            </div>
          </td>
          
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'edit', params: { id: rec._id }}" >
              <i class="ui icon edit grey"></i>
            </router-link>
          </td>
          <td width="75" class="center aligned" @click.prevent="onDestroy(rec)">
            <a ><i class="ui grey icon trash"></i></a>
          </td>
        </tr>
        
      </table>
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
      loader:'active',
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
      
    };
  },
  components:{
    'item-comp': itemComp
  },
  methods: {
    async onDestroy(build) {
      const sure = window.confirm(`${build.title}를 삭제 하시겠습니까?`);
      if (!sure) return;
      await api.deleterec(build._id);
      location.reload();
      
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
    this.paging.end = Math.ceil(this.paging.total/this.paging.pageNum);
    this.getPage();
    this.loader='disabled';
    /* this.armors = await api.getarmor();
    this.weapons = await api.getweapon(); */
  }
};
</script>

<style scoped>
  a {cursor: pointer; }
</style>