<template>
	<div
		class="image"
		:style="{
			backgroundImage: 'url(' + require('@/assets/' + image) + ')',
		}"
	></div>
</template>
<script>
export default {
	props: {
		image: String,
	},
};
</script>
<style lang="scss" scoped>
.image {
	background-position: center;
	margin: auto;
	background-size: cover;
}
</style>
