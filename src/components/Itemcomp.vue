<template >
<div >
		<div class="top attached ui three item menu tabular">
			<a class="item equip" >
				<div :id="game.item[0].itemGrade" class="item-wrap" v-if="game.item[0] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[0].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[0].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/01.무기/${game.item[0].name}.png`)" />
					</sui-popup>
				</div>
			</a>
			<a class="item equip" >
				<div :id="game.item[1].itemGrade" class="item-wrap" v-if="game.item[1] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[1].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[1].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/02.방어구/02.옷/${game.item[1].name}.png`)" />
					</sui-popup>
				</div>
			</a>
			<a class="item equip" >
				<div :id="game.item[2].itemGrade" class="item-wrap" v-if="game.item[2] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[2].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[2].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/02.방어구/01.머리/${game.item[2].name}.png`)" />
					</sui-popup>
				</div>
			</a>
		</div>
		<div class="attached ui three item menu tabular">
			<a class="item equip"  >
				<div :id="game.item[3].itemGrade" class="item-wrap" v-if="game.item[3] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[3].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[3].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/02.방어구/03.팔/${game.item[3].name}.png`)" />
					</sui-popup>
				</div>
			</a>
			<a class="item equip" >
				<div :id="game.item[4].itemGrade" class="item-wrap" v-if="game.item[4] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[4].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[4].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/02.방어구/04.다리/${game.item[4].name}.png`)" />
					</sui-popup>
				</div>
			</a>
			<a class="item equip" >
				<div :id="game.item[5].itemGrade" class="item-wrap" v-if="game.item[5] != null">
					<sui-popup class="img-wrap" >
						<sui-grid-column text-align="center">
							<h4 is="sui-header">{{game.item[5].name}}</h4>
							<p class="item-desc" v-for="(transItem, j) in game.item[5].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</p>
						</sui-grid-column>
						<sui-image slot="trigger" :src="require(`../assets/static/img/02.방어구/05.장식/${game.item[5].name}.png`)" />
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
		game:{type:Object} 
	},
	data() {
		return {
			errorsPresent: false,
			user:null,
			games: null,
		};
	},
	computed: {
		
	},
	methods: {
			
	},

	async mounted() {
	
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

.item-wrap {
	padding: 20% 0;
}
.item-desc {
	margin: 0.25em 0 ;
}

#Common {
	background: rgb(107,107,107);
	background: linear-gradient(180deg, rgba(107,107,107,1) 0%, rgba(213,213,213,1) 100%);
}
#Uncommon {
	background: rgb(40,117,53);
	background: linear-gradient(180deg, rgb(28, 82, 37) 0%, rgb(64, 156, 55) 100%);

}
#Rare {
	background: rgb(44,61,130);
	background: linear-gradient(180deg, rgb(31, 42, 87) 0%, rgb(58, 76, 197) 100%);
}
#Epic {
	background: rgb(99,44,130);
	background: linear-gradient(180deg, rgb(67, 30, 88) 0%, rgb(136, 62, 182)100%);
}
#Legend {
	background: rgb(142,129,47);
	background: linear-gradient(180deg, rgb(139, 126, 47) 0%, rgb(226, 183, 63) 100%);
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