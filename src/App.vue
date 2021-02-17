<template>
	<div id="app">
		<div class="ui inverted segment navbar">
			<div class="ui center aligned container column">
				<div class="ui large inverted menu compact">
					<router-link to="/search" class="item">
						<i class="search icon"></i> 검색
					</router-link>
					<router-link to="/recs" class="item " >
						<i class="recs icon list"></i> 템빌드저장소
					</router-link>
					<router-link to="/new" class="item " >
						<i class="plus circle icon"></i> 전적확인
					</router-link>
					
				</div>
				
			</div>

		</div>
		<div class="ui text container">
			<div class="ui one column grid">
				<div class="column">
					<router-view />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data(){
		return {
			isActive: false,
		}
	},
	methods:{
	
	}
};
	
</script>

<style>
#app > div.navbar {
	margin-bottom: 1.5em;
}
.myFlash {
	width: 250px;
	margin: 10px;
	position: absolute;
	top: 50;
	right: 0;
}
input {
	width: 250px;
}
div.label {
	width: 120px;
}
div.input {
	margin-bottom: 10px;
}
button.ui.button {
	margin-top: 15px;
	display: block;
}
ul,li {
	list-style: none;
}

</style>