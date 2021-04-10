<template>
	<div>
		<header><h1 style="text-align: center">Industriebouw</h1></header>
		<section id="information">
			<div>
				<span>+200.000</span>
				<span>LM</span>
				<span>industriebouwk opgekit</span>
			</div>
		</section>
		<section id="fotos">
			<div>
				<div class="imagecontainer">
					<img src="../../../assets/mockimg/ramenendeuren.png" alt="" />
					<span class="title">Nieuwbouw</span>
					<span class="text"
						>Zowel horizontale als verticale voegen worden gekit. Dit kan ook
						in een brandwerende polymeer.</span
					>
				</div>
				<div class="imagecontainer">
					<img src="../../../assets/mockimg/industriebouw.jpg" alt="" />
					<span class="title">Renovatie</span>
					<span class="text"
						>Oude voegen worden verwijderd en vervangen door duurzamere
						polymeren.</span
					>
				</div>
				<div class="imagecontainer">
					<img src="../../../assets/mockimg/vloerenenplinten.jpg" alt="" />
					<span class="title">PU-schuim</span>
					<span class="text"
						>De voeg word voorzien van gespoten PU schuim gevolgd door een
						opencellen band afgewerkt met een polymeer kit.</span
					>
				</div>
			</div>
			<div class="imagecontainer">
				<img src="../../../assets/mockimg/vloerenenplinten.jpg" alt="" />
				<div>
					<span class="title">Kleuren keuze</span>
					<span class="text"
						>Door ons groot assortiment aan kleuren creëren we de perfecte
						overgang tussen verschillende soorten beton panelen.</span
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
<style lang="scss" scoped>
/* header */

/* Information */
#information {
	margin: auto;
	padding: 100px 0;
	border-top: 2px solid black;
	border-bottom: 2px solid black;

	> div {
		display: flex;
		flex-direction: column;
		> span {
			text-align: center;
		}
	}
}

/* Images */
#fotos {
	max-width: 900px;
	margin: auto;
	img {
		width: 100%;
	}
	span {
		margin: 10px;
	}
	> div {
		display: flex;
		flex-direction: row;
		> .imagecontainer {
			display: flex;
			flex-direction: column;
			flex: 1;
			margin: 30px;
			text-align: center;
		}
	}
	> .imagecontainer > div {
		display: flex;
		flex-direction: column;
	}
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
</style>
