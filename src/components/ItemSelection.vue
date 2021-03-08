<template>
	<div >
		<div class="ui segment" style="height:460px; overflow:hidden;">
		<div class="ui two stackable column grid">
			<div class="column seven wide "  >
					<sui-menu pointing secondary>
						<a
							is="sui-menu-item"
							v-for="(item,i) in items"
							:active="isActive(item[1])"
							:key="item[1]"
							:content="item[1]"
							@click="selectCtgr(item,i)"
							class="item-ctgr"
						/>
						
					</sui-menu>
			
					<div class="">
						<div class="ui loader" :class="loader"></div>
						<sui-list style="height:370px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('무기')" >
							<sui-list-item class="item-button" v-for="(weapon,i) in weapons" :key="i" @click="onClickItem(weapon)" :class="{selected:isSelected('Weapon',weapon)}">
								<sui-popup >
										<sui-grid-column text-align="center">
											<h4 is="sui-header">{{weapon.name}}</h4>
											<p class="item-desc" v-for="(transItem, j) in weapon.transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
										</sui-grid-column>
										<sui-image slot="trigger" class="ui tiny" rounded :id="weapon.itemGrade" :src="require(`../assets/static/img/01.무기/${weapon.transKr[0][1]}/${weapon.name}.png`)" />
								</sui-popup>
								<sui-list-content>
									<p is="sui-list-header" style="transform: translateY(55%);">{{weapon.name}}</p>
								</sui-list-content>
							</sui-list-item>
						</sui-list>
				
						<sui-list style="height:370px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('옷')" >
							<sui-list-item class="item-button" v-for="(armor,i) in armors.Chest" :key="i" @click="onClickItem(armor)" :class="{selected:isSelected('Armor',armor)}">
								<sui-popup>
										<sui-grid-column text-align="center">
											<h4 is="sui-header">{{armor.name}}</h4>
											<p class="item-desc" v-for="(transItem, j) in armor.transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
										</sui-grid-column>
										<sui-image slot="trigger" class="ui tiny" rounded :id="armor.itemGrade" :src="require(`../assets/static/img/02.방어구/옷/${armor.name}.png`)" />
								</sui-popup>
								<sui-list-content>
									<p is="sui-list-header" style="transform: translateY(55%);">{{armor.name}}</p>
								</sui-list-content>
							</sui-list-item>
						</sui-list>
				
						<sui-list style="height:370px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('머리')" >
							<sui-list-item class="item-button" v-for="(armor,i) in armors.Head" :key="i" @click="onClickItem(armor)" :class="{selected:isSelected('Armor',armor)}">
								<sui-popup>
										<sui-grid-column text-align="center">
											<h4 is="sui-header">{{armor.name}}</h4>
											<p class="item-desc" v-for="(transItem, j) in armor.transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
										</sui-grid-column>
										<sui-image slot="trigger" class="ui tiny" rounded :id="armor.itemGrade" :src="require(`../assets/static/img/02.방어구/머리/${armor.name}.png`)" />
								</sui-popup>
								<sui-list-content>
									<p is="sui-list-header" style="transform: translateY(55%);">{{armor.name}}</p>
								</sui-list-content>
							</sui-list-item>
						</sui-list>
				
						<sui-list style="height:370px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('팔')" >
							<sui-list-item class="item-button" v-for="(armor,i) in armors.Arm" :key="i" @click="onClickItem(armor)" :class="{selected:isSelected('Armor',armor)}">
								<sui-popup>
										<sui-grid-column text-align="center">
											<h4 is="sui-header">{{armor.name}}</h4>
											<p class="item-desc" v-for="(transItem, j) in armor.transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
										</sui-grid-column>
										<sui-image slot="trigger" class="ui tiny" rounded :id="armor.itemGrade" :src="require(`../assets/static/img/02.방어구/팔/${armor.name}.png`)" />
								</sui-popup>
								<sui-list-content>
									<p is="sui-list-header" style="transform: translateY(55%);">{{armor.name}}</p>
								</sui-list-content>
							</sui-list-item>
						</sui-list>
				
						<sui-list style="height:370px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('다리')" >
							<sui-list-item class="item-button" v-for="(armor,i) in armors.Leg" :key="i" @click="onClickItem(armor)" :class="{selected:isSelected('Armor',armor)}">
								<sui-popup>
										<sui-grid-column text-align="center">
											<h4 is="sui-header">{{armor.name}}</h4>
											<p class="item-desc" v-for="(transItem, j) in armor.transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
										</sui-grid-column>
										<sui-image slot="trigger" class="ui tiny" rounded :id="armor.itemGrade" :src="require(`../assets/static/img/02.방어구/다리/${armor.name}.png`)" />
								</sui-popup>
								<sui-list-content>
									<p is="sui-list-header" style="transform: translateY(55%);">{{armor.name}}</p>
								</sui-list-content>
							</sui-list-item>
						</sui-list>
						
						<sui-list style="height:370px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('장식')" >
							<sui-list-item class="item-button" v-for="(armor,i) in armors.Trinket" :key="i" @click="onClickItem(armor)" :class="{selected:isSelected('Armor',armor)}">
								<sui-popup>
										<sui-grid-column text-align="center">
											<h4 is="sui-header">{{armor.name}}</h4>
											<p class="item-desc" v-for="(transItem, j) in armor.transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
										</sui-grid-column>
										<sui-image slot="trigger" class="ui tiny" rounded :id="armor.itemGrade" :src="require(`../assets/static/img/02.방어구/장식/${armor.name}.png`)" />
								</sui-popup>
								<sui-list-content>
									<p is="sui-list-header" style="transform: translateY(55%);">{{armor.name}}</p>
								</sui-list-content>
							</sui-list-item>
						</sui-list>
					</div>
			</div>
			<div class="column nine wide" style=" background:#efefef">
				<item-craft ref="craft" :divDim="divDim" :itemNow="itemNow" :itemTree="itemTree" :active="active" :rec="rec" :key="temtreeKey" />
			</div>
		</div>
		</div>
	

	</div>
</template>

<script>
import {api} from '../helpers/helpers';
import ItemCraftMap from '../components/ItemCraftMap';

export default {
	
	name: 'item-selection',
	props: {
		rec:{type:Object},
		weapons:{type:Array},
		armors:{type:Object},
		divs:{type:Array},
	},
	components:{
		'item-craft' : ItemCraftMap
	},

	data: function() {
		return {
			active: ['Weapon','무기'],
			items: [['Weapon','무기'], ['Chest','옷'], ['Head','머리'],['Arm','팔'],['Leg' ,'다리'],['Trinket' ,'장식']],
			itemTypeList:['Weapon','Chest','Head','Arm','Leg' ,'Trinket'],
			selected:[],
			armor:[],
			itemTree:[],
			itemNow:null,
			temtreeKey:0,
			divDim:[0,0,0],
			loader:'active',
	}
	},
	methods: {
		isActive(name) {
			return this.active[1] === name;
		},
		selectCtgr(name,i) {
			this.active = name;
			this.onClickItem(this.rec.item[i]);
			this.itemListKey += 1;
		},
		isSelected(ctgr, item){
			if(this.selected[0] == ctgr && this.selected[1] == item.code) {
				this.itemNow = item;
				return true
			} 
			else return false;
		},
		checkItemType(itemCode){
			let weaponOrArmor = String(itemCode)[0];
			let whatArmor = String(itemCode)[2];
			let resultArr = {'1':0,'2':2,'3':1,'4':3,'5':4,'6':5};
			let result = weaponOrArmor == 1 ? 0 : resultArr[String(Number(whatArmor)+1)]; 
			return result;
		},
		onClickItem(val) {
			if(val){let itemType = this.checkItemType(val.code)
			this.rec.item[itemType] = val;
			this.selected = [val.itemType, val.code];}
			
		},
		changeItem() {
			this.$emit('changeItem',this.rec);
			this.getTemtree(this.selected[1]);
		},
		async getTemtree(val){
			let idx = this.checkItemType(val)
			let target = this.rec.item[idx]
			if(target.makeMaterial1){
				this.itemTree = await api.craftitem(target.makeMaterial1,target.makeMaterial2)
				this.temtreeKey += 1;
			}
			else this.itemTree = [];
		},
		getDivofChild:function(){
			this.$refs.craft.getDivDim();
		}
	},
	
	watch: {
		'selected':function(){
			this.changeItem();
			this.getDivofChild();
		},
		
	},
	computed:{
		selection:function(){
			return this.onClickItem(this.rec.item[0], this.rec.item[0].code) 
		},
		
	}, 
	async mounted() {
		if(this.rec !=null && this.rec.item[0] != null) {
		this.onClickItem(this.rec.item[0], this.rec.item[0].code)
		this.loader = 'disabled'
		//this.armor=this.sortArmor(this.armors.Head);
		
		}
	}
};
</script>

<style scoped>
.item-list {
	padding-top: 0.5em;
}
.item-ctgr {
	padding: 1em 2em !important;
}
.item-button {
	cursor: pointer;
	box-sizing:border-box;
	user-select: none;
}
.item-button.selected {
	border: 1.75px solid #cc431a !important;
	border-style: groove;
}
@media screen and (max-width:991px) {
	.item-ctgr {
		padding: 1em !important;
	}
	
}
</style>