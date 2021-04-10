<template>
	<div>
		<header><h1 style="text-align: center">Ramen en deuren</h1></header>
		<section id="information">
			<div>
				<span>+100.000</span>
				<span>ramen en deuren</span>
				<span>opgekit</span>
			</div>
		</section>
		<section id="fotos">
			<div>
				<div class="imagecontainer">
					<img src="../../../assets/mockimg/ramenendeuren.png" alt="" />
					<span class="title">Nieuwbouw</span>
					<span class="text"
						>Zowel gevels bestaande uit gelijmde als gemetste gevelstenen
						worden opgekit</span
					>
				</div>
				<div class="imagecontainer">
					<img src="../../../assets/mockimg/industriebouw.jpg" alt="" />
					<span class="title">Renovatie</span>
					<span class="text"
						>Oude voegen worden verwijderd en vervangen door duurzamere
						polymeren</span
					>
				</div>
				<div class="imagecontainer">
					<img src="../../../assets/mockimg/vloerenenplinten.jpg" alt="" />
					<span class="title"
						>Garagepoorten<wbr />/<wbr />uitzettingsvoegen</span
					>
					<span class="text"
						>Bijkomend kitwerk kan altijd worden uitgevoerd mits overlegd met
						de klant.</span
					>
				</div>
			</div>
			<div class="imagecontainer">
				<img src="../../../assets/mockimg/vloerenenplinten.jpg" alt="" />
				<div>
					<span class="title">Kleuren keuze</span>
					<span class="text"
						>Door ons groot assortiment aan kleuren creëren we de perfecte
						overgang tussen gevel en raam en dit in overleg met de
						klant.</span
					>
				</div>
			</div>
		</section>
		<section id="slider">
			<h3>Projecten</h3>
			<Slider
				v-bind:images="[
					'mockimg/foto6.jpg',
					'mockimg/foto7.jpg',
					'mockimg/foto8.jpg',
				]"
			></Slider>
		</section>
		<section></section>
	</div>
</template>
<script>
import Slider from "@/components/shared/Slider";
export default {
	components: {
		Slider,
	},
};
</script>
<style scoped>
/* Information */
#information {
	margin: auto;
	padding: 100px 0;
	border-top: 2px solid black;
	border-bottom: 2px solid black;
}

#information > div {
	display: flex;
	flex-direction: column;
}
#information > div > span {
	text-align: center;
}

/* Images */
#fotos {
	max-width: 900px;
	margin: auto;
}
#fotos > div {
	display: flex;
	flex-direction: row;
}
#fotos > div > .imagecontainer {
	display: flex;
	flex-direction: column;
	flex: 1;
	margin: 30px;
	text-align: center;
}
#fotos > .imagecontainer > div {
	display: flex;
	flex-direction: column;
}
#fotos span {
	margin: 10px;
}
.title {
	font-size: 1.3em;
	text-align: left;
}
.text {
	text-align: left;
}

#slider h3 {
	text-align: center;
}

section#fotos img {
	width: 100%;
}
</style>
