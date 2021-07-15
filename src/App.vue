<template>
	<div id="app">
		<div class="ui inverted segment navbar">
			<div class="ui center aligned container column">
				<div class="ui large inverted menu compact">
					<router-link to="/search" class="item">
						<i class="search icon"></i> 검색
					</router-link>
					<router-link to="/recs" class="item " >
						<i class="recs icon folder open"></i> 템빌드저장소
					</router-link>
					<router-link to="/new" class="item " >
						<i class="trophy icon"></i> 전적확인
					</router-link>
					
				</div>
				
			</div>

		</div>
		<div class="ui text">
			<div class="ui one column grid">
				<div class="column">
					<router-view />
				</div>
			</div>
		</div>
		
		<portal-target name="semantic-ui-vue" />
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
		
	},
	mounted(){
		
	}
};
	
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500&display=swap'); */

html, body, h1, h2, h3, h4, h5, .item {font-family: 'Noto Sans Kr', sans-serif !important;}
html, body {overflow-x: hidden;}
h1 {font-weight: 500 !important;}
h2 {font-weight: 400 !important;}
h3, h4 {font-weight: 300 !important;}
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
@media screen and (max-width:767px){
	html, body {width: 100%;} 
}

</style>