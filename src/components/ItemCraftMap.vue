<template >
<div style="padding-top:4em;">
	<div v-if="itemTree" class="ui column four grid centered container"  >
		<div v-if="itemNow" class="row column ">
			<div :id="itemNow.itemGrade" class="item-wrap ui image rounded">
				<sui-popup class="img-wrap first" >
					<sui-grid-column text-align="center">
						<h4 is="sui-header">{{itemNow.name}}</h4>
						<p class="item-desc" v-for="(transItem, i) in itemNow.transKr" :key="i">{{transItem[0]}}: {{transItem[1]}}</p>
					</sui-grid-column>
					<sui-image slot="trigger" size="small" :src="require(`../assets/static/img/${getImgDir(itemNow)}.png`)" />
				</sui-popup>
			</div>
		</div>
		<div class="ui grid nowrap first " :class="nowrapTop">
			<div class="column stackable ten wide " v-for="(item,i) in itemTree" :key="i" ref="subs">
				<div :id="item.itemGrade" class="item-wrap ui image rounded ">
					<sui-popup class="img-wrap " >
						<h4 is="sui-header">{{item.name}}</h4>
						<sui-image slot="trigger" centered size="tiny" :src="require(`../assets/static/img/${getImgDir(item)}.png`)" />
					</sui-popup>
				</div>
				<div class="ui column grid nowrap second " v-if="item.sub" :id="`second${i}`" :class="nowrapSecond">
					<div class="column ten wide second-step " v-for="(sub1,j) in item.sub" :key="j" >
						<div :id="sub1.itemGrade" class="item-wrap ui image rounded">
							<sui-popup class="img-wrap" >
								<h4 is="sui-header">{{sub1.name}}</h4>
								<sui-image slot="trigger" :src="require(`../assets/static/img/${getImgDir(sub1)}.png`)" />
							</sui-popup>
						</div>
						<div class="ui column grid nowrap" v-if="sub1.sub" >
							<div class="column ten wide sub-items sub-last" v-for="(sub2,k) in sub1.sub" :key="k">
								<div :id="sub2.itemGrade" class="item-wrap ui image rounded">
									<sui-popup class="img-wrap " >
										<h4 is="sui-header">{{sub2.name}}</h4>
										<sui-image slot="trigger" :src="require(`../assets/static/img/${getImgDir(sub2)}.png`)" />
									</sui-popup>
								</div>
								<div class="ui column grid nowrap " v-if="sub2.sub">
									<div class="column ten wide sub-items sub-last" v-for="(sub3,l) in sub2.sub" :key="l">
										<div :id="sub3.itemGrade" class="item-wrap ui image rounded" >
											<sui-popup class="img-wrap" >
												<h4 is="sui-header">{{sub3.name}}</h4>
												<sui-image slot="trigger" :src="require(`../assets/static/img/${getImgDir(sub3)}.png`)" />
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
		itemNow:{tyep:Object},
		divDim:{type:Array}
	},
	data() {
		return {
			itemTypeList:['Weapon','Chest','Head','Arm','Leg','Trinket'],
			itemIdx :'',
			items: [['Weapon','무기'], ['Chest','옷'], ['Head','머리'],['Arm','팔'],['Leg' ,'다리'],['Trinket' ,'장식']],
			materialGrade:{'Common':'01','Uncommon':'02','Rare':'03','Epic':'04','Legend':'05'},
			mapWide:'four',
			topItemKey:0,
			nowrapTop:'',
			nowrapSecond:'',
		
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
		
		nowrap: function(dim) {
			let result;
			if(dim[0] < dim[1]) result ='type1';
			else if(dim[0] == dim[1]) result ='type2';
			if(dim[2] > 300) this.nowrapSecond = 'type3';
			this.nowrapTop = result;
		},
		getDivDim:function(){
			if(this.itemNow){
				this.divDim[0] = this.$refs.subs[0].clientWidth;
				this.divDim[1] = this.$refs.subs[1].clientWidth;
				this.divDim[2] = this.$refs.subs[0].clientHeight;
				this.nowrap(this.divDim)
			}
		},
	},
	watch: {
		/* 'divWidth':function(){
			this.nowrap(this.divWidth);
		} */
	},
	computed: {
	
	},
	async mounted() {
		this.getItemIdx(this.active[0]);
		this.getDivDim();
}
};
</script>

<style scoped>
.nowrap {
	flex-wrap: nowrap;
	padding: 0;
	margin: 1.5em 0;
	position: relative;
}
.nowrap.first {
	margin-top: 0;
}

.sub-items {
	padding: 0 1px !important;
}

.sub-wrap {
	flex-wrap: wrap;
}
.second-step {
	padding: 1em 0 !important;
}
.item-wrap {
	width: 4.5em;
	position: relative;
}

.nowrap::before {
	position: absolute;
	content:"";
	height: 3em;
	width: 50%;
	border: 1px solid #222;
	border-bottom: none;
	top: -0.2em;
	left: 55%;
	transform: translateX(-50%);
}
.nowrap.type1::before {
	left: 45%;
}
.nowrap.type2::before {
	left: 50%;
}
#second0.nowrap.type3::before {
	left: 45%;
}
/* .item-wrap::before {
	position: absolute;
	content:"";
	width: 1px;
	height: 1.1em;
	background: #222;
	top: -1.1em;
} */

.sub-last {
	margin: 1em 0;
}
@media screen and (max-width:767px) {
	
	
}
</style>