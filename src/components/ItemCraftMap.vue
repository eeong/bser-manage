<template >
<div >
	<div v-if="itemTree" class="ui column four grid centered container"  >
		<div v-if="itemNow" class="row column ">
			<div :id="itemNow.itemGrade" class="item-wrap ui image rounded">
				<sui-popup class="img-wrap" >
					<sui-grid-column text-align="center">
						<h4 is="sui-header">{{itemNow.name}}</h4>
						<p class="item-desc" v-for="(transItem, i) in itemNow.transKr" :key="i">{{transItem[0]}}: {{transItem[1]}}</p>
					</sui-grid-column>
					<sui-image slot="trigger" size="tiny" :src="require(`../assets/static/img/${getImgDir(itemNow)}.png`)" />
				</sui-popup>
			</div>
		</div>
		<div class="ui grid nowrap">
			<div class="column stackable ten wide " v-for="(item,i) in itemTree" :key="i">
				<div :id="item.itemGrade" class="item-wrap ui image rounded ">
					<sui-popup class="img-wrap" >
						<h4 is="sui-header">{{item.name}}</h4>
						<sui-image slot="trigger" centered size="tiny" :src="require(`../assets/static/img/${getImgDir(item)}.png`)" />
					</sui-popup>
				</div>
				<div class="ui column grid nowrap " v-if="item.sub">
					<div class="column eight wide second-step " v-for="(sub1,j) in item.sub" :key="j" >
						<div :id="sub1.itemGrade" class="item-wrap ui image rounded">
							<sui-popup class="img-wrap" >
								<h4 is="sui-header">{{sub1.name}}</h4>
								<sui-image slot="trigger" :src="require(`../assets/static/img/${getImgDir(sub1)}.png`)" />
							</sui-popup>
						</div>
						<div class="ui column grid nowrap" v-if="sub1.sub">
							<div class="column eight wide sub-items" v-for="(sub2,k) in sub1.sub" :key="k">
								<div :id="sub2.itemGrade" class="item-wrap ui image rounded">
									<sui-popup class="img-wrap " >
										<h4 is="sui-header">{{sub2.name}}</h4>
										<sui-image slot="trigger" :src="require(`../assets/static/img/${getImgDir(sub2)}.png`)" />
									</sui-popup>
								</div>
								<div class="ui column grid nowrap" v-if="sub2.sub">
									<div class="column eight wide sub-items" v-for="(sub3,l) in sub2.sub" :key="l">
										<div :id="sub3.itemGrade" class="item-wrap ui image rounded">
											<sui-popup class="img-wrap" >
												<h4 is="sui-header">{{sub3.name}}</h4>
												<sui-image slot="trigger" :src="require(`../assets/static/img/${getImgDir(sub3)}.png`)" />
											</sui-popup>
										</div>
										<div class="ui nowrap " v-if="sub3.sub">
											<div class="column  wide sub-items" v-for="(sub4,p) in sub3.sub" :key="p">
												<div :id="sub4.itemGrade" class="item-wrap ui image rounded">
													<sui-popup class="img-wrap" >
														<h4 is="sui-header">{{sub4.name}}</h4>
														<sui-image slot="trigger"  :src="require(`../assets/static/img/${getImgDir(sub4)}.png`)" />
													</sui-popup>
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

</div>
</template>

<script>

export default {
	name: 'item-craft',
	components:{
	},
	props: {
		itemTree:{type:Array},
		active:{type:Array},
		rec:{type:Object},
		itemNow:{tyep:Object}
	},
	data() {
		return {
			itemTypeList:['Weapon','Chest','Head','Arm','Leg','Trinket'],
			itemIdx :'',
			items: [['Weapon','무기'], ['Chest','옷'], ['Head','머리'],['Arm','팔'],['Leg' ,'다리'],['Trinket' ,'장식']],
			materialGrade:{'Common':'01','Uncommon':'02','Rare':'03','Epic':'04','Legend':'05'},
			mapWide:'four',
			topItemKey:0,
		};
	},
	methods: {
		getItemIdx: function(type) {
			return this.itemTypeList.indexOf(type);
		},
		getImgDir: function(item) {
			if(item.weaponType) return `01.무기/${item.transKr[0][1]}/${item.name}`
			else if(item.armorType) return `02.방어구/${this.items[this.getItemIdx(item.armorType)][1]}/${item.name}`
			else if(item.consumableType=='Food') return `03.음식/${this.materialGrade[item.itemGrade]}/${item.name}`
			else if(item.consumableType=='Beverage') return `04.음료/${this.materialGrade[item.itemGrade]}/${item.name}`
			else if(item.specialItemType) return `05.특수/${this.materialGrade[item.itemGrade]}/${item.name}`
			else if(item.miscItemType) return `06.재료/${this.materialGrade[item.itemGrade]}/${item.name}`
		},
		getMapWidth: function(tree) {
			let result='two';
			for(var i in tree) {
				if(!tree[i].sub[0].sub[0].sub && !tree[i].sub[1].sub[0].sub) result='four'; 
			}
			this.mapWide= result;
		},
	},
	watch: {
		
	},
	computed: {
	
	},
	async mounted() {
		this.getItemIdx(this.active[0]);
}
};
</script>

<style scoped>
.nowrap {
	flex-wrap: nowrap;
	width: auto !important;
	margin: 1.5em 0;
}
.sub-items {
	padding: 0 1% !important;
}
.sub-wrap {
	flex-wrap: wrap;
}
.second-step {
	padding: 1em 0 !important;
}
.item-wrap {
	width: 5em;
}

@media screen and (max-width:767px) {
	
	
}
</style>