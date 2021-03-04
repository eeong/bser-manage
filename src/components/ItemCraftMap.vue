<template >
<div >
	<div v-if="itemTree" class="column wide four" >
		<div v-for="(item,i) in itemTree" :key="i">
			{{item.name}}
			<div v-if="item.sub">
				<div v-for="(subItem,j) in item.sub" :key="j">
					{{subItem.name}}
					<div v-if="subItem.sub">
						<div v-for="(subsub,k) in subItem.sub" :key="k">{{subsub.name}}</div>
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
		itemTree:{type:Array} 
	},
	data() {
		return {
		};
	},
	async mounted() {
	
}
};
</script>

<style scoped>

@media screen and (max-width:767px) {
	
	
}
</style>