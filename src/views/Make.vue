<template>
  <div class="ui container">
      <h1>빌드 만들기</h1>
      
      <div class="ui inverted segment table" >
        <tr>
          <td class="ui image" id="td-my" >
            <img class="ui image small spaced " :src="require(`../assets/static/img/00.캐릭터/${rec.characterSrc || 'empty.png'}`)" alt="캐릭터">
            <sui-popup :content="rec.weapon">
              <img slot="trigger" v-if="rec != null" class="ui image label ribbon circular w-type" :src="require(`../assets/static/img/type/${rec.weapon || 'empty'}.png`)" alt="weapontype">
            </sui-popup>
          </td>
          <td class="ui input" id="td-my" v-if="rec != null">
            <input type="text" placeholder="제목을 입력해주세요." v-model="rec.titleCustom">
          </td>
        <td class="ui weapon-td" id="td-my" v-if="rec != null">
          <item-comp :taken="rec" :key="itemCompKey" />
        </td>
        </tr>
      </div>
        
      <char-selection :rec="rec" :key="charSelectionKey" style="margin:1em 0 4em 0;" />
        

      <div style="position:relative; ">
        <item-selection 
          
          class="column" 
          :key="itemSelectionKey"
          :rec="rec" 
          :weapons="weaponDB"
          :armors="armors"
          :loader="loader"
          @changeItem="changeItem"
          ref="itemSelection"
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
  name: 'make',
  components: {
    "item-comp": ItemComp,
    "char-selection": CharSelection,
    "item-selection": ItemSelection,
  },
  data: function() {
    return {
      title:"",
      loader:"",
      rec:{
        titleCustom:'',
        charachter: '',
        charachterSrc: '',
        weapon: '',
        item:[],
      },
      weaponDB:[],
      armorDB:[],
      itemTypeList:['Weapon','Chest','Head','Arm','Leg' ,'Trinket'],
      itemCompKey:0,
      itemSelectionKey:0,
      charSelectionKey:0,
      armors:{},
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
    onClickSubmit: async function() {
      await api.createrec(this.rec);
      this.flash('템트리가 성공적으로 등록되었습니다!', 'success');
      this.$router.push(`/recs`);
    },
    onClickCancel: function(){
      let alert=confirm("진행사항을 취소하고 돌아갑니다");
      if(alert) { 
        this.$router.push('/recs')
      }
    },
    getWeaponDB: async function(currentW){
      this.loader="active"
      this.weaponDB = await api.getweapon(currentW);
      this.loader="disabled"
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
    titleChange: function(title){
      this.rec.titleCustom = title;
    }
  },
  async mounted() {
    this.$refs.itemSelection.getDivofChild();
    this.armorDB = await api.getarmor();
    for(var i in this.itemTypeList){this.getArmorDB(this.itemTypeList[i])}
  }
};
</script>

<style scoped>
.ui.inverted.segment {
  background: #413e3e;
  background: linear-gradient(#646262, #3b3a3a) ;
  overflow: hidden;
  height: 10rem;
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
  width: 14em !important;
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
    width: 14em !important;
    display: inline-block !important;
  }
  .ui.inverted.segment {
    height: auto;
  }
}
</style>