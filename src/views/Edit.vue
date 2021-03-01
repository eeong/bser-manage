<template>
  <div class="ui text container">
      <h1>빌드 수정하기</h1>
      
      <div class="ui inverted segment celled table" v-if="rec != null">
        <tr>
          <td class="ui image" width="125">
            <img class="ui image small spaced " :src="require(`../assets/static/img/00.캐릭터/${rec.characterSrc}`)" alt="캐릭터">
            <sui-popup :content="rec.weapon">
              <img slot="trigger" class="ui image label ribbon circular w-type" :src="require(`../assets/static/img/type/${rec.weapon}.png`)" alt="weapontype">
            </sui-popup>
          </td>
          <td class="ui transparent inverted input " width="350">
            <input type="text" :placeholder="rec.title" v-model="rec.title">
          </td>
        <td class="ui weapon-td" width="190">
          <item-comp class="" v-if="rec != null" :game="rec" />
        </td>

        </tr>
      </div>
    <char-selection v-if="rec != null" :rec="rec" @getWeaponDB="getWeaponDB" />
    <div class="ui segment" >
      <item-selection style="width:50%;" class="column" v-if="rec !=null" :rec="rec" :weapons="weaponDB" />
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
import ItemComp from '../components/Itemcomp';
import CharSelection from '../components/CharSelection';
import ItemSelection from '../components/ItemSelection';

export default {
  name: 'edit',
  components: {
    "item-comp": ItemComp,
    "char-selection": CharSelection,
    "item-selection": ItemSelection,
  },
  data: function() {
    return {
      title:"",
      loader:"active",
      rec:null,
      weaponDB:{},
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
    getWeaponDB: async function(currentW){
      this.weaponDB = await api.getweapon(currentW);
    }
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
  background: linear-gradient(#646262, #3b3a3a) ;
  overflow: hidden;
  height: 8rem;
  position: relative;
}
.ui.celled.table tr td {
  border: none ;
}
.weapon-td {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}
.ui.image.ribbon.w-type {
  width: 40px;
  height: 40px;
  top: 20%;
  left: 10% !important;
}

@media screen and (max-width:767px) {
	.weapon-td {
    position: relative;
  }
	
}
</style>