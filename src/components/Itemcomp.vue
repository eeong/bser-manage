<template >
<div v-if="game!=null">
		<div class="top attached ui three item menu tabular" >
			<a class="item equip" >
				<div class="item-blank"> 무기</div>
				<div :id="game.item[0].itemGrade" class="item-wrap" v-if="game.item[0] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[0].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[0].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/01.무기/${game.item[0].transKr[0][1]}/${game.item[0].name}.png`)" />
					</sui-popup>
				</div>
			</a>
			<a class="item equip" >
				<div class="item-blank" >옷</div>
				<div :id="game.item[1].itemGrade" class="item-wrap" v-if="game.item[1] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[1].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[1].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/02.방어구/옷/${game.item[1].name}.png`)" />
					</sui-popup>
				</div>
			</a>
			<a class="item equip" >
				<div class="item-blank" >머리</div>
				<div :id="game.item[2].itemGrade" class="item-wrap" v-if="game.item[2] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[2].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[2].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/02.방어구/머리/${game.item[2].name}.png`)" />
					</sui-popup>
				</div>
			</a>
		</div>
		<div class="attached ui three item menu tabular">
			<a class="item equip"  >
				<div class="item-blank" >팔</div>
				<div :id="game.item[3].itemGrade" class="item-wrap" v-if="game.item[3] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[3].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[3].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/02.방어구/팔/${game.item[3].name}.png`)" />
					</sui-popup>
				</div>
			</a>
			<a class="item equip" >
				<div class="item-blank" >다리</div>
				<div :id="game.item[4].itemGrade" class="item-wrap" v-if="game.item[4] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[4].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[4].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/02.방어구/다리/${game.item[4].name}.png`)" />
					</sui-popup>
				</div>
			</a>
			<a class="item equip" >
				<div class="item-blank" >장식</div>
				<div :id="game.item[5].itemGrade" class="item-wrap" v-if="game.item[5] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[5].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[5].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/02.방어구/장식/${game.item[5].name}.png`)" />
					</sui-popup>
				</div>
			</a>
		</div>
</div>
</template>

<script>

export default {
	name: 'item-comp',
	props: {
		taken:{type:Object} 
	},
	data() {
		return {
			game:null,
		};
	},
	computed: {
		
	},
	methods: {
		
	},
	watch :{
		
	},
	async mounted() {
		this.game = this.taken
}
};
</script>

<style scoped>
.error {
	color: red;
}
.ui.equip {
	position: relative;
}
.ui.image {
	width: 100%;
}
.item {
	display: inline-block !important;
}
.item.equip {
	cursor: default !important;
}

.item-blank {
	font-family: 'Nanum Gothic', sans-serif;
	font-size: 0.925em;
	font-weight: 600;
	width: 100%;
	padding: 1.375em 0;
	background: rgba(186, 186, 187, 0.3);
	z-index: -1;
}

.image.circular {
	width: 40%;
}

.plus-button {
	position: absolute !important;
	top: 50%;
	right: -35%;
	box-shadow: none !important;
	transform: translateY(-60%);
	text-align: right;
}
.ui.tabular.menu {
	border: none;
}
.attached.ui.menu.tabular {
	margin-bottom: 0.275em !important;
}
.item-wrap {
	position: absolute;
	top: -0.125em;
	padding: 19% 0;
}

.ui.menu .item {
	padding:0;
}
@media screen and (max-width:767px) {
	.item.equip .item-desc {
		width: 100%;
		top: 100%;
		left: 10%;
	}
	.item-desc::before {
		left: .5em;
		top: -.35em;
		transform: rotate(135deg);
	}
	
}
</style>