<template>
	<div >
		<sui-list style="height:350px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('옷')" >
			<sui-list-item class="item-button" v-for="(armor,i) in armors.Chest" :key="i" @click="onClickItem(armor)" :class="{selected:isSelected('Chest',armor)}">
				<sui-popup>
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{armor.name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in armor.transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" class="ui tiny" rounded :id="armor.itemGrade" :src="require(`../assets/static/img/02.방어구/02.옷/${armor.name}.png`)" />
				</sui-popup>
				<sui-list-content>
					<p is="sui-list-header" style="transform: translateY(55%);">{{armor.name}}</p>
				</sui-list-content>
			</sui-list-item>
		</sui-list>

		<sui-list style="height:350px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('머리')" >
			<sui-list-item class="item-button" v-for="(armor,i) in armors.Head" :key="i" @click="onClickItem(armor)" :class="{selected:isSelected('Chest',armor)}">
				<sui-popup>
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{armor.name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in armor.transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" class="ui tiny" rounded :id="armor.itemGrade" :src="require(`../assets/static/img/02.방어구/01.머리/${armor.name}.png`)" />
				</sui-popup>
				<sui-list-content>
					<p is="sui-list-header" style="transform: translateY(55%);">{{armor.name}}</p>
				</sui-list-content>
			</sui-list-item>
		</sui-list>

		<sui-list style="height:350px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('팔')" >
			<sui-list-item class="item-button" v-for="(armor,i) in armors.Arm" :key="i" @click="onClickItem(armor)" :class="{selected:isSelected('Chest',armor)}">
				<sui-popup>
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{armor.name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in armor.transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" class="ui tiny" rounded :id="armor.itemGrade" :src="require(`../assets/static/img/02.방어구/03.팔/${armor.name}.png`)" />
				</sui-popup>
				<sui-list-content>
					<p is="sui-list-header" style="transform: translateY(55%);">{{armor.name}}</p>
				</sui-list-content>
			</sui-list-item>
		</sui-list>

		<sui-list style="height:350px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('다리')" >
			<sui-list-item class="item-button" v-for="(armor,i) in armors.Leg" :key="i" @click="onClickItem(armor)" :class="{selected:isSelected('Chest',armor)}">
				<sui-popup>
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{armor.name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in armor.transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" class="ui tiny" rounded :id="armor.itemGrade" :src="require(`../assets/static/img/02.방어구/04.다리/${armor.name}.png`)" />
				</sui-popup>
				<sui-list-content>
					<p is="sui-list-header" style="transform: translateY(55%);">{{armor.name}}</p>
				</sui-list-content>
			</sui-list-item>
		</sui-list>
		
		<sui-list style="height:350px; overflow:auto;" class="item-list" divided relaxed v-show="isActive('장식')" >
			<sui-list-item class="item-button" v-for="(armor,i) in armors.Trinket" :key="i" @click="onClickItem(armor)" :class="{selected:isSelected('Chest',armor)}">
				<sui-popup>
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{armor.name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in armor.transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" class="ui tiny" rounded :id="armor.itemGrade" :src="require(`../assets/static/img/02.방어구/05.장식/${armor.name}.png`)" />
				</sui-popup>
				<sui-list-content>
					<p is="sui-list-header" style="transform: translateY(55%);">{{armor.name}}</p>
				</sui-list-content>
			</sui-list-item>
		</sui-list>
		
	</div>
</template>

<script>

export default {
	
	name: 'item-list',
	props: {
		rec:{type:Object},
		armors:{type:Object},
		selected:{type:Array},
		active:{type:Array}
	},
	
	data: function() {
		return {
		
		}
	},
	methods: {
		isActive(name) {
			return this.active[1] === name;
		},
		
		isSelected(ctgr, item){
			return this.selected[0] == ctgr && this.selected[1] == item.code;
		},
		
		
	},
	
	watch: {
		
		
	},
	computed:{
	
	}, 
	async mounted() {
	
	}
};
</script>

<style scoped>


</style>