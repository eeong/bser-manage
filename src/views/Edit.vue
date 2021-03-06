<template>
  <div class="ui text container">
      <h1>빌드 수정하기</h1>
      
      <div class="ui inverted segment table" v-if="rec != null">
        <tr>
          <td class="ui image" id="td-my" >
            <img class="ui image small spaced " :src="require(`../assets/static/img/00.캐릭터/${rec.characterSrc}`)" alt="캐릭터">
            <sui-popup :content="rec.weapon">
              <img slot="trigger" class="ui image label ribbon circular w-type" :src="require(`../assets/static/img/type/${rec.weapon}.png`)" alt="weapontype">
            </sui-popup>
          </td>
          <td class="ui transparent inverted input" id="td-my">
            <input type="text" :placeholder="rec.title" v-model="rec.title">
          </td>
        <td class="ui weapon-td" id="td-my">
          <item-comp v-if="rec != null" :taken="rec" :key="itemCompKey" />
        </td>
        </tr>
      </div>
        
      <char-selection v-if="rec != null" :rec="rec" :key="charSelectionKey" />
        

      <div style="position:relative;">
        <item-selection 
          
          class="column" 
          :key="itemSelectionKey"
          :rec="rec" 
          :weapons="weaponDB"
          :armors="armors" 
          @changeItem="changeItem"
          
          />

          <div class="edit-button">
            <div is="sui-button-group">
              <sui-button @click="onClickCancel()">취소</sui-button>
              <sui-button-or />
              <sui-button positive @click="onClickSubmit()">저장</sui-button>
            </div>
          </div>

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
      weaponDB:[],
      armorDB:[],
      itemTypeList:['Weapon','Chest','Head','Arm','Leg' ,'Trinket'],
      itemCompKey:0,
      itemSelectionKey:0,
      charSelectionKey:0,
      armors:{}
    };
  },
  watch:{
    'rec.weapon':function(){
      this.getWeaponDB(this.rec.weapon);
      this.forceRender('item-selection');
    },
  },
  computed:{
    
  },
  methods: {
    /* createOrUpdate: async function(task) {
      await api.updatetask(task);
      this.flash('task updated sucessfully!', 'success');
      this.$router.push(`/tasks/${task._id}`);
    } */
    onClickCancel: function(){
      let alert=confirm("진행사항을 취소하고 돌아갑니다");
      if(alert) { 
        this.$router.push('/recs')
      }
    },
    getWeaponDB: async function(currentW){
      this.weaponDB = await api.getweapon(currentW);
    },
    getArmorDB: function(active){
			if(active!='Weapon') {
				this.armors[String(active)] = this.armorDB.filter((v)=>{if(v.armorType == active) return v; })
		}
		},
    forceRender: function(what){
      if(what == 'item-selection') this.itemSelectionKey += 1;
      else if (what == 'item-comp') this.itemCompKey += 1;
    },
    changeItem: function(){
      this.forceRender('item-comp');
    },
  },
  async mounted() {
    this.rec = await api.getrec(this.$route.params.id);
    this.loader = 'disabled';
    this.armorDB = await api.getarmor()
    for(var i in this.itemTypeList){this.getArmorDB(this.itemTypeList[i])}
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
  width: 12em !important;
}
.ui.image.ribbon.w-type {
  width: 40px;
  height: 40px;
  top: 20%;
  left: 10% !important;
}
.edit-button {
  position: absolute;
  top: -10%;
  right: 0;
}
@media screen and (max-width:767px) {
	.weapon-td {
    position: relative;
    transform: translateY(1.5em);
  }
  .ui.image.ribbon.w-type {
    left: 2% !important; 
  }
	td#td-my {
    width: 12em !important;
    display: inline-block !important;
  }
  .ui.inverted.segment {
    height: auto;
  }
}
</style>