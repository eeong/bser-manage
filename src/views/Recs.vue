<template>
  <div>
    <div class="ui text container">
      <h1>템빌드</h1>
      <table id="recs" class="ui celled compact table" style="position:relative;">
        <div class="ui loader" :class="loader" ></div>
        <tr v-for="(rec, i) in recs" :key="i">
          <td width="75">
            <a class="ui teal ribbon label type-label">
              <img class="ui mini image inline" :src="require(`../assets/static/img/type/${rec.item[0] ? rec.item[0].weaponType : 'empty'}.png`)" alt="weapontype"> 
              {{rec.weapon}} 
            </a>
            <img class="ui item tiny circular image" :src="require(`../assets/static/img/00.캐릭터/${rec.characterSrc}`)" >
          </td>
          <td >
              <router-link class="four column" :to="{ name: 'edit', params: { id: rec._id }}">
                {{ rec.titleCustom || rec.title }} 
              </router-link>
          </td>
          <td width="200">
            <item-comp :taken="rec" :key="itemCompKey" />
          </td>
          <td width="75" class="center aligned">
              <router-link :to="{ name: 'edit', params: { id: rec._id }}">
                <i class="ui icon edit grey"></i>
              </router-link>
          </td>
          <td width="75" class="center aligned" @click.prevent="onDestroy(rec)">
            <a ><i class="ui grey icon trash"></i></a>
          </td>
        </tr>
        
      </table>
      <div class="ui secondary menu">
        <router-link :to="{ name: 'make'}">
          <sui-button positive style="margin-top:0" >새로만들기</sui-button>
          </router-link>
        <div class="ui pagination menu right" v-if="paging.end">
            <a class="item" @click="pageOverClick('l')" :class="isAble('l')"><i class="icon angle left"></i></a>
            <a class="item"  v-for="i in paging.end" :key="i" @click="pageClick(i)" :class="isActive(i)" v-show="showAble(i)">{{i}}</a>
            <a class="item" @click="pageOverClick('r')" :class="isAble('r')"><i class="icon angle right"></i></a>
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
      paging:{
        total:'',
        index:0,
        end:'',
        showNum:5,
        pageNum:5,
        pageIndex:1,
        pageShow:0,
      },
      itemCompKey:0,
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
      let pages = this.paging.index*this.paging.showNum;
      let pagesShow = (pages + this.paging.showNum)>=(this.recss.length) ? this.recss.length : (pages + this.paging.showNum);
      this.recs = this.recss.slice(pages,pagesShow)
    },
    pageClick(i){
      this.paging.index = i-1;
    },
    pageOverClick(d){
      let num = d == 'l' ? -1 : 1
      if(d == 'r' && (this.paging.index+1) == this.paging.pageShow) this.paging.pageShow += this.paging.pageNum;
      if(d == 'l' && this.paging.index == this.paging.pageShow-this.paging.pageNum) this.paging.pageShow -= this.paging.pageNum;
      this.paging.index += num;
    },
    isActive(idx) {
      if(idx-1 == this.paging.index) return 'active';
    },
    isAble(direction){
      if(direction == 'l' && this.paging.index == 0) return 'disabled';
      else if (direction == 'r' && this.paging.index == this.paging.end-1) return 'disabled';
    },
    showAble(i){
      if(i <= this.paging.pageShow && i > (this.paging.pageShow - this.paging.pageNum)) return 'ok';
    }
  },
  watch:{
    'paging.index':function(){
      this.getPage();
      this.itemCompKey += 1;
    }
  },
  async mounted() {
    this.recss = await api.getrecs();
    this.paging.total = this.recss.length;
    this.paging.end = Math.ceil(this.paging.total/this.paging.showNum);
    this.paging.pageShow = this.paging.pageNum*this.paging.pageIndex;
    this.getPage();
    this.loader='disabled';
    
  }
};
</script>

<style scoped>
  a {
    cursor: pointer;
  }
  a.item.disabled {
    pointer-events: none;
  }
  .type-label.label {
    padding-left: 1.2em;   
  }
</style>