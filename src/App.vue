<template>
	<div id="appContent">
		<div>
			<Navigation></Navigation>
			<div id="routerView"><router-view /></div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from "@/components/general/Footer";
import Navigation from "@/components/general/Navigation";
export default {
	name: "App",
	components: {
		Footer,
		Navigation,
	},
};
</script>

<style>
@import "./assets/globalVariables.css";
html,
body {
	height: 100%;
	margin: 0;
}
#appContent {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
#routerView {
	padding-top: 121px;
}
footer {
	flex-shrink: 0;
}
.sticky {
	position: fixed;
	top: 0;
	width: 100%;
}
button {
	cursor: pointer;
	width: 100px;
	height: 40px;
	font-size: 16px;
	margin-bottom: 20px;
	background-color: var(--color-dark-redd);
	color: white;
	border: 2px solid var(--color-dark-redd);
	border-radius: 3px;
	transition-duration: 0.4s;
}
button:hover {
	background-color: white;
	color: var(--color-dark-redd);
}
button:focus {
	outline: 0;
}
</style>
