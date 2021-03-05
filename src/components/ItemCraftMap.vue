<template >
<div >
	<div v-if="itemTree" class="ui column four grid centered"  >
		<div v-if="itemNow" class="row column ">
			<sui-popup class="img-wrap" >
				<sui-grid-column text-align="center">
					<h4 is="sui-header">{{rec.item[itemIdx].name}}</h4>
					<p class="item-desc" v-for="(transItem, i) in rec.item[itemIdx].transKr" :key="i">{{transItem[0]}}: {{transItem[1]}}</p>
				</sui-grid-column>
				<sui-image slot="trigger" :src="require(`../assets/static/img/${getImgDir(rec.item[itemIdx])}.png`)" />
			</sui-popup>
		</div>
		<div class="ui equal width grid ">
			<div class="ui column grid " v-for="(item,i) in itemTree" :key="i">
				{{item.name}}
				<div class="ui two column grid " v-if="item.sub">
					<div class="column" v-for="(sub1,j) in item.sub" :key="j">
						{{sub1.name}}
						<div class="ui two column grid " v-if="sub1.sub">
							<div class="column row" v-for="(sub2,k) in sub1.sub" :key="k">
								{{sub2.name}}
								<div class="ui two column grid " v-if="sub2.sub">
									<div class="column row" v-for="(sub3,l) in sub2.sub" :key="l">
										{{sub3.name}}
										<div class="ui two column grid  " v-if="sub3.sub">
											<div class="column row" v-for="(sub4,p) in sub3.sub" :key="p">
												{{sub4.name}}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>  
					</div>
				</div> 
			</div>
		</div>
	</div>

</div>
</template>

<script>

export default {
	name: 'item-craft',
	props: {
		itemTree:{type:Array},
		active:{type:Array},
		rec:{type:Object}
	},
	data() {
		return {
			itemTypeList:['Weapon','Chest','Head','Arm','Leg' ,'Trinket'],
			itemIdx :'',
			items: [['Weapon','무기'], ['Chest','옷'], ['Head','머리'],['Arm','팔'],['Leg' ,'다리'],['Trinket' ,'장식']],
			itemNow:null,
			mapWide:'four',
			
		};
	},
	methods: {
		getItemIdx: function(active) {
			this.itemIdx = this.itemTypeList.indexOf(active);
			if(this.rec) this.itemNow = this.rec.item[this.itemIdx];
		},
		getImgDir: function(item) {
			if(item.weaponType) return `01.무기/${item.transKr[0][1]}/${item.name}`
			else if(item.armorType) return `02.방어구/${this.items[this.itemIdx][1]}/${item.name}`
		},
		getMapWidth: function(tree) {
			let result='two';
			for(var i in tree) {
				if(!tree[i].sub[0].sub[0].sub && !tree[i].sub[1].sub[0].sub) result='four'; 
			}
			this.mapWide= result;
		}
	},
	watch: {
		'active': function() {
			this.getItemIdx(this.itemTree);
		}
	},
	computed: {
		changeMapWidth: function() {
			return this.getMapWidth(this.itemNow)
		}
	},
	async mounted() {
		this.getItemIdx(this.active[0]);
}
};
</script>

<style scoped>

@media screen and (max-width:767px) {
	
	
}
</style>