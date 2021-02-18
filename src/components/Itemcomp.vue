<template >
<div >
		<div class="top attached ui three item menu tabular">
			<a class="item equip" >
				<div :id="game.item[0].itemGrade" v-if="game.item[0] != null">
					<div class="img-wrap">
						<div class="ui column relaxed item-desc" >
							<div class="ui header" style="">{{game.item[0].name}}</div>
							<div class="ui " v-for="(transItem, j) in game.item[0].transKr" :key="j">
								{{transItem[0]}}: {{transItem[1]}}
							</div>
						</div>
					<img class="ui image" :src="require(`../assets/static/img/01.무기/${game.item[0].name}.png`)">
					</div>
				</div>
			</a>
			<a class="item equip" >
				<div :id="game.item[1].itemGrade" v-if="game.item[1] != null">
					<div class="img-wrap">
						<div class="ui column relaxed item-desc">
							<div class="ui header" >{{game.item[1].name}}</div>
							<div class="ui" v-for="(transItem, j) in game.item[1].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</div>
						</div>
						<img class="ui image"  :src="require(`../assets/static/img/02.방어구/02.옷/${game.item[1].name}.png`)">
					</div>
				</div>
			</a>
			<a class="item equip" >
				<div :id="game.item[2].itemGrade" v-if="game.item[2] != null">
					<div class="img-wrap">
						<div class="ui column relaxed item-desc">
							<div class="ui header" >{{game.item[2].name}}</div>
							<div class="ui" v-for="(transItem, j) in game.item[2].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</div>
						</div>
						<img class="ui image" :src="require(`../assets/static/img/02.방어구/01.머리/${game.item[2].name}.png`)">
					</div>
				</div>
			</a>
		</div>
		<div class="attached ui three item menu tabular">
			<a class="item equip"  >
				<div :id="game.item[3].itemGrade" v-if="game.item[3] != null">
					<div class="img-wrap">
						<div class="ui column relaxed item-desc">
							<div class="ui header" >{{game.item[3].name}}</div>
							<div class="ui" v-for="(transItem, j) in game.item[3].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</div>
						</div>
						<img class="ui image"  :src="require(`../assets/static/img/02.방어구/03.팔/${game.item[3].name}.png`)">
					</div>
				</div>
			</a>
			<a class="item equip" >
				<div :id="game.item[4].itemGrade" v-if="game.item[4] != null">
					<div class="img-wrap">
						<div class="ui column relaxed item-desc">
							<div class="ui header" >{{game.item[4].name}}</div>
							<div class="ui" v-for="(transItem, j) in game.item[4].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</div>
						</div>
						<img class="ui image"  :src="require(`../assets/static/img/02.방어구/04.다리/${game.item[4].name}.png`)">
					</div>
				</div>
			</a>
			<a class="item equip" >
				<div :id="game.item[5].itemGrade" v-if="game.item[5] != null">
					<div class="img-wrap">
						<div class="ui column relaxed item-desc">
							<div class="ui header" >{{game.item[5].name}}</div>
							<div class="ui" v-for="(transItem, j) in game.item[5].transKr" :key="j">{{transItem[0]}}: {{transItem[1]}}</div>
						</div>
						<img class="ui image"  :src="require(`../assets/static/img/02.방어구/05.장식/${game.item[5].name}.png`)">
					</div>
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
.item.equip .item-desc {
	position: absolute;
	visibility: hidden;
	opacity: 0;
	z-index: 2;  
	width: 250%;
	height: auto;
	padding: 1em 0;
	transition: all .25s;
	border: 1px solid #d5d5d6;
	background-color: #f2f4f5;
	box-shadow: 1px 1px 0 0 #bababc;
	left: 100%;
	top: 35%;

}
.item.equip:hover .item-desc{
	visibility: visible;
	opacity: 1; 
}

.item-desc::before {
	position: absolute;
	content: '';
	width: 0.6em;
	height: 0.6em;
	left: -.35em;
	top: 0.5em;
	transform: rotate(45deg);
	background-color: #f2f4f5;
	border-bottom: 1px solid #d5d5d6;
	border-left: 1px solid #d5d5d6;
	box-shadow: 0px 1px 0 0 #bababc;
	z-index: 2;
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
.img-wrap {
	padding: 0.92857143em 0 ;
}
.ui.tabular.menu {
	border-bottom: none;
}
.segment.ui {
	border: none ;
	box-shadow: none ;
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