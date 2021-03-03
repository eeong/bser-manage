<template>
	<div >
		<sui-menu pointing secondary>
			<a
				is="sui-menu-item"
				v-for="item in items"
				:active="isActive(item)"
				:key="item"
				:content="item"
				@click="select(item)"
			/>
			
		</sui-menu>

		<sui-list style="height:350px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('무기')" >
			<div class="ui loader" :class="loader" ></div>
			<sui-list-item class="item-button" v-for="(weapon,i) in weapons" :key="i" @click="onClickItem(weapon)" :class="{selected:isSelected('Weapon',weapon)}">
				<sui-popup>
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

		<div class="menu-wrap weapon-menu" v-show="isActive('옷')" >
			<sui-segment attached>
				bb
			</sui-segment>
		</div>
		<div class="menu-wrap weapon-menu" v-show="isActive('머리')" >
			<sui-segment attached>
				bb
			</sui-segment>
		</div>
		<div class="menu-wrap weapon-menu" v-show="isActive('팔')" >
			<sui-segment attached>
				bb
			</sui-segment>
		</div>
		<div class="menu-wrap weapon-menu" v-show="isActive('다리')" >
			<sui-segment attached>
				bb
			</sui-segment>
		</div>
		<div class="menu-wrap weapon-menu" v-show="isActive('장신구')" >
			<sui-segment attached>
				bb
			</sui-segment>
		</div>
	
	</div>
</template>

<script>

export default {
	name: 'item-selection',
	props: {
		rec:{type:Object},
		weapons:{type:Array},
	},
	
	data: function() {
		return {
			active: '무기',
			items: ['무기', '옷', '머리','팔','다리','장신구'],
			selected:[],
			selectedWeapon:'',
			loader:'active',
		}
	},
	methods: {
		isActive(name) {
			return this.active === name;
		},
		select(name) {
			this.active = name;
		},
		isSelected(ctgr, item){
			return this.selected[0] == ctgr && this.selected[1] == item.code;
		},
		onClickItem(val) {
			this.selectedWeapon = val;
			this.selected = [val.itemType,val.code];
			
		},
		
	},
	
	watch: {
		'selected':function(){
			this.loader = 'active';
			this.$emit('changeItem',{'selected':this.selected, 'val':this.selectedWeapon});
			this.loader = 'disabled';
		},
		
	},
	computed:{
		selection:function(){
			return this.onClickItem(this.rec.item[0], this.rec.item[0].code) 
		}
	},
	async mounted() {
		if(this.rec !=null && this.rec.item[0] != null) this.onClickItem(this.rec.item[0], this.rec.item[0].code)
		this.loader = 'disabled';
	}
};
</script>

<style scoped>
.item-list {
	padding-top: 0.5em;
}
.item-button {
	cursor: pointer;
	box-sizing:border-box
}
.item-button.selected {
	border: 1.75px solid #c9cc1a !important;
	border-style: groove;
}

</style>